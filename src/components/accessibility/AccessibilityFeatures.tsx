"use client";

import React from 'react';

interface AccessibilityFeaturesProps {
  children: React.ReactNode;
}

const AccessibilityFeatures: React.FC<AccessibilityFeaturesProps> = ({ children }) => {
  const [fontSize, setFontSize] = React.useState(16);
  const [highContrast, setHighContrast] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);

  // Apply font size to the document
  React.useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Apply high contrast mode
  React.useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  // Apply reduced motion
  React.useEffect(() => {
    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }, [reducedMotion]);

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
    }
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  const toggleReducedMotion = () => {
    setReducedMotion(!reducedMotion);
  };

  return (
    <>
      <div className="accessibility-controls fixed bottom-4 right-4 z-50">
        <button
          onClick={() => {
            const controls = document.getElementById('accessibility-panel');
            if (controls) {
              controls.classList.toggle('hidden');
            }
          }}
          className="bg-earth-green text-white p-3 rounded-full shadow-lg"
          aria-label="Accessibility Options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v8"></path>
            <path d="M8 12h8"></path>
          </svg>
        </button>

        <div id="accessibility-panel" className="hidden bg-white p-4 rounded-lg shadow-lg mt-2 border">
          <h3 className="text-lg font-bold mb-2">Accessibility Options</h3>
          
          <div className="mb-4">
            <p className="mb-2">Text Size</p>
            <div className="flex space-x-2">
              <button
                onClick={decreaseFontSize}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                aria-label="Decrease Font Size"
              >
                A-
              </button>
              <button
                onClick={resetFontSize}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                aria-label="Reset Font Size"
              >
                Reset
              </button>
              <button
                onClick={increaseFontSize}
                className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded"
                aria-label="Increase Font Size"
              >
                A+
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={highContrast}
                onChange={toggleHighContrast}
                className="sr-only"
              />
              <div className={`relative inline-block w-10 h-6 rounded-full transition-colors ${highContrast ? 'bg-earth-green' : 'bg-gray-300'} mr-2`}>
                <span className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform ${highContrast ? 'transform translate-x-4' : ''}`}></span>
              </div>
              High Contrast Mode
            </label>
          </div>

          <div className="mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={reducedMotion}
                onChange={toggleReducedMotion}
                className="sr-only"
              />
              <div className={`relative inline-block w-10 h-6 rounded-full transition-colors ${reducedMotion ? 'bg-earth-green' : 'bg-gray-300'} mr-2`}>
                <span className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white transition-transform ${reducedMotion ? 'transform translate-x-4' : ''}`}></span>
              </div>
              Reduced Motion
            </label>
          </div>
        </div>
      </div>

      {/* Add global styles for high contrast and reduced motion */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(1.5);
        }
        
        .high-contrast body {
          background-color: black;
          color: white;
        }
        
        .high-contrast a {
          color: yellow;
        }
        
        .high-contrast button {
          border: 2px solid white;
        }
        
        .reduced-motion * {
          animation-duration: 0.001ms !important;
          transition-duration: 0.001ms !important;
        }
      `}</style>

      {children}
    </>
  );
};

export default AccessibilityFeatures;
