import React from 'react';

const CardWrap = ({ styleClass, children }) => {
  return <div className={styleClass}>{children}</div>;
};

export default CardWrap;
