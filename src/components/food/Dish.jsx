import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Star } from '../Icons/Star';
import { CartButton } from '..';
import { DataContext } from '@app/store';

export const Dish = ({ image, ratings, data }) => {
  const { actions, data: store } = useContext(DataContext);
  const [hoverStar, setHoverStar] = useState(0);
  const { title, price, excerpt } = data;
  return (
    <div className="vstack justify-start items-center w-full sm:max-w-[275px]  p-1.5 rounded-xl bg-gray ">
      <div
        style={{
          background: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className={
          'rounded-md w-full h-[216px] p-1.5 hstack justify-center items-end relative'
        }
      >
        <div className="hstack h-fit w-fit justify-start gap-3 items-center  bg-surface rounded-lg px-3">
          <div className="hstack justify-start items-start max-w-max w-max relative gap-[3px] group">
            {Array(Math.round(ratings))
              .fill(1, 0, 5)
              .map((_v, i) => (
                <Star
                  key={i}
                  disabled={ratings > i + 1}
                  style={{
                    mixBlendMode: ratings < i + 1 ? 'luminosity' : 'normal',
                  }}
                />
              ))}
          </div>
          <span className={'text-[12px]'}>{ratings}</span>
          <p className="text-sm  text-left text-dark font-normal">${price}</p>
          <CartButton
            onClick={() => {
              actions.update.cart({
                name: title,
                quantity: 1,
                price,
              });
              actions.notify({
                show: true,
                text: `${title} has been added to cart`,
                title: 'Cart Updated',
              });

              setTimeout(() => {
                actions.notify({
                  show: false,
                  title: '',
                  text: '',
                });
              }, 1600);
            }}
          />
        </div>
      </div>
      <div className="vstack justify-start items-start  relative gap-[6px] py-2 w-full">
        <p className="text-base font-medium text-left capitalize text-black">
          {title}
        </p>
        <p className="text-base text-left text-primary">{excerpt}</p>
      </div>
    </div>
  );
};

Dish.propTypes = {
  image: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
  data: PropTypes.object,
};
