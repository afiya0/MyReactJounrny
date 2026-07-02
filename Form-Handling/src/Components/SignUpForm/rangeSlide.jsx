import React from 'react'

const RangeSlide = () => {
  return (
    <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Experience Level (Years)
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="10"
              value="3"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
          </div>
        </div>
  )
}

export default RangeSlide
