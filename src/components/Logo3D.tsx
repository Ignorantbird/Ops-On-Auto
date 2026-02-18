import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface GearProps {
  position: [number, number, number];
  isHovered: boolean;
  color?: string;
}

interface Logo3DProps {
  width?: number;
  height?: number;  
  gearColor?: string;
  accentColor?: string;
}

const Gear = ({ position, isHovered, color = "#3b82f6" }: GearProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += isHovered ? 0.02 : 0.005;
    }
  });

  // Create gear geometry
  const gearShape = new THREE.Shape();
  const outerRadius = 1.5;
  const innerRadius = 0.8;
  const teeth = 12;
  
  for (let i = 0; i < teeth * 4; i++) {
    const angle = (i / (teeth * 4)) * Math.PI * 2;
    const radius = i % 4 < 2 ? outerRadius : outerRadius * 0.9;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    if (i === 0) {
      gearShape.moveTo(x, y);
    } else {
      gearShape.lineTo(x, y);
    }
  }
  
  // Create inner circle
  const hole = new THREE.Path();
  hole.absarc(0, 0, innerRadius, 0, Math.PI * 2, false);
  gearShape.holes.push(hole);

  const gearGeometry = new THREE.ExtrudeGeometry(gearShape, {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.02,
    bevelSegments: 8
  });

  return (
    <mesh ref={meshRef} position={position} geometry={gearGeometry}>
      <meshPhongMaterial 
        color={color}
        shininess={100}
        specular={color}
      />
    </mesh>
  );
};

interface PlayButtonProps {
  position: [number, number, number];
  isHovered: boolean;
  color?: string;
}

const PlayButton = ({ position, isHovered, color = "#f97316" }: PlayButtonProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current && isHovered) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 4) * 0.1);
    } else if (meshRef.current) {
      meshRef.current.scale.setScalar(1);
    }
  });

  // Create triangle shape for play button
  const triangleShape = new THREE.Shape();
  triangleShape.moveTo(0, 0.4);
  triangleShape.lineTo(-0.35, -0.2);
  triangleShape.lineTo(0.35, -0.2);
  triangleShape.lineTo(0, 0.4);

  const triangleGeometry = new THREE.ExtrudeGeometry(triangleShape, {
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelSegments: 5
  });

  return (
    <mesh ref={meshRef} position={position} geometry={triangleGeometry}>
      <meshPhongMaterial 
        color={color}
        shininess={100}
        specular={color}
      />
    </mesh>
  );
};

interface NodeProps {
  position: [number, number, number];
  delay: number;
  isHovered: boolean;
  color?: string;
}

const Node = ({ position, delay, isHovered, color = "#f97316" }: NodeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = isHovered 
        ? 1 + Math.sin(state.clock.elapsedTime * 3 + delay) * 0.3
        : 1 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshPhongMaterial 
        color={color}
        shininess={100}
        specular={color}
      />
    </mesh>
  );
};

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  color?: string;
}

const Connection = ({ start, end, color = "#f97316" }: ConnectionProps) => {
  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ];
  
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  
  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, linewidth: 2 }))} />
  );
};

interface Logo3DSceneProps {
  gearColor?: string;
  accentColor?: string;
}

const Logo3DScene = ({ gearColor = "#3b82f6", accentColor = "#f97316" }: Logo3DSceneProps = {}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const nodePositions: [number, number, number][] = [
    [2.2, 0.8, 0],
    [2.8, 0.4, 0],
    [2.8, 0, 0],
    [2.8, -0.4, 0],
    [2.2, -0.8, 0],
  ];

  const connectionStart: [number, number, number] = [1.5, 0, 0];

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[2, 2, 2]} intensity={0.5} color={gearColor} />
      <pointLight position={[-2, -2, 2]} intensity={0.3} color={accentColor} />
      
      <group
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <Gear position={[0, 0, 0]} isHovered={isHovered} color={gearColor} />
        <PlayButton position={[0, 0, 0.2]} isHovered={isHovered} color={accentColor} />
        
        {nodePositions.map((pos, index) => (
          <Node 
            key={index} 
            position={pos} 
            delay={index * 0.5} 
            isHovered={isHovered}
            color={accentColor}
          />
        ))}
        
        {nodePositions.map((pos, index) => (
          <Connection 
            key={`connection-${index}`} 
            start={connectionStart} 
            end={pos}
            color={accentColor}
          />
        ))}
      </group>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={!isHovered}
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const Logo3D = ({ width = 400, height = 400, gearColor = "#3b82f6", accentColor = "#f97316" }: Logo3DProps = {}) => {
  return (
    <div className="relative" style={{ width, height }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Logo3DScene gearColor={gearColor} accentColor={accentColor} />
      </Canvas>
    </div>
  );
};

export default Logo3D;