import React, {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {TCity, TOffer} from '../../util/types';
import {currentCustomIcon, defaultCustomIcon} from '../../util/const';

type TMap = {
  className: string;
  offers: TOffer[];
  activeOffer: TOffer | null;
  activeCity: TCity;
}

export default function Map({className, offers, activeOffer, activeCity}: TMap): React.JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, activeCity.location);

  useEffect(() => {
    if (map) {
      map.setView([activeCity.location.latitude, activeCity.location.longitude], activeCity.location.zoom);
    }
  }, [activeCity, map]);

  useEffect((): void => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude
          },
          {icon: activeOffer && offer.id === activeOffer.id ? currentCustomIcon : defaultCustomIcon}
        )
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section
      className={`${className} map`}
      style={{ height: '631px' }}
      ref={mapRef}
    >
    </section>
  );
}
