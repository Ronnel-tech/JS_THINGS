"use strict";

// todo: INITIAL STATE

const initialUser = {
  username: "Ronnel",
  email: "ronnel@gmail.com",
};

// todo: ACTION

function changeName(username) {
  return {
    type: "CHANGE_NAME",
    payload: {
      username,
    },
  };
}

function changeEmail(email) {
  return {
    type: "CHANGE_EMAIL",
    payload: {
      email,
    },
  };
}
// todo: REDUCER

function userReducer(state = initialUser, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      if (typeof action.payload?.username !== "string") {
        return state;
      }
      return { ...state, username: action.payload.username };
    case "CHANGE_EMAIL":
      if (typeof action.payload?.email !== "string") {
        return state;
      }
      return { ...state, email: action.payload.email };
    default:
      return state;
  }
}

// Todo: Store Creation

function createStore(reducer) {
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

// INITIALIZE STORE
const store = createStore(userReducer);

// SUBSCRIBE

const unsubscribeUsername = store.subscribe((currentState) => {
  console.log("Username: ", currentState.username);
});

const unsubscribeEmail = store.subscribe((currentState) => {
  console.log("Email: ", currentState.email);
});

// todo: TEST

// TEST UNSUBSCRIBE
unsubscribeUsername();
unsubscribeEmail();

// TEST DISPATCH

store.dispatch(changeName("Red"));
store.dispatch(changeEmail("god@gmail.com"));

store.dispatch(changeName("John"));

// GET UPDATED STATE
console.log("Final state:", store.getState());
