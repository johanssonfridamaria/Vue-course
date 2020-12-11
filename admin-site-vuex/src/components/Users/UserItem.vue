<template>
    <tr>
      <th scope="row">{{ user.id}}</th>
      <td>{{ user.email}}</td>
      <td>{{ user.name}}</td>
      <td><button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">X</button></td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Useritem',
  props:['user'],
  methods: {
    ...mapActions(['deleteUser']),
  }
}
</script>

<style>

</style>