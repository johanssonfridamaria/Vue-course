<template>
    <tr>
      <th scope="row">{{ user.id}}</th>
      <td>{{ user.email}}</td>
      <td>{{ user.name}}</td>
    </tr>
</template>

<script>
export default {
  name: 'Useritem',
  props:['user']
}
</script>

<style>

</style>