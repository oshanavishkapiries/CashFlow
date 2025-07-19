import React from 'react'

const MobileLayouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-full max-w-lg mx-auto min-h-screen'>{children}</div>
  )
}

export default MobileLayouts