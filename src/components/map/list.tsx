import React from 'react';
import {TCity, TOffer, TOffersByCity, } from '../../util/types';
import LocationItem from './points';

type TLocationList = {
  offers: TOffer[];
  activeCity: TCity;
  onCityItemClick: (city: TCity) => void;
}
function getOffersByCity(offers: TOffer[]): TOffersByCity[] {
  const offersByCity: TOffersByCity[] = [];
  offers.forEach((offer) => {
    const cityIndex: number = offersByCity.findIndex((group) => group.city.name === offer.city.name);
    if (cityIndex !== -1) {
      offersByCity[cityIndex].offers.push(offer);
    } else {
      offersByCity.push({city: offer.city, offers: [offer]});
    }
  });

  return offersByCity;
}

export default function LocationList({offers, activeCity, onCityItemClick}: TLocationList): React.JSX.Element {
  const offersByCity = getOffersByCity(offers);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          offersByCity.map((group) => (
            <LocationItem
              key={group.city.name}
              city={group.city}
              active={group.city === activeCity}
              onCityItemClick={onCityItemClick}
            />
          ))
        }
      </ul>
    </section>
  );
}
