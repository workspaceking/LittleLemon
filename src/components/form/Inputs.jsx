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
  border = 'primary',
  rounded = 'md',
  required = false,
  onChange,
  ...props
}) => {
  const [valid, setValid] = useState(true);
  return (
    <div
      className={`flex ${size} flex-col justify-center w-full max-w-[375px]  relative gap-lg rounded-md bg-white`}
    >
      {label && (
        <label
          htmlFor={name}
          className=" text-base font-medium text-left capitalize text-black"
        >
          {label}
        </label>
      )}
      <div className="flex flex-col gap-sm w-full">
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          onChange={(e) => {
            setValid(e.target.validity.valid);
            onChange(e.target.value);
          }}
          {...props}
          className={`${size === 'sm' ? 'h-3xl p-sm' : 'h-12 p-lg'} px-lg ${
            !valid && ' valid:border-danger'
          } rounded-${rounded} bg-white border-2 border-${border} w-full`}
        />
        {!valid && (
          <p className="text-danger rounded-sm">
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
  label,
  options = [],
  onSelect,
  before,
  after,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState();
  useEffect(() => {
    setSelected(options[0].label);
  }, []);
  return (
    <div
      className={'relative flex flex-col gap-lg p-0 m-0 w-full max-w-[375px]'}
    >
      {label && (
        <label className=" text-base font-medium text-left capitalize text-black">
          {label}
        </label>
      )}
      <div
        onClick={() => {
          setOpen(true);
        }}
        className="cursor-pointer flex justify-between items-center  border-primary border-2 h-12  relative py-3 px-6 rounded-lg bg-surface"
      >
        {before && <img src={before} className={'h-3xl'} />}
        <p className=" text-lg font-bold text-left text-primary">{selected}</p>
        {after && <img src={after} className={'h-4'} />}
      </div>
      {open && (
        <div
          aria-label={'Select'}
          className="absolute top-[100%] z-50 left-0 right-0 mt-lg p-sm flex flex-col justify-center items-center drop-shadow-sm shadow-md rounded-lg bg-surface"
        >
          {options.map(({ label, value }, index) => (
            <div
              key={index}
              onClick={() => {
                onSelect({
                  value,
                  index,
                });
                setOpen(false);
                setSelected(label);
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
};
