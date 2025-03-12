import React from 'react';

function Information() {
  return (
    <div id='information' className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 text-white min-h-screen py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-neutral-800/50 -translate-x-1/2"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-neutral-800/50 translate-x-1/3 translate-y-1/3"></div>
      
      {/* Content Container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* What We Do Tag */}
        <div className="flex justify-center mb-12">
          <div className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium">
            WHAT WE DO
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Influence </span> 
            your audience on 
            <br />
            every  
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500"> platform</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-neutral-400 mt-8 max-w-2xl mx-auto text-center">
            We build content engines fueled by long-form videos
            <br />
            (Podcasts, Interviews, YouTube videos etc), so
          </p>
        </div>
        
        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-neutral-900 p-8 rounded-xl">
            <div className="bg-neutral-800 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <div className="text-amber-500 w-16 h-16 rounded-full border-2 border-amber-500 flex items-center justify-center">
                <span className="text-2xl">→</span>
              </div>
            </div>
            <p className="text-white text-lg">
              You can spend less time marketing and more time innovating
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-neutral-900 p-8 rounded-xl">
            <div className="bg-neutral-800 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <div className="text-amber-500 w-16 h-16 rounded-full border-2 border-amber-500 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
            </div>
            <p className="text-white text-lg">
              Get your content in front of more people in ways they like to consume it
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-neutral-900 p-8 rounded-xl">
            <div className="bg-neutral-800 w-20 h-20 rounded-full flex items-center justify-center mb-6">
              <div className="text-amber-500 w-12 h-12 rounded-md border-2 border-amber-500"></div>
            </div>
            <p className="text-white text-lg">
              Strengthen your brand, and grab bigger opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;