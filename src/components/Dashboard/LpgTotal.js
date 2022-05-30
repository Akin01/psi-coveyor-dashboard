import React from 'react';
import { Icon } from '@iconify/react';

const LpgTotal = ({ value }) => {
  return (
    <>
      <div className={'text-6xl text-white -ml-64'}>
        <Icon icon='mdi:gas-cylinder' />
      </div>
      <div className='flex justify-center items-center'>
        <div className='text-white text-8xl'>{value}</div>
        <div className='text-white text-lg -mt-10 ml-2'>LPG</div>
      </div>
      <div className='text-white text-sm mt-2 ml-48'>*Total of Gas</div>
    </>
  );
};

export default LpgTotal;
