<template>
  <p>Hola, esto es un componente child de otro componente</p>
  <p>A su vez, este otro componente es child de App.vue</p>
  <p>{{ textData }}</p>
</template>

<script>
// import api from "../services/api"

export default {
  name: "ShowSpecificPassword",

  props: {
    textData: String
  },

  data: () => ({
  }),

  mounted() {
    // this.$root.$on("show-passw", (data) => {
    //     console.log("La data recibida es:", data)
    //     this.textData = data;
    // })

  }
 


}
</script>

<style></style>
