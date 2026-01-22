import React, { useState, useEffect } from 'react';

// Custom SVG Components for "Graphic" look (No Emojis)
const TeddyBear = ({ color = "currentColor", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2ZM7 5C5.9 5 5 5.9 5 7C5 8.1 5.9 9 7 9C8.1 9 9 8.1 9 7C9 5.9 8.1 5 7 5ZM17 5C15.9 5 15 5.9 15 7C15 8.1 15.9 9 17 9C18.1 9 19 8.1 19 7C19 5.9 18.1 5 17 5ZM12 7C9.24 7 7 9.24 7 12V15C7 16.1 7.9 17 9 17H15C16.1 17 17 16.1 17 15V12C17 9.24 14.76 7 12 7ZM9 17V20C9 21.1 9.9 22 11 22H13C14.1 22 15 21.1 15 20V17H9Z" fillOpacity="0.8"/>
  </svg>
);

const Flower = ({ color = "currentColor", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM6 8C6 6.9 6.9 6 8 6C9.1 6 10 6.9 10 8C10 9.1 9.1 10 8 10C6.9 10 6 9.1 6 8ZM18 8C18 6.9 17.1 6 16 6C14.9 6 14 6.9 14 8C14 9.1 14.9 10 16 10C17.1 10 18 9.1 18 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM8 14C6.9 14 6 14.9 6 16C6 17.1 6.9 18 8 18C9.1 18 10 17.1 10 16C10 14.9 9.1 14 8 14ZM16 14C14.9 14 14 14.9 14 16C14 17.1 14.9 18 16 18C17.1 18 18 17.1 18 16C18 14.9 17.1 14 16 14ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18Z" fillOpacity="0.7"/>
  </svg>
);

const Star = ({ color = "currentColor", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fillOpacity="0.8"/>
  </svg>
);

const Moon = ({ color = "currentColor", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" fillOpacity="0.8"/>
  </svg>
);

const BirthdaySurprise = () => {
  const [revealed, setRevealed] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const [particles, setParticles] = useState([]);

  const BIRTHDAY_PERSON = "Jayuuu";

  useEffect(() => {
    // Night mode: Stars, Moons
    // Day/Initial mode: Teddy Bears, Flowers
    const particleCount = 40;
    
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      const isDay = !isNightMode;
      // Randomly select type
      const type = Math.random() > 0.5 ? 'primary' : 'secondary'; 
      
      return {
        id: i,
        left: Math.random() * 100, // Random horizontal position
        delay: Math.random() * 5,  // Random delay
        duration: 5 + Math.random() * 5, // Fall duration
        size: 16 + Math.random() * 20, // Random size
        type: type,
        isDay: isDay
      };
    });
    
    setParticles(newParticles);
  }, [isNightMode, revealed]);

  const handleReveal = () => {
    setRevealed(true);
    setIsNightMode(true); // Switch to night mode
  };

  const handleReset = () => {
    setRevealed(false);
    setIsNightMode(false);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${
      isNightMode 
        ? 'bg-gradient-to-b from-slate-900 via-indigo-950 to-black' 
        : 'bg-gradient-to-br from-slate-50 via-stone-50 to-slate-100'
    }`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        
        * { font-family: 'Montserrat', sans-serif; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes shimmer { 
           0%, 100% { opacity: 0.3; } 
           50% { opacity: 0.8; } 
        }

        .particle-fall {
          position: absolute;
          top: -10vh;
          animation: fall linear infinite;
          z-index: 1;
        }
        
        .star-bg {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle ease-in-out infinite;
        }

        .elegant-card { 
           background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(250, 249, 246, 0.95)); 
           backdrop-filter: blur(10px); 
           border: 1px solid rgba(139, 117, 90, 0.15); 
           box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04); 
        }
        
        .night-card {
           background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9)); 
           backdrop-filter: blur(10px); 
           border: 1px solid rgba(255, 255, 255, 0.1); 
           box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
        }

        .ornament { 
           font-size: 2rem; 
           color: rgba(184, 134, 11, 0.5); 
           animation: shimmer 3s ease-in-out infinite; 
        }
        
        .divider { 
           height: 1px; 
           background: linear-gradient(to right, transparent, rgba(139, 117, 90, 0.3), transparent); 
           margin: 2rem 0; 
        }
        
        .night-divider {
           background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
        }
      `}</style>

      {/* Background Stars for Night Mode */}
      {isNightMode && Array.from({ length: 100 }).map((_, i) => (
        <div
          key={`star-${i}`}
          className="star-bg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDuration: `${2 + Math.random() * 3}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random()
          }}
        />
      ))}

      {/* Falling Particles (SVGs) */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle-fall"
          style={{
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            filter: isNightMode ? 'drop-shadow(0 0 5px rgba(255,255,255,0.5))' : 'none',
            color: isNightMode ? '#FFD700' : (p.type === 'primary' ? '#8B4513' : '#DB7093') // Gold for night, Brown/Pink for day
          }}
        >
          {p.isDay ? (
            p.type === 'primary' ? <TeddyBear size={p.size} /> : <Flower size={p.size} />
          ) : (
            p.type === 'primary' ? <Star size={p.size} /> : <Moon size={p.size} />
          )}
        </div>
      ))}

      {/* Main Content */}
      <div className="z-20 px-6 py-8 max-w-3xl w-full"> 
         {!revealed ? ( 
           <div className="text-center transition-all duration-700"> 
             <div className="ornament mb-8">✦</div> 
              
             <h1 className="serif text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-wide"> 
               A Moment Awaits 
             </h1> 
              
             <p className="text-slate-600 text-lg mb-10 font-light tracking-wide max-w-md mx-auto leading-relaxed"> 
               Something special has been prepared for you 
             </p> 
              
             <button 
               onClick={handleReveal} 
               className="relative overflow-hidden bg-gradient-to-r from-amber-900 to-yellow-800 text-white px-10 py-4 rounded-sm text-sm font-medium tracking-widest uppercase shadow-lg transition-transform hover:-translate-y-1"
               aria-label="Click to reveal birthday surprise" 
             > 
               <span className="relative z-10">Reveal</span> 
             </button> 
           </div> 
         ) : ( 
           <div className="fade-in-up"> 
             <div className={`rounded-sm p-10 md:p-16 transition-all duration-1000 ${isNightMode ? 'night-card text-slate-200' : 'elegant-card text-slate-800'}`}> 
               {/* Header ornament */} 
                <div className="text-center mb-8"> 
                  <div className="ornament mb-4">✦ ✧ ✦</div> 
                  <h1 className="serif text-6xl md:text-7xl font-light mb-3 tracking-wide"> 
                    Happy Birthday 
                  </h1> 
                  
                  {/* Photo Display */}
                  <div className="relative mx-auto w-64 h-80 mb-6 group">
                    <div className={`absolute inset-0 rounded-xl transform rotate-3 transition-transform duration-700 group-hover:rotate-0 
                      ${isNightMode ? 'bg-white/10' : 'bg-rose-900/10'}`}></div>
                    <img 
                      src={`${import.meta.env.BASE_URL}birthday-photo.jpg`}
                      alt="Birthday Girl" 
                      className={`relative w-full h-full object-cover rounded-xl shadow-2xl border-4 transform -rotate-3 transition-transform duration-700 group-hover:rotate-0
                        ${isNightMode ? 'border-amber-200/50' : 'border-white'}`}
                    />
                    {/* Corner accents for the photo */}
                    <div className="absolute -top-2 -left-2 text-2xl opacity-80">✨</div>
                    <div className="absolute -bottom-2 -right-2 text-2xl opacity-80">✨</div>
                  </div>

                  <p className={`serif text-3xl md:text-4xl font-light italic tracking-wide ${isNightMode ? 'text-amber-200' : 'text-amber-800'}`}> 
                    {BIRTHDAY_PERSON} 
                  </p> 
                </div> 
                
               <div className={`divider ${isNightMode ? 'night-divider' : ''}`}></div> 
                
               {/* Main message */} 
               <div className={`space-y-6 mb-8 leading-relaxed ${isNightMode ? 'text-slate-300' : 'text-slate-700'}`}> 
                 <p className="text-lg md:text-xl font-light text-center max-w-2xl mx-auto"> 
                   On this distinguished day, we celebrate not merely the passage of time,  
                   but the grace and character you bring to each moment. 
                 </p> 
                  
                 <p className="text-base md:text-lg font-light text-center max-w-xl mx-auto"> 
                   May this year unfold with elegance and purpose, bringing you refined joys,  
                   meaningful connections, and the fulfillment of your most cherished aspirations. 
                 </p> 
                  
                 <p className={`text-base md:text-lg font-light text-center max-w-xl mx-auto italic ${isNightMode ? 'text-slate-400' : 'text-slate-600'}`}> 
                   Your presence enriches the world with beauty and wisdom.  
                   Today, I honor you. 
                 </p> 
               </div> 
                
               <div className={`divider ${isNightMode ? 'night-divider' : ''}`}></div> 
                
               {/* Footer */} 
               <div className="text-center"> 
                 <p className={`serif text-xl mb-8 font-light italic tracking-wide ${isNightMode ? 'text-amber-200' : 'text-amber-900'}`}> 
                   With warmest regards & finest wishes <br/>
                   <span className="text-base mt-2 block not-italic font-normal tracking-widest uppercase opacity-80">— Abhishek Jaiswal</span>
                 </p> 
                  
                 <button 
                   onClick={handleReset} 
                   className={`border-2 px-8 py-3 rounded-sm text-xs font-medium tracking-widest uppercase transition-colors
                     ${isNightMode 
                        ? 'border-slate-500 text-slate-300 hover:border-slate-300 hover:text-white' 
                        : 'border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-900'
                     }`} 
                   aria-label="Reset to see the surprise again" 
                 > 
                   <span className="relative z-10">Experience Once More</span> 
                 </button> 
               </div> 
                
               {/* Bottom ornament */} 
               <div className="text-center mt-8"> 
                 <div className="ornament">✦</div> 
               </div> 
             </div> 
           </div> 
         )} 
       </div> 
    </div>
  );
};

export default BirthdaySurprise;
