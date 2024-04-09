import { Helmet } from 'react-helmet-async';
import OffersList from '../offer/offers-list';
import { TOffer } from '../../util/types';
import {cities} from '../../mocks/city';
import LocationList from '../../components/map/list';


export default function WelcomeScreen ({offers}: {offers: TOffer[]}): JSX.Element {
  const activeCity = cities[0];
  const offersFiltered = offers.filter((offer) => offer.city === activeCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов</title>
      </Helmet>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList offers={offers} activeCity={activeCity} />
        </div>
        <div className="cities">
          <OffersList offers={offersFiltered} activeCity={activeCity} />
        </div>
      </main>
    </div>
  );
}
