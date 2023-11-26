import React from 'react';

export default function Container({ children, bordered = true }) {
  return (
    <div
      className={`flex justify-center items-start  w-[1296px] gap-24 py-6 rounded-2xl ${
        bordered ? 'border-4 border-gray' : ''
      }`}
    >
      {children}
    </div>
  );
}
