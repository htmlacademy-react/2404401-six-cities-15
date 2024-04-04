import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { TOffer } from './util/types.tsx';
import { generateOffers } from './mocks/offers.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offers: TOffer[] = generateOffers(20);

root.render(
  <React.StrictMode>
    <App
      offers={offers}
    />
  </React.StrictMode>
);
