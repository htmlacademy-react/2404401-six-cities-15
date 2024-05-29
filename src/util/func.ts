import { maxNearOffers } from './const';
import {TOffer} from '../util/types';

export function getNearOffers(offers: TOffer[], curOffer: TOffer): TOffer[] {
  const nearOffers = [];
  for (const offer of offers) {
    if (
      offer.city === curOffer.city
      && offer.id !== curOffer.id
      && nearOffers.length < maxNearOffers
    ) {
      nearOffers.push(offer);
    } else if (nearOffers.length === maxNearOffers) {
      break;
    }
  }
  return nearOffers;
}
