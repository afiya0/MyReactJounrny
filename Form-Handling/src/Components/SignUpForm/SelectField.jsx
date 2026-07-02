import React from 'react'

const SelectField = () => {
  return (
     <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Country
          </label>
          <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-sm text-gray-800 bg-white">
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="PK">Pakistan</option>
            <option value="UK">United Kingdom</option>
          </select>
        </div>
  )
}

export default SelectField
