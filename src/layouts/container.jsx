import React from 'react';

export default function Container({ children, bordered = true }) {
  return (
    <div
      className={` md:flex md:flex-row justify-center items-start sectionContainer gap-12 py-6 rounded-2xl ${
        bordered ? 'border-4 border-gray' : ''
      }`}
    >
      {children}
    </div>
  );
}
