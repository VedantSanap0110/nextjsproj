import React from 'react';

function OurSystem() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Background Design Elements - Circles */}
      <div className="absolute right-0 bottom-0 w-64 md:w-96 h-64 md:h-96 rounded-full bg-neutral-800/30"></div>
      <div className="absolute left-0 bottom-0 w-40 md:w-64 h-40 md:h-64 rounded-full bg-neutral-800/20 -translate-x-1/2"></div>
      
      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Our System Tag */}
        <div className="mb-6 md:mb-8">
          <div className="bg-purple-500 px-4 md:px-6 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium inline-block">
            OUR SYSTEM
          </div>
        </div>
        
        {/* Main Content - Flex column on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Text Content */}
          <div className="w-full lg:max-w-3xl mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Turn 1 Hour of Recording into a Month`&apos;`s 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"> Worth </span>
              of Content!
            </h1>
            
            {/* Description */}
            <p className="text-neutral-400 mt-6 md:mt-8 text-base md:text-lg max-w-2xl">
              1 hour of video recording turns into → 5-7 short-form videos for Instagram, YT shorts, and LinkedIn, which can further translate into an audio podcast and a weekly newsletter.
            </p>
          </div>
          
          {/* Social Media Wheel - Centered on mobile, positioned right on desktop */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:mr-10 xl:mr-24">
            {/* Spinning Container - Only the icons spin, not the center text */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto">
              {/* Semi-transparent circle tracks */}
              <div className="absolute inset-0 rounded-full border-4 border-neutral-800/30"></div>
              
              {/* Social Media Icons - These will spin */}
              <div className="absolute inset-0 animate-spin-slow">
                {/* Spotify */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-green-500 p-2 md:p-3 rounded-xl">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.36.12-.75-.12-.87-.48-.12-.36.12-.75.48-.87 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.331 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.24-1.98-8.16-2.58-11.939-1.38-.479.12-.9-.12-1.02-.6-.12-.48.12-.9.6-1.02C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Instagram */}
                <div className="absolute top-1/4 right-0 translate-x-1/2">
                  <div className="bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 p-1 md:p-2 rounded-xl">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                    </svg>
                  </div>
                </div>
                
                {/* YouTube */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="bg-red-600 p-1 md:p-2 rounded-xl">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Podcast/Apple Podcast */}
                <div className="absolute bottom-1/4 left-0 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-400 p-1 md:p-2 rounded-xl">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.008 2.864a8.627 8.627 0 01-3.24 5.773c-.59.506-1.902 1.323-2.792 1.738-1.451.675-3.416 1.046-4.712.887-2.473-.304-4.196-1.2-5.814-3.016C2.37 16.32 1.89 14.97 1.68 13.164c-.096-.807-.084-2.537.024-3.332.56-4.176 3.24-7.291 7.331-8.512 1.225-.366 2.845-.51 4.064-.391.279.024.538.06.762.12zm-.106 1.586l-.526.024c-1.994.096-3.728.77-5.054 1.962-1.09.978-1.738 1.962-2.226 3.416-.366 1.08-.483 1.85-.483 3.132 0 1.187.072 1.687.366 2.555.847 2.507 2.588 4.392 4.904 5.31.977.387 1.686.53 2.983.59 1.533.072 3.144-.318 4.537-1.106a8.48 8.48 0 001.83-1.309c2.099-1.926 3.06-4.439 2.724-7.123-.295-2.394-1.438-4.308-3.416-5.722-1.58-1.13-3.998-1.75-5.639-1.73zm.095 2.22c.32 0 .593.024.774.06 1.845.356 3.595 1.954 4.308 3.923.366 1.002.483 2.311.318 3.34-.178 1.118-.65 2.172-1.367 3.084a6.008 6.008 0 01-4.664 2.226c-1.335.024-2.328-.246-3.477-.91-1.914-1.106-3.084-2.935-3.45-5.343-.07-.485-.07-1.51 0-1.995.248-1.618.994-3.073 2.148-4.165.663-.63 1.657-1.224 2.507-1.494.606-.194 1.358-.295 2.148-.319.088-.028.437-.407.755-.407zm.19 1.714a.422.422 0 00-.418.425v.012l.007 7.284a.417.417 0 00.216.366.422.422 0 00.431-.07l5.42-3.636a.42.42 0 00.074-.583.419.419 0 00-.074-.073l-5.42-3.636a.418.418 0 00-.236-.09z"/>
                    </svg>
                  </div>
                </div>
                
                {/* TikTok */}
                <div className="absolute left-1/4 top-0 -translate-y-1/2">
                  <div className="bg-black p-1 rounded-xl border-2 border-white">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="absolute right-1/4 bottom-1/4">
                  <div className="bg-blue-600 p-1 md:p-2 rounded-xl">
                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="white">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Center Circle - This will NOT rotate */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 bg-neutral-900/80 rounded-full flex flex-col items-center justify-center border-2 border-neutral-700">
                <div className="text-xl md:text-2xl font-bold text-white">5-7</div>
                <div className="text-sm md:text-lg text-white mt-1">Short videos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add custom animation to your CSS or in a style tag
const styles = `
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
`;

function OurSystemWithStyles() {
  return (
    <>
      <style>{styles}</style>
      <OurSystem />
    </>
  );
}

export default OurSystemWithStyles;