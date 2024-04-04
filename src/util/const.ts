export const Setting = {
  messageCount: 3,
  placesCount: 312,
  cardsCount: 5,
} as const;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  OfferId = '/offer/:id',
  Offer = '/offer',
  Error404 = '/error404',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
