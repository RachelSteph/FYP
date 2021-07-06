import jwt_decode from "jwt-decode";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login = (res, status, history, values) => {
    this.authenticated = false;

    if (values.username === status.username && values.password === status.password) {
      this.authenticated = true;
      if (status.data.dataValues.role === "CLIENT") {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data, isAuthenticated: this.authenticated })
        );

        history.replace({
          pathname: "/clienthome",
          // state: { credentials: JSON.stringify(status) },
        });
      }
      if (status.data.dataValues.role === "AGENT") {
        localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data, isAuthenticated: this.authenticated })
        );

        history.replace({
          pathname: "/agencyhome",
          // state: { credentials: JSON.stringify(status) },
        });
      }
    }
  };
}

export default new Auth();