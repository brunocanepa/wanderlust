
export const places = {
  requestPlaces: () => {
    return {
      type: 'REQUEST_PLACES'
    }
  },
  receivePlacesSuccess: (filter, response) => {
    return {
      type: 'RECEIVE_PLACES_SUCCESS',
      filter,
      placesResponse: response
    }
  }
};

export const destinations = {
  requestDestinations: () => {
    return {
      type: 'REQUEST_DESTINATIONS'
    }
  },
  receiveDestinationsSuccess: (filter, response) => {
    return {
      type: 'RECEIVE_DESTINATIONS_SUCCESS',
      filter,
      destinationResponse: response
    }
  },
  requestAdd: () => {
    return {
      type: 'REQUEST_ADD_DESTINATION'
    }
  },
  receiveAddSuccess: (response) => {
    return {
      type: 'RECEIVE_ADD_DESTINATION_SUCCESS',
      destinationResponse: response
    }
  },
  requestSwapPositionUp: () => {
    return {
      type: 'REQUEST_SWAP_POSITION_UP_DESTINATION'
    }
  },
  receiveSwapPositionUpSuccess: (selectedId) => {
    return {
      type: 'RECEIVE_SWAP_POSITION_UP_DESTINATION_SUCCESS',
      selectedId
    }
  },
  requestSwapPositionDown: () => {
    return {
      type: 'REQUEST_SWAP_POSITION_DOWN_DESTINATION'
    }
  },
  receiveSwapPositionDownSuccess: (selectedId) => {
    return {
      type: 'RECEIVE_SWAP_POSITION_DOWN_DESTINATION_SUCCESS',
      selectedId
    }
  },
  requestRemoveDestination: () => {
    return {
      type: 'REQUEST_REMOVE_DESTINATION'
    }
  },
  receiveRemoveDestinationSuccess: (selectedId) => {
    return {
      type: 'RECEIVE_REMOVE_DESTINATION_SUCCESS',
      selectedId
    }
  }
};

export const placeDetail = {
  requestPlaceDetail: () => {
    return {
      type: 'REQUEST_DETAIL'
    }
  },
  receivePlaceDetailSuccess: (response) => {
    return {
      type: 'RECEIVE_PLACE_DETAIL_SUCCESS',
      placeDetailResponse: response
    }
  },
  requestAddReview: () => {
    return {
      type: 'REQUEST_ADD_REVIEW'
    }
  },
  receiveAddReviewSuccess: (response) => {
    return {
      type: 'RECEIVE_ADD_REVIEW_SUCCESS',
      reviewResponse: response
    }
  }
};