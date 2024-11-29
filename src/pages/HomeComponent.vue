<template>
    <main>
        <section class="section1">
            <div class="left">
              <h3>Enjoy Your Day With Officer</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dicta facilis voluptatibus non iure, eveniet distinctio adipisci.  libero id doloremque?</p>
                <button class="shopNowBtn">Shop Now</button>
                <button class="LearnMoreBtn">Learn More</button>
            </div>
            <div class="right">
                <img src="../assets/umar.png" alt="">
            </div>
        </section>
        <section class="section2">
        </section>
    </main>
    <!-- <product-cart/> -->
    <product-list/>
    <!-- <right-drawer/> -->
    <app-footer/>

    

</template>
<script>
import ProductList from '../components/ProductList.vue';
// import ProductCart from '@/pages/ProductCart.vue';
// import RightDrawer from '../components/RightDrawer.vue';
import AppFooter from '../components/AppFooter.vue';


export default {
    name:"HomeComponent",
    components: {
        ProductList,
        // ProductCart,
        AppFooter

        // RightDrawer
    },
    data(){
        return{
          
    }
    }
}
</script>

<style scoped>
.section1{
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* gap: 5%; */
    /* margin-left: 20px; */
    /* padding-top: 90px; */
}
.left{
    text-align: left;
    /* padding: 64px; */
    margin-left: 140px;
    width: 68vh;
    flex-grow: 1;
    

}
.left h3{
    font-size: 7vh;
    font-family: system-ui;
}
.left p{
    font-size: 3vh;
    font-weight: 600px;
    padding: 0px;
    margin: 20px 0px;

}
.left .shopNowBtn{
    padding: 10px;
    width: 22vh;
    border: 1px solid;
    border-radius: 20px;
    font-size: 18px;
    background-color: #3C76CE;
    color: white;
}
.left .LearnMoreBtn{
    padding: 10px;
    width: 22vh;
    border: 2px solid grey;
    border-radius: 20px;
    font-size: 18px;
    background-color: white;
    margin: 0px 20px;
    color: rgb(24, 23, 23);
}
.right {
    width: 50%;
    flex-grow: 1;


}
.right img {
    /* margin-top: 20px; */
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    border-radius: 10%;
    /* clip-path: circle(39% at 50% 46%); */


}
</style>