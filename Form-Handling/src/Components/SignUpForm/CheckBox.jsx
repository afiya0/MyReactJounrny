import React from 'react'

const CheckBox = () => {
  return (
     <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Skills
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2">UI/UX Design</span>
            </label>
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2">Frontend</span>
            </label>
            <label className="flex items-center text-sm text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <span className="ml-2">Backend</span>
            </label>
          </div>
        </div>
  )
}

export default CheckBox
