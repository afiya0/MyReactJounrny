import React from 'react'
import Inputs from './inputs'

const Form = () => {
  return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 md:p-8 font-sans">
  <div className="bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
    
    <div className="lg:col-span-4 bg-gradient-to-tr from-indigo-900 via-purple-700 to-sky-300 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden min-h-[300px] lg:min-h-full">
      <div className="text-white text-4xl font-light opacity-90 select-none">ï¼Š</div>
      
      <div className="relative z-10 space-y-3">
        <p className="text-white/80 text-sm font-medium tracking-wide">You can easily</p>
        <h1 className="text-white text-2xl md:text-3xl font-semibold leading-tight">
          Get access your personal hub for clarity and productivity
        </h1>
      </div>

      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none"></div>
    </div>

    <div className="lg:col-span-8 p-6 sm:p-10 md:p-12 flex flex-col justify-center">
      <div className="mb-8">
        <div className="text-indigo-600 text-2xl font-bold mb-2">ï¼Š</div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Create an account</h2>
        <p className="text-gray-500 text-sm mt-1">Access your tasks, notes, and projects anytime, anywhere - and keep everything flowing in one place.</p>
      </div>

<Inputs/>

      <div className="relative flex py-4 items-center mt-4">
        <div className="flex-grow border-t border-gray-200"></div>
        <span className="flex-shrink mx-4 text-gray-400 text-xs tracking-wider uppercase">or continue with</span>
        <div className="flex-grow border-t border-gray-200"></div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button className="flex justify-center items-center py-2 px-4 border border-gray-100 bg-gray-50 rounded-xl hover:bg-gray-100 transition text-xs font-semibold text-gray-700">Be</button>
        <button className="flex justify-center items-center py-2 px-4 border border-gray-100 bg-gray-50 rounded-xl hover:bg-gray-100 transition text-xs font-semibold text-gray-700">G</button>
        <button className="flex justify-center items-center py-2 px-4 border border-gray-100 bg-gray-50 rounded-xl hover:bg-gray-100 transition text-xs font-semibold text-gray-700">f</button>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        Don't have an account? <a href="#" className="text-indigo-600 font-semibold hover:underline">Sign up</a>
      </p>
    </div>

  </div>
</div>
  )
}

export default Form
