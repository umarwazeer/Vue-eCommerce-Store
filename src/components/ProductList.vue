<template>
  <div class="listItem">
      <h3>Latest produts Here</h3>
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
  </template>
  
  <script>
  import {  mapActions } from 'vuex';
  import ProductCard from './ProductCard.vue';
  
  export default {
    components: { ProductCard },
    data(){
        return {
            // products:[
            //       {
            //         id: 1,
            //         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            //         price: 109.95,
            //         description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            //         category: "Bag",
            //         image: require('@/assets/images/81fPKd-2AYL._AC_SL1500_.jpg'),
            //         rating: {
            //         rate: 3.9,
            //         count: 120
            //         }
            //       },
            //       {
            //         id: 2,
            //         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            //         price: 109.95,
            //         description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            //         category: "men's clothing",
            //         image: require('@/assets/images/71YXzeOuslL._AC_UY879_.jpg'),
            //         rating: {
            //         rate: 3.9,
            //         count: 120
            //         }
            //     },
            //     {
            //         id: 3,
            //         nmae: "men shoes ",
            //         title: "This shoes is for summer vacations",
            //         price: 2323.00,
            //         category: "men's clothing",
            //         preprice: 2322.2,
            //         image: require('@/assets/images/71li-ujtlUL._AC_UX679_.jpg') // Correct path using `@` alias
            //     },
            //     {
            //         id: 4,
            //         nmae: "men shoes ",
            //         title: "This shoes is for summer vacations",
            //         price: 2323.00,
            //         category: "men's gerCy",
            //         preprice: 2322.2,
            //         image: require('@/assets/images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg') // Correct path using `@` alias
            //     },
            //     {
            //         id: 3,
            //         nmae: "men shoes ",
            //         title: "This shoes is for summer vacations",
            //         price: 2323.00,
            //         category: "men's clothing",
            //         preprice: 2322.2,
            //         image: require('@/assets/images/71li-ujtlUL._AC_UX679_.jpg') // Correct path using `@` alias
            //     },
            //     {
            //         id: 4,
            //         nmae: "men shoes ",
            //         title: "This shoes is for summer vacations",
            //         price: 2323.00,
            //         category: "men's gerCy",
            //         preprice: 2322.2,
            //         image: require('@/assets/images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg') // Correct path using `@` alias
            //     },
            //     {
            //         id: 3,
            //         nmae: "men shoes ",
            //         title: "This shoes is for summer vacations",
            //         price: 2323.00,
            //         category: "men's clothing",
            //         preprice: 2322.2,
            //         image: require('@/assets/images/71li-ujtlUL._AC_UX679_.jpg') // Correct path using `@` alias
            //     },
            //     {
            //         id: 4,
            //         nmae: "men shoes ",
            //         title: "This shoes is for summer vacations",
            //         price: 2323.00,
            //         category: "men's gerCy",
            //         preprice: 2322.2,
            //         image: require('@/assets/images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg') // Correct path using `@` alias
            //     },
            //     // {
            //     //     id: 5,
            //     //     nmae: "men shoes ",
            //     //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            //     //     price: 2323.00,
            //     //     category: "AirPods",
            //     //     preprice: 2322.2,
            //     //     image: require('@/assets/images/airpods.jpeg') // Correct path using `@` alias
            //     // },
            //     // {
            //     //     id: 6,
            //     //     nmae: "men shoes ",
            //     //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            //     //     price: 2323.00,
            //     //     category: "AirPods",
            //     //     preprice: 2322.2,
            //     //     image: require('@/assets/images/airpods2.jpg') // Correct path using `@` alias
            //     // }

            // ]
        }
    },
    computed: {
    // Map `allProducts` from Vuex as `products`
    // ...mapGetters({
    //   products: 'allProducts'
    // })
   products(){
    return this.$store.state.products;
   }
  },
  methods: {
    // Map fetchProducts action to load products
    ...mapActions(['fetchProducts'])
  },
  mounted() {
    this.fetchProducts();
  }

  };
  </script>
<style scoped>
.listItem{
  padding: 50px 0px;
  margin: 69px;
  text-align: center;
}
.listItem h3{
  /* padding-left: 15%; */
  font-size: 25px;
  font-family: revert-layer;
}
.product-list{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    padding: 10px 100px;
    padding-bottom: 20px;

}
</style>