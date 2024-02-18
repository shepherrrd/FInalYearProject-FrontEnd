import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className='bg-white absolute h-16 w-full flex justify-between'>
       {children}
    </div>
  );
};

export function HeaderName({ text }: { text: string }) {
  return (
    <h2 className='ml-2 mt-3 text-2xl text-white'>{text}</h2>
  );
}

export default Header;
