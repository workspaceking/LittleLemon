import PropTypes from 'prop-types';
import React from 'react';

export const Nav = ({ title, items = [] }) => {
  return (
    <div className="flex flex-col justify-start items-start relative gap-2xl p-6 rounded-3xl">
      <p className="text-base font-bold text-left text-primary">{title}</p>
      <div className="flex flex-col justify-start items-start  relative gap-sm">
        {items.map(({ title, to }, i) => (
          <a
            key={i}
            href={to}
            className="text-base font-medium text-left text-dark"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

Nav.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
