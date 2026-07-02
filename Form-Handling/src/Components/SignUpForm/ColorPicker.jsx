import React from 'react'

const ColorPicker = () => {
  return (
            <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Favorite Color
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="color"
              value="#4f46e5"
              className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer p-0.5 bg-white"
            />
            <span className="text-sm text-gray-500">Pick a color theme</span>
          </div>
        </div>
  )
}

export default ColorPicker
