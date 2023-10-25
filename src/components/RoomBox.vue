<template>
  <div class="room">
    <table>
      <tr v-bind:key="item.id" v-for="item in roomEntries">
        <td>
          <div>
            <img
              alt="material image"
              :src="`../assets/${image}`"
              width="80%"
              height="80%"
            />
          </div>
          <p @click="redirect">{{ item.title }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "RoomBox",
  props: ["roomEntries"],
  methods: {
    redirect(event) {
      event.preventDefault();
      console.log("Redirect");
      window.location.href = "vendor";
    },
  },
};
</script>

<style scoped lang="scss">
div.box {
  padding-top: 15px !important;
  height: 350px !important;
  width: 500px !important;
  margin: 0 auto !important;
  border: 1px solid #000;
  background-color: pink;
  border-radius: 15px;
}

div.room {
  width: 100%;
  height: 250px !important;
  background-color: #fff;

  table {
    margin: 0 auto;
  }

  p {
    font-weight: bold;
  }
}
</style>
