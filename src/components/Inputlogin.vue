<template>
  <div id="email" data-role="">
      <p data-role="" breed="" class="label_email">{{ login }} *</p>
      <div class="div_login">
          <input data-role="" name="Login" type="text" required="" class="input_login" value="">
      </div>
  </div>
</template>

<script>
import state from './state'

export default {
  name: 'Inputlogin',
  components: {

  },
  data: () => {
    return state
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label_email {
  text-align:left;
  margin-bottom: 5px;
}
#email {
  position: relative;
  width: 368px;

}
.input_login{
  float: left;
  width: 300px;
  height: 20px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  margin-bottom: 10px;
}
.input_login:hover{
  border-width: 2px;
  border-style: solid;
  border-color: #f79d02;
}
.input_login:focus{
  box-shadow: 0 0 0 0;
  border-color: #f79d02;
  outline: 0;
}
.div_login{
  height: 30px;
}
</style>