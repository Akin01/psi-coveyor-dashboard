import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className='w-full max-h-fit ml-1 p-10 bg-indigo-900'>{children}</div>
  );
};

export default Layout;
