<template>
  <div id="password" data-role="">
      <p data-role="" breed="" class="label_password">{{ password }} *</p>
      <div class="div_password">
          <input data-role="" name="password" type="password" required="" class="input_password" value="">
      </div>
  </div>
</template>

<script>
import state from '../state'

export default {
  name: 'Inputpassword',
  components: {

  },
  data: () => {
    return state
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='css'>
.label_password {
  text-align:left;
  margin-bottom: 5px;
}
#password {
  position: relative;
  width: 368px;

}
.input_password{
  text-decoration: none;
  float: left;
  width: 300px;
  height: 20px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
}
.input_password:hover{
  border-width: 2px;
  border-style: solid;
  border-color: #f79d02;
}
.input_password:focus{
  box-shadow: 0 0 0 0;
  border-color: #f79d02;
  outline: 0;
}
.div_password{
  height: 30px;
}
</style>