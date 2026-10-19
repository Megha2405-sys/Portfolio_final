import React, { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Orbit({ radius, tilt = 0, color = '#75ddf5', speed = 1, reducedMotion }) {
  const group = useRef();
  const curve = useMemo(() => new THREE.EllipseCurve(0, 0, radius, radius * .59), [radius]);
  const points = useMemo(() => curve.getPoints(100).map(point => new THREE.Vector3(point.x, point.y, 0)), [curve]);
  const geometry = useMemo(() => new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points, true), 100, .0035, 5, true), [points]);
  useFrame((_, delta) => { if (group.current && !reducedMotion) group.current.rotation.z += delta * .025 * speed; });
  return <group ref={group} rotation={[tilt, tilt * .2, 0]}><mesh geometry={geometry}><meshBasicMaterial color={color} transparent opacity={color === '#a99bff' ? .36 : .23}/></mesh><mesh position={[radius,0,0]}><sphereGeometry args={[.018,16,16]}/><meshBasicMaterial color={color}/></mesh></group>;
}

function Core({ reducedMotion }) {
  const group = useRef();
  const dust = useMemo(() => new Float32Array(Array.from({length:18},(_,i)=>{const a=i*2.399,r=.5+(i%4)*.09;return [Math.cos(a)*r,Math.sin(a)*r,((i%3)-1)*.16];}).flat()),[]);
  useFrame((state,delta)=>{
    if(!group.current||reducedMotion)return;
    group.current.rotation.x=THREE.MathUtils.damp(group.current.rotation.x,state.pointer.y*.12,2.1,delta);
    group.current.rotation.y=THREE.MathUtils.damp(group.current.rotation.y,state.pointer.x*.16+(reducedMotion?0:state.clock.elapsedTime*.045),2.1,delta);
  });
  return <group ref={group}>
    <mesh><icosahedronGeometry args={[.76,1]}/><meshPhysicalMaterial color="#152a34" metalness={.68} roughness={.28} transparent opacity={.76} wireframe/></mesh>
    <mesh><icosahedronGeometry args={[.69,1]}/><meshPhysicalMaterial color="#75ddf5" metalness={.18} roughness={.32} transparent opacity={.08} clearcoat={.7}/></mesh>
    <mesh rotation={[0,0,Math.PI/4]}><torusGeometry args={[.33,.008,8,64]}/><meshBasicMaterial color="#75ddf5"/></mesh>
    <mesh rotation={[Math.PI/2,.3,0]}><torusGeometry args={[.46,.004,6,64]}/><meshBasicMaterial color="#a99bff" transparent opacity={.72}/></mesh>
    <mesh position={[0,0,.08]}><sphereGeometry args={[.13,24,24]}/><meshBasicMaterial color="#75ddf5"/></mesh>
    <points><bufferGeometry><bufferAttribute attach="attributes-position" count={18} array={dust} itemSize={3}/></bufferGeometry><pointsMaterial color="#75ddf5" size={.018} sizeAttenuation transparent opacity={.8}/></points>
  </group>;
}

function Scene({ reducedMotion }) {
  const rig=useRef();
  useFrame((state,delta)=>{
    if(!rig.current||reducedMotion)return;
    rig.current.rotation.y=THREE.MathUtils.damp(rig.current.rotation.y,state.pointer.x*.09,1.4,delta);
    rig.current.rotation.x=THREE.MathUtils.damp(rig.current.rotation.x,-state.pointer.y*.07,1.4,delta);
  });
  return <group ref={rig}><ambientLight intensity={1.1}/><pointLight position={[3,2,4]} color="#75ddf5" intensity={15}/><pointLight position={[-3,-2,-2]} color="#a99bff" intensity={5}/><Orbit radius={1.53} tilt={.16} speed={.6} reducedMotion={reducedMotion}/><Orbit radius={1.28} tilt={1.06} color="#a99bff" speed={-.42} reducedMotion={reducedMotion}/><Orbit radius={1.06} tilt={-.63} speed={.3} reducedMotion={reducedMotion}/><Core reducedMotion={reducedMotion}/></group>;
}

export default function HeroScene({ reducedMotion }) {
  return <div className="hero-visual" aria-label="A hand-built 3D study of connected data points and orbital paths"><div className="visual-label">COMPUTATIONAL STUDY <span>01 — 03</span></div><div className="canvas-wrap"><Canvas dpr={[1,1.5]} camera={{position:[0,0,4.7],fov:42}} gl={{alpha:true,antialias:true,powerPreference:'low-power'}} fallback={<div className="scene-fallback"/>} aria-hidden="true"><Suspense fallback={null}><Scene reducedMotion={reducedMotion}/></Suspense></Canvas></div><div className="scene-caption"><span>WIREFRAME / LIGHT STUDY</span><span>MOVE YOUR POINTER TO EXPLORE</span></div></div>;
}
