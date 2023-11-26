import { HomeHero } from '@app/components/pages';
import { Header } from '@app/elements';
import { Navigation, Footer } from '@components/index';
import PropTypes from 'prop-types';

export const Layout = ({ Hero, childAsHero = false, ...props }) => {
  return (
    <div className="p-sm bg-surface flex-col justify-start items-center gap-3xl flex">
      <header className="flex flex-col justify-start items-center min-h-[720px] w-full  gap-3xl p-sm rounded-bl-xl rounded-br-xl bg-primary border-[6px] border-primary">
        <Navigation />
        <div
          data-testid="_hero"
          className="max-w-[1296px] w-full gap-2xl  justify-center items-center flex"
        >
          {childAsHero ? props.children : <Hero />}
        </div>
      </header>
      {!childAsHero && (
        <main
          className={
            'p-sm bg-surface flex-col justify-start items-center gap-3xl flex'
          }
        >
          {props.children}
        </main>
      )}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  Hero: PropTypes.func,
  childAsHero: PropTypes.bool,
};
