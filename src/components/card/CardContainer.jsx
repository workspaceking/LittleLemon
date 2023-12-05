import PropTypes from 'prop-types';
import React from 'react';

export const CardContainer = ({ title, padding = '2xl', ...props }) => {
  return (
    <div
      className={`min-w-[375px] h-full vstack w-full justify-center items-center  relative gap-lg p-${padding} rounded-xl bg-surface`}
    >
      {title && (
        <h2
          data-test-id="section_title"
          className="text-cardtitle w-full py-4 font-bold text-start capitalize text-black"
        >
          {title}
        </h2>
      )}
      <div className="vstack justify-start items-start w-[100%]  gap-xl">
        {props.children}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  title: PropTypes.string,
  padding: PropTypes.oneOf(['0', 'sm', 'xl', '2xl']),
};
