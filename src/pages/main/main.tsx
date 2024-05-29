import {useState} from 'react';
import { Helmet } from 'react-helmet-async';
import OffersList from '../offer/offers-list';
import { TOffer, TCity } from '../../util/types';
import {cities} from '../../mocks/city';
import LocationList from '../../components/map/list';


export default function WelcomeScreen ({offers}: {offers: TOffer[]}): JSX.Element {

  const [activeCity, setActiveCity] = useState<TCity>(cities[0]);

  function onCityItemClick(selectedCity: TCity): void {
    cities.some((city) => {
      if (city === selectedCity) {
        setActiveCity(selectedCity);
        return true;
      }
      return false;
    });
  }

  const offersFiltered = offers.filter((offer) => offer.city === activeCity);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов</title>
      </Helmet>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList offers={offers} activeCity={activeCity} onCityItemClick={onCityItemClick} />
        </div>
        <div className="cities">
          <OffersList offers={offersFiltered} activeCity={activeCity} nameBlock='Places' />
        </div>
      </main>
    </div>
  );
}
