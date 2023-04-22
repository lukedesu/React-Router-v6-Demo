class Auth {
  login(callback) {
    localStorage.setItem("isLoggedIn", "true");
    callback();
  }

  logout(callback) {
    localStorage.removeItem("isLoggedIn");
    callback();
  }

  isAuthenticated() {
    return localStorage.getItem("isLoggedIn") === "true";
  }
}

export default new Auth();
