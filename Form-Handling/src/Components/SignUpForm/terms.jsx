import React from 'react'

const Terms = () => {
  return (
          <div className="pt-2">
        <label className="flex items-start text-sm text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <span className="ml-2 text-xs text-gray-500">
            I agree to the{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            and Privacy Policy.
          </span>
        </label>
      </div>
  )
}

export default Terms
