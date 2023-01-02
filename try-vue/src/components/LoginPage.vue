<script>
import axios from "axios";
export default {
  name: "LoginPage",
  methods: {
    login: (e) => {
      e.preventDefault();
      let email = "user@email.com";
      let password = "password";
      let login = () => {
        let data = {
          email: email,
          password: password,
        };
        axios
          .post("/api/login", data)
          .then((response) => {
            console.log("Logged in", response);
            router.push("/dashboard");
          })
          .catch((errors) => {
            console.log("Cannot log in", errors);
          });
      };
      login();
    },
  },
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <form v-on:submit="login">
      <input type="text" name="email" /><br />
      <input type="password" name="password" /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>
