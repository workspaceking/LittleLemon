import React, { useContext } from 'react';
import { foodBase64 } from '@data/index';
import { Badge } from '@elements/index';
import { useLocation } from 'react-router-dom';
import { DataContext } from '@app/store';

export const FindFoodHero = (props) => {
  const { actions, data } = useContext(DataContext);
  return (
    <form className="p-6  rounded-xl vstack justify-center items-center gap-6 hstack bg-surface mx-auto w-full max-w-3xl min-w-[325px]">
      <label
        htmlFor={'foodquery'}
        className="text-base font-medium text-left capitalize text-black"
      >
        Find Food
      </label>
      <input
        id={'foodquery'}
        name={'foodquery'}
        placeholder={'Find Food'}
        className="h-4xl w-full rounded-full px-lg  border-2 border-gray bg-gray hover:border-secondary outline-none focus-visible:border-primary"
      />
      <div className="justify-center items-center gap-xl hstack wrap sm:nowrap w-full">
        {Object.keys(foodBase64).map((v, i) => (
          <Badge
            onClick={() => {
              actions.update.requestFood(true);
            }}
            key={i}
            imageBase64={foodBase64[v]}
            label={v.toLocaleUpperCase()}
          />
        ))}
      </div>
    </form>
  );
};

FindFoodHero.propTypes = {};
