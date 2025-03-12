import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top section: Logo, contact info and navigation */}
        <div className="flex flex-col md:flex-row justify-between mb-16">
          {/* Logo and contact information */}
          <div className="mb-8 md:mb-0">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold mr-2"></span>
              <span className="text-2xl font-bold">CONTENT FLOWW</span>
            </div>
            
            {/* Company info and contact details */}
            <p className="text-sm text-gray-300 mb-3">Escapo Marketing</p>
            
            <p className="text-sm text-gray-300 mb-3">
              28/4, opposite all india radio, Gandhinagar,<br />
              Chittorgarh, Rajasthan (312001)
            </p>
            
            <p className="text-sm text-gray-300 mb-3">
              Email: <a href="mailto:akshat@contentfloww.com" className="hover:text-white">akshat@contentfloww.com</a>
            </p>
            
            <p className="text-sm text-gray-300">
              Number: <a href="tel:+918209790726" className="hover:text-white">+91 8209790726</a>
            </p>
          </div>
          
          {/* Navigation links */}
          <div className="flex items-center">
            <nav className="flex flex-wrap mr-8">
              <a href="#services" className="mr-6 mb-2 hover:text-gray-300">Services</a>
              <a href="#benefits" className="mr-6 mb-2 hover:text-gray-300">Benefits</a>
              <a href="#process" className="mr-6 mb-2 hover:text-gray-300">Process</a>
              <a href="#testimonials" className="hover:text-gray-300">Testimonials</a>
            </nav>
            
            {/* Social media icons */}
            <div className="flex items-center">
              <a href="#" className="mr-3">
                <div className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="mr-3">
                <div className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider line */}
        <div className="border-t border-neutral-800 mb-6"></div>
        
        {/* Bottom section: Copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div>
            © 2024 ContentFloww. All rights reserved.
          </div>
          
          <div className="flex flex-wrap mt-4 md:mt-0">
            <a href="#privacy" className="hover:text-white mr-8">Privacy Policy</a>
            <a href="#terms" className="hover:text-white mr-8">Terms of Service</a>
            <a href="#refund" className="hover:text-white mr-8">Refund Policy</a>
            <div className="flex items-center">
              Made with 
              <svg className="w-4 h-4 mx-1 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              by 
              <span className="text-yellow-500 ml-1">Missing Piece Studio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;