import { Badge } from '@app/elements';
import PropTypes from 'prop-types';
import React from 'react';

export default function FilterCard({
  title,
  filters = [],
  onClick = () => {},
}) {
  return (
    <div
      role={'button'}
      onClick={() => {
        onClick();
      }}
      className="vstack justify-start items-start  relative gap-xl w-fit p-3 rounded-xl bg-surface"
    >
      {typeof title == 'string' ? <p>{title}</p> : title}
      <div className="w-full wrap justify-start items-start  gap-3">
        {filters.map(({ icon, label }, i) => (
          <Badge imageBase64={icon} label={label} key={i} />
        ))}
      </div>
    </div>
  );
}

FilterCard.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.any,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string.isRequired,
    }),
  ),
};
