import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVial } from '@fortawesome/free-solid-svg-icons';

const Sample = ({ mass, isGas, lpgTotal, numberOfSample }) => {
  const [isPassed, setIsPassed] = useState(true);

  useEffect(() => {
    if ((mass < 190 && mass > 210) || isGas) {
      setIsPassed(false);
    } else {
      setIsPassed(true);
    }
  }, [mass, isGas]);

  return (
    <>
      {lpgTotal === 0 ? (
        <div className={'text-5xl text-white -ml-52'}>
          <FontAwesomeIcon icon={faVial} />
        </div>
      ) : lpgTotal % 9 !== 0 ? (
        <div className={'text-5xl text-white -ml-52'}>
          <FontAwesomeIcon icon={faVial} />
        </div>
      ) : (
        <div className={'text-white flex justify-center'}>
          <FontAwesomeIcon icon={faVial} size='3x' className='mr-20' />
          <div
            className={`flex justify-center items-center text-sm h-1/2 px-4 font-mono ${
              isPassed ? 'bg-green-600' : 'bg-red-600 -ml-3'
            } font-semibold rounded-lg drop-shadow-sm`}
          >
            Test {isPassed ? 'Passed!' : 'Rejected!'}
          </div>
        </div>
      )}

      <div className='-mt-2 flex justify-center items-center'>
        <div className='text-white text-8xl'>{numberOfSample}</div>
        <div className='text-white text-lg -mt-10 ml-2'>Sample</div>
      </div>
      <div className='text-white text-sm mt-2 ml-32'>*Number of Sample</div>
    </>
  );
};

export default Sample;
