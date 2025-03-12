import React from "react";

function SubscriptionForm() {
  return (
    <div className="h-96 md:h-[30rem]  bg-black relative flex items-center w-full justify-center overflow-hidden">
      <div className="w-full max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 text-white rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Want to know, how we do it?</h2>
            <p className="text-lg">Join our free lists of guides, templates & insights.</p>
          </div>
          
          {/* Right side - Form */}
          <div className="md:w-1/2 w-full">
            <div className="flex flex-col gap-4 w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-4 rounded-full bg-white text-black"
              />
              <button 
                className="w-full p-4 rounded-full bg-amber-300 text-black font-medium hover:bg-amber-400 transition-colors"
              >
                Subscribe
              </button>
              <p className="text-sm text-center text-neutral-400">
                (Check your inbox after you subscribe)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionForm;