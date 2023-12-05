import { base64Data } from '@app/data';
import { DataContext } from '@app/store';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

export const CartItem = ({ image, title, quantity, price }) => {
  const { actions } = useContext(DataContext);
  return (
    <article
      role={'article'}
      className="hstack justify-between items-center w-full relative p-3 rounded-2xl bg-gray"
    >
      <img
        alt={'cart item image'}
        src={image || 'https://fakeimg.pl/144x128/cade4c/1c66c7'}
        className="w-[140px] h-32 rounded-[14px] object-cover"
      />
      <p className="w-[225px] text-[21px] text-left text-primary">{title}</p>
      <div className="hstack justify-start items-center gap-16">
        <div className="w-[125px] hstack justify-center items-center   relative gap-3 rounded-md overflow-hidden bg-surface">
          <button
            onClick={() => {
              actions.update.cartQty({ name: title, quantity: quantity + 1 });
            }}
            className="text-1.5xl hover:bg-secondary px-3 self-stretch py-1"
          >
            +
          </button>
          <span className=" text-lg  text-dark">{quantity}</span>
          <button
            onClick={() => {
              if (quantity - 1 > 0)
                actions.update.cartQty({ name: title, quantity: quantity - 1 });
              else actions.remove.cartItem(title);
            }}
            className="text-2.25xl hover:bg-secondary px-3 h-fit py-1"
          >
            -
          </button>
        </div>
        <div className="hstack justify-start items-start relative">
          <p className="text-xl text-left text-pink">$</p>
          <p className="text-lg text-left text-pink w-[75px]">
            {price * quantity}
          </p>
        </div>
      </div>
      <button
        className="bg-surface"
        onClick={() => {
          actions.remove.cartItem({
            name: title,
            quantity,
            price,
          });
        }}
      >
        <img
          alt={'delete from cart'}
          src={base64Data.bin}
          className={'w-2xl cursor-pointer'}
        />
      </button>
    </article>
  );
};

export const OrderItem = ({ image, title, price, quantity }) => {
  const { actions } = useContext(DataContext);

  return (
    <article
      role={'article'}
      className="hstack justify-between items-center w-full relative p-3 rounded-2xl bg-gray"
    >
      <img
        alt={'order item'}
        src={image || 'https://fakeimg.pl/144x128/cade4c/1c66c7'}
        className="w-[140px] h-32 rounded-[14px] object-cover"
      />
      <p className="w-[225px] text-[21px] text-left text-primary">{title}</p>
      <div className="hstack justify-start items-start relative">
        <p className="text-xl text-left text-pink">$</p>
        <p className="text-lg text-left text-pink">{price * quantity}</p>
      </div>
      <button
        className="bg-surface"
        onClick={() => {
          actions.remove.orderItem(title);
        }}
      >
        <img
          alt={'delete order item'}
          src={base64Data.bin}
          className={'w-2xl cursor-pointer'}
        />
      </button>
    </article>
  );
};

CartItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
OrderItem.propTypes = CartItem.propTypes;
