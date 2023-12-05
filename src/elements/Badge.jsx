import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { generateRandomString } from '../helpers';
import { useNavigate } from 'react-router-dom';

export const Badge = ({ small, imageBase64, label, onClick = () => {} }) => {
  const id = generateRandomString(10);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        setActive(!active);
        navigate('/findFood');
        onClick();
      }}
      className={`cursor-pointer hstack hover:bg-secondary justify-center items-center  relative gap-3 px-3 py-1.5 rounded-full border border-gray ${
        active ? 'bg-secondary' : 'bg-surface'
      }`}
    >
      {imageBase64 && (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="32" height="32" fill={`url(#pattern${id})`} />
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
    </button>
  );
};
Badge.propTypes = {
  imageBase64: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  small: PropTypes.bool,
};
