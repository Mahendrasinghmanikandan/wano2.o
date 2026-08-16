"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  Lightformer,
  MeshReflectorMaterial,
  PresentationControls,
} from "@react-three/drei";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import {
  Color,
  MathUtils,
  MeshStandardMaterial,
} from "three";

export type HouseView = "orbit" | "front" | "side" | "aerial";

type SceneProps = {
  accent: string;
  mode: "dark" | "light";
  view: HouseView;
  scrollProgress: MutableRefObject<number>;
  interactive: boolean;
};

function Glass({
  args,
  position,
  rotation = [0, 0, 0],
  accent,
}: {
  args: [number, number, number];
  position: [number, number, number];
  rotation?: [number, number, number];
  accent: string;
}) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <boxGeometry args={args} />
      <meshPhysicalMaterial
        color={accent}
        transmission={0.92}
        thickness={0.35}
        roughness={0.08}
        metalness={0.05}
        ior={1.45}
        envMapIntensity={1.4}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function ModernVilla({ accent }: { accent: string }) {
  const white = "#f2efe8";
  const concrete = "#cfc7bb";
  const dark = "#2c2a27";
  const wood = "#8b6b4a";

  const wallMat = useMemo(
    () =>
      new MeshStandardMaterial({
        color: new Color(white),
        roughness: 0.72,
        metalness: 0.04,
      }),
    [white],
  );
  const concreteMat = useMemo(
    () =>
      new MeshStandardMaterial({
        color: new Color(concrete),
        roughness: 0.88,
        metalness: 0.02,
      }),
    [concrete],
  );
  const darkMat = useMemo(
    () =>
      new MeshStandardMaterial({
        color: new Color(dark),
        roughness: 0.45,
        metalness: 0.25,
      }),
    [dark],
  );
  const woodMat = useMemo(
    () =>
      new MeshStandardMaterial({
        color: new Color(wood),
        roughness: 0.65,
        metalness: 0.05,
      }),
    [wood],
  );

  useEffect(
    () => () => {
      wallMat.dispose();
      concreteMat.dispose();
      darkMat.dispose();
      woodMat.dispose();
    },
    [wallMat, concreteMat, darkMat, woodMat],
  );

  return (
    <group position={[0, 0, 0]}>
      {/* ground slab */}
      <mesh position={[0, -0.04, 0]} receiveShadow>
        <boxGeometry args={[9.5, 0.08, 7.5]} />
        <primitive object={concreteMat} attach="material" />
      </mesh>

      {/* main volume */}
      <mesh position={[0, 1.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.6, 2.7, 3.4]} />
        <primitive object={wallMat} attach="material" />
      </mesh>

      {/* second storey offset */}
      <mesh position={[1.1, 3.35, -0.15]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 1.5, 2.8]} />
        <primitive object={wallMat} attach="material" />
      </mesh>

      {/* side wing */}
      <mesh position={[-2.55, 1.0, 0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 2.0, 2.6]} />
        <primitive object={concreteMat} attach="material" />
      </mesh>

      {/* flat roofs */}
      <mesh position={[0, 2.78, 0]} castShadow>
        <boxGeometry args={[4.85, 0.14, 3.65]} />
        <primitive object={darkMat} attach="material" />
      </mesh>
      <mesh position={[1.1, 4.18, -0.15]} castShadow>
        <boxGeometry args={[3.4, 0.12, 3.0]} />
        <primitive object={darkMat} attach="material" />
      </mesh>
      <mesh position={[-2.55, 2.08, 0.2]} castShadow>
        <boxGeometry args={[1.95, 0.1, 2.75]} />
        <primitive object={darkMat} attach="material" />
      </mesh>

      {/* canopy */}
      <mesh position={[0.35, 1.15, 2.05]} castShadow>
        <boxGeometry args={[2.4, 0.1, 1.2]} />
        <primitive object={woodMat} attach="material" />
      </mesh>
      <mesh position={[-0.55, 0.55, 2.35]} castShadow>
        <boxGeometry args={[0.08, 1.15, 0.08]} />
        <primitive object={darkMat} attach="material" />
      </mesh>
      <mesh position={[1.25, 0.55, 2.35]} castShadow>
        <boxGeometry args={[0.08, 1.15, 0.08]} />
        <primitive object={darkMat} attach="material" />
      </mesh>

      {/* door */}
      <mesh position={[0.35, 0.7, 1.72]} castShadow>
        <boxGeometry args={[0.85, 1.45, 0.08]} />
        <primitive object={woodMat} attach="material" />
      </mesh>

      {/* balcony */}
      <mesh position={[1.1, 2.85, 1.45]} castShadow>
        <boxGeometry args={[2.6, 0.08, 0.9]} />
        <primitive object={concreteMat} attach="material" />
      </mesh>
      <mesh position={[1.1, 3.15, 1.85]}>
        <boxGeometry args={[2.5, 0.04, 0.04]} />
        <meshStandardMaterial color="#d9d4cc" metalness={0.7} roughness={0.25} />
      </mesh>

      {/* glass facade */}
      <Glass args={[1.5, 1.15, 0.06]} position={[-1.0, 1.45, 1.72]} accent={accent} />
      <Glass args={[1.5, 1.15, 0.06]} position={[1.55, 1.45, 1.72]} accent={accent} />
      <Glass args={[1.1, 0.9, 0.06]} position={[0.3, 3.4, 1.27]} accent={accent} />
      <Glass args={[1.1, 0.9, 0.06]} position={[1.7, 3.4, 1.27]} accent={accent} />
      <Glass
        args={[0.06, 1.4, 1.6]}
        position={[2.32, 1.4, 0]}
        rotation={[0, 0, 0]}
        accent={accent}
      />
      <Glass
        args={[0.06, 1.1, 1.3]}
        position={[-3.46, 1.15, 0.2]}
        accent={accent}
      />

      {/* pool */}
      <mesh position={[2.6, 0.02, 2.8]} receiveShadow>
        <boxGeometry args={[2.4, 0.08, 1.5]} />
        <meshPhysicalMaterial
          color="#4f7f9a"
          transmission={0.55}
          roughness={0.15}
          metalness={0.1}
          thickness={0.5}
        />
      </mesh>

      {/* landscaping */}
      <Float speed={1.1} floatIntensity={0.15} rotationIntensity={0.05}>
        <mesh position={[-3.6, 0.35, 2.4]} castShadow>
          <sphereGeometry args={[0.45, 24, 24]} />
          <meshStandardMaterial color="#3f5c3a" roughness={0.95} />
        </mesh>
      </Float>
      <mesh position={[3.6, 0.55, -1.8]} castShadow>
        <cylinderGeometry args={[0.08, 0.12, 0.9, 10]} />
        <meshStandardMaterial color="#5a4636" />
      </mesh>
      <mesh position={[3.6, 1.35, -1.8]} castShadow>
        <sphereGeometry args={[0.7, 20, 20]} />
        <meshStandardMaterial color="#2f4a2c" roughness={0.9} />
      </mesh>
    </group>
  );
}

function CameraRig({
  view,
  scrollProgress,
}: {
  view: HouseView;
  scrollProgress: MutableRefObject<number>;
}) {
  const { camera } = useThree();
  const target = useRef({ x: 0.2, y: 1.6, z: 0 });

  const presets = useMemo(
    () => ({
      orbit: { pos: [5.2, 2.8, 5.8] as const, look: [0.2, 1.5, 0] as const },
      front: { pos: [0.4, 2.0, 7.2] as const, look: [0.2, 1.5, 0] as const },
      side: { pos: [7.4, 2.4, 0.4] as const, look: [0, 1.6, 0] as const },
      aerial: { pos: [3.2, 8.2, 3.8] as const, look: [0.2, 0.4, 0] as const },
    }),
    [],
  );

  useFrame((_, delta) => {
    const p = scrollProgress.current;
    const base = presets[view];
    const angle = p * Math.PI * 1.35;
    const radius = MathUtils.lerp(6.2, 4.4, Math.min(p * 1.2, 1));
    const height = MathUtils.lerp(2.6, 3.8, p);

    const scrollPos =
      view === "orbit"
        ? {
            x: Math.sin(angle + 0.55) * radius,
            y: height,
            z: Math.cos(angle + 0.55) * radius,
          }
        : { x: base.pos[0], y: base.pos[1], z: base.pos[2] };

    camera.position.x = MathUtils.damp(camera.position.x, scrollPos.x, 3.2, delta);
    camera.position.y = MathUtils.damp(camera.position.y, scrollPos.y, 3.2, delta);
    camera.position.z = MathUtils.damp(camera.position.z, scrollPos.z, 3.2, delta);

    target.current.x = MathUtils.damp(target.current.x, base.look[0], 4, delta);
    target.current.y = MathUtils.damp(target.current.y, base.look[1], 4, delta);
    target.current.z = MathUtils.damp(target.current.z, base.look[2], 4, delta);
    camera.lookAt(target.current.x, target.current.y, target.current.z);
  });

  return null;
}

function Studio({ mode }: { mode: "dark" | "light" }) {
  return (
    <>
      <ambientLight intensity={mode === "light" ? 0.55 : 0.25} />
      <spotLight
        position={[6, 10, 4]}
        angle={0.45}
        penumbra={0.9}
        intensity={mode === "light" ? 2.2 : 1.6}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <spotLight position={[-5, 6, -2]} angle={0.5} penumbra={1} intensity={0.55} color="#b8c7d4" />
      <Environment resolution={256}>
        <Lightformer intensity={1.6} position={[0, 4, -4]} scale={[8, 2, 1]} color="white" />
        <Lightformer intensity={0.8} position={[4, 1, 2]} scale={[4, 3, 1]} color="#dff0ff" />
        <Lightformer intensity={0.5} position={[-4, 2, 1]} scale={[3, 4, 1]} color="#ffe8c8" />
      </Environment>
    </>
  );
}

function SceneContent({ accent, mode, view, scrollProgress, interactive }: SceneProps) {
  const villa = (
    <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.08}>
      <ModernVilla accent={accent} />
    </Float>
  );

  return (
    <>
      <Studio mode={mode} />
      <CameraRig view={view} scrollProgress={scrollProgress} />

      {interactive ? (
        <PresentationControls
          global
          cursor
          snap
          speed={1.15}
          zoom={0.9}
          polar={[-0.15, 0.35]}
          azimuth={[-0.75, 0.75]}
        >
          {villa}
        </PresentationControls>
      ) : (
        villa
      )}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.08, 0]}>
        <planeGeometry args={[28, 28]} />
        <MeshReflectorMaterial
          blur={[300, 80]}
          resolution={512}
          mixBlur={0.85}
          mixStrength={mode === "light" ? 18 : 28}
          roughness={0.92}
          depthScale={0.6}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color={mode === "light" ? "#d9d3c7" : "#151812"}
          metalness={0.2}
        />
      </mesh>

      <ContactShadows
        position={[0, -0.07, 0]}
        opacity={mode === "light" ? 0.4 : 0.55}
        scale={16}
        blur={2.8}
        far={7}
      />
    </>
  );
}

export default function ConstructionCanvas({
  className = "",
  accent = "#6b7e45",
  mode = "dark",
  view = "orbit",
  scrollProgress,
  interactive = true,
}: {
  className?: string;
  accent?: string;
  mode?: "dark" | "light";
  view?: HouseView;
  scrollProgress: MutableRefObject<number>;
  interactive?: boolean;
}) {
  return (
    <div className={`h-full w-full touch-none ${className}`}>
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [5.2, 2.8, 5.8], fov: 32, near: 0.1, far: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#00000000"]} />
        <Suspense fallback={null}>
          <SceneContent
            accent={accent}
            mode={mode}
            view={view}
            scrollProgress={scrollProgress}
            interactive={interactive}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
