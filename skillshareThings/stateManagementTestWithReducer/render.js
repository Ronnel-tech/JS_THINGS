export function createUserProfileElements() {
  const heading = document.createElement("h1");
  heading.textContent = "User Profile";

  const usernameDisplay = document.createElement("span");
  usernameDisplay.id = "username";
  const usernameRow = document.createElement("p");
  usernameRow.append("Username: ", usernameDisplay);

  const emailDisplay = document.createElement("span");
  emailDisplay.id = "email";
  const emailRow = document.createElement("p");
  emailRow.append("Email: ", emailDisplay);

  const newUsernameInput = document.createElement("input");
  newUsernameInput.type = "text";
  newUsernameInput.id = "new-username";

  const newEmailInput = document.createElement("input");
  newEmailInput.type = "text";
  newEmailInput.id = "new-email";

  const changeNameButton = document.createElement("button");
  changeNameButton.id = "change-name";
  changeNameButton.textContent = "Change Username";

  const fragment = document.createDocumentFragment();
  fragment.append(
    heading,
    usernameRow,
    emailRow,
    newUsernameInput,
    " ",
    newEmailInput,
    " ",
    changeNameButton,
  );

  return {
    fragment,
    usernameDisplay,
    emailDisplay,
    newUsernameInput,
    newEmailInput,
    changeNameButton,
  };
}
