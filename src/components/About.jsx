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


function About() {

  return (
    <section id="hero" className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6 leading-tight">About</h1>
        <p className="text-xl text-gray-600 mb-8">We create intricate 3D representations that turn geographical landscapes into stunning, tactile masterpieces.</p>
        <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Get Your Custom Print</a>
      </div>
      <div className="rounded-lg shadow-xl noise h-96 w-full overflow-hidden">
        <Canvas camera={{ position: [0, 2, 2], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
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

export default About