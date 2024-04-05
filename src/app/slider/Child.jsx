'use client';
import React from 'react';

const Child = ({ isMobileView, data }) => {
  alert(`${data}=  this is data , ${isMobileView}= this is mobile view  `);
  return (
    <div>{isMobileView ? 'Hello from mobile ' : 'Hello from desktop '}</div>
  );
};

export default Child;
