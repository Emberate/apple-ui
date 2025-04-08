import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">Store</a>
              <a href="#" className="text-gray-300 hover:text-white">Mac</a>
              <a href="#" className="text-gray-300 hover:text-white">iPad</a>
              <a href="#" className="text-gray-300 hover:text-white">iPhone</a>
              <a href="#" className="text-gray-300 hover:text-white">Watch</a>
              <a href="#" className="text-gray-300 hover:text-white">AirPods</a>
              <a href="#" className="text-gray-300 hover:text-white">TV & Home</a>
              <a href="#" className="text-gray-300 hover:text-white">Only on Apple</a>
              <a href="#" className="text-gray-300 hover:text-white">Accessories</a>
              <a href="#" className="text-gray-300 hover:text-white">Support</a>
            </div>
            <div>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-black text-white text-center py-16">
        <h1 className="text-5xl font-bold mb-4">iPhone 14 Pro</h1>
        <h2 className="text-2xl mb-6">Pro. Beyond.</h2>
        <div className="flex justify-center space-x-6 text-blue-500">
          <a href="#" className="hover:underline">Learn more &gt;</a>
          <a href="#" className="hover:underline">Buy &gt;</a>
        </div>
        <div className="mt-8">
          <img 
            src="https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg" 
            alt="iPhone 14 Pro" 
            className="mx-auto w-full max-w-4xl"
          />
        </div>
      </div>

      {/* Secondary Promo */}
      <div className="bg-gray-100 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">iPhone 14</h1>
        <h2 className="text-xl mb-6">Big and bigger.</h2>
        <div className="flex justify-center space-x-6 text-blue-500">
          <a href="#" className="hover:underline">Learn more &gt;</a>
          <a href="#" className="hover:underline">Buy &gt;</a>
        </div>
        <div className="mt-8">
          <img 
            src="https://www.apple.com/v/iphone-14/c/images/overview/hero/hero_iphone_14__fjmsqstr1ceq_large.jpg" 
            alt="iPhone 14" 
            className="mx-auto w-full max-w-4xl"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">iPad</h3>
          <p className="text-gray-600 mb-4">Lovable. Drawable. Magical.</p>
          <a href="#" className="text-blue-500 hover:underline">Learn more &gt;</a>
          <img 
            src="https://www.apple.com/v/ipad/home/bo/images/overview/hero/ipad__bsnuh0fqeveq_large.jpg" 
            alt="iPad" 
            className="mt-4 mx-auto"
          />
        </div>
        
        <div className="bg-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">MacBook Air</h3>
          <p className="text-gray-600 mb-4">Supercharged by M2.</p>
          <a href="#" className="text-blue-500 hover:underline">Learn more &gt;</a>
          <img 
            src="https://www.apple.com/v/macbook-air/m/images/overview/hero/hero_macbook_air__f0f0vsr4lueq_large.jpg" 
            alt="MacBook Air" 
            className="mt-4 mx-auto"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-b border-gray-300 pb-4 mb-4">
            <p className="text-xs text-gray-600">
              1. iPhone 14 Pro and iPhone 14 Pro Max are subject to FCC rules as well as other applicable regulations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs text-gray-600">
            <div>
              <h4 className="font-semibold mb-2">Shop and Learn</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Store</a></li>
                <li><a href="#" className="hover:underline">Mac</a></li>
                <li><a href="#" className="hover:underline">iPad</a></li>
                <li><a href="#" className="hover:underline">iPhone</a></li>
                <li><a href="#" className="hover:underline">Watch</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Services</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Apple Music</a></li>
                <li><a href="#" className="hover:underline">Apple TV+</a></li>
                <li><a href="#" className="hover:underline">Apple Fitness+</a></li>
                <li><a href="#" className="hover:underline">iCloud</a></li>
                <li><a href="#" className="hover:underline">Apple One</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Apple Store</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Find a Store</a></li>
                <li><a href="#" className="hover:underline">Genius Bar</a></li>
                <li><a href="#" className="hover:underline">Today at Apple</a></li>
                <li><a href="#" className="hover:underline">Apple Camp</a></li>
                <li><a href="#" className="hover:underline">Apple Store App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">For Business</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Apple and Business</a></li>
                <li><a href="#" className="hover:underline">Shop for Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Apple Values</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Accessibility</a></li>
                <li><a href="#" className="hover:underline">Environment</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Supplier Responsibility</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs text-gray-600">
            <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;