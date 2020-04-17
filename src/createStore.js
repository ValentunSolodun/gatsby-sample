import { createStore } from 'redux';

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// preloadedState will be passed in by the plugin
export default preloadedState => {
  return createStore(reducer, preloadedState);
};
