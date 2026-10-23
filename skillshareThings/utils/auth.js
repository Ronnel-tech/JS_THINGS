export function checkAuth(user) {
  if (user) {
    return {
      message: "Welcome back!",
      isAuthenticated: true,
    };
  }

  return {
    message: "You must sign in!",
    isAuthenticated: false,
  };
}
