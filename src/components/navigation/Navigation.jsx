import PropTypes from 'prop-types';
import { CartButton } from '../Icons/CartButton';
import { Hamburger } from '../Icons/Hamburger';
import { useContext, useState } from 'react';
import { navigation_links } from '@data/index';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '@app/store';
import { IconContainer } from '../Icons/IconContainer';

export const Navigation = (_props) => {
  const navigate = useNavigate();
  const { actions, data: store } = useContext(DataContext);
  const [show, setShow] = useState(true);
  return (
    <section className="w-full relative lg:static h-20 justify-between sm:px-3 lg:px-0 lg:justify-center items-center gap-8 sm:gap-16 hstack bg-primary">
      <img
        className="h-9 sm:h-16 mix-blend-plus-lighter"
        src="./assets/images/logo.png"
        alt={'little lemon logo'}
      />
      {show && (
        <nav
          role={'navigation'}
          data-testid="_primaryNav"
          className="absolute lg:static  top-full bg-surface lg:bg-primary py-6 right-0 left-0 border-[6px] border-primary lg:border-none rounded-bl-2xl rounded-br-2xl lg:rounded-none   justify-center items-center gap-6 wrap lg:nowrap text-primary lg:text-gray"
        >
          {navigation_links.map(({ title, to }, index) => (
            <Link
              key={index}
              to={to}
              title={title}
              className="text-zinc-100 text-lg font-bold font-['Karla'] capitalize  hover:bg-surface hover:text-dark px-3 rounded-full transition-all ease-in-out "
            >
              {title}
            </Link>
          ))}
          <button
            onClick={() => {
              if (store.auth.authenticated) {
                actions.update.auth({ authenticated: false, phoneNumber: '' });
              }
              navigate('/login');
            }}
            title={'Login to the app'}
            className="text-zinc-100 text-lg font-bold font-['Karla'] capitalize  hover:bg-surface hover:text-dark px-3 rounded-full transition-all ease-in-out "
          >
            {store.auth.authenticated ? 'Logout' : 'Login'}
          </button>
        </nav>
      )}
      <div className="gap-6 rounded-lg justify-center items-center hstack">
        <IconContainer
          onClick={() => {
            navigate('/bookings');
          }}
          className={'group hover:bg-secondary'}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={'group-hover:stroke-dark  stroke-primary'}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.01584 10H13.8789M7.9816 13H11.9131M15.8446 7L12.896 1M4.05008 7L6.99872 1M1.64708 12.2572C0.940919 8.9043 0.587839 7.22793 1.47297 6.11397C2.3581 5 4.04322 5 7.41345 5H12.4813C15.8516 5 17.5367 5 18.4218 6.11397C19.3069 7.22793 18.9539 8.9043 18.2477 12.2572L17.8265 14.2572C17.3478 16.5297 17.1085 17.666 16.2975 18.333C15.4866 19 14.3445 19 12.0601 19H7.83469C5.55034 19 4.40816 19 3.59722 18.333C2.78627 17.666 2.54695 16.5297 2.06832 14.2572L1.64708 12.2572Z"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className={'text-sm font-bold'}>{store.cart.length}</span>
        </IconContainer>

        <Hamburger className={'lg:hidden'} onToggle={setShow} />
      </div>
    </section>
  );
};
