import React from 'react'

const Url = () => {
  return (
    <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Personal Website
          </label>
          <input
            type="url"
            placeholder="https://example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-sm text-gray-800"
          />
        </div>
  )
}

export default Url
