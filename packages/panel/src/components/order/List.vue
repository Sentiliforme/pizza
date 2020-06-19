<template>
  <v-app></v-app>
</template>

<script>
//import axios from 'axios'
//import { BACKEND_URL } from '@/ENV'
export default {
  name: 'OrderList',
  data() {
    return {
      orders: [],
      isLoading: true
    }
  },
  async mounted() {
    //const response = await axios.get(BACKEND_URL + '/order')
    //this.orders = response.data
    this.orders = [
      {
        customer: {
          firstName: 'Juanito',
          lastName: 'Perez',
          mail: 'juanito@perez.com',
          phoneNumber: 12345678,
          address: 'Avenida Siempre Viva 123'
        },
        cart: {
          products: [
            {
              name: 'Margherita',
              totalPrice: 10990,
              amount: 2
            },
            { name: 'Super pepperoni', totalPrice: 7500, amount: 1 }
          ],
          customProducts: [
            {
              amount: 1,
              recipe: 'Base, choclo, champiñones, pimentones y albahaca'
            },
            {
              amount: 1,
              recipe: 'Base, carne mechada, camarones, jamon serrano'
            }
          ]
        },
        status: 'ConfirmationPending', // ConfirmationPending, Confirmed, Cooking, DeliveryInProgress, Delivered
        totalPrice: 15990
      }
    ]
    this.isLoading = false
    //console.log(response.data)
  }
}
</script>

<style scoped lang="scss">
</style>
