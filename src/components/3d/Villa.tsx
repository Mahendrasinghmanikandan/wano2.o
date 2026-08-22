"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import {
  BoxGeometry,
  CanvasTexture,
  Color,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  RepeatWrapping,
  SRGBColorSpace,
  type Mesh,
} from "three";

function noiseTexture(
  size: number,
  rgb: [number, number, number],
  variance: number,
  stripes = false,
) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new CanvasTexture(canvas);
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const grain = (Math.random() - 0.5) * variance;
      const stripe = stripes ? Math.sin(x * 0.35) * 10 + Math.sin(x * 0.08) * 6 : 0;
      img.data[i] = Math.max(0, Math.min(255, rgb[0] + grain + stripe));
      img.data[i + 1] = Math.max(0, Math.min(255, rgb[1] + grain + stripe * 0.6));
      img.data[i + 2] = Math.max(0, Math.min(255, rgb[2] + grain + stripe * 0.25));
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

function Box({
  args,
  position,
  rotation,
  material,
  cast = true,
  receive = true,
}: {
  args: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
  material: MeshStandardMaterial | MeshPhysicalMaterial;
  cast?: boolean;
  receive?: boolean;
}) {
  return (
    <mesh
      position={position}
      rotation={rotation}
      castShadow={cast}
      receiveShadow={receive}
      material={material}
    >
      <boxGeometry args={args} />
    </mesh>
  );
}

function Fenestration({
  position,
  rotation,
  width,
  height,
  divisions,
  frame,
  glass,
  night,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  width: number;
  height: number;
  divisions: number;
  frame: MeshStandardMaterial;
  glass: MeshPhysicalMaterial;
  night: boolean;
}) {
  const mullion = 0.045;
  const paneW = (width - mullion * (divisions + 1)) / divisions;
  return (
    <group position={position} rotation={rotation}>
      <mesh material={frame} castShadow>
        <boxGeometry args={[width, height, 0.1]} />
      </mesh>
      {Array.from({ length: divisions }, (_, i) => {
        const x = -width / 2 + mullion + paneW / 2 + i * (paneW + mullion);
        return (
          <group key={i} position={[x, 0, 0.04]}>
            <mesh material={glass}>
              <boxGeometry args={[paneW, height - mullion * 2, 0.025]} />
            </mesh>
            {night ? (
              <mesh position={[0, 0, -0.05]}>
                <planeGeometry args={[paneW * 0.94, (height - mullion * 2) * 0.94]} />
                <meshBasicMaterial color="#f3c48a" transparent opacity={0.58} />
              </mesh>
            ) : null}
          </group>
        );
      })}
    </group>
  );
}

function Pool({
  position,
  stone,
  night,
}: {
  position: [number, number, number];
  stone: MeshStandardMaterial;
  night: boolean;
}) {
  const water = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    const mesh = water.current;
    if (!mesh) return;
    const mat = mesh.material as MeshPhysicalMaterial;
    const t = clock.elapsedTime;
    mat.roughness = 0.05 + Math.sin(t * 1.25) * 0.03;
    mat.thickness = 0.5 + Math.sin(t * 0.8) * 0.1;
    mesh.position.y = 0.055 + Math.sin(t * 0.9) * 0.006;
  });

  return (
    <group position={position}>
      <Box args={[3.15, 0.28, 1.95]} position={[0, -0.08, 0]} material={stone} />
      <mesh ref={water} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.055, 0]}>
        <planeGeometry args={[2.72, 1.52]} />
        <meshPhysicalMaterial
          color="#3b7c90"
          roughness={0.08}
          metalness={0.18}
          transmission={0.42}
          thickness={0.55}
          ior={1.333}
          envMapIntensity={1.7}
          transparent
          opacity={0.96}
        />
      </mesh>
      {night ? (
        <pointLight
          position={[0, 0.35, 0]}
          color="#7ec8e3"
          intensity={3.2}
          distance={5}
          decay={2}
        />
      ) : null}
    </group>
  );
}

function Tree({
  position,
  scale = 1,
  canopy,
  bark,
}: {
  position: [number, number, number];
  scale?: number;
  canopy: MeshStandardMaterial;
  bark: MeshStandardMaterial;
}) {
  return (
    <group position={position} scale={scale}>
      <mesh material={bark} position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.12, 1.1, 8]} />
      </mesh>
      <mesh material={canopy} position={[0, 1.25, 0.05]} castShadow>
        <icosahedronGeometry args={[0.55, 0]} />
      </mesh>
      <mesh material={canopy} position={[0.22, 1.55, -0.12]} castShadow>
        <icosahedronGeometry args={[0.42, 0]} />
      </mesh>
      <mesh material={canopy} position={[-0.2, 1.62, 0.1]} castShadow>
        <icosahedronGeometry args={[0.38, 0]} />
      </mesh>
    </group>
  );
}

export default function Villa({
  accent,
  night,
}: {
  accent: string;
  night: boolean;
}) {
  const maps = useMemo(() => {
    const plaster = noiseTexture(256, [236, 230, 218], 16);
    plaster.repeat.set(3, 2);
    const concrete = noiseTexture(256, [186, 178, 166], 22);
    concrete.repeat.set(2, 2);
    const wood = noiseTexture(256, [122, 90, 58], 18, true);
    wood.repeat.set(1, 3);
    const stone = noiseTexture(256, [168, 160, 148], 28);
    stone.repeat.set(2, 1);
    return { plaster, concrete, wood, stone };
  }, []);

  const mats = useMemo(() => {
    const plaster = new MeshStandardMaterial({
      map: maps.plaster,
      color: new Color("#f1ece3"),
      roughness: 0.78,
      metalness: 0.03,
    });
    const plasterDeep = new MeshStandardMaterial({
      color: new Color("#e4ddd2"),
      roughness: 0.82,
      metalness: 0.02,
    });
    const concrete = new MeshStandardMaterial({
      map: maps.concrete,
      color: new Color("#c8c0b4"),
      roughness: 0.9,
      metalness: 0.04,
    });
    const dark = new MeshStandardMaterial({
      color: new Color("#2a2926"),
      roughness: 0.42,
      metalness: 0.28,
    });
    const wood = new MeshStandardMaterial({
      map: maps.wood,
      color: new Color("#8a6a48"),
      roughness: 0.62,
      metalness: 0.04,
    });
    const stone = new MeshStandardMaterial({
      map: maps.stone,
      color: new Color("#b7b0a4"),
      roughness: 0.86,
      metalness: 0.05,
    });
    const metal = new MeshStandardMaterial({
      color: new Color("#c5c1ba"),
      roughness: 0.22,
      metalness: 0.78,
    });
    const canopy = new MeshStandardMaterial({
      color: new Color("#2f4a32"),
      roughness: 0.92,
      metalness: 0,
      flatShading: true,
    });
    const canopy2 = new MeshStandardMaterial({
      color: new Color("#3d5c38"),
      roughness: 0.9,
      metalness: 0,
      flatShading: true,
    });
    const hedge = new MeshStandardMaterial({
      color: new Color("#355438"),
      roughness: 0.95,
    });
    const grass = new MeshStandardMaterial({
      color: new Color(night ? "#3a4a3c" : "#5a6d48"),
      roughness: 0.96,
    });
    const asphalt = new MeshStandardMaterial({
      color: new Color("#3a3a38"),
      roughness: 0.88,
    });
    const glass = new MeshPhysicalMaterial({
      color: new Color(accent),
      transmission: night ? 0.55 : 0.86,
      thickness: 0.28,
      roughness: 0.06,
      metalness: 0.08,
      ior: 1.45,
      envMapIntensity: night ? 0.9 : 1.55,
      transparent: true,
      opacity: night ? 0.78 : 0.92,
    });
    return {
      plaster,
      plasterDeep,
      concrete,
      dark,
      wood,
      stone,
      metal,
      canopy,
      canopy2,
      hedge,
      grass,
      asphalt,
      glass,
    };
  }, [accent, maps, night]);

  const slatGeo = useMemo(() => new BoxGeometry(0.038, 1.62, 0.06), []);

  const slats = useMemo(
    () => Array.from({ length: 18 }, (_, i) => i * 0.1 - 0.85),
    [],
  );

  return (
    <group>
      {/* site */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0.4, -0.02, 0.2]}
        receiveShadow
        material={mats.grass}
      >
        <circleGeometry args={[11.5, 64]} />
      </mesh>
      <Box args={[11.2, 0.1, 8.4]} position={[0.15, -0.06, 0.1]} material={mats.stone} cast={false} />
      <Box args={[3.6, 0.06, 7.4]} position={[-3.6, 0.01, 0.4]} material={mats.asphalt} cast={false} />

      {/* plinth */}
      <Box args={[8.6, 0.18, 6.4]} position={[0.35, 0.06, 0.05]} material={mats.concrete} />

      {/* living floor + ceiling (hollow) */}
      <Box args={[5.4, 0.12, 4.5]} position={[0.55, 0.2, 0.05]} material={mats.wood} />
      <Box args={[5.5, 0.12, 4.6]} position={[0.55, 3.08, 0.05]} material={mats.plaster} />
      <Box args={[5.4, 2.78, 0.14]} position={[0.55, 1.64, -2.16]} material={mats.plaster} />
      <Box args={[0.14, 2.78, 4.5]} position={[-2.08, 1.64, 0.05]} material={mats.plaster} />
      <Box args={[0.14, 2.78, 4.5]} position={[3.18, 1.64, 0.05]} material={mats.plaster} />
      <Box args={[1.15, 2.78, 0.14]} position={[-1.55, 1.64, 2.22]} material={mats.plaster} />
      <Box args={[1.35, 2.78, 0.14]} position={[2.55, 1.64, 2.22]} material={mats.plaster} />
      <Box args={[5.5, 0.42, 0.14]} position={[0.55, 2.9, 2.22]} material={mats.plaster} />

      {/* interior depth */}
      <Box args={[1.8, 0.42, 0.72]} position={[-0.55, 0.48, -0.85]} material={mats.wood} />
      <Box args={[0.18, 0.55, 0.7]} position={[-1.35, 0.72, -0.85]} material={mats.wood} />
      <Box args={[0.18, 0.55, 0.7]} position={[0.25, 0.72, -0.85]} material={mats.wood} />
      <Box args={[1.15, 0.08, 1.6]} position={[1.85, 0.28, -0.2]} material={mats.dark} />
      <mesh position={[0.4, 2.55, 0.1]}>
        <sphereGeometry args={[0.09, 16, 16]} />
        <meshBasicMaterial color={night ? "#ffd7a1" : "#f4efe6"} />
      </mesh>
      {night ? (
        <pointLight
          position={[0.5, 2.2, 0.1]}
          color="#ffc685"
          intensity={18}
          distance={7}
          decay={2}
        />
      ) : (
        <pointLight
          position={[0.5, 2.2, 0.1]}
          color="#fff4e4"
          intensity={2.2}
          distance={6}
          decay={2}
        />
      )}

      {/* bedroom wing */}
      <Box args={[2.35, 2.55, 3.6]} position={[-3.05, 1.45, -0.35]} material={mats.concrete} />
      <Box args={[2.5, 0.12, 3.75]} position={[-3.05, 2.78, -0.35]} material={mats.dark} />

      {/* first floor volume + terrace */}
      <Box args={[4.35, 2.35, 4.15]} position={[1.05, 4.28, -0.2]} material={mats.plaster} />
      <Box args={[4.55, 0.12, 4.35]} position={[1.05, 5.52, -0.2]} material={mats.dark} />
      <Box args={[4.7, 0.28, 0.12]} position={[1.05, 5.72, 1.92]} material={mats.plasterDeep} />
      <Box args={[4.7, 0.28, 0.12]} position={[1.05, 5.72, -2.32]} material={mats.plasterDeep} />
      <Box args={[0.12, 0.28, 4.36]} position={[-1.24, 5.72, -0.2]} material={mats.plasterDeep} />
      <Box args={[0.12, 0.28, 4.36]} position={[3.34, 5.72, -0.2]} material={mats.plasterDeep} />

      {/* terrace deck */}
      <Box args={[2.7, 0.1, 1.55]} position={[1.05, 3.22, 2.05]} material={mats.concrete} />
      <Box args={[2.62, 0.72, 0.05]} position={[1.05, 3.62, 2.78]} material={mats.metal} />
      <Box args={[0.05, 0.72, 1.5]} position={[-0.24, 3.62, 2.05]} material={mats.metal} />
      <Box args={[0.05, 0.72, 1.5]} position={[2.34, 3.62, 2.05]} material={mats.metal} />

      {/* roof tank — local vernacular */}
      <mesh position={[2.35, 5.95, -1.15]} material={mats.concrete} castShadow>
        <cylinderGeometry args={[0.38, 0.4, 0.7, 16]} />
      </mesh>
      <mesh position={[2.35, 6.34, -1.15]} material={mats.dark} castShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.08, 16]} />
      </mesh>

      {/* entrance canopy + steps */}
      <Box args={[2.7, 0.1, 1.55]} position={[0.45, 2.55, 2.85]} material={mats.wood} />
      <Box args={[0.1, 2.35, 0.1]} position={[-0.7, 1.25, 3.4]} material={mats.dark} />
      <Box args={[0.1, 2.35, 0.1]} position={[1.6, 1.25, 3.4]} material={mats.dark} />
      <Box args={[1.7, 0.12, 0.45]} position={[0.45, 0.18, 2.55]} material={mats.stone} />
      <Box args={[1.5, 0.12, 0.4]} position={[0.45, 0.3, 2.85]} material={mats.stone} />
      <Box args={[0.92, 2.05, 0.08]} position={[0.45, 1.22, 2.28]} material={mats.wood} />

      {/* side stair to terrace */}
      {Array.from({ length: 14 }, (_, i) => (
        <Box
          key={i}
          args={[0.95, 0.12, 0.32]}
          position={[3.55, 0.22 + i * 0.21, 1.55 - i * 0.12]}
          material={mats.concrete}
        />
      ))}
      <Box args={[0.06, 3.05, 0.06]} position={[4.0, 1.7, 1.05]} material={mats.metal} />

      {/* wood screen */}
      <group position={[3.32, 1.45, 0.15]}>
        {slats.map((x) => (
          <mesh
            key={x}
            geometry={slatGeo}
            material={mats.wood}
            position={[0, 0, x]}
            castShadow
          />
        ))}
      </group>

      {/* glazing */}
      <Fenestration
        position={[0.5, 1.55, 2.26]}
        width={3.55}
        height={2.35}
        divisions={4}
        frame={mats.dark}
        glass={mats.glass}
        night={night}
      />
      <Fenestration
        position={[1.05, 4.25, 1.9]}
        width={2.35}
        height={1.55}
        divisions={3}
        frame={mats.dark}
        glass={mats.glass}
        night={night}
      />
      <Fenestration
        position={[3.26, 4.25, -0.15]}
        rotation={[0, Math.PI / 2, 0]}
        width={2.1}
        height={1.45}
        divisions={2}
        frame={mats.dark}
        glass={mats.glass}
        night={night}
      />
      <Fenestration
        position={[-3.05, 1.55, 1.48]}
        width={1.35}
        height={1.35}
        divisions={2}
        frame={mats.dark}
        glass={mats.glass}
        night={night}
      />
      <Fenestration
        position={[-4.24, 1.5, -0.35]}
        rotation={[0, Math.PI / 2, 0]}
        width={1.7}
        height={1.4}
        divisions={2}
        frame={mats.dark}
        glass={mats.glass}
        night={night}
      />

      {/* pool + deck */}
      <Box args={[3.5, 0.08, 2.5]} position={[2.55, 0.08, 3.35]} material={mats.stone} cast={false} />
      <Pool position={[2.55, 0.12, 3.4]} stone={mats.stone} night={night} />
      <Box args={[0.72, 0.12, 1.55]} position={[0.85, 0.22, 3.55]} material={mats.wood} />
      <Box args={[0.18, 0.42, 0.7]} position={[0.85, 0.48, 4.12]} material={mats.wood} />

      {/* planting */}
      <Box args={[0.55, 0.7, 2.8]} position={[-4.55, 0.4, 1.6]} material={mats.hedge} />
      <Box args={[3.4, 0.45, 0.4]} position={[1.6, 0.28, 4.55]} material={mats.hedge} />
      <Box args={[0.7, 0.38, 0.7]} position={[-1.7, 0.32, 3.15]} material={mats.concrete} />
      <mesh position={[-1.7, 0.72, 3.15]} material={mats.canopy2} castShadow>
        <sphereGeometry args={[0.32, 16, 12]} />
      </mesh>
      <Tree position={[-4.7, 0, 3.15]} scale={1.15} canopy={mats.canopy} bark={mats.wood} />
      <Tree position={[-5.15, 0, 1.4]} scale={0.82} canopy={mats.canopy2} bark={mats.wood} />
      <Tree position={[5.1, 0, -1.9]} scale={1.35} canopy={mats.canopy} bark={mats.wood} />
      <Tree position={[4.55, 0, -3.3]} scale={0.9} canopy={mats.canopy2} bark={mats.wood} />
      <Tree position={[-2.8, 0, -3.5]} scale={1.05} canopy={mats.canopy} bark={mats.wood} />

      {/* compound edge */}
      <Box args={[10.4, 0.55, 0.12]} position={[0.2, 0.28, -3.85]} material={mats.concrete} />
      <Box args={[0.12, 0.55, 4.2]} position={[5.35, 0.28, -1.8]} material={mats.concrete} />
    </group>
  );
}
