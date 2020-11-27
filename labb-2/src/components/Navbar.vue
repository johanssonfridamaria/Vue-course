<template>
  <nav v-if="!active" class="d-flex">
    <h1>LOGO</h1>
    <ul>
      <li><p>Please sign in</p></li>
    </ul>
  </nav>
  <nav v-else class="d-flex">
    <h1>LOGO</h1>
    <ul class="d-flex">
      <li><p> {{ name }} </p></li>
      <li><a href="#" @click="signOut">Sign out</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: ['name','active'],
  methods:{
      signOut(){
          this.$emit("signOut-user");
      }
  }
};
</script>

<style scoped>
nav {
  background-color: #6ea7b1;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}
ul{
    list-style-type: none;
    align-items: center;
}
p{
    padding: 1.5rem;
}
a {
  text-decoration: none;
  padding: 1.5rem;
  color: #fff;
  display: inline-block;
}
a:hover{
    background-color: rgba(0,0,0,0.25);
}
</style>