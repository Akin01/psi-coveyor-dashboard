import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuIcon,
  XIcon,
  ServerIcon,
  DocumentReportIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline';

const Navigator = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className={
        nav ? 'w-40 h-screen bg-indigo-900' : 'w-13 h-screen bg-indigo-900 '
      }
      onClick={handleClick}
    >
      {!nav ? (
        <MenuIcon className='m-4 pt-1 w-5 text-white' />
      ) : (
        <XIcon className='m-4 pt-1 w-5 text-white' />
      )}

      <ul className='p-2'>
        <Link to='/'>
          <div className='text-white text-sm flex gap-x-2 p-2 hover:bg-indigo-500 rounded-md'>
            <ServerIcon className='w-5' />
            <span className={!nav ? 'hidden' : 'origin-left'}>Dashboard</span>
          </div>
        </Link>
        <Link to='/report'>
          <div className='text-white text-sm flex gap-x-2 p-2 hover:bg-indigo-500 rounded-md'>
            <DocumentReportIcon className='w-5' />
            <span className={!nav ? 'hidden' : 'origin-left'}>Report</span>
          </div>
        </Link>
        <Link to='/about'>
          <div className='text-white text-sm flex gap-x-2 p-2 hover:bg-indigo-500 rounded-md'>
            <InformationCircleIcon className='w-5' />
            <span className={!nav ? 'hidden' : 'origin-left'}>About</span>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Navigator;
