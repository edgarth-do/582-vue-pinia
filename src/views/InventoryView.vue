<template>
    <div>
        <h1>Inventory</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Material</th>
                    <th>Image</th>
                    <th>Qty</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in inventory" :key="item.id">
                    <td>{{ item.Id }}</td>
                    <td>{{ item.Material }}</td>
                    <td><img :src="item.Image" alt="Material image" width="50"></td>
                    <td>{{ item.Qty }}</td>
                    <td>{{ item.Price }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import { useStore } from '@/store/index';
export default {
    computed: {
        inventory() {
            return useStore().inventory; // Get data from inventory
        },
    },
    created() {
        // Mount the component
        useStore().loadInventory();
    },
};
</script>