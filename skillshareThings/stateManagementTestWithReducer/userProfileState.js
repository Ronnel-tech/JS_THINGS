// todo: INITIAL STATE

export const initialUser = {
  username: "Ronnel",
  email: "ronnel@gmail.com",
};

// todo: ACTION

export function changeName(username) {
  return {
    type: "CHANGE_NAME",
    payload: {
      username,
    },
  };
}

export function changeBoth(username, email) {
  return {
    type: "CHANGE_BOTH",
    payload: {
      username,
      email,
    },
  };
}

export function changeEmail(email) {
  return {
    type: "CHANGE_EMAIL",
    payload: {
      email,
    },
  };
}
// todo: REDUCER

export function userReducer(state = initialUser, action) {
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
    case "CHANGE_BOTH":
      if (
        typeof action.payload?.username !== "string" ||
        typeof action.payload?.email !== "string"
      ) {
        return state;
      }

      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
      };
    default:
      return state;
  }
}
