import PropTypes from 'prop-types';
import React from 'react';

export const IconContainer = ({ children, className, ...props }) => {
  return (
    <div
      role={'button'}
      {...props}
      className={`${className} w-fit px-3 h-9 p-1.5 bg-surface rounded-lg justify-center items-center gap-3 hstack`}
    >
      {children}
    </div>
  );
};

IconContainer.propTypes = {};
