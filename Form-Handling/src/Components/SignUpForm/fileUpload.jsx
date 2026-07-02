import React from 'react'

const FileUpload = () => {
  return (
      <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">
            Profile Picture
          </label>
          <input
            type="file"
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
          />
        </div>
  )
}

export default FileUpload
