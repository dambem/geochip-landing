import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { extend, Canvas, useFrame } from '@react-three/fiber'
import {useTexture, OrbitControls, useGLTF, Environment, Float,  ContactShadows, Box, Sphere, MeshDistortMaterial, Sparkles} from '@react-three/drei'
import modelPath from '../assets/winchester.glb'
import profileImage from '../assets/profile.jpeg' // Add your profile image here


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
      modelRef.current.rotation.y -= 0.002
    }
  })
  
  return <primitive ref={modelRef} object={scene} scale={5} position={[0, 0, 0]} />
}
function Profile3D() {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  const texture = useTexture(profileImage)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05
    }
  })
  
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={0.3}>
      <group
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.05 : 1}
      >
      <mesh>
        <circleGeometry args={[1, 64]} />
        <meshStandardMaterial 
          map={texture}
          side={THREE.DoubleSide}
          roughness={0.5}
          metalness={0.1}
        />
      </mesh>
      


      </group>
    </Float>
  )
}


function About() {

  return (
    <section id="about" className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div className="rounded-lg shadow-xl noise h-dvh w-full overflow-hidden">
        <Canvas 
        camera={{ position: [0, 2, 2], 
        fov: 50 ,
        }}
                shadows
                dpr={[1, 2]}
                gl={{ 
                  antialias: true,
                  toneMapping: THREE.ACESFilmicToneMapping,
                  toneMappingExposure: 0.8
                }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <spotLight 
              position={[5, 10, 5]} 
              angle={0.3} 
              penumbra={1} 
              intensity={40} 
              castShadow 
              shadow-mapSize={2048}
              color="#bf5effff"
            />
            <spotLight 
              position={[-5, 10, -5]} 
              angle={0.3} 
              penumbra={1} 
              intensity={20} 
              color="#87CEEB"
            />
            <Model url={modelPath} />

            <Environment preset="sunset" />
          

          </Suspense>
        </Canvas>
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-6 leading-tight">About</h1>
        <article className="prose lg:prose-xl text-gray-900">
                 <div className="flex items-center gap-6 mb-8">
          {/* Profile Image/3D Avatar */}
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl">
                <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
                  <Suspense fallback={null}>
                    <ambientLight intensity={1.5} />
                    <pointLight position={[5, 5, 5]} intensity={0.8} />
                    <pointLight position={[-5, -5, -5]} intensity={10} color="#6366F1" />
                    <Profile3D />
                  </Suspense>
                </Canvas>
            </div>
            
          </div>
          
          {/* Name and Title */}
          <div>
            <h1 className="text-4xl font-bold mb-1">Damian Bemben</h1>
            <p className="text-xl text-gray-600">Founder & Creative Technologist</p>
          </div>
        </div>
          <h1>Damian Bemben - Founder & Creative Technologist</h1>
          <p>
          I'm driven by the endless possibilities where geospatial data meets creative expression. 
          With a background spanning both technical experience and artistic computing,
          I love finding new ways of expresssing ways to see our world.
          </p>
          <br></br>
          <p>
          I'm especially excited about creating immersive technical experiences that challenge our perception of cities and spaces. 
          From large-scale 3D prints that let you hold a neighborhood in your hands to projection mappings that breathe life into static models, 
          my passion lies in making these often forgotten visible.
          </p>
        </article>
        <br></br>
        <article className="prose lg:prose-xl text-gray-900">
          <h1>My Approach</h1>
          <p>
          <b>Data as Narrative:</b> Every elevation change, river, building and traffic pattern tells a story about how we live - I love to explore what makes places unique, and find the beauty therein.
          </p>
          <br></br>
          <p>
          <b>Technology with Purpose:</b> I harness cutting-edge technology not for its own sake, but to reveal new perspectives on familiar places
          </p>
          <br></br>
          <p>
          <b>Tangible Geography:</b> From the density of urban development, to the peaks and valleys of national parks, I love to turn abstract geospatial data into something vibrant and interactable.
          </p>
        </article>
      </div>

    </section>
  )
}

export default About