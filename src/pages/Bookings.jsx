import { CartItem, OrderItem, Tabs } from '@app/components';
import { base64Data } from '@app/data';
import { Layout } from '@app/layouts';
import { DataContext } from '@app/store';
import React, { useContext, useEffect, useState } from 'react';

function Bookings() {
  const [activeTab, setActiveTab] = useState(0);

  const { actions, data } = useContext(DataContext);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Layout childAsHero={true}>
      <div className="flex flex-col justify-start items-start w-[975px] p-3 rounded-2xl bg-gray border-[10px] border-gray">
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
            <div className="flex flex-col justify-start items-start w-full relative gap-3 px-3 py-6 rounded-lg bg-white">
              <div className="flex flex-col justify-start items-start w-full gap-2.5">
                {data.cart?.map(({ name, quantity, price }, index) => (
                  <CartItem
                    key={index}
                    title={name}
                    quantity={quantity}
                    price={price}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-start items-start w-full relative gap-3 px-3 py-6 rounded-lg bg-white">
                <p className="w-full text-1.5xl text-left text-primary">
                  Order summary
                </p>
                <div className="flex flex-col justify-start items-start w-full gap-2.5 p-2.5">
                  <div className="flex justify-between items-start w-full h-16 relative border-t-0 border-r-0 border-b border-l-0 border-primary">
                    <p className="w-max text-xl text-left text-primary">
                      Subtotal
                    </p>
                    <div className="flex justify-start items-start relative">
                      <p className="w-xl text-xl text-left text-primary">$</p>
                      <p className="text-xl text-left text-primary">---</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-start w-full h-16 relative border-t-0 border-r-0 border-b border-l-0 border-primary">
                    <p className="w-max text-xl text-left text-primary">
                      Delivery
                    </p>
                    <div className="flex justify-start items-start relative">
                      <p className="w-xl text-xl text-left text-primary">$</p>
                      <p className="text-xl text-left text-primary">37.95</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full relative">
                    <p className="w-full text-1.5xl text-left text-primary">
                      Order total
                    </p>
                    <div className="flex justify-start items-start relative">
                      <p className="w-xl text-xl text-left text-pink">$</p>
                      <p className="text-xl text-left text-pink">117.90</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full relative overflow-hidden gap-2.5 py-[26px] rounded-bl-2xl rounded-br-2xl bg-primary">
                <p className="text-2xl text-center text-surface">Checkout</p>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="flex flex-col justify-start items-start w-full relative gap-3 px-3 py-6 rounded-lg bg-white">
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
            <div className="flex flex-col justify-start items-start w-full relative gap-3 px-3 py-6 rounded-lg bg-white">
              {data.bookings.map(({ occassion, date, time, guests }, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center  w-full h-36 relative px-6 py-3 rounded-2xl bg-gray"
                >
                  <div className="flex flex-col justify-start items-start  w-[196px] relative gap-2">
                    <p className=" text-lg font-medium text-left text-primary">
                      Book For Ocassion
                    </p>
                    <p className=" text-base text-left text-primary">
                      {occassion}
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-center  w-[108px] relative gap-2">
                    <p className=" text-[21px] text-left text-primary">
                      {new Date(date).toLocaleDateString()}
                    </p>
                    <p className=" text-[21px] text-left text-primary">
                      {time}
                    </p>
                  </div>
                  <div className="flex flex-col justify-start items-center  w-fit px-4 relative gap-2">
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
                  <div className="flex flex-col justify-center items-center self-stretch  relative px-3 rounded-tr-xl rounded-br-xl bg-primary">
                    <p className=" text-xl text-center text-[#ddd]">Cancel</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Tabs>
      </div>
    </Layout>
  );
}

export default Bookings;
