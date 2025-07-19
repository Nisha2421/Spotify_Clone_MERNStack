import React from 'react'

export const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-no-repeat bg-cover">
        <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-screen bg-gray-500 bg-slate-900/40 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-24 w-24 border-[10px] border-t-blue-500 border-solid" />
          <p className="text-5xl font-semibold text-white">loading...</p>
        </div>{" "}
      </div>
  )
}
