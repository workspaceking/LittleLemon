import PropTypes from 'prop-types';
import React from 'react';

export const Arrow = ({ rotate = 0, negative = false, active = false }) => {
  return (
    <div
      className={`flex flex-col justify-start items-start  relative gap-2.5 p-3 rounded-xl border-[3px] ${
        active ? 'border-secondary' : 'border-surface'
      }`}
    >
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${negative ? '-' : ''}rotate-${rotate}`}
        preserveAspectRatio="none"
      >
        <path
          d="M7.06262 0.70625L0.282516 7.30629C0.179788 7.40629 0.106851 7.51462 0.0637045 7.63129C0.0205593 7.74795 -0.000602722 7.87295 1.33514e-05 8.00629C1.33514e-05 8.13962 0.0215855 8.26462 0.0647316 8.38129C0.107878 8.49795 0.180507 8.60629 0.282516 8.70629L7.06262 15.3063C7.25095 15.4896 7.48655 15.5853 7.76939 15.5933C8.05223 15.6013 8.29605 15.5056 8.50082 15.3063C8.70627 15.123 8.81345 14.8936 8.82236 14.6183C8.83126 14.3429 8.73264 14.1056 8.5265 13.9063L3.49278 9.00629L14.9727 9.00629C15.2638 9.00629 15.5079 8.91029 15.7052 8.71829C15.9024 8.52629 16.0007 8.28895 16 8.00629C16 7.72295 15.9017 7.48529 15.7052 7.29329C15.5086 7.10129 15.2645 7.00562 14.9727 7.00629L3.49278 7.00629L8.5265 2.10625C8.71483 1.92295 8.81345 1.68965 8.82236 1.40625C8.83126 1.12295 8.73264 0.88965 8.5265 0.70625C8.33817 0.50625 8.09846 0.40625 7.8074 0.40625C7.51634 0.40625 7.26807 0.50625 7.06262 0.70625Z"
          fill="#4A291E"
        />
      </svg>
    </div>
  );
};

Arrow.propTypes = {
  rotate: PropTypes.oneOf([0, 90, 180]),
  negative: PropTypes.bool,
  active: PropTypes.bool,
};
