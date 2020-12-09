<template>
  <div class="container">
    <addUser/>
    <usersTable/>
  </div>
</template>

<script>
import AddUser from '../components/Users/AddUser'
import UsersTable from '../components/Users/UsersTable'


import {mapGetters} from 'vuex'

export default {
  name: 'UsersList',
  components: {
    AddUser,
    UsersTable,
  },
  computed: {
    ...mapGetters(['users']),
  },

}
</script>

<style>

</style>