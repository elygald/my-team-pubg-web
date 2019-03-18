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
    margin: auto;
    position: relative;
    width: 358px;
    height: 200px;
    border-radius: 5px;
    border-width: 0px;
    border-style: solid;
    border-color: #f2a900;
    padding-left: 20px;
    background-color: #fff;
}
.title_login{
    color: #f79d02;
    text-align: left;
}

</style>