import PropTypes from 'prop-types';
import React from 'react';
import { Star } from '../Icons/Star';

export const Dish = ({ image, ratings, data }) => {
  const { title, price, excerpt } = data;
  return (
    <div className="flex flex-col justify-start items-center  w-min   p-1.5 rounded-xl bg-gray">
      <div
        style={{
          background: `url(${image})`,
          backgroundSize: 'contain',
        }}
        className={
          'rounded-md h-[216px] p-1.5 flex justify-center items-end relative'
        }
      >
        <div className="flex h-fit justify-start items-center  gap-3 w-full">
          <div className="flex justify-start items-center w-fit h-8 relative gap-3 px-1.5 rounded-md bg-gray">
            <div className="flex justify-start items-start max-w-max w-max relative gap-[3px]">
              {Array(Math.round(ratings))
                .fill(1, 0, 5)
                .map((_v, i) => (
                  <Star key={i} disabled={i > 2} />
                ))}
            </div>
            <p className="text-base  text-left text-dark font-normal">
              ${price}
            </p>
          </div>
          <div className="flex justify-start items-center h-8 relative gap-3 p-1.5 rounded-lg bg-gray">
            <svg
              width={20}
              height={21}
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="none"
            >
              <path
                d="M6.22522 10.3448H14.0883M8.19098 13.3448H12.1225M16.054 7.34485L13.1054 1.34485M4.25946 7.34485L7.2081 1.34485M1.85646 12.602C1.1503 9.24915 0.79722 7.57278 1.68235 6.45882C2.56748 5.34485 4.2526 5.34485 7.62283 5.34485H12.6907C16.061 5.34485 17.746 5.34485 18.6312 6.45882C19.5163 7.57278 19.1632 9.24915 18.4571 12.602L18.0359 14.602C17.5572 16.8745 17.3179 18.0108 16.5069 18.6778C15.6959 19.3448 14.5538 19.3448 12.2694 19.3448H8.04407C5.75972 19.3448 4.61754 19.3448 3.8066 18.6778C2.99566 18.0108 2.75633 16.8745 2.2777 14.602L1.85646 12.602Z"
                stroke="#495E57"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start  relative gap-[6px] py-2 w-full">
        <p className="text-base font-medium text-left capitalize text-black">
          {title}
        </p>
        <p className="text-base text-left text-primary">{excerpt}</p>
      </div>
    </div>
  );
};

Dish.propTypes = {
  image: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  data: PropTypes.object,
};
