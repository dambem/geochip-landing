import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { extend, Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, GradientTexture} from '@react-three/drei'
import modelPath from '../assets/canarywharf.glb'


function Model({ url }) {
  const { scene } = useGLTF(url)
  const modelRef = useRef()
  // Apply custom plastic-like material to all meshes
  React.useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;

      }
    })
  }, [scene])
  
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003
    }
  })
  
  return <primitive ref={modelRef} object={scene} scale={5} position={[0, 0, 0]} />
}


function Hero() {
  return (
    <section id="hero" className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6 leading-tight">Transform Places into Art</h1>
        <p className="text-xl text-gray-600 mb-8">We create intricate 3D representations that turn geographical landscapes into stunning, tactile masterpieces.</p>
        <a href="#contact" className="bg-sky-600/50 text-white px-6 py-3 rounded-xl shadow-xl hover:bg-sky-700 transition">Get Your Custom Print</a>
      </div>
      <div className="rounded-lg shadow-xl noise h-96 w-full overflow-hidden">
        <Canvas camera={{ position: [0, 8, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.3} />
            <spotLight position={[0, 10, 2]} angle={0.40} penumbra={0.5} intensity={50} castShadow />

            <Model url={modelPath} />
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2}
              dampingFactor={0.05}
              autoRotate={false}
            />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
          </section>
  )
}

export default Hero