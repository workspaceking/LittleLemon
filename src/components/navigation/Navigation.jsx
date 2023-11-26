import PropTypes from 'prop-types';
import { CartButton } from '../Icons/CartButton';
import { Hamburger } from '../Icons/Hamburger';
import { useState } from 'react';
import { navigation_links } from '@data/index';
import { Link } from 'react-router-dom';

export const Navigation = (_props) => {
  const [show, setShow] = useState(true);
  return (
    <section className="relative lg:static h-20 justify-between px-3 lg:px-0 lg:justify-center items-center gap-16 flex bg-primary">
      <img
        className="w-60 h-16 mix-blend-plus-lighter"
        src="./assets/images/logo.png"
      />
      {show && (
        <nav
          data-testid="_primaryNav"
          className="absolute lg:static  top-full bg-surface lg:bg-primary py-6 right-0 left-0 border-[6px] border-primary lg:border-none rounded-bl-2xl rounded-br-2xl lg:rounded-none   justify-center items-center gap-9 flex-wrap lg:flex-nowrap flex text-primary lg:text-gray"
        >
          {navigation_links.map(({ title, to }, index) => (
            <Link
              key={index}
              to={to}
              title={title}
              className="text-zinc-100 text-lg font-bold font-['Karla'] capitalize"
            >
              {title}
            </Link>
          ))}
        </nav>
      )}
      <div className="gap-6 rounded-lg justify-center items-center flex">
        <CartButton />
        <Hamburger className={'lg:hidden'} onToggle={setShow} />
      </div>
    </section>
  );
};

Navigation.propTypes = {
  second: PropTypes.string,
};
