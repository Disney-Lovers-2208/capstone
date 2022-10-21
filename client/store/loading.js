const initialState = {
  requests: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED: {
      //TODO
    }
    case REQUEST_FINISHED: {
      //TODO
    }
    case REQUEST_FAILED: {
      //TODO
    }
    default: {
      return state;
    }
  }
};
