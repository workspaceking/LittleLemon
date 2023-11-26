import React from 'react';
import { base64Data } from '@data/index';
import { Badge } from '@elements/index';

export const FindFoodHero = (props) => {
  return (
    <div className="p-6 bg-surface rounded-xl flex-col justify-center items-center gap-6 flex">
      <div className="w-full p-3 bg-surface rounded-md flex-col justify-center items-start gap-lg flex">
        <div className="text-black text-base font-medium font-['Karla'] capitalize">
          Find Food
        </div>
        <input className="h-4xl w-full rounded-md px-lg bg-surface border-2 border-primary" />
      </div>
      <div className="justify-center items-center gap-xl flex">
        {Object.keys(base64Data).map((v, i) => (
          <Badge
            key={i}
            imageBase64={base64Data[v]}
            label={v.toLocaleUpperCase()}
          />
        ))}
      </div>
    </div>
  );
};

FindFoodHero.propTypes = {};
