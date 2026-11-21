// Todo: Store Creation

export function createStore(reducer) {
  let state = Object.freeze(reducer(undefined, { type: "@@INIT" }));
  const listener = [];

  function getState() {
    return Object.freeze(state);
  }

  // todo: subscribe()

  function subscribe(callback) {
    listener.push(callback);

    // todo: Unsubscribe()

    return function unsubscribe() {
      const index = listener.indexOf(callback);

      if (index !== -1) {
        listener.splice(index, 1);
      }
    };
  }

  // todo: DISPATCH

  function dispatch(action) {
    const previousState = state;

    state = Object.freeze(reducer(state, action));

    if (previousState !== state) {
      listener.forEach((callback) => {
        callback(state);
      });
    }
  }

  return { getState, subscribe, dispatch };
}
