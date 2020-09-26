import HttpClient from "./HttpClient";
import Csrf from "./Csrf";

export default {
  async register(form) {
    await Csrf.getCookie();
    return HttpClient.post("/register", form);
  },

  async login(form) {
    await Csrf.getCookie();
    return HttpClient.post("/login", form);
  },

  async logout() {
    await Csrf.getCookie();
    return HttpClient.post("/logout");
  },

  me() {
    return HttpClient.get("/api/user");
  }
};