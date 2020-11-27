<template>
  <div>
    <navbar :name="name" :active="active" @signOut-user="signOut"/>
    <div class="container d-flex main">
      <appForm :name="name" :password="password" :error="error" :active="active" @signIn-user="signIn" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import appForm from "./components/Form";

export default {
  name: "App",
  props: [''],
  components: {
    Navbar,
    appForm,
  },
  data(){
    return{
        name: '', 
        password: '', 
        active: false,
        error:false,
  }
  },
  methods:{
    signIn(newUser){
      this.name = newUser.name;
      this.password = newUser.password;
      this.active = newUser.active;
      },
      signOut(){
        this.name = '';
        this.password = '';
        this.active= false;
      },    
    }
  }
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.container {
  width: 80%;
  margin: auto;
}
.d-flex {
  display: flex;
}
.main {
  justify-content: center;
}
</style>
