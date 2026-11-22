// todo: Store student information

export function studentStore(reducer) {
  let state = Object.freeze(reducer(undefined, {type: "@@INIT"}));
  const listener = [];
  
  function getState() {
    return Object.freeze(state);
  }
  
  function subscribe(callback) {
    listener.push(callback);
    
    // todo: Unsubscribe 
    
    return function unsubscribe() {
      const index = listener.indexOf(callback);
      
      if(index !== -1) {
        listener.splice(index, 1);
      }
    }
  }
  
//   todo: Dispatch 
  function dispatch(action) {
    const prevState = state;

    state = Object.freeze(reducer(state, action));

    if (prevState !== state) {
      listener.forEach((callback) => {
        callback(state);
      });
    }
  }
  return { getState, subscribe, dispatch };
}