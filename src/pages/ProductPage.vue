<template>
    <div v-if="product">
      <h2>{{ product.title }}</h2>
      <img :src="product.image" alt="product image" />
      <p>{{ product.description }}</p>
      <p>Price: {{ product.price }}</p>
      <button @click="addToCart(product.id)" class="btn btn-primary">Add to Cart</button>
    </div>
  </template>
  
  <script>
//   import { mapGetters, mapActions } from 'vuex';
  
  export default {
    props: { product: Object },
    data(){
        return{
            // product:[
            //     {
            //         id: 1,
            //         nmae: "men shoes ",
            //         title: "This shoes is for summer vacations",
            //         price: 2323.00,
            //         preprice: 2322.2,
            //         image: require('@/assets/images/airpods.jpeg') // Correct path using `@` alias
            //     },
            //     {
            //         id: 2,
            //         nmae: "men shoes ",
            //         title: "This shoes is for summer vacations",
            //         price: 2323.00,
            //         preprice: 2322.2,
            //         image: require('@/assets/images/menshoes.jpeg') // Correct path using `@` alias
            //     },
            //     {
            //         id: 3,
            //         nmae: "men shoes ",
            //         title: "This shoes is for summer vacations",
            //         price: 2323.00,
            //         preprice: 2322.2,
            //         image: require('@/assets/images/airpods.jpeg') // Correct path using `@` alias
            //     }

            // ]
        }
    }
    // computed: {
    //   product() {
    //     const id = this.$route.params.id;
    //     return this.$store.getters['products/getProductById'](id);
    //   },
    //   ...mapGetters('cart', ['cartItems'])
    // },
    // methods: {
    //   ...mapActions('cart', ['addToCart']),
    // }
  };
  </script>
  