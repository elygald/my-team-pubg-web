<template>
    <div class='init'>
    <img class="init_logo" :src ="require('./logo.png')"><br>
         to start, just start a match and <br> you will have access to the entire My Team platform
    </div>    
</template>
<script>
import router from '../../router'
var overwolf = require('../../overwolf.js');
export default {
    data: () =>{

    },
    created: function() {
        var init = setInterval(myinit,1000);

        function myinit(){
            if(localStorage.getItem("Player_nickname")!=null){
                router.push('/home');
                clearInterval(init);
            }
        }
    }
}
</script>
<style>
.init_logo{
    width: 219px;
}
.init{
    margin-top: 20%;
    margin-left: 130px
}
</style>
