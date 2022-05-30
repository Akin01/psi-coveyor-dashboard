import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShield,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../utils/Card';

const Status = ({ isLeak }) => {
  return (
    <Card
      styleClass={
        'w-5/6 h-5/6 bg-indigo-700 mx-auto rounded-md flex flex-col justify-center items-center'
      }
    >
      <div className='text-white text-2xl font-bold font-mono'>Status</div>
      <div className={`text-7xl mt-5 text-white drop-shadow-md`}>
        {isLeak ? (
          <FontAwesomeIcon icon={faCircleExclamation} />
        ) : (
          <FontAwesomeIcon icon={faShield} />
        )}
      </div>
      <div className='text-white text-sm mt-5 font-mono'>
        <span
          className={`font-semibold py-1 px-2 rounded-lg ${
            isLeak ? 'bg-red-600' : 'bg-green-600'
          } drop-shadow-md text-white`}
        >
          {isLeak ? 'Ada' : 'Tidak Ada'}
        </span>{' '}
        Kebocoran
      </div>
    </Card>
  );
};

export default Status;
