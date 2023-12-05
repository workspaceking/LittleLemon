import PropTypes from 'prop-types';
import React from 'react';
import { useEffect, useState } from 'react';

export const InputCard = ({
  label,
  type,
  name,
  placeholder,
  errorText,
  size,
  border = 'gray',
  rounded = 'md',
  required = false,
  onChange,
  ...props
}) => {
  const [valid, setValid] = useState(true);

  return (
    <div
      role="group"
      aria-labelledby={`${name}-label`}
      className={`vstack ${size}  justify-center w-full max-w-[375px] relative gap-lg rounded-md bg-white`}
    >
      {label && (
        <label
          id={`${name}-label`}
          htmlFor={name}
          className="text-base font-medium text-left capitalize text-black"
        >
          {label}
        </label>
      )}
      <div className="vstack gap-sm w-full">
        <input
          aria-required={required}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          onChange={(e) => {
            setValid(e.target.validity.valid);
            onChange(e.target.value);
          }}
          className={`${size === 'sm' ? 'h-3xl p-sm' : 'h-12 p-lg'} px-lg ${
            !valid && ' valid:border-danger'
          } rounded-${rounded} bg-white border-2 border-${border} hover:border-secondary w-full`}
          {...props}
        />
        {!valid && (
          <p className="text-danger rounded-sm" role="alert">
            {errorText ?? 'Input field is required'}
          </p>
        )}
      </div>
    </div>
  );
};

InputCard.propTypes = {
  label: PropTypes.string,
  errorText: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md']),
  border: PropTypes.oneOf(['primary', 'gray', 'secondary']),
  rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
  type: PropTypes.oneOf([
    'text',
    'email',
    'number',
    'checkbox',
    'radio',
    'password',
    'file',
    'image',
    'date',
    'datetime',
    'button',
    'color',
    'datetime-local',
    'hidden',
    'month',
    'range',
    'reset',
    'search',
    'tel',
    'time',
    'url',
    'week',
  ]).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};

export const SelectCard = ({
  name,
  label,
  options = [],
  onSelect,
  before,
  after,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    label: options[0].label,
    index: 0,
  });

  return (
    <div
      role="group"
      aria-labelledby={`${name}-label`}
      className="relative vstack gap-lg p-0 m-0 w-full max-w-[375px]"
    >
      {label && (
        <label
          id={`${name}-label`}
          className="text-base font-medium text-left capitalize text-black"
        >
          {label}
        </label>
      )}
      <div
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-owns={`${name}-options-list`}
        aria-controls={`${name}-options-list`}
        tabIndex="0"
        onClick={() => {
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setOpen(!open);
          }
        }}
        className="cursor-pointer hstack justify-between items-center border-primary border-2 h-12 relative py-3 px-6 rounded-lg bg-surface"
      >
        {before && (
          <img src={before} className="h-3xl" alt={`${name}-before`} />
        )}
        <p
          className="text-lg font-bold text-left text-primary"
          aria-live="polite"
        >
          {selected.label}
        </p>
        {after && <img src={after} className="h-4" alt={`${name}-after`} />}
      </div>
      {open && (
        <div
          aria-label="Select"
          id={`${name}-options-list`}
          role="listbox"
          aria-activedescendant={`option-${selected.index}`}
          className="absolute top-[100%] z-50 left-0 right-0 mt-lg p-sm vstack justify-center items-center drop-shadow-sm shadow-md rounded-lg bg-surface"
        >
          {options.map(({ label, value }, index) => (
            <div
              key={index}
              role="option"
              aria-selected={selected.index === index ? 'true' : 'false'}
              onClick={() => {
                onSelect({
                  value,
                  index,
                });
                setOpen(false);
                setSelected({ label, index });
              }}
              className="hover:bg-gray cursor-pointer rounded-md w-full p-3 text-lg font-bold text-center text-primary"
            >
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SelectCard.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
    }),
  ),
  onSelect: PropTypes.func,
  before: PropTypes.string,
  after: PropTypes.string,
  onChange: PropTypes.func,
};
