import React from 'react'

const TextFields = () => {
  return (
<>
 <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-sm text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-sm text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="farazhaidet786@gmail.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-sm text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-sm text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-sm text-gray-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-sm text-gray-800"
          />
        </div>
</>
)
}

export default TextFields
