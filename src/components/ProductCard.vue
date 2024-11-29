<template>
  <div class="card1">
    <div class="card">  
    <img :src="product.image" alt="product image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-categary">{{ product.category }}</h5>
      <h5 class="card-title">{{ product.title }} </h5>
      <p class="card-text">{{ `$${product.price}` }} 
        <!-- <span class="preprice">{{ product.preprice }}</span>   -->
      </p>
      <div>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
      </div>
    </div>
    <!-- <router-link :to="`/product/${product.id}`" class="btn btn-primary">Buy Now</router-link> -->
    <button class="btn btn-primary"  @click="addToCart(product)">Add To Cart</button>

  </div>
  </div>
  
 
</template>

<script>

export default {
  name:"ProductCard",
  
  props: { product: Object },
  
  data(){
    return{
    //      product:[
    //               {
    //                 id: 1,
    //                 title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //                 price: 109.95,
    //                 description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //                 category: "Bag",
    //                 image: require('@/assets/images/81fPKd-2AYL._AC_SL1500_.jpg'),
    //                 rating: {
    //                 rate: 3.9,
    //                 count: 120
    //                 }
    //               },
    //               {
    //                 id: 2,
    //                 title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //                 price: 109.95,
    //                 description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //                 category: "men's clothing",
    //                 image: require('@/assets/images/71YXzeOuslL._AC_UY879_.jpg'),
    //                 rating: {
    //                 rate: 3.9,
    //                 count: 120
    //                 }
    //             },
    //             {
    //                 id: 3,
    //                 nmae: "men shoes ",
    //                 title: "This shoes is for summer vacations",
    //                 price: 2323.00,
    //                 category: "men's clothing",
    //                 preprice: 2322.2,
    //                 image: require('@/assets/images/71li-ujtlUL._AC_UX679_.jpg') // Correct path using `@` alias
    //             },
    //             {
    //                 id: 4,
    //                 nmae: "men shoes ",
    //                 title: "This shoes is for summer vacations",
    //                 price: 2323.00,
    //                 category: "men's gerCy",
    //                 preprice: 2322.2,
    //                 image: require('@/assets/images/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg') // Correct path using `@` alias
    //             },
    // ]
    }
  },
  methods:{
    addToCart(){
      this.$store.dispatch('addToCart', this.product);

    }
  }
};
</script>
<style scoped>
.checked{
  color: orange;
}
.carLogo{
  position: relative;
  top: 10px;
  right: 0px;
  float: right;
  left: 20px;
}
.addtocart{
  position: absolute;
  top: 0px;
  right: 10px;

}
.card{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    width: 230px;
    height: 370px;
    border-radius: 10px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

.card:hover{
  transform-style:inherit;
  /* transform: scale(1.1);
  transition: .3s; */

}
img{
  max-width: 130px;
  max-height: 330px;
  margin: 0px 10;
  padding: 20px;
  

  
}
.card-img-top{
  /* filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5)); */
  mix-blend-mode: darken;
}
img:hover{
  transition: .4s;
  margin: 5px 5px;
  max-width: 150px;
  max-height: 350px;
  /* filter: drop-shadow(0px 0px 12px grey ); */


}
.card-body{
  row-gap: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}

.card-categary{
  margin: 0px;
    padding: 0px;
    font-size: 20px;
    font-weight: revert-layer;
    font-family: system-ui;
}

.card-title{
  font-size: 13px;
  color: #9f9999;
  padding: 0px;
  margin: 0px;

}
.card-text{
  font-size: 18px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 200;
  color: #2E6BC6;
  margin: 0px;
  padding: 0px;
}
.preprice{
  color: grey;
  text-decoration: line-through;
  font-size: 17px;

}
.btn{
  text-decoration: none;
  padding: 10px;
  width: 14.4rem;  
  color: white;
  background-color: #2E6BC6;
  border: 1px solid #2E6BC6;
  border-radius: 0px 0px 10px 10px;
  margin-bottom: -5px;
  cursor: pointer;



}
.btn:hover{
  background-color: #3b86f8;
  transition: .3s;
  cursor: pointer;
  /* scale: 1.2; */
  /* color: white;
  border: 1px solid #2E6BC6;
  border-radius: 0px 0px 10px 10px;
  transition: 1s; */

  
}
</style>
