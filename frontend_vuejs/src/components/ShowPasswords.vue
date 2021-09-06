<template>
  <div class="container main">
    <h2>Mis contraseñas</h2>
    <hr />
    <table class="table table-hover">
      <thead>
        <tr class="table-dark">
          <th scope="col">Nombre</th>
          <th scope="col">Dominio</th>
          <th scope="col">Contraseña</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in this.passwordsData" :key="index">
          <td>{{ item.NameRegistration }}</td>
          <td>{{ item.domian }}</td>
          <td>
            <button
              type="button"
              @click="showSpecificPassword"
              class="btn btn-sm btn-outline-dark"
            >
              Ver
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <ShowSpecificPassword :textData="message" />
  </div>
  <p>{{ textData }}</p>
</template>

<script>
import api from "../services/api";
import ShowSpecificPassword from "./ShowSpecificPassword.vue";

export default {
  name: "ShowPasswords",

  components: {
    ShowSpecificPassword,
  },

  props: {},

  data: () => ({
    passwordsData: null,
    message: null
  }),

  methods: {
    showSpecificPassword: () => {
        this.message = "Roberto"
        // this.message = this.$refs.child.textData;
        // console.log(this.$refs.child);
    },
  },

//   provide() {
//     return {
//         textData: ""
//     };
//   },

  created() {
    api.getOnlyAllRegisters().then((res) => {
      this.passwordsData = res.data;
    });
  },
};
</script>

<style scoped>
.main {
  margin-block-start: 20px;
}

table {
  text-align: center;
  align-items: center;
}
</style>
