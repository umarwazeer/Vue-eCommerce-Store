<template>
    <div v-if="cartItems.length > 0" class="main">
    <h2>Cart Totals</h2>
        <div class="total">Sub Total: <div class="subTotal">{{ cartTotal }}</div>    </div>
        <hr>
        <div class="total">Total:     <div class="Carttotal">{{ `${cartTotal}` }}</div>     </div>
        <hr>
        <button class="btn btn-primary" @click="clearCart">Checkout To Cart</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    name:"CartTotal",
    computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
}
</script>
<style scoped>
.Carttotal{
    color: #2192e2;
    font-size: 20px;
    font-weight:bold;
}
.subTotal{
    color: #747272;
}
h2{
    padding-bottom: 20px;

}
hr {
    width:98%;
    text-align:left;
    margin-left:0.1rem; 
    padding: 0px; 
    margin-top: 3px;
}
.total{
    font-family: 'Verdana', sans-serif;
    font-size: 1rem;
    color: #333;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    align-items: flex-start;
    justify-content: space-around;
    
}
.main{
    padding: 10px 20px; 
    margin-left: 10px;
    display: flex;
    gap: 10px;
    max-width: 250%;
    flex-direction: column;
    justify-content:space-evenly;
    background-color: white;
    border-radius: 10px;
    /* border: 3px solid rgb(219, 219, 219); */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}
.btn{
    padding: 10px ;
    margin-top: 10px;
    border: 1px solid cyan;
    background-color: #3c76ce;
    border-radius: 5px;
    color: white;
    font-size: 1em;
    cursor: pointer;
}
.btn:hover{
    background-color: #2f61ad;
    transition: .3s;
}

</style>