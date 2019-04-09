<template>
  <div class="div_login" style="">
    <button class="Buttonlogin" type="" disabled="" data-role="">
      <span class="label_buttom">Registration</span>
    </button>
  </div>
</template>

<script>

export default {
  name: 'ButtonRegistration',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='css'>

.Buttonlogin{
  float: left;
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border-width: 2px;
  border-style: solid;
  margin-top: 20px;
  border-color: #fff;
  background-color: #f2a900;
  
}
.Buttonlogin:hover{
  border-width: 2px;
  border-style: solid;
  border-color: #f79d02;
  background-color: #f79d02;
}
.div_login{
  position: relative;
  width: 368px;

}
.label_buttom{
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: #fff; 
}
</style>