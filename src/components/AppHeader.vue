<template>
    <div class="main" :class="{ sticky: isSticky }">
        <router-link class="logo" to="/">KhanStore</router-link>
        <div class="menu">
            <ul><li><router-link to="/product">Products</router-link></li></ul>
            <ul><li><router-link to="/checkout"> Checkout</router-link></li></ul>
            <ul><li><router-link to="/ProductCart">Shoping Cart</router-link></li></ul>
        </div>
        <div class="rightSideBtn">
            <!-- <input type="text" placeholder="Search Anything" /> -->
            <router-link to="/ProductCart" @click="toggleSidebar">
                <img class="cartIcon" src="../assets/images/cart.png">
                <span class="badge">{{ cartItemCount }}</span>
            </router-link>
            <router-link class="SignIn" to="/SignUp">SignIn</router-link>
            <!-- <router-link class="SignUp" to="/SignUp"> card</router-link> -->
            <!-- <div> -->
            
        <!-- </div> -->
    <right-drawer :close="close" :class="['leftDrawer', { open: isOpen }]"/>
</div>

      
    </div>



</template>
<script>
import { mapGetters } from 'vuex';
import RightDrawer from '../components/RightDrawer.vue';

export default {
    name:"AppHeader",
    components: {
        RightDrawer,
    },
    data() {
        return {
            isOpen: false,
            isSticky: true
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    computed: {
    ...mapGetters(['cartItems']),
    cartItemCount() {
      return this.cartItems.length;
    },
  },
  
  methods: {
    close(){
        this.isOpen = false
        
    },
        toggleSidebar() {
            if(this.cartItems.length > 0){
              this.isOpen = !this.isOpen;

            }
            else{
                this.$router.push("/ProductCart")
            }
    },
        handleScroll() {
            this.isSticky = window.scrollY > 50;
        }
    }
}
</script>
<style scoped>
.rightSideBtn input{
    padding: 10px 15px;
    border: 1px solid rgb(88, 86, 86);
    border-radius: 20px;
}
.cartIcon {
  position: relative;
  width: 25px;
  height: auto;
  padding: 0px 2em;

}
.badge {
  position: absolute;
  top: 10px;
  left: 81.5%;
  background-color: #3C76CE;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}

.rightSideBtn{
    display: flex;
    align-items: center;
    justify-content:space-evenly;
}

div{
    display: flex
}
.main{
    margin: 0%;
    padding: 0%;
    width: 100%;
    background-color:white;
    color: #2c3e50;
    padding: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease-in-out;
    z-index: 1000;
    transform: scale(1, 1);


}
.main.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* background: linear-gradient(135deg, #3C76CE, #54B68F); */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
}

.main .logo {
    padding: 1%;
    text-decoration: none;

}
/* .cart-logo{
    width:30px;
    margin:0px 10px;
    color: rgb(38, 236, 81);
    font-size: 20px;
    background-color: #2E6BC6;
    border-radius: 100%;
    padding: 5px;
} */
.menu ul li{
    display: flex;
    list-style-type: none;

}
.menu ul li a{
    text-decoration: none;

}
.menu ul li a:hover{
    /* font-size: 15px; */
    color: rgb(38, 236, 81);
    /* font-weight: 100px bold; */
    /* background-color: #54B68F; */
    /* border: 1px solid; */
    /* border-radius:20px; */
    padding:1px;
    margin:0;
    transition:.3s;
}
.logo{
    color:#54B68F;
    font-size: 24px;
    font-family: Courier New (monospace);
    cursor:pointer;
    font-weight: bold;
    
}

.SignIn{
    text-decoration: none;
    padding: 10px 20px;
    border:none;
    background-color: #3C76CE;
    color:white;
    font-size:15px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-right: 10px;
    font-weight: 200;
    border-radius:10px;
    cursor:pointer
 }
 .SignIn:hover{
    background-color: #2f62af;
    color: white;
    font-size:15px;

 }
 

</style>