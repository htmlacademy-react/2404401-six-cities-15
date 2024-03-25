import WelcomeScreen from '../../pages/welcome-screen/welcome-screen.tsx';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import ErrorScreen from '../404/404.tsx';
import { AppRoute } from '../../const.ts';
import LoginScreen from '../../pages/login/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites/favorites-screen.tsx';
import OfferScreen from '../../pages/offer/offer-screen.tsx';

type WelcomeScreenProps = {
  messageCount: number;
  placesCount: number;
  cardsCount: number;
}

function App({messageCount, placesCount, cardsCount}: WelcomeScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<WelcomeScreen messageCount={messageCount} placesCount={placesCount} cardsCount={cardsCount} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={<FavoritesScreen />}
        />
        <Route
          path={AppRoute.Offer}
          element={<OfferScreen />}
        />
        <Route
          path="*"
          element={<ErrorScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
