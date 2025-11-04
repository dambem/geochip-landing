import React, { useState } from 'react'
// Import your images here
// import image_1 from '../assets/image_1.png'
// import canary_wharf from '../assets/canary_wharf3.png'
// import winchester from '../assets/winchester6.png'

function Services() {
  const [hoveredTier, setHoveredTier] = useState(null)

  const serviceTiers = [
    {
      id: 'consumer',
      number: '01',
      scale: 'Trail',
      title: 'Personal Commissions',
      tagline: 'Your place, crafted',
      description: 'Ready-made pieces and custom single commissions. Transform meaningful coordinates into tangible art.',
      capabilities: [
        'Curated iconic locations',
        'Custom locations available',
        '10cm² to 50cm² sizes',
        'Ships in 2-5 days'
      ],
      cta: {
        primary: 'Visit Etsy Shop',
        secondary: 'Custom Piece',
        link: 'https://www.etsy.com/uk/shop/geochipuk'
      },
      image: 'bg-[url(./assets/main_box.jpg)]',
      mapPattern: 'M10,20 L15,10 L20,15 L25,8 L30,20',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'corporate',
      number: '02',
      scale: 'Hike',
      title: 'Corporate Collections',
      tagline: 'Teams, mapped together',
      description: 'Batch orders for events and teams. Create lasting impressions with geography-inspired corporate gifts.',
      capabilities: [
        '10 to 500+ units',
        'Custom branding',
        'Office locations',
        'Event exclusives'
      ],
      cta: {
        primary: 'Get Quote',
        secondary: 'Examples',
        link: '#contact'
      },
      image: 'bg-[url(./assets/canary_wharf3.png)]',
      mapPattern: 'M5,15 L10,10 L15,12 L20,8 L25,11 L30,7 L35,15',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'enterprise',
      number: '03',
      scale: 'Journey',
      title: 'Geospatial Applications',
      tagline: 'Patterns revealed',
      description: 'Transform complex geospatial data into compelling visual narratives for analysis and decision-making.',
      capabilities: [
        'Interactive AR/XR web apps',
        'Real-time data',
        'Custom algorithms',
        'API integration'
      ],
      cta: {
        primary: 'Start Project',
        secondary: 'Case Studies',
        link: '#contact'

      },
      image: 'bg-[url(./assets/winchester6.png)]',
      mapPattern: 'M5,12 Q15,5 25,12 T45,12',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'experiential',
      number: '04',
      scale: 'Odyssey',
      title: 'Immersive Installations',
      tagline: 'Spaces transformed',
      description: 'Large-scale experiential art bridging digital and physical. From LIDAR galleries to projection mapping.',
      capabilities: [
        'Gallery installations',
        'Projection mapping',
        'LIDAR experiences',
        'Up to 1m² pieces'
      ],
      cta: {
        primary: 'Let\'s Talk',
        secondary: 'Portfolio',
        link: '#contact',

      },
      image: 'bg-[url(./assets/image_1.png)]',
      mapPattern: 'M5,10 L10,8 L15,10 L20,6 L25,10 L30,7 L35,10 L40,8',
      gradient: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            From personal pieces to immersive installations, each tier expands in geographic and technical scope.
          </p>
        </div>

        {/* Compact Service Grid */}
        <div className="space-y-8">
          {serviceTiers.map((tier, index) => (
            <div 
              key={tier.id}
              className="relative group"
              onMouseEnter={() => setHoveredTier(tier.id)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              <div className="grid md:grid-cols-12 gap-6 items-center py-8 border-b border-gray-200">
                {/* Left side - Geospatial Visual */}
                <div className="md:col-span-2">
                  <div className="relative h-32 flex items-center justify-center">
                    {/* Tier number as background */}
                    <span className="absolute text-6xl font-bold text-gray-100 select-none">{tier.number}</span>
                    
                    {/* Map animation overlay */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <svg className="w-full h-20" viewBox="0 0 50 30">
                        {/* Grid pattern */}
                        <defs>
                          <pattern id={`grid-${tier.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#grid-${tier.id})`} />
                        
                        {/* Base map line */}
                        <path
                          d={tier.mapPattern}
                          fill="none"
                          stroke="#d1d5db"
                          strokeWidth="1"
                          className={`transition-all duration-500 ${
                            hoveredTier === tier.id ? 'opacity-100' : 'opacity-30'
                          }`}
                        />
                        
                        {/* Animated points based on scale */}
                        {tier.scale === 'LOCAL' && (
                          <circle cx="25" cy="8" r="3" className={`fill-current ${hoveredTier === tier.id ? 'text-blue-500' : 'text-gray-400'} transition-colors duration-300`}>
                            <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite"/>
                          </circle>
                        )}
                        
                        {tier.scale === 'REGIONAL' && (
                          <>
                            {[10, 20, 30].map((x, i) => (
                              <circle key={i} cx={x} cy={10 - i * 2} r="2" className={`fill-current ${hoveredTier === tier.id ? 'text-indigo-500' : 'text-gray-400'} transition-colors duration-300`}>
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite"/>
                              </circle>
                            ))}
                          </>
                        )}
                        
                        {tier.scale === 'NATIONAL' && (
                          <g>
                            <path
                              d={tier.mapPattern}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              className={`${hoveredTier === tier.id ? 'text-purple-500' : 'text-gray-300'} transition-colors duration-300`}
                              strokeDasharray="5,5"
                            >
                              <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
                            </path>
                          </g>
                        )}
                        
                        {tier.scale === 'GLOBAL' && (
                          <g>
                            {[5, 15, 25, 35].map((x, i) => (
                              <g key={i}>
                                <circle cx={x} cy={10} r="1.5" className={`fill-current ${hoveredTier === tier.id ? 'text-pink-500' : 'text-gray-400'} transition-colors duration-300`}/>
                                <circle cx={x} cy={10} r="5" fill="none" stroke="currentColor" strokeWidth="0.5" className={`${hoveredTier === tier.id ? 'text-pink-300' : 'text-gray-300'} transition-colors duration-300`} opacity="0.5">
                                  <animate attributeName="r" values="5;8;5" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite"/>
                                  <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" begin={`${i * 0.5}s`} repeatCount="indefinite"/>
                                </circle>
                              </g>
                            ))}
                          </g>
                        )}
                      </svg>
                    </div>
                    
                    {/* Scale label */}
                    <span className={`absolute bottom-0 text-xs font-mono tracking-wider text-gray-400`}>
                      {tier.scale}
                    </span>
                  </div>
                </div>

                {/* Middle - Content */}
                <div className="md:col-span-6 space-y-3">
                  <div>
                    <h2 className="text-2xl font-light text-gray-900 mb-1">{tier.title}</h2>
                    <p className={`text-sm font-medium bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent`}>
                      {tier.tagline}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Compact capabilities - 2 column grid */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500">
                    {tier.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-1 h-1 rounded-full bg-gray-400 mr-2"></span>
                        <span>{capability}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3 pt-2">
                    {tier.cta.link ? (
                      <a 
                        href={tier.cta.link}
                        // target="_blank"
                        // rel="noopener noreferrer"
                        className={`rounded-full shadow-xl px-6 py-2 text-sm bg-gradient-to-r ${tier.gradient} text-white font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}
                      >
                        {tier.cta.primary}
                      </a>
                    ) : (
                      <button className={`rounded-full shadow-xl px-6 py-2 text-sm bg-gradient-to-r ${tier.gradient} text-white font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200`}>
                        {tier.cta.primary}
                      </button>
                    )}
                    {/* <button className="rounded-full shadow-xl px-6 py-2 text-sm border border-gray-300 text-gray-700 font-medium hover:border-gray-400 transition-all duration-200">
                      {tier.cta.secondary}
                    </button> */}
                  </div>
                </div>

                {/* Right side - Product Image */}
                <div className="md:col-span-4">
                  <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    {/* Product image with hover zoom */}
                    <div className={`absolute inset-0 ${tier.image} bg-cover bg-center transform transition-transform duration-700 ${hoveredTier === tier.id ? 'scale-110' : 'scale-100'}`}></div>
                    
                    {/* Subtle overlay gradient for better text readability if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Progress indicator in corner */}
                    <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-mono bg-white/90 backdrop-blur-sm text-gray-700 rounded`}>
                      {index + 1}/4
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Bottom CTA */}
        <div className="mt-16 text-center py-12 border-gray-200">
          <p className="text-gray-500 mb-2 text-sm">Not sure where to start?</p>
          <h3 className="text-xl font-light text-gray-900 mb-6">Let's find the right solution together</h3>
        </div>
      </div>
    </section>
  )
}

export default Services