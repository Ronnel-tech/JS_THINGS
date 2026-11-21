import { createStore } from "./createStore.js";
import { createUserProfileElements } from "./render.js";
import { changeBoth, userReducer } from "./userProfileState.js";

const store = createStore(userReducer);

export const unsubscribeUsername = store.subscribe(({ username }) => {
  console.log("Username: ", username);
});

export const unsubscribeEmail = store.subscribe(({ email }) => {
  console.log("Email: ", email);
});

const {
  fragment,
  usernameDisplay,
  emailDisplay,
  newUsernameInput,
  newEmailInput,
  changeNameButton,
} = createUserProfileElements();

document.body.append(fragment);

function render({ username, email }) {
  usernameDisplay.textContent = username;
  emailDisplay.textContent = email;
}

render(store.getState());
store.subscribe(render);

changeNameButton.addEventListener("click", () => {
  const username = newUsernameInput.value.trim();
  const email = newEmailInput.value.trim();

  if (!username || !email) {
    alert("Please fill in both fields.");
    return;
  }

  store.dispatch(changeBoth(username, email));
});
