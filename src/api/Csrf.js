import HttpClient from "./HttpClient";

export default {
  getCookie() {
    return HttpClient.get("/sanctum/csrf-cookie");
  }
};