import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { extend, Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, GradientTexture} from '@react-three/drei'
import modelPath from '../assets/winchester.glb'


function Model({ url }) {
  const { scene } = useGLTF(url)
  const modelRef = useRef()
  // Apply custom plastic-like material to all meshes
  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.material =   new THREE.MeshToonMaterial({
          color: 0xffffff
        })
      }
    })
  }, [scene])
  
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005
    }
  })
  
  return <primitive ref={modelRef} object={scene} scale={5} position={[0, 0, 0]} />
}


function Hero() {
  return (
    <section id="hero" className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6 leading-tight">Transform Places into Art</h1>
        <p className="text-xl text-gray-600 mb-8">We create intricate 3D representations that turn geographical landscapes into stunning, tactile masterpieces.</p>
        <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Get Your Custom Print</a>
      </div>
      <div className="bg-gray-200 rounded-lg h-[500px] animate-pulse-slow"></div>
    </section>
  )
}

export default Hero