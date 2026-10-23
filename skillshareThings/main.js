import { render, displayUserMessage } from "./utils/render.js";
import { checkAuth as checkAuthUtil } from "./utils/auth.js";

export default class App {
  constructor() {
    this.getRootElement();
    this.userMessage = document.getElementById("user-message");
    this.checkAuth();
  }

  checkAuth() {
    const user = true;

    const authResult = checkAuthUtil(user);

    displayUserMessage(
      this.userMessage,
      authResult.message,
      authResult.isAuthenticated,
    );
  }

  getRootElement() {
    const root = document.getElementById("root");
    render(root);
  }
}
