<template>
  <Nav/>
  <div class="container">
    <ShowPasswords/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import ShowPasswords from './components/ShowPasswords.vue'

export default {
  name: 'App',
  components: {
    Nav,
    ShowPasswords
  }
}
</script>

<style></style>
