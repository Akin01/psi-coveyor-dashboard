import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWeightScale } from '@fortawesome/free-solid-svg-icons';

const Mass = ({ value }) => {
  return (
    <>
      <div className={'text-5xl text-white -ml-52'}>
        <FontAwesomeIcon icon={faWeightScale} />
      </div>
      <div className='-mt-2 flex justify-center items-center'>
        <div className='text-white text-8xl'>{value}</div>
        <div className='text-white text-lg -mt-10 ml-2'>Gram</div>
      </div>
      <div className='text-white text-sm mt-2 ml-40'>*Mass of LPG</div>
    </>
  );
};

export default Mass;
