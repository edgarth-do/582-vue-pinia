<template>
  <div class="box">
    <div class="head">
      <img id="logo" src="../assets/logo.png" alt="App logo" />
    </div>
    <div class="buttons">
      <button class="btn default">
        <router-link to="/inventory">VENDOR</router-link>
      </button>
      <button class="btn default">
        <router-link to="/consumer">CUSTOMER</router-link>
      </button>
    </div>
  </div>
</template>

<!-- <script setup>
import { useCounterStore } from "@/store/counter";

const counter = useCounterStore();
</script>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script> -->

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

div.box {
  padding-top: 15px !important;
  height: 350px !important;
  width: 500px !important;
  margin: 0 auto !important;
  border: 1px solid #000;
  background-color: #ececec;
  border-radius: 15px;
}

div.head {
  display: block;
  border: 1px solid #c8c235;
  width: 50%;
  height: auto;
  margin: 0 auto !important;
  border-radius: 15px;
  background-color: #c8c235;
}

img {
  max-width: 35%;
}

div.buttons {
  margin-top: 120px !important;
}

.btn {
  border: 3px solid black;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 15px;
  margin-left: 15px;
  margin-right: 15px;
}

.default {
  border-color: #e7e7e7;
  color: black;
}
</style>
