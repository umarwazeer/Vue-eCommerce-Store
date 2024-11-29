<template>
  <h2>Shoping Cart</h2> 
   <main style="display: flex; ">
  <div class="tabldiv">
    <v-table>
      <thead class="theading">
        <th>Product</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Actions</th>
      </thead>
      

      <tbody v-if="cartItems.length > 0">
      <tr class="tdata" v-for="(product) in cartItems" :key="product.id" :product="product" >
        <td class="tableimage">
          <img :src="product.image" alt="product image" class="card-img-top" />
        </td>
        <td class="tabletitle">{{ product.title }}</td>
        <td class="tableprice">{{ `$${product.price}` }} </td>
        <td class="quantityBtn">
          <button @click="decrement(product.id)" class="increment">-</button>
           {{ product.quantity }}
          <button @click="increment(product.id)" class="decrement">+</button>
        </td>
        <td><a href="#" @click="removeFromCart(product.id)"><img class="del" src="../assets/cross.png" alt=""></a></td>
      </tr>

    </tbody>
    <p v-else>Your cart is empty.</p>

    </v-table>
    <div>
    <button v-if="cartItems.length != 0" class="ClearBtn" @click="clearCart">Clear Cart</button> 
  </div>
  </div>
   <div class="cartTotal">
  <cart-total/>
   </div>
  </main>
  
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import CartTotal from '@/components/CartTotal.vue';

export default {
    name:"ProductCart",
    components: {
        CartTotal
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
h2{
  margin-top: 100px;
  padding-right: 73%;

}
hr {
    width:98%;
    text-align:left;
    margin-right:10rem; 
    padding: 0px; 
    margin-top: 3px;
}
main{
  /* margin-top: 80px; */
}
.ClearBtn{
  padding: 10px 30px;
  margin: 10px 20px;
  float: right;
  max-width: 200px;
  background-color: #f7f7f7;
  color: #686565;
  font-size: 15px;
  font-weight: 300;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  border: none;
  cursor: pointer;

}
.ClearBtn:hover{
  background-color: #eceaea;
  border-radius: 5px;
  transition: .3s;
  

}
.cartTotal{
  width: 350px;
}
.quantityBtn{
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}
.quantityBtn button{
  margin: 30px 8px;
  padding: 8px;
  background-color: skyblue;
  color: white;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  font-size: 17px;
  cursor: pointer;

}
.tabldiv{
  max-width: 60%;
  text-align: center;
  padding: 25px;
  margin-left: 7%;
  background-color: white;
}
.theading th{
  padding: 14px 32px;
  text-transform: uppercase;
  font-size: 15px;
  background-color: #F6F9F8;
}
.tdata td{
  padding: 2% 0%;

}
.tabletitle{
  font-size: 14px;
      text-align: left;
}
img{
  width: 50px;
}
.spanData{
  display: flex;

}
table{
  width: 100%;
}
.del{
 width: 1rem;
 height: auto;
 text-align: center;

}
.thead{
  padding: 20%;
}
thead .th{
  width: 100%;
}
</style>
