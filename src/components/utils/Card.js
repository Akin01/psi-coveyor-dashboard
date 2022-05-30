import React from 'react';

const Card = ({ styleClass, children }) => {
  return <div className={styleClass}>{children}</div>;
};

export default Card;
