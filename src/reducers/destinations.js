import { combineReducers } from 'redux';
import { getVisiblePlacesHash } from './places';
import { swapArrayPosition, removeArrayElement } from '../utils/helpers';

const destinationsHashById = (state = {}, action) => {
  if (action.destinationResponse) {
    const destinations = action.destinationResponse.entities.destinations;
    return {
      ...state,
      ...destinations
    };
  } else {
    switch (action.type) {
      case 'RECEIVE_REMOVE_DESTINATION_SUCCESS':
        var newState = { ...state };
        delete newState[action.selectedId];
        return newState;
      default:
        return state;
    }
  }
};

const createFilteredList = (filter) => {
  return (state = [], action) => {
    switch (action.type) {
      case 'RECEIVE_DESTINATIONS_SUCCESS':
        return action.destinationResponse.result;
      case 'RECEIVE_ADD_DESTINATION_SUCCESS':
        return [...state, action.destinationResponse.result];
      case 'RECEIVE_SWAP_POSITION_UP_DESTINATION_SUCCESS':
        const indexUp = state.indexOf(action.selectedId);
        return swapArrayPosition(state, indexUp, indexUp - 1);
      case 'RECEIVE_SWAP_POSITION_DOWN_DESTINATION_SUCCESS':
        const indexDown = state.indexOf(action.selectedId);
        return swapArrayPosition(state, indexDown, indexDown + 1);
      case 'RECEIVE_REMOVE_DESTINATION_SUCCESS':
        return removeArrayElement(state, state.indexOf(action.selectedId));
      default:
        return state;
    }
  }
};

const idsByFilter = combineReducers({
  all: createFilteredList('all')
});

const selectedId = (state = {}, action) => {
  if (action.selectedId && state.selectedId != action.selectedId) {
    return {
      selectedId: action.selectedId
    }
  }
  return state;
};

const destinations = combineReducers({
  destinationsHashById,
  idsByFilter,
  selectedId
});

export default destinations;

export const getVisibleDestinations = (state, filter) => {
  const ids = state.idsByFilter['all'];
  return ids.map(id => state.destinationsHashById[id]);
};

export const getSelectedIdDestination = (state) => {
  return state.selectedId;
};