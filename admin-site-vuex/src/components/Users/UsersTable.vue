<template>
  <table class="table">
    <thead class="grey lighten-2">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Email</th>
        <th scope="col">Name</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <userItem v-for="user in this.users" :key="user.id" :user="user" />
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex';
import UserItem from './UserItem';

export default {
  name: 'UsersTable',
  components: {
    UserItem,
  },
  computed: {
    ...mapGetters(['users']),
  },
};
</script>

<style>
</style>