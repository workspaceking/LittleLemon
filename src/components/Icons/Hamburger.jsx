import PropTypes from 'prop-types';
import React from 'react';
import { IconContainer } from './IconContainer';
import { useState } from 'react';

export const Hamburger = ({ onToggle, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <IconContainer
      {...props}
      onClick={() => {
        onToggle(!open);
        setOpen(!open);
      }}
    >
      {!open ? (
        <svg
          width="16"
          height="18"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 11H18M2 2H18M2 20H10"
            stroke="#495E57"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.0877 10H15.0175V2M2.91223 14H10.9824V22"
            stroke="#495E57"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </IconContainer>
  );
};

Hamburger.propTypes = {
  onToggle: PropTypes.func.isRequired,
};
