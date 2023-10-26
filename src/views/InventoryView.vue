<template>
  <div>
    <h1>Inventory</h1>
    <div class="up"></div>
    <p>
      <button class="btn success">New</button>
    </p>
    <div class="table">
      <table class="main">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Image</th>
            <th>Material</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in inventory" :key="item.id">
            <td><button @click="counter.increment()">+</button></td>
            <td><button @click="counter.decrement()">-</button></td>
            <td>
              <span
                ><input type="number" :value="counter.count" min="0"
              /></span>
            </td>
            <td><img alt="material image" src="../assets/materials.png" /></td>
            <td>{{ item.material }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="bottom"></div>
</template>

<script>
// import { useStore } from "@/store/index";
import { useCounterStore } from "@/store/counter";
export default {
  /* computed: {
         inventory() {
             return useStore().inventory; // Get data from inventory
         },
     },*/
  /* created() {
         // Mount the component
         useStore().loadInventory();
     },*/
  setup() {
    const counter = useCounterStore();
    return { counter };
  },
  data() {
    return {
      inventory: [
        { id: 1, material: "Brick", image: "", quantity: 40, price: 15 },
        { id: 2, material: "Wood", image: "", quantity: 150, price: 45 },
        { id: 3, material: "Plywood", image: "", quantity: 200, price: 25 },
        { id: 4, material: "Glass Tile", image: "", quantity: 150, price: 35 },
      ],
    };
  },
  methods: {
    increment() {
      console.log("++");
      this.count++;
    },
    decrement() {
      console.log("--");
      this.count--;
    },
  },
  /*load() {
      fetch(
        "mongodb+srv://ed2295:m1l8m1lwdes@cluster0.amcrano.mongodb.net/?retryWrites=true&w=majority"
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
    }*/
};
</script>

<style scoped lang="scss">
div.up {
  width: 100%;
  height: 50px;
  background: #22c46a;
  border-color: 1px solid #22c46a;
  margin-bottom: 25px !important;
}

div.table {
  margin-top: 15px !important;
}

.main {
  /* your styles here */
  margin: 0 auto !important;
}

table.main {
  width: 80%;
  margin-bottom: 1rem;
  color: #061320;
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
  margin-top: 25px !important;
}

span {
  font-size: 25px;
  cursor: pointer;
}

.btn {
  border: 2px solid black;
  background-color: #808000;
  color: #fff;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 20px !important;
  float: left !important;
}

.default {
  border-color: #808000;
  color: #fff;
}

.default:hover {
  background: #e7e7e7;
}
</style>
