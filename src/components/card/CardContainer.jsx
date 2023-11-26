import PropTypes from 'prop-types';
import React from 'react';

export const CardContainer = ({ title, padding = '2xl', ...props }) => {
  return (
    <div
      className={`min-w-[375px] h-full flex flex-col w-full justify-start items-center  relative gap-lg p-${padding} rounded-xl bg-surface`}
    >
      {title && (
        <h1
          data-test-id="section_title"
          className="text-sectiontitle py-4 font-bold text-left capitalize text-black"
        >
          {title}
        </h1>
      )}
      <div className="flex flex-col justify-center items-center self-stretch   gap-xl">
        {props.children}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  title: PropTypes.string,
  padding: PropTypes.oneOf(['0', 'sm', 'xl', '2xl']),
};
