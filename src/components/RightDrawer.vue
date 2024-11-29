<template>
    <div class="leftDrawer">
        <div class="firstDiv">
      <h4>Shoping Cart</h4>
      <a href="#" @click="close" class="close-btn">
        <!-- <img class="del" src="../assets/cross.png" alt=""> -->
        <span>Close</span></a>
        </div>
        <hr class="tophr"/>
        <div>
          <div class="div-2" v-for="(product) in cartItems" :key="product.id" :product="product" >
          <img :src="product.image" alt="">
          <div class="title&price">
            <h4>{{ product.title }}</h4>
            <p class="price"><span>{{ product.quantity }} <span>X</span></span>{{ product.price}}</p>
          </div>
         
          <a href="#" ><img class="del" src="../assets/cross.png" alt=""></a>
        <hr class="hrLine"/>

        </div>
        </div>
      

    </div>

</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name:"RightDrawer",
    props: {
        close: Function
    },
    data(){
        return {
          quantity:0,
        //   products:[
        //           {
        //             id: 1,
        //             title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        //             price: 109.95,
        //             description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        //             category: "Bag",
        //             quantity:1,
        //             image: require('@/assets/images/81fPKd-2AYL._AC_SL1500_.jpg'),
        //             rating: {
        //             rate: 3.9,
        //             count: 120
        //             }
        //           },
        //           {
        //             id: 2,
        //             title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        //             price: 109.95,
        //             quantity:2,
        //             description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        //             category: "men's clothing",
        //             image: require('@/assets/images/71YXzeOuslL._AC_UY879_.jpg'),
        //             rating: {
        //             rate: 3.9,
        //             count: 120
        //             }
        //         },
        // ]
        }
    },
    computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    ...mapActions(['incrementCartItem', 'decrementCartItem', 'removeFromCart']),
    increment(productId) {
      console.log("thisIncrementFunction")
      this.incrementCartItem(productId);
    },
    decrement(productId) {
      console.log("thisDecrementFunction")
      this.decrementCartItem(productId);
    },
    removeFromCart(productId) {
    // Call the mutation directly on the store
    this.$store.commit('REMOVE_FROM_CART', productId);
  }
}
}

</script>
<style scoped>

.leftDrawer {
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: white;
  width: 350px;
  padding: 0px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y:scroll;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);
   /* Hidden by default */
}
hr.tophr{
  position: fixed;
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  left: 0px;
  margin: 60px 0px;
}
.div-2{
  display: flex;
  justify-content: space-around;
  align-items: unset;
  padding: 10px 16px;
  margin: 9px 0px;

}
.div-2 img{
  width: 70px;
  height: 70px;
  border-radius: 5px;

}
.div-2 h4{
  padding: 0px 10px;
    margin: 0px;
    font-size: 13px;
    font-weight: revert;
    color: grey;
}
span{    
  color: grey;
  font-size: 15px;
  padding: 0px 5px;
  font-weight: normal;
}
.div-2 a{
  position: relative;
  top: 0px;
  right: 0px;
}
.div-2 a img{
    width: 15px;
    height: 15px;
    padding: 0px 10px;
}
.div-2 .price{
    float: left;
    font-size: 16px;
    font-weight: 700;
    color: #3C76CE;
    padding: 0px 0px;
    margin: 10px 22px;
}
/* Open the sidebar */
.leftDrawer.open {
  transform: translateX(0);
}

/* Header Section */
.firstDiv {
  display: flex;
  align-items: flex-start;
  gap: 55%;
  padding: 0px 17px
}


/* Close Button */
.close-btn {
  text-decoration: none;
  color: black;
  padding: 20px 0px;
  cursor: pointer;
}

.close-btn:hover {
  color: rgb(136, 134, 134);
  transition: color 0.3s;
}

/* Divider */
hr.hrLine{
  margin-top: 10px;
  position: fixed;
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  left: 0px;
  padding: 40px 0px;
  margin: 80px 0px;
}

/* Responsiveness */
@media (max-width: 500px) {
  .leftDrawer {
    width: 100%;
  }
}
</style>