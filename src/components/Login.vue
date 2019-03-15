<template>
    <div id="login">
        <h3 class="title_login"> Log In </h3> 
        <Inputlogin />
        <Inputpassword />
        <Buttonlogin />
    </div>
</template>

<script>
import Inputlogin from './Inputlogin.vue'
import Inputpassword from './Inputpassword.vue'
import Buttonlogin from './Buttonlogin.vue'

export default {
  name: 'Login',
  components: {
    Inputlogin,
    Inputpassword,
    Buttonlogin
  }
}
</script>

<style>
#login {
    margin: auto;
    position: relative;
    width: 358px;
    height: 300px;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: #f2a900;
    padding-left: 50px;
    background-color: #fff;
}
.title_login{
    color: #f79d02;
    text-align: left;
}

</style>