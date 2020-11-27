<template>
  <div class="card">
    <h1>Sign In</h1>
    <form @submit.prevent="signIn">
      <div class="input-group d-flex">
        <label for="name">Name:</label>
        <input type="name" id="name" v-model="newName" />
      </div>
      <div class="input-group d-flex">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="newPassword" />
      </div>
      <button type="submit">Sign in</button>
      <p v-if="newError">You have already signed in!</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: ["name", "password", "active", "error"],
  data() {
    return {
      newName: this.name,
      newPassword: this.password,
      newError: this.error,
    };
  },
  methods: {
    signIn() {
      const isLoggedIn = this.active;
      if (isLoggedIn) {
        this.newError = true;
      } else {
      let user = {
        name: this.newName,
        password: this.newPassword,
        active: true,
        error:this.newError
      };
      this.$emit("signIn-user", user);
      this.newName = "";
      this.newPassword = "";
      this.newError = false;
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 4rem;
  border: 0.1rem solid #333;
  border-radius: 0.5rem;
  padding: 3rem 2rem;
  width: 30rem;
}
.input-group {
  margin: 2rem 0rem;
  flex-direction: column;
}
label {
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}
input {
  border: none;
  border-bottom: 0.1rem solid #333;
  outline: none;
  padding: 0.5rem 0;
}
button {
  background-color: #6ea7b1;
  padding: 0.7rem 1.5rem;
  color: #fff;
  border: 0.1rem solid #6ea7b1;
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
}
button:hover {
  background-color: #5f8d96;
}
p{
  margin-top: 1rem;
}
</style>