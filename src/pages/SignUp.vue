<template>
    <form class="container">
        <h1>SignUp</h1>
            <input type="text"   v-model="user.name"   placeholder="Nmae" >
            <input type="text"   v-model="user.email"  placeholder="Email" >
            <input type="password" v-model="user.password" placeholder="Password" >
        <button class="signupBtn" v-on:click="SingUp">SignUp</button>
    </form>
</template>
<script>
export default {
    name:"SignUp",
    data(){
    return {
        user:{
        name:"",
        email:"",
        password:""
    }
    }
    },
    methods:{
        SingUp(){
            if(this.user.name == "umar"){
               alert(`fill the missing filed ${this.user}`)
            }
            else{
                this.$router.push("/")
            }
        }
    }
}
</script>
<style >
body{
    /* background-color: rgb(25, 112, 138); */
    /* background-image: url("D:\vue js practice\vue-ecommerce-store\src\assets\wallpaper\pexels-lee-campbell-115655.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed */
}
h1{
    padding: 10px;
    color: white;
}
.container{
    border: 3px solid #5fe6df;
    border-radius: 10px;
    margin-top: 10%;
    margin-left: 40%;
    width: 26%;
    height: auto;
    padding-bottom: 25px;
    box-shadow: 0px 5px 20px 9px #5fe6df;
    background-color: rgb(66, 62, 62);
    backdrop-filter: blur(10px);
    /* background:transparent; */

}

.container input {
    width:300px;
    padding: 10px;
    margin: 10px;
    border: 1px solid skyblue;
    border-radius: 4px;
}
.signupBtn{
    padding: 0%;
    margin-top: 0px;
    width: 20rem;
    padding: 12px  10px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: white;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
    border-radius: 100px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.signupBtn:hover{
    background-color: rgb(255, 255, 255);
    font-size: 17px;
    border-radius: 10px;
    transition: .3s;
    color: black;
}
</style>  