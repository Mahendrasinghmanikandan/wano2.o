"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  Lightformer,
} from "@react-three/drei";
import {
  Suspense,
  Component,
  useEffect,
  useMemo,
  useRef,
  type MutableRefObject,
  type ReactNode,
} from "react";
import { MathUtils, PerspectiveCamera } from "three";
import Villa from "@/components/3d/Villa";

export type HouseView =
  | "orbit"
  | "entry"
  | "living"
  | "garden"
  | "terrace"
  | "aerial";

export type TimeOfDay = "day" | "dusk";

type SceneProps = {
  accent: string;
  mode: "dark" | "light";
  view: HouseView;
  timeOfDay: TimeOfDay;
  scrollProgress: MutableRefObject<number>;
  interactive: boolean;
  onSelectView?: (view: HouseView) => void;
};

const LOOK_OFFSET: [number, number, number] = [1.75, 1.55, 0.2];

class SceneErrorBoundary extends Component<
  { children: ReactNode },
  { message: string | null }
> {
  state = { message: null as string | null };
  static getDerivedStateFromError(error: Error) {
    return { message: error?.message || "Scene failed to render" };
  }
  render() {
    if (this.state.message) {
      return (
        <div className="flex h-full items-center justify-center px-6 text-sm text-concrete">
          {this.state.message}
        </div>
      );
    }
    return this.props.children;
  }
}

function useDragAzimuth(enabled: boolean) {
  const azimuth = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);
  const { gl } = useThree();

  useEffect(() => {
    const el = gl.domElement;
    el.style.cursor = enabled ? "grab" : "default";
    if (!enabled) return;

    const down = (event: PointerEvent) => {
      dragging.current = true;
      lastX.current = event.clientX;
      el.style.cursor = "grabbing";
      el.setPointerCapture(event.pointerId);
    };
    const move = (event: PointerEvent) => {
      if (!dragging.current) return;
      azimuth.current += (event.clientX - lastX.current) * 0.0048;
      lastX.current = event.clientX;
    };
    const up = (event: PointerEvent) => {
      dragging.current = false;
      el.style.cursor = "grab";
      try {
        el.releasePointerCapture(event.pointerId);
      } catch {
        /* already released */
      }
    };

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      el.style.cursor = "";
    };
  }, [enabled, gl]);

  return { azimuth, dragging };
}

function CameraRig({
  view,
  scrollProgress,
  interactive,
}: {
  view: HouseView;
  scrollProgress: MutableRefObject<number>;
  interactive: boolean;
}) {
  const camera = useThree((state) => state.camera) as PerspectiveCamera;
  const target = useRef({ x: LOOK_OFFSET[0], y: LOOK_OFFSET[1], z: LOOK_OFFSET[2] });
  const idle = useRef(0);
  const { azimuth, dragging } = useDragAzimuth(interactive);

  const presets = useMemo(
    () => ({
      orbit: { look: LOOK_OFFSET, fov: 30 },
      entry: {
        pos: [2.1, 1.85, 9.4] as const,
        look: [1.65, 1.45, 1.4] as const,
        fov: 32,
      },
      living: {
        pos: [4.2, 2.0, 7.4] as const,
        look: [1.9, 1.55, 0.6] as const,
        fov: 30,
      },
      garden: {
        pos: [8.2, 2.4, 7.1] as const,
        look: [3.5, 0.7, 2.8] as const,
        fov: 34,
      },
      terrace: {
        pos: [6.4, 5.6, 6.8] as const,
        look: [2.3, 3.5, 0.6] as const,
        fov: 32,
      },
      aerial: {
        pos: [5.2, 12.2, 8.0] as const,
        look: [1.6, 0.2, 0.2] as const,
        fov: 44,
      },
    }),
    [],
  );

  useFrame((_, delta) => {
    const p = scrollProgress.current;

    if (!dragging.current && view === "orbit") {
      idle.current += delta * 0.1;
    }

    let goal = { x: 5.4, y: 2.4, z: 5.8 };
    let look = { x: LOOK_OFFSET[0], y: LOOK_OFFSET[1], z: LOOK_OFFSET[2] };
    let fov = presets.orbit.fov;

    if (view === "orbit") {
      const angle = 0.72 + p * Math.PI * 1.45 + azimuth.current + idle.current;
      const radius = MathUtils.lerp(10.4, 6.8, Math.min(p * 1.05, 1));
      const height = MathUtils.lerp(3.35, 5.4, p) + Math.sin(p * Math.PI) * 0.4;
      goal = {
        x: Math.sin(angle) * radius + 1.55,
        y: height,
        z: Math.cos(angle) * radius + 0.8,
      };
      look = {
        x: LOOK_OFFSET[0],
        y: MathUtils.lerp(1.45, 2.1, p),
        z: LOOK_OFFSET[2],
      };
      fov = MathUtils.lerp(36, 30, p);
    } else {
      const preset = presets[view];
      look = { x: preset.look[0], y: preset.look[1], z: preset.look[2] };
      fov = preset.fov;
      const [px, py, pz] = preset.pos;
      const dx = px - look.x;
      const dz = pz - look.z;
      const dist = Math.hypot(dx, dz);
      const base = Math.atan2(dx, dz);
      const a = base + azimuth.current * 0.45;
      goal = {
        x: look.x + Math.sin(a) * dist,
        y: py,
        z: look.z + Math.cos(a) * dist,
      };
    }

    camera.position.x = MathUtils.damp(camera.position.x, goal.x, 3.4, delta);
    camera.position.y = MathUtils.damp(camera.position.y, goal.y, 3.4, delta);
    camera.position.z = MathUtils.damp(camera.position.z, goal.z, 3.4, delta);
    target.current.x = MathUtils.damp(target.current.x, look.x, 4.2, delta);
    target.current.y = MathUtils.damp(target.current.y, look.y, 4.2, delta);
    target.current.z = MathUtils.damp(target.current.z, look.z, 4.2, delta);
    camera.lookAt(target.current.x, target.current.y, target.current.z);
    camera.fov = MathUtils.damp(camera.fov, fov, 3, delta);
    camera.updateProjectionMatrix();
  });

  return null;
}

function Hotspot({
  position,
  label,
  id,
  active,
  onSelect,
}: {
  position: [number, number, number];
  label: string;
  id: HouseView;
  active: boolean;
  onSelect?: (view: HouseView) => void;
}) {
  return (
    <Html position={position} center distanceFactor={14} zIndexRange={[40, 0]}>
      <button
        type="button"
        onPointerDown={(event) => event.stopPropagation()}
        onClick={() => onSelect?.(id)}
        className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-[0.14em] uppercase backdrop-blur-md transition ${
          active
            ? "border-transparent bg-[var(--accent)] text-[var(--on-accent)]"
            : "border-white/25 bg-black/45 text-white hover:border-[var(--accent)]"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            active ? "bg-[var(--on-accent)]" : "bg-[var(--accent)] animate-pulse"
          }`}
        />
        {label}
      </button>
    </Html>
  );
}

function Exposure({ night }: { night: boolean }) {
  const { gl } = useThree();
  useEffect(() => {
    gl.toneMappingExposure = night ? 0.9 : 1.12;
  }, [gl, night]);
  return null;
}

function Lights({ night, mode }: { night: boolean; mode: "dark" | "light" }) {
  const sun = night ? ([7.5, 6.2, 3.2] as const) : ([8.5, 11, 5] as const);

  return (
    <>
      <hemisphereLight
        color={night ? "#6a7c94" : "#eef3f8"}
        groundColor={night ? "#2a241c" : "#9a9286"}
        intensity={night ? 0.55 : 0.75}
      />
      <ambientLight intensity={night ? 0.28 : mode === "light" ? 0.55 : 0.38} />
      <directionalLight
        position={sun}
        intensity={night ? 2.1 : 2.8}
        color={night ? "#ffb070" : "#fff6ea"}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0004}
        shadow-normalBias={0.04}
        shadow-camera-near={1}
        shadow-camera-far={32}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
      />
      <directionalLight
        position={[-5, 4, 6]}
        intensity={night ? 0.45 : 0.7}
        color="#c5d4e0"
      />
      <spotLight
        position={[-4, 8, 4]}
        angle={0.6}
        penumbra={1}
        intensity={night ? 0.5 : 0.8}
        color="#d7e4f0"
      />
      <Environment resolution={256} environmentIntensity={night ? 0.55 : 0.9}>
        <Lightformer
          intensity={night ? 2.4 : 3.2}
          position={[4, 7, 3]}
          scale={[8, 8, 1]}
          color={night ? "#ff9a5c" : "#fff4e0"}
        />
        <Lightformer
          intensity={1.1}
          position={[-6, 2, 1]}
          scale={[5, 4, 1]}
          color="#b7cbe0"
        />
        <Lightformer
          intensity={0.7}
          position={[0, 3, -6]}
          scale={[12, 5, 1]}
          color={night ? "#3d2a38" : "#e4eef6"}
        />
      </Environment>
    </>
  );
}

function SceneContent({
  accent,
  mode,
  view,
  timeOfDay,
  scrollProgress,
  interactive,
  onSelectView,
}: SceneProps) {
  const night = timeOfDay === "dusk";

  return (
    <>
      <Exposure night={night} />
      <Lights night={night} mode={mode} />
      <CameraRig view={view} scrollProgress={scrollProgress} interactive={interactive} />
      <group position={[1.2, 0, 0]}>
        <Villa accent={accent} night={night} />
        <Hotspot
          position={[0.5, 2.55, 2.5]}
          label="Living"
          id="living"
          active={view === "living"}
          onSelect={onSelectView}
        />
        <Hotspot
          position={[2.55, 1.15, 3.4]}
          label="Garden"
          id="garden"
          active={view === "garden"}
          onSelect={onSelectView}
        />
        <Hotspot
          position={[1.05, 4.05, 2.15]}
          label="Terrace"
          id="terrace"
          active={view === "terrace"}
          onSelect={onSelectView}
        />
        <ContactShadows
          position={[0, -0.01, 0]}
          opacity={night ? 0.5 : mode === "light" ? 0.3 : 0.42}
          scale={18}
          blur={2.4}
          far={8}
        />
      </group>
    </>
  );
}

export default function ConstructionCanvas({
  className = "",
  accent = "#6b7e45",
  mode = "dark",
  view = "orbit",
  timeOfDay = "dusk",
  scrollProgress,
  interactive = true,
  onSelectView,
}: {
  className?: string;
  accent?: string;
  mode?: "dark" | "light";
  view?: HouseView;
  timeOfDay?: TimeOfDay;
  scrollProgress: MutableRefObject<number>;
  interactive?: boolean;
  onSelectView?: (view: HouseView) => void;
}) {
  return (
    <div className={`absolute inset-0 h-full w-full touch-none [&_canvas]:!h-full [&_canvas]:!w-full ${className}`}>
      <SceneErrorBoundary>
      <Canvas
        className="h-full w-full"
        style={{ width: "100%", height: "100%" }}
        shadows
        dpr={[1, 1.75]}
        resize={{ offsetSize: true, debounce: 0 }}
        camera={{ position: [8.4, 3.5, 9.2], fov: 36, near: 0.1, far: 80 }}
        onCreated={(state) => {
          const el = state.gl.domElement;
          const parent = el.parentElement;
          if (!parent) return;
          el.style.width = "100%";
          el.style.height = "100%";
          state.setSize(parent.clientWidth, parent.clientHeight);
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#151a14"]} />
        <Suspense fallback={null}>
          <SceneContent
            accent={accent}
            mode={mode}
            view={view}
            timeOfDay={timeOfDay}
            scrollProgress={scrollProgress}
            interactive={interactive}
            onSelectView={onSelectView}
          />
        </Suspense>
      </Canvas>
      </SceneErrorBoundary>
    </div>
  );
}
