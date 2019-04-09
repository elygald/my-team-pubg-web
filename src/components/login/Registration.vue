<template>
    <div id="Registration">
        <Inputlogin />
        <Inputpassword />
        <InputConfirmPassword />
        <ButtonRegistration />
    </div>
</template>

<script>
import Inputlogin from './Inputlogin.vue'
import Inputpassword from './Inputpassword.vue'
import ButtonRegistration from './ButtonRegistration.vue'
import InputConfirmPassword from './InputConfirmPassword.vue'


export default {
  name: 'Registration',
  components: {
    Inputlogin,
    Inputpassword,
    ButtonRegistration,
    InputConfirmPassword
  },
}
</script>

<style lang='css'>
#Registration {
    padding-top: 5px;
    margin: auto;
    width: 360px;
    height: 255px;
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