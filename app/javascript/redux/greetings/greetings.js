// constants
const FETCH_GREETINGS = 'hello-rails-react/greetings/FETCH_GREETINGS';
const baseURL = '/v1/greetings';

// initial state
const initialState = [];

// action creators
export const fetchGreetings = (payload) => ({
  type: FETCH_GREETINGS,
  payload,
});

// thunk action functions
export const fetchGreetingsFromAPI = () => async (dispatch) => {
  await fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(fetchGreetings(data));
    });
};

// reducer
const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.payload;
    default:
      return state;
  }
};

export default greetingsReducer;
