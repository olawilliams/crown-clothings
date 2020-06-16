import React from 'react';

import Spinners from '../spinner/spinner'

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => { 
  return isLoading ? (
    <Spinners />
  ) : (
    <WrappedComponent { ...otherProps} />
  )
};
  return Spinner;
};

export default WithSpinner;