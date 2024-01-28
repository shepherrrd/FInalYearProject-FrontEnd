import React from 'react'

const Header = ({ children }) => {
  return (
    <div className='bg-white absolute h-16 w-full flex justify-between'>
       {children}
    </div>
  )
}

export function HeaderName({ text }) {
  return (
    <h2 className='ml-2 mt-3 text-2xl'>{text}</h2>
  );
}
export default Header