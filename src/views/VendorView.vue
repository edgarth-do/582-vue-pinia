<template>
  <div class="vendor-view">
    <h1>Quote</h1>
    <div class="up"></div>

    <div class="table">
      <div class="room">
        <img alt="material image" src="../assets/rooms.png" />
      </div>
      <table class="main">
        <thead>
          <tr>
            <th>Image</th>
            <th>Material</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in inventory" :key="item.id">
            <td><img alt="material image" src="../assets/materials.png" /></td>
            <td>{{ item.material }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
      <p><span>Total</span></p>
    </div>

    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "VendorView",
  data() {
    return {
      inventory: [
        { id: 1, material: "Brick", image: "", quantity: 40, price: 120 },
        { id: 2, material: "Wood", image: "", quantity: 150, price: 45 },
        { id: 3, material: "Plywood", image: "", quantity: 200, price: 25 },
        { id: 4, material: "Glass Tile", image: "", quantity: 150, price: 35 },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.vendor-view {
  div.up {
    width: 100%;
    height: 50px;
    background: #475464;
    border-color: 1px solid #475464;
    margin-bottom: 25px !important;
  }

  div.table {
    width: 80%;
    margin-top: 15px !important;

    div.room {
      float: left;
      margin: 0 auto;
      padding-top: 150px !important;
      padding-left: 150px !important;
    }

    span {
      float: right;
      margin-right: 125px;
      margin-bottom: 100px !important;
    }
  }

  .main {
    margin: 0 auto !important;
  }

  table.main {
    width: 60%;
    margin-bottom: 1rem;
    color: #212529;
  }

  .main th,
  .main td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    text-align: center !important;
  }

  .main thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }

  div.bottom {
    width: 100%;
    height: 50px;
    background: #475464;
    border-color: 1px solid #475464;
    margin-top: 50px !important;
  }
}
</style>
