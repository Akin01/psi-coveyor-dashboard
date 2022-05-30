import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleStop, faRotate } from '@fortawesome/free-solid-svg-icons';

const Process = ({ isStop }) => {
  return (
    <>
      <div className='text-white text-2xl font-bold font-mono'>Process</div>
      <div className={'text-7xl mt-3 text-white drop-shadow-md'}>
        {Number(isStop) ? (
          <FontAwesomeIcon icon={faCircleStop} />
        ) : (
          <FontAwesomeIcon icon={faRotate} />
        )}
      </div>
      <div
        className={`text-white text-md mt-5 font-mono py-1 px-6 ${
          Number(isStop) ? 'bg-red-600' : 'bg-green-600'
        } font-semibold rounded-lg drop-shadow-md`}
      >
        {Number(isStop) ? 'Stop' : 'Running'}
      </div>
    </>
  );
};

export default Process;
