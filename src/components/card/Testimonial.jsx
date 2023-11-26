import PropTypes from 'prop-types';
import React from 'react';
import { Star } from '..';

export const Testimonial = ({ large = false }) => {
  return (
    <div
      className={`flex flex-col ${
        large
          ? ' w-max h-auto rounded-3xl bg-gray'
          : 'w-[225px] bg-white rounded-2xl'
      }  justify-center items-center gap-6 px-3 py-xl`}
      style={{
        boxShadow:
          !large &&
          '-2px 2px 6px 3px rgba(206,206,206,0.25), 2px -2px 6px 3px rgba(206,206,206,0.25)',
      }}
    >
      <div className="flex flex-col justify-center items-center  relative gap-2.5">
        <img
          className={`${large ? 'w-44' : 'w-12'}`}
          src="./assets/images/user.png"
        />
        <div className="flex flex-col justify-center items-center w-fit  relative gap-1.5">
          <p
            className={`leading-tightfont-bold text-center w-full text-dark ${
              large ? 'text-3xl' : 'text-xs'
            }`}
          >
            Jon Do
          </p>
          <p
            className={`leading-tight ${
              large ? 'text-xl' : 'text-xs'
            } font-bold text-left text-primary opacity-70`}
          >
            Johnny_Utah
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col justify-start items-center ${
          large ? 'w-full' : 'w-full max-w-[225px]'
        }  relative gap-6`}
      >
        <div className="flex items-start relative gap-3">
          {Array(5)
            .fill(0, 0, 5)
            .map((_v, i) => (
              <Star large={large} key={i} disabled={i > 2} />
            ))}
        </div>
        <p className="flex text-xs text-center text-primary">
          “We had such a great time celebrating my grandmothers bitthday!”
        </p>
      </div>
    </div>
  );
};

Testimonial.propTypes = {
  large: PropTypes.bool,
};
