import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {AppRoute} from '../util/const';
import HeaderNav from './header-user';
import Header from './header';
import Footer from './footer';

const getLayoutState = (pathname: AppRoute) => {
  let pageClassName: string = 'page';
  let logoLinkClassName: string = 'header__logo-link';
  let headerNav: React.JSX.Element | null = <HeaderNav />;
  let footer: React.JSX.Element | null = null;

  if (pathname === AppRoute.Main) {
    pageClassName += ' page--gray page--main';
    logoLinkClassName += ' header__logo-link--active';
  } else if (pathname === AppRoute.Login) {
    pageClassName += ' page--gray page--login';
    headerNav = null;
  } else if (pathname === AppRoute.Favorites) {
    footer = <Footer />;
  }

  return {pageClassName, logoLinkClassName, headerNav, footer};
};

export default function Layout(): React.JSX.Element {
  const {pathname} = useLocation();
  const {pageClassName, headerNav, footer} = getLayoutState(pathname as AppRoute);

  return (
    <div className={pageClassName}>
      <Header headerNav={headerNav}/>
      <Outlet />
      {footer}
    </div>
  );
}
