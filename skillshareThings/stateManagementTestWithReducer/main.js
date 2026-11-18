"use strict";

// function countReducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     case "MULTIPLY":
//       return { ...state, count: state.count * 2 };
//     default:
//       return state;
//   }
// }
//
// let state = { count: 0 };
//
// state = countReducer(state, { type: "INCREMENT" });
// console.log(state); // { count: 1 }
//
// state = countReducer(state, { type: "INCREMENT" });
// console.log(state); // { count: 2 }
//
// state = countReducer(state, { type: "MULTIPLY" });
// console.log(state); // { count: 4 }
//
// state = countReducer(state, { type: "DECREMENT" });
// console.log(state); // { count: 3 }

const initialUser = {
  username: "Ronnel",
  email: "ronnel@gmail.com",
};

let state = initialUser;

function changeName(username) {
  return {
    type: "CHANGE_NAME",
    payloadType: {
      username,
    },
  };
}

function changeEmail(email) {
  return {
    type: "CHANGE_EMAIL",
    payloadType: {
      email,
    },
  };
}

function userReducer(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, username: action.payloadType.username };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payloadType.email };
    default:
      return state;
  }
}

function dispatch(action) {
  state = userReducer(state, action);
}
