import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { generateRandomString } from '../helpers';

export const Badge = ({ imageBase64, label }) => {
  const id = generateRandomString(10);
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={(e) => {
        setActive(!active);
      }}
      className={`cursor-pointer flex justify-center items-center  relative gap-3 px-3 py-1.5 rounded-[18px] border border-gray ${
        active ? 'bg-secondary' : 'bg-surface'
      }`}
    >
      {imageBase64 && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="22" height="22" fill={`url(#pattern${id})`} />
          <defs>
            <pattern
              id={`pattern${id}`}
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref={`#${id}`} transform="scale(0.0208333)" />
            </pattern>
            <image
              id={id}
              width="48"
              height="48"
              xlinkHref={`${imageBase64}`}
            />
          </defs>
        </svg>
      )}
      <p className=" text-sm text-left text-dark">{label}</p>
    </div>
  );
};
Badge.propTypes = {
  imageBase64: PropTypes.string,
  label: PropTypes.string.isRequired,
};
