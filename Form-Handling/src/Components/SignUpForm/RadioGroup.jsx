import React from 'react'

const RadioGroup = () => {
  return (
      <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Gender
          </label>
          <div className="flex items-center space-x-4 py-1.5">
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="radio"
                name="gender"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="radio"
                name="gender"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="radio"
                name="gender"
                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
        </div>
  )
}

export default RadioGroup
