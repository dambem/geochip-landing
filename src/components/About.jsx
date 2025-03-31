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
      <div>
        <h1 className="text-5xl font-bold mb-6 leading-tight">About</h1>
        <article className="prose lg:prose-xl">
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
        <article className="prose lg:prose-xl">
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