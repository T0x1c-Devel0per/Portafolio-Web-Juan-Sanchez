import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Html } from '@react-three/drei';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { skillClusters } from '@services/portfolioData.js';

const NODE_COUNT = 42;
const SKILL_LABELS = skillClusters.flatMap((cluster) =>
  cluster.techs.map(([tech, context]) => ({
    tech,
    context,
    cluster: cluster.name
  }))
);

function readScrollProgress() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll <= 0) return 0;
  return Math.min(window.scrollY / maxScroll, 1);
}

function createPolyNodes() {
  return Array.from({ length: NODE_COUNT }, (_, index) => {
    const layer = index % 4;
    const angle = index * 2.399963;
    const radius = 0.7 + (index / NODE_COUNT) * 3.25 + layer * 0.12;

    return new THREE.Vector3(
      Math.cos(angle) * radius * 0.85,
      Math.sin(angle * 0.92) * (1.05 + layer * 0.24),
      Math.sin(angle * 1.17) * (0.9 + layer * 0.22)
    );
  });
}

function createEdges(nodes) {
  const edges = [];

  nodes.forEach((node, index) => {
    const neighbors = nodes
      .map((other, otherIndex) => ({ otherIndex, distance: node.distanceTo(other) }))
      .filter(({ otherIndex }) => otherIndex !== index)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 2);

    neighbors.forEach(({ otherIndex }) => {
      const a = Math.min(index, otherIndex);
      const b = Math.max(index, otherIndex);
      const key = `${a}-${b}`;
      if (!edges.some((edge) => edge.key === key)) edges.push({ a, b, key });
    });
  });

  return edges;
}

function PolyNetwork() {
  const groupRef = useRef();
  const nodeRefs = useRef([]);
  const lineRef = useRef();
  const [hovered, setHovered] = useState(null);
  const { pointer } = useThree();
  const baseNodes = useMemo(createPolyNodes, []);
  const edges = useMemo(() => createEdges(baseNodes), [baseNodes]);
  const liveNodes = useMemo(() => baseNodes.map((node) => node.clone()), [baseNodes]);
  const linePositions = useMemo(() => new Float32Array(edges.length * 6), [edges.length]);
  const mousePoint = useMemo(() => new THREE.Vector3(), []);

  useFrame((state, delta) => {
    const elapsed = state.clock.elapsedTime;
    const scroll = readScrollProgress();
    const clampedDelta = Math.min(delta, 0.033);

    mousePoint.set(pointer.x * 2.4, pointer.y * 1.7, 0);

    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, 2.45 + pointer.x * 0.28, 0.055);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, pointer.y * 0.18, 0.055);
    groupRef.current.rotation.y += clampedDelta * (0.14 + scroll * 0.25);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.18 + scroll * 0.18, 0.055);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -pointer.x * 0.1, 0.055);

    baseNodes.forEach((baseNode, index) => {
      const mesh = nodeRefs.current[index];
      const liveNode = liveNodes[index];
      const wave = elapsed * (0.8 + (index % 5) * 0.08);
      const scrollSpread = 1 + scroll * 0.12;

      liveNode.set(
        baseNode.x * scrollSpread + Math.sin(wave + index * 0.21) * 0.16,
        baseNode.y + Math.cos(wave * 1.13 + index * 0.36) * 0.13,
        baseNode.z + Math.sin(wave * 1.29 + index * 0.48) * 0.2 + scroll * 0.55
      );

      const distanceToMouse = liveNode.distanceTo(mousePoint);
      if (distanceToMouse < 1.65) {
        const force = (1.65 - distanceToMouse) / 1.65;
        liveNode.lerp(mousePoint, force * 0.12);
      }

      if (!mesh) return;

      const pulse = 1 + Math.sin(elapsed * 2.4 + index) * 0.08;
      mesh.position.copy(liveNode);
      mesh.scale.setScalar((hovered === index ? 2.2 : 1) * pulse);
    });

    let cursor = 0;
    edges.forEach(({ a, b }) => {
      const node = liveNodes[a];
      const other = liveNodes[b];

      linePositions[cursor++] = node.x;
      linePositions[cursor++] = node.y;
      linePositions[cursor++] = node.z;
      linePositions[cursor++] = other.x;
      linePositions[cursor++] = other.y;
      linePositions[cursor++] = other.z;
    });

    lineRef.current.geometry.setDrawRange(0, cursor / 3);
    lineRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[2.45, 0, 0]} scale={0.92}>
      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={linePositions} count={linePositions.length / 3} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#00ff87" transparent opacity={0.28} blending={THREE.AdditiveBlending} />
      </lineSegments>

      {baseNodes.map((node, index) => (
        <mesh
          key={index}
          ref={(element) => {
            nodeRefs.current[index] = element;
          }}
          position={node}
          onPointerOver={(event) => {
            event.stopPropagation();
            setHovered(index);
          }}
          onPointerOut={() => setHovered(null)}
        >
          <sphereGeometry args={[hovered === index ? 0.09 : 0.048, 18, 18]} />
          <meshStandardMaterial
            color={hovered === index ? '#f0f0f0' : '#00ff87'}
            emissive="#00ff87"
            emissiveIntensity={hovered === index ? 1.45 : 0.58}
            roughness={0.3}
          />
          {hovered === index && (
            <Html center className="node-skill-html">
              <div className="node-skill-tooltip">
                <span>{SKILL_LABELS[index % SKILL_LABELS.length].cluster}</span>
                <strong>{SKILL_LABELS[index % SKILL_LABELS.length].tech}</strong>
                <small>{SKILL_LABELS[index % SKILL_LABELS.length].context}</small>
              </div>
            </Html>
          )}
        </mesh>
      ))}
    </group>
  );
}

export default function NetworkScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7.8], fov: 48 }} dpr={[1, 1.7]} gl={{ antialias: true, powerPreference: 'high-performance' }}>
      <color attach="background" args={['#0a0a0a']} />
      <fog attach="fog" args={['#0a0a0a', 7.8, 14]} />
      <ambientLight intensity={0.92} />
      <pointLight position={[3, 3, 4]} intensity={1.9} color="#00ff87" />
      <pointLight position={[-4, -2, 3]} intensity={0.7} color="#f0f0f0" />
      <PolyNetwork />
      <Environment preset="city" />
    </Canvas>
  );
}
