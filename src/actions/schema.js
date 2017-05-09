import { schema } from 'normalizr';

export const place = new schema.Entity('places');
export const arrayOfPlaces = new schema.Array(place);

export const destination = new schema.Entity('destinations');
export const arrayOfDestinations = new schema.Array(destination);
