<template>
    <div class="contaier">
        <div class="firstDiv">
            <h1>KhanStore</h1>
            <input type="text" placeholder="Search Anything" /> 
            <!-- <button class="searcBtn" >Search</button>  -->
        <!-- <p>Lorem voluptates aalnsdnalnsd al sdandjas aklnsdnansd aljsdn ajsd  numquam!</p> -->

    </div>
        <div class="footer div-2">
            <h2>Categary</h2>
            <ul><li>Travel</li></ul>
            <ul><li>General</li></ul>
            <ul><li>Food</li></ul>
            <ul><li>Sports</li></ul>
        </div>
        <div class="footer div-3">
            <h2>Our Partners</h2>
            <ul><li>nsdnsdf</li></ul>
            <ul><li>nsdnsdf</li></ul>
            <ul><li>nsdnsdf</li></ul>
            <ul><li>nsdnsdf</li></ul>
        </div>
        <div class="footer div-4">
            <h2>Populer Categary</h2>
            <ul><li>nsdnsdf</li></ul>
            <ul><li>nsdnsdf</li></ul>
            <ul><li>nsdnsdf</li></ul>
            <ul><li>nsdnsdf</li></ul>
        </div>
        <!-- <hr/>
        <p>khanstore.com copy write|2024 from media</p> -->
    </div>
</template>
<style scoped>
.contaier{
    background-color: black ;
    position:static;
    display: flex;
    justify-content: space-around;
    bottom: -20px;
    right: 0;
    color: white;


}
.firstDiv {
    max-width: 500px;

}
.firstDiv h1{
    text-align: left;
    text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
    color:#63f7f7;    
    margin-top: 36px;
    margin-top: 36px;
    padding: 0px;
}
.firstDiv p{
    text-align: left;
}
.firstDiv {
    padding:  20px 0px 0px;
    margin: 0px;
}
.footer{
    padding: 20px;
}
.footer ul li{
    /* list-style-type:none; */
    
}
.firstDiv input{
    width: 140%;
    border: 1px solid skyblue;
    border-radius: 50px;
    font-size: 15px;
    padding: 10px;
    color: rgb(167, 165, 165);
}    
.firstDiv .searcBtn{
    padding: 10px;
    border: none;
    background-color: blue;
    color: white;
}
/* @media screen and  (min-width: 600px) {
    .contaier{
        display: flex-start;
        background-color: white;
        color: black
    }
} */
</style>