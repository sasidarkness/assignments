const user = {
  name: "Sasi",

  login() {
    console.log(`${this.name} has logged in.`);
  },

  logout() {
    console.log(`${this.name} has logged out.`);
  }
};


user.login();
user.logout();
