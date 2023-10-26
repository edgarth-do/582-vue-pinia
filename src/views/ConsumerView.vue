<template>
  <div class="consumer-view">
    <h1>Room to be Renovated</h1>
    <div class="up"></div>
    <RoomBox v-bind:roomEntries="roomEntries" />
    <div class="bottom"></div>
  </div>
</template>

<script>
import RoomBox from "@/components/RoomBox.vue";
export default {
  name: "ConsumerView",
  components: {
    RoomBox,
  },
  data() {
    return {
      roomEntries: [
        {
          id: 1,
          title: "Dinner Room",
          image: "rooms.png",
        },
        {
          id: 2,
          title: "Kitchen",
          image: "rooms.png",
        },
        {
          id: 3,
          title: "Living Room",
          image: "rooms.png",
        },
        {
          id: 4,
          title: "Main Room",
          image: "rooms.png",
        },
        {
          id: 5,
          title: "Kids Room",
          image: "rooms.png",
        },
        {
          id: 6,
          title: "Bath Room",
          image: "rooms.png",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.consumer-view {
  div.up {
    width: 100%;
    height: 50px;
    background: #475464;
    border-color: 1px solid #475464;
    margin-bottom: 12px !important;
  }

  div.bottom {
    width: 100%;
    height: 50px;
    background: #475464;
    border-color: 1px solid #475464;
    margin-bottom: 270px !important;
  }

  div.box {
    margin: 0 auto;
    width: 130px;
    height: 130px;
    background-color: #96a5b8 !important;
    margin-left: 40px !important;
    margin-right: 40px !important;
  }

  /*.room-entries {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .room-entry {
        width: 30%;
        margin-bottom: 20px;*/
}
</style>
