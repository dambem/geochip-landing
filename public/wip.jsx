import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshReflectorMaterial, useGLTF, Stage, ContactShadows, PresentationControls, Html, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import modelPath from '../assets/canarywharf.glb'

// Animated gradient background for the scene
function GradientBackground() {
  const mesh = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    mesh.current.material.uniforms.time.value = time;
  });

  const gradientShader = useMemo(() => ({
    uniforms: {
      time: { value: 0 },
      colorA: { value: new THREE.Color('#1a1815') },
      colorB: { value: new THREE.Color('#8B7355') },
      colorC: { value: new THREE.Color('#FAF8F5') }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      uniform vec3 colorA;
      uniform vec3 colorB;
      uniform vec3 colorC;
      varying vec2 vUv;
      
      void main() {
        float wave = sin(vUv.y * 3.0 + time * 0.5) * 0.5 + 0.5;
        vec3 color = mix(colorA, colorB, vUv.y);
        color = mix(color, colorC, wave * 0.2);
        gl_FragColor = vec4(color, 1.0);
      }
    `
  }), []);

  return (
    <mesh ref={mesh} position={[0, 0, -10]} scale={[20, 20, 1]}>
      <planeGeometry />
      <shaderMaterial attach="material" {...gradientShader} />
    </mesh>
  );
}

// Animated wood grain texture
function WoodGrainPlane() {
  const mesh = useRef();
  
  useFrame((state) => {
    mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[20, 20, 64, 64]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={80}
        roughness={0.8}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#8B7355"
        metalness={0.2}
      />
    </mesh>
  );
}

// Main model component with enhanced effects
function Model({ url }) {
  const group = useRef();
  const { scene } = useGLTF(url);
  
  // Add rotation animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(time * 0.3) * 0.1;
    group.current.position.y = Math.sin(time * 0.5) * 0.1;
  });

  // Clone materials and add custom properties
  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        // Add emissive glow to simulate LED effect
        if (child.material) {
          child.material = child.material.clone();
          child.material.emissive = new THREE.Color('#FFD700');
          child.material.emissiveIntensity = 0.1;
        }
      }
    });
  }, [scene]);

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group ref={group}>
        <primitive object={scene} scale={1.2} />
      </group>
    </Float>
  );
}

// Fallback component during loading
function LoadingFallback() {
  return (
    <Html center>
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mb-2"></div>
        <p className="text-sm text-amber-600">Loading your terrain...</p>
      </div>
    </Html>
  );
}

// Interactive labels that appear on hover
function InteractiveLabel({ position, text }) {
  const [hovered, setHovered] = React.useState(false);
  
  return (
    <Html
      position={position}
      style={{
        transition: 'all 0.3s',
        opacity: hovered ? 1 : 0.7,
        transform: `scale(${hovered ? 1.1 : 1})`,
      }}
    >
      <div 
        className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg cursor-pointer"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <span className="text-xs font-medium text-amber-800">{text}</span>
      </div>
    </Html>
  );
}

function Hero() {
  
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F5] via-[#F5F0E8] to-[#E5DDD5]" />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100/50 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
              <span className="text-sm text-amber-800">Handcrafted in Portland</span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-5xl lg:text-6xl font-light leading-tight text-[#2C2826]">
              Your favorite places,
              <span className="block text-amber-700 font-normal">carved in light</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Each GeoChip captures the soul of a landscape — real or imagined — 
              in layers of sustainable wood and precision-etched acrylic. When darkness falls, 
              embedded LEDs transform terrain into a glowing memory.
            </p>
            
            {/* Features */}
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
                <span>4-6 week delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Lifetime warranty</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Start Your Commission
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="#gallery" 
                className="inline-flex items-center gap-2 border-2 border-amber-600/30 text-amber-700 px-8 py-4 rounded-full hover:bg-amber-50 transition-all duration-300"
              >
                View Gallery
              </a>
            </div>
          </div>
          
          {/* 3D Scene */}
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-50 to-amber-100">
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-600/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-600/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-600/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-amber-600/30 rounded-br-lg" />
            
            <Canvas 
              camera={{ position: [0, 5, 10], fov: 45 }}
              shadows
              dpr={[1, 2]}
              gl={{ 
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 0.8
              }}
            >
              <Suspense fallback={<LoadingFallback />}>
                {/* Lighting setup */}
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
                
                {/* Environment and effects */}
                <Environment preset="sunset" blur={0.8} />
                <fog attach="fog" args={['#FAF8F5', 10, 30]} />
                
                {/* Background elements */}
                <GradientBackground />
                <WoodGrainPlane />
                
                {/* Particle effects */}
                <Sparkles 
                  count={50} 
                  size={2} 
                  position={[0, 1, 0]} 
                  scale={[10, 10, 10]} 
                  speed={0.3}
                  opacity={0.5}
                  color="#FFD700"
                />
                
                {/* Main model */}
                <PresentationControls
                  global
                  rotation={[0.13, 0.1, 0]}
                  polar={[-0.4, 0.4]}
                  azimuth={[-0.5, 0.5]}
                  config={{ mass: 2, tension: 400 }}
                  snap={{ mass: 4, tension: 400 }}
                >
                  <Model url={modelPath} />
                </PresentationControls>
                
                {/* Interactive labels */}
                <InteractiveLabel position={[2, 1, 0]} text="Walnut Base" />
                <InteractiveLabel position={[-2, 0.5, 0]} text="LED Array" />
                <InteractiveLabel position={[0, 2, 0]} text="Etched Acrylic" />
                
                {/* Contact shadows for grounding */}
                <ContactShadows 
                  opacity={0.4} 
                  scale={10} 
                  blur={2} 
                  far={4} 
                  resolution={256} 
                  color="#8B7355"
                />
                
                {/* Camera controls */}
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
              </Suspense>
            </Canvas>
            
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;