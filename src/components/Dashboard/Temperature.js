import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperature0 } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '@iconify/react';

const Temperature = ({ value }) => {
  return (
    <>
      <div className={'text-5xl text-white -ml-64 mt-5 -mb-3'}>
        <FontAwesomeIcon icon={faTemperature0} />
      </div>
      <div className='flex justify-center items-center'>
        <div className='text-white text-8xl'>{value}</div>
        <div className={'text-8xl text-white -ml-7 -mt-4'}>
          <Icon icon='wi:celsius' />
        </div>
      </div>
      <div className='text-white text-sm mt-3 ml-40'>*Room Temperature</div>
    </>
  );
};

export default Temperature;
