<template>
  <div id="app">
    <div class="container">
      <h1>Ana Smartthing</h1>
    </div>
    <div class="container">
      <h2>Cor da Lâmpada</h2>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <button type="button" v-on:click="changeColor('blue')" class="btn btn-primary">Azul</button>
        </div>
        <div class="col">
          <button type="button" v-on:click="changeColor('gray')" class="btn btn-secondary">Cinza</button>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <button type="button" v-on:click="changeColor('green')" class="btn btn-success">Verde</button>
        </div>
        <div class="col">
          <button type="button" v-on:click="changeColor('red')" class="btn btn-danger">Vermelho</button>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <button type="button" v-on:click="changeColor('yellow')" class="btn btn-warning">Amarelo</button>
        </div>
        <div class="col">
          <button type="button" v-on:click="changeColor('white')" class="btn btn-light">Branco</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default {
  name: "lampada",
  data() {
    return {
      server: "http://localhost:4001"
    };
  },
  methods: {
    changeColor: function(color) {
      axios({
        url: this.server + "/" + color,
        method: "get"
      });
    }
  }
};
</script>
<style scoped>
.col {
  padding: 15px;
  justify-content: center;
}
</style>