import React from 'react';
import Logo from './logo';

type HeaderParams = {
  headerNav: React.JSX.Element | null;
}

export default function Header({headerNav}: HeaderParams): React.JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {headerNav}
        </div>
      </div>
    </header>
  );
}
