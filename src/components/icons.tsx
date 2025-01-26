import React from 'react'

const icons = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <img
                src="/cameras.png"
                alt="Camera"
                className="w-12 h-10 object-contain"
              />
              <span className="text-white mt-2">Camera</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/cameras.png"
                alt="AI Power"
                className="w-12 h-10 object-contain"
              />
              <span className="text-white mt-2">AI Power</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/cameras.png"
                alt="Smart Monitoring"
                className="w-12 h-10 object-contain"
              />
              <span className="text-white mt-2">Smart Monitoring</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/cameras.png"
                alt="Surveillance"
                className="w-12 h-10 object-contain"
              />
              <span className="text-white mt-2">Surveillance</span>
            </div>
          </div>    
  )
}

export default icons
