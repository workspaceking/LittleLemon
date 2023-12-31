import { HomeHero } from '@app/components/pages';
import { Header } from '@app/elements';
import { Navigation, Footer } from '@components/index';
import PropTypes from 'prop-types';

export const Layout = ({ Hero, childAsHero = false, ...props }) => {
  return (
    <>
      <header
        role="banner"
        className="vstack justify-start items-center min-h-[720px] w-full  gap-3xl p-sm rounded-bl-xl rounded-br-xl bg-primary border-[6px] border-primary"
      >
        <Navigation />
        <div
          data-testid="_hero"
          className="w-full gap-2xl  justify-center items-center hstack flex-1"
        >
          {childAsHero ? props.children : <Hero />}
        </div>
      </header>
      {!childAsHero && (
        <main
          role={'main'}
          className={'p-sm  vstack justify-start items-center gap-3xl mt-3xl'}
        >
          {props.children}
        </main>
      )}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  Hero: PropTypes.func,
  childAsHero: PropTypes.bool,
};
