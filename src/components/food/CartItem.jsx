import { base64Data } from '@app/data';
import PropTypes from 'prop-types';
import React from 'react';

export const CartItem = ({ image, title, quantity, price }) => {
  return (
    <div className="flex justify-between items-center w-full relative p-3 rounded-2xl bg-gray">
      <img
        src={image || 'https://fakeimg.pl/144x128/cade4c/1c66c7'}
        className="w-[140px] h-32 rounded-[14px] object-cover"
      />
      <p className="w-[225px] text-[21px] text-left text-primary">{title}</p>
      <div className="flex justify-start items-center gap-16">
        <div className="flex justify-center items-center w-[158px] h-9 relative gap-3 px-3 rounded-md bg-gray">
          <img src={base64Data.plus} className={'w-xl cursor-pointer'} />
          <p className="text-lg  text-dark">{quantity}</p>
          <img src={base64Data.minus} className={'w-xl cursor-pointer'} />
        </div>
        <div className="flex justify-start items-start relative">
          <p className="text-xl text-left text-pink">$</p>
          <p className="text-lg text-left text-pink">{price * quantity}</p>
        </div>
      </div>
      <img src={base64Data.bin} className={'w-2xl cursor-pointer'} />
    </div>
  );
};

export const OrderItem = ({ image, title, price, quantity }) => {
  return (
    <div className="flex justify-between items-center w-full relative p-3 rounded-2xl bg-gray">
      <img
        src={image || 'https://fakeimg.pl/144x128/cade4c/1c66c7'}
        className="w-[140px] h-32 rounded-[14px] object-cover"
      />
      <p className="w-[225px] text-[21px] text-left text-primary">{title}</p>
      <div className="flex justify-start items-start relative">
        <p className="text-xl text-left text-pink">$</p>
        <p className="text-lg text-left text-pink">{price * quantity}</p>
      </div>
      <img src={base64Data.bin} className={'w-2xl cursor-pointer'} />
    </div>
  );
};

CartItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
OrderItem.propTypes = CartItem.propTypes;
