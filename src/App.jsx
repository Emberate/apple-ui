import React from 'react';

const App = () => {
  // Product data for easier management
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      tagline: "Pro. Beyond.",
      links: ["Learn more", "Buy"],
      imageUrl: "https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      id: 2,
      name: "iPhone 14",
      tagline: "Big and bigger.",
      links: ["Learn more", "Buy"],
      imageUrl: "https://www.apple.com/v/iphone-14/c/images/overview/hero/hero_iphone_14__fjmsqstr1ceq_large.jpg",
      bgColor: "bg-gray-100",
      textColor: "text-black"
    },
    {
      id: 3,
      name: "iPad",
      tagline: "Lovable. Drawable. Magical.",
      links: ["Learn more", "Buy"],
      imageUrl: "https://www.apple.com/v/ipad/home/bo/images/overview/hero/ipad__bsnuh0fqeveq_large.jpg",
      bgColor: "bg-white",
      textColor: "text-black"
    },
    {
      id: 4,
      name: "MacBook Air",
      tagline: "Supercharged by M2.",
      links: ["Learn more", "Buy"],
      imageUrl: "https://www.apple.com/v/macbook-air/m/images/overview/hero/hero_macbook_air__f0f0vsr4lueq_large.jpg",
      bgColor: "bg-white",
      textColor: "text-black"
    }
  ];

  const navItems = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Only on Apple", "Accessories", "Support"];

  return (
    <div className="min-h-screen antialiased text-gray-900">
      {/* Navigation Bar - Responsive with mobile menu */}
      <nav className="bg-gray-900 text-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Mobile menu button (hidden on larger screens) */}
            <div className="flex items-center md:hidden">
              <button className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            
            {/* Apple logo - centered on mobile */}
            <div className="flex-shrink-0 flex items-center md:mr-6">
              <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            
            {/* Desktop navigation (hidden on mobile) */}
            <div className="hidden md:flex md:items-center md:space-x-4 flex-1 justify-center">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="px-2 py-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
            
            {/* Search and cart icons */}
            <div className="flex items-center space-x-4">
              <button className="p-1 text-gray-300 hover:text-white focus:outline-none">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-1 text-gray-300 hover:text-white focus:outline-none">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Sections */}
      <main className="overflow-hidden">
        {/* Featured Product */}
        <section className={`${products[0].bgColor} ${products[0].textColor} text-center py-10 md:py-16`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{products[0].name}</h1>
            <h2 className="text-xl md:text-2xl mb-6">{products[0].tagline}</h2>
            <div className="flex justify-center space-x-6 text-blue-500">
              {products[0].links.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-sm md:text-base hover:underline flex items-center"
                >
                  {link} <span className="ml-1 text-lg">›</span>
                </a>
              ))}
            </div>
            <div className="mt-8 md:mt-12">
              <img 
                src={products[0].imageUrl} 
                alt={products[0].name} 
                className="mx-auto w-full max-w-5xl object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Secondary Products */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.slice(1).map((product) => (
            <div 
              key={product.id} 
              className={`${product.bgColor} ${product.textColor} text-center py-10 md:py-12 rounded-lg mb-4 md:mb-0`}
            >
              <div className="max-w-md mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h3>
                <p className="text-lg md:text-xl mb-6">{product.tagline}</p>
                <div className="flex justify-center space-x-6 text-blue-500">
                  {product.links.map((link, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="text-sm md:text-base hover:underline flex items-center"
                    >
                      {link} <span className="ml-1 text-lg">›</span>
                    </a>
                  ))}
                </div>
                <div className="mt-8">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="mx-auto w-full max-w-md object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Legal disclaimer */}
          <div className="border-b border-gray-300 pb-4 mb-6">
            <p className="text-xs text-gray-600">
              1. iPhone 14 Pro and iPhone 14 Pro Max are subject to FCC rules as well as other applicable regulations.
              <br />
              Representative example: When you select iPhone 14 Pro 128GB with carrier connection at $999.00 before trade-in, you'll pay $999.00 or $41.62/mo. per month for 24 mo. before trade‑in.
            </p>
          </div>
          
          {/* Footer links */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                title: "Shop and Learn",
                links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"]
              },
              {
                title: "Services",
                links: ["Apple Music", "Apple TV+", "Apple Fitness+", "Apple News+", "Apple Arcade", "iCloud", "Apple One", "Apple Card", "Apple Books"]
              },
              {
                title: "Apple Store",
                links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Refurbished and Clearance", "Financing", "Apple Trade In", "Order Status", "Shopping Help"]
              },
              {
                title: "For Business",
                links: ["Apple and Business", "Shop for Business"]
              },
              {
                title: "Apple Values",
                links: ["Accessibility", "Education", "Environment", "Privacy", "Supplier Responsibility"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-xs text-gray-600 hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Bottom footer */}
          <div className="mt-8 pt-6 border-t border-gray-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <p className="text-xs text-gray-600 mb-4 md:mb-0">
                More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
              </p>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-xs text-gray-600">
                <span>Copyright © 2023 Apple Inc. All rights reserved.</span>
                <div className="hidden md:block">|</div>
                <a href="#" className="hover:underline">Privacy Policy</a>
                <div className="hidden md:block">|</div>
                <a href="#" className="hover:underline">Terms of Use</a>
                <div className="hidden md:block">|</div>
                <a href="#" className="hover:underline">Sales and Refunds</a>
                <div className="hidden md:block">|</div>
                <a href="#" className="hover:underline">Legal</a>
                <div className="hidden md:block">|</div>
                <a href="#" className="hover:underline">Site Map</a>
              </div>
              <a href="#" className="text-xs text-gray-600 hover:underline mt-4 md:mt-0">United States</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;