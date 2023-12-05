import {
  CardContainer,
  CartItem,
  InputCard,
  OrderItem,
  Tabs,
} from '@app/components';
import { base64Data } from '@app/data';
import { Layout } from '@app/layouts';
import { DataContext, LocalStorage } from '@app/store';
import React, { useContext, useEffect, useState } from 'react';

function Bookings() {
  const [activeTab, setActiveTab] = useState(0);

  const { actions, data } = useContext(DataContext);

  const subtotal = +data.cart
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2);

  const deliveryCost = +(subtotal * 0.05).toFixed(2);

  const orderTotal = (subtotal + deliveryCost).toFixed(2);

  useEffect(() => {
    document.title = 'Cart & Bookings';
    return () => {};
  }, []);

  return (
    <Layout childAsHero={true}>
      <section className="vstack justify-start items-center min-w-[375px] w-full max-w-[975px] p-3 rounded-2xl bg-gray border-[10px] border-gray">
        <h1 className="text-3xl font-bold text-left  my-3 capitalize text-dark">
          Cart & Bookings
        </h1>
        <Tabs
          tabs={[
            {
              label: 'Cart',
              icon: base64Data.cart,
              active: activeTab === 0,
              badge: 1,
            },
            {
              label: 'Orders',
              active: activeTab === 1,
            },
            {
              label: 'Reservations',
              active: activeTab === 2,
            },
          ]}
          onTabChange={(label, index) => {
            console.log(label, index);
            setActiveTab(index);
          }}
        >
          {activeTab === 0 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setActiveTab(1);
                actions.update.orders(data.cart);
                actions.remove.LocalStorage.removeCart();
                actions.remove.cart();
                const element = document.getElementsByTagName('header')[0];
                element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="vstack justify-start items-start w-full relative gap-3 px-3 py-6 rounded-lg bg-white"
            >
              <div className="vstack justify-start items-start w-full gap-2.5">
                {data.cart?.map(({ name, quantity, price }, index) => (
                  <CartItem
                    key={index}
                    title={name}
                    quantity={quantity}
                    price={price}
                  />
                ))}
              </div>
              <div className="vstack justify-start items-start w-full relative gap-3 px-3 py-6 rounded-lg bg-white">
                <p className="w-full text-1.5xl text-left text-primary">
                  Order summary
                </p>
                <div className="vstack justify-start items-start w-full gap-2.5 p-2.5">
                  <div className="hstack justify-between items-start w-full h-16 relative border-t-0 border-r-0 border-b border-l-0 border-primary">
                    <p className="w-max text-xl text-left text-primary">
                      Subtotal
                    </p>
                    <div className="hstack justify-start items-start relative">
                      <p className="w-xl text-xl text-left text-primary">$</p>
                      <p className="text-xl text-left text-primary">
                        {subtotal}
                      </p>
                    </div>
                  </div>
                  <div className="hstack justify-between items-start w-full h-16 relative border-t-0 border-r-0 border-b border-l-0 border-primary">
                    <p className="w-max text-xl text-left text-primary">
                      Delivery
                    </p>
                    <div className="hstack justify-start items-start relative">
                      <p className="w-xl text-xl text-left text-primary">$</p>
                      <p className="text-xl text-left text-primary">
                        {deliveryCost}
                      </p>
                    </div>
                  </div>
                  <div className="hstack justify-between items-center w-full relative">
                    <p className="w-full text-1.5xl text-left text-primary">
                      Order total
                    </p>
                    <div className="hstack justify-start items-start relative">
                      <p className="w-xl text-xl text-left text-pink">$</p>
                      <p className="text-xl text-left text-pink">
                        {orderTotal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {orderTotal > 0 && (
                <>
                  <CardContainer title={'Payment'}>
                    <div className={'wrap p-6 rounded-lg justify-between'}>
                      <InputCard
                        type={'text'}
                        name={'name'}
                        label={'Name'}
                        placeholder={'Jhon Doe'}
                        required
                        minLength={3}
                        errorText={'Please provide a valid name'}
                        onChange={(_) => {}}
                      />
                      <InputCard
                        type={'email'}
                        name={'email'}
                        required
                        label={'Email'}
                        placeholder={'jhondoe@example.com'}
                        errorText={'Your entered an incorrect email'}
                        onChange={(_) => {}}
                      />
                      <InputCard
                        type={'tel'}
                        name={'card_number'}
                        required
                        errorText={'Please provide a valid card number'}
                        placeholder={'Card Number'}
                        onChange={(_) => {}}
                      />

                      <InputCard
                        type={'text'}
                        name={'expiry'}
                        placeholder={'Expiry'}
                        required
                        onChange={(_) => {}}
                      />
                      <InputCard
                        type={'number'}
                        name={'cvv'}
                        required
                        placeholder={'CVV'}
                        onChange={(_) => {}}
                      />
                    </div>
                  </CardContainer>
                  <button
                    type={'submit'}
                    className="text-surface text-base font-bold hstack justify-center items-center w-full relative overflow-hidden gap-2.5 py-[26px] rounded-bl-2xl rounded-br-2xl bg-primary"
                  >
                    Checkout
                  </button>
                </>
              )}
            </form>
          )}
          {activeTab === 1 && (
            <div className="vstack justify-start items-start w-full relative gap-3 px-3 py-6 rounded-lg bg-white">
              {data.orders?.map(({ name, quantity, price }, index) => (
                <OrderItem
                  key={index}
                  title={name}
                  quantity={quantity}
                  price={price}
                />
              ))}
            </div>
          )}
          {activeTab === 2 && (
            <div className="vstack justify-start items-start w-full relative gap-3 px-3 py-6 rounded-lg bg-white">
              {data.bookings.map(({ occassion, date, time, guests }, index) => (
                <article
                  key={index}
                  className="hstack justify-between items-center  w-full h-36 relative px-6 py-3 rounded-2xl bg-gray"
                >
                  <div className="vstack justify-start items-start  w-[196px] relative gap-2">
                    <p className=" text-lg font-medium text-left text-primary">
                      Book For Ocassion
                    </p>
                    <p className=" text-base text-left text-primary">
                      {occassion}
                    </p>
                  </div>
                  <div className="vstack justify-start items-center  w-[108px] relative gap-2">
                    <p className=" text-[21px] text-left text-primary">
                      {new Date(date).toLocaleDateString()}
                    </p>
                    <p className=" text-[21px] text-left text-primary">
                      {time}
                    </p>
                  </div>
                  <div className="vstack justify-start items-center  w-fit px-4 relative gap-2">
                    <p className=" text-[21px] text-left text-primary">
                      People
                    </p>
                    <p className=" text-[21px] text-left text-primary">
                      {guests}
                    </p>
                  </div>
                  <svg
                    width={25}
                    height={28}
                    viewBox="0 0 25 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M23.0629 6H1.81102M7.124 6L7.48342 4.91743C7.83182 3.86833 8.00608 3.34379 8.32911 2.95597C8.61442 2.61351 8.98075 2.34843 9.39463 2.18504C9.86337 2 10.4141 2 11.5157 2H13.3582C14.4599 2 15.0106 2 15.4793 2.18504C15.8932 2.34843 16.2596 2.61351 16.5448 2.95597C16.8679 3.34379 17.0421 3.86833 17.3905 4.91743L17.7499 6M4.46751 6V19.6C4.46751 21.8403 4.46751 22.9603 4.90184 23.816C5.28385 24.5687 5.89338 25.1805 6.64317 25.564C7.49564 26 8.61136 26 10.8431 26H14.0309C16.2625 26 17.3784 26 18.2307 25.564C18.9805 25.1805 19.5901 24.5687 19.9721 23.816C20.4064 22.9603 20.4064 21.8403 20.4064 19.6V6M9.78048 11.3333V20.6667M15.0935 11.3333V20.6667"
                      stroke="#495E57"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="vstack justify-center items-center self-stretch  relative px-3 rounded-tr-xl rounded-br-xl bg-primary">
                    <p className=" text-xl text-center text-[#ddd]">Cancel</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </Tabs>
      </section>
    </Layout>
  );
}

export default Bookings;
