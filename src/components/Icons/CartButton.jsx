import PropTypes from 'prop-types';
import React from 'react';
import { IconContainer } from './IconContainer';

export const CartButton = (props) => {
  return (
    <IconContainer {...props} className={'group hover:bg-secondary'}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className={'group-hover:stroke-dark  stroke-primary'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.01584 10H13.8789M7.9816 13H11.9131M15.8446 7L12.896 1M4.05008 7L6.99872 1M1.64708 12.2572C0.940919 8.9043 0.587839 7.22793 1.47297 6.11397C2.3581 5 4.04322 5 7.41345 5H12.4813C15.8516 5 17.5367 5 18.4218 6.11397C19.3069 7.22793 18.9539 8.9043 18.2477 12.2572L17.8265 14.2572C17.3478 16.5297 17.1085 17.666 16.2975 18.333C15.4866 19 14.3445 19 12.0601 19H7.83469C5.55034 19 4.40816 19 3.59722 18.333C2.78627 17.666 2.54695 16.5297 2.06832 14.2572L1.64708 12.2572Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </IconContainer>
  );
};

CartButton.propTypes = {};
