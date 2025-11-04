import React, { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { extend, Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, Html, ContactShadows, GradientTexture, Sparkles} from '@react-three/drei'
import modelPath from '../assets/canarywharf.glb'
function LoadingFallback() {
  return (
    <Html center>
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mb-2"></div>
        <p className="text-sm text-amber-600">Loading terrain...</p>
      </div>
    </Html>
  );
}


function Model({ url }) {
  const group = useRef();
  const { scene } = useGLTF(url);
  
  // Add rotation animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(time * 0.3) * 0.1;
    group.current.position.y = Math.sin(time * 0.5) * 0.1;
  });

  
  return <primitive ref={group} object={scene} scale={1} position={[0, 0, 0]} />
}
function InteractiveLabel({ position, text }) {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <Html
      position={position}
      center
      style={{
        transition: 'all 0.3s',
        opacity: hovered ? 1 : 0.7,
        transform: `scale(${hovered ? 1.1 : 1})`,
      }}
    >
      <div
        className="relative"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* The dot element */}
        <div 
          className="w-4 h-4 rounded-full bg-white/90 shadow-lg cursor-pointer"
        />
        
        {/* The label element, hidden by default */}
        <div
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg
            pointer-events-none transition-all duration-300
            ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
          `}
        >
          <span className="text-xs font-medium text-amber-800 whitespace-nowrap">
            {text}
          </span>
        </div>
      </div>
    </Html>

  );
}


function Hero() {
  return (
    <section id="hero" className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">

        <div className="inline-flex items-center gap-2 bg-amber-100/50 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
          <span className="text-sm text-amber-800">Handcrafted in Southampton</span>
        </div>
            
        <h1 className="text-5xl lg:text-6xl font-light leading-tight text-[#2C2826]">
          Transforming Places,
          <span className="block text-amber-700 font-normal"> Into Experiences </span>
        </h1>
        <p className="text-xl  mb-8">GeoChip brings locations to life through innovative geospatial experiences. <br></br>We create anything from interactive maps for local businesses to collectible representations of iconic landmarks.</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Museum quality</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Personalised delivery plan</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Clear consultancy process</span>
          </div>
        </div>
            
        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Find your place
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a 
                href="#services" 
                className="inline-flex items-center gap-2 border-2 border-amber-600/30 text-amber-700 px-8 py-4 rounded-full hover:bg-amber-50 transition-all duration-300"
              >
                View Services
          </a>
        </div>
        </div>
      <div className="relative h-[500px] lg:h-[600px]  rounded-lg shadow-xl noise h-96 w-full overflow-hidden">
        <Canvas 
        camera={{ position: [0, 8, 8], fov: 30 }}
        shadows
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.8
        }}
        >
          <Suspense fallback={<LoadingFallback />}>
            <ambientLight intensity={0.2} />
            <spotLight 
              position={[5, 10, 5]} 
              angle={0.3} 
              penumbra={1} 
              intensity={40} 
              castShadow 
              shadow-mapSize={2048}
              color="#FFD700"
            />
            <spotLight 
              position={[-5, 10, -5]} 
              angle={0.3} 
              penumbra={1} 
              intensity={20} 
              color="#87CEEB"
            />
            <Model url={modelPath} />
            <OrbitControls 
              enablePan={false}
              enableZoom={true}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2}
              minDistance={5}
              maxDistance={15}
              dampingFactor={0.05}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
            <Environment preset="sunset" blur={0.8} />
            <Sparkles 
              count={50} 
              size={2} 
              position={[0, 1, 0]} 
              scale={[10, 10, 10]} 
              speed={0.3}
              opacity={0.5}
              color="#FFD700"
            />
            <InteractiveLabel position={[2, 0, 0]} text="Custom Wooden Base" />
            <InteractiveLabel position={[-2, 0.5, 0]} text="LED Capabilities" />
            <InteractiveLabel position={[0, 1, 0]} text="Recyclable PLA" />

            <ContactShadows 
              opacity={0.4} 
              scale={10} 
              blur={2} 
              far={4} 
              resolution={256} 
              color="#8B7355"
            />
                
          </Suspense>
        </Canvas>
      </div>
          </section>
  )
}

export default Hero