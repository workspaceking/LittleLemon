import { Badge } from '@app/elements';
import PropTypes from 'prop-types';
import React from 'react';

export default function FilterCard({ title, filters = [] }) {
  return (
    <div className="flex flex-col justify-start items-start  relative gap-xl w-full p-3 rounded-xl bg-surface">
      {typeof title == 'string' ? <p>{title}</p> : title}
      <div className="flex w-full flex-wrap justify-start items-start  gap-3">
        {filters.map(({ icon, label }, i) => (
          <Badge imageBase64={icon} label={label} key={i} />
        ))}
      </div>
    </div>
  );
}

FilterCard.propTypes = {
  title: PropTypes.any,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string.isRequired,
    }),
  ),
};
