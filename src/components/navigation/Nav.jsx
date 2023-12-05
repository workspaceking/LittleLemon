import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = ({ title, items = [] }) => {
  return (
    <div className="vstack justify-start items-start relative gap-2xl p-6 rounded-3xl">
      <p className="text-base font-bold text-left text-primary">{title}</p>
      <div className="vstack justify-start items-start  relative gap-sm">
        {items.map(({ title, to }, i) => (
          <Link
            key={i}
            to={to}
            className="text-base font-medium text-left text-dark"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

Nav.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
};
