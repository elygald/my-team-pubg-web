<template>
    <div id="login">
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

<style lang='css'>
#login {
    padding-top: 5px;
    margin: auto;
    width: 360px;
    height: 200px;
    border-radius: 5px;
    border-width: 0px;
    border-style: solid;
    border-color: #f2a900;
    padding-left: 20px;
    background-color: rgba(0,0,0,.8);
}
.title_login{
    color: #f79d02;
}

</style>