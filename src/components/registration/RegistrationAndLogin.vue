<template>
  <div id='container-main'>
    <Menu />
    <div class="content-container">
        <div class="tabs-container">
        <input type="radio" name="tabs" class="tabs" id="tab1" checked>
        <label for="tab1">Log In</label>
        <div><Login /></div>

        <input type="radio" name="tabs" class="tabs" id="tab2">
        <label for="tab2">Registration</label>
        <div><Registration /></div>
      </div>
    </div>
  </div>
</template>

<script>
import state from '../state'
import Login from './../login/Login.vue'
import Registration from './../login/Registration.vue'
import Menu from '../menu/Menu.vue'

export default {
  name: 'RegistrationAndLogin',
  components: {
    Login,
    Registration,
    Menu
  },
  data: () => {
    return state
  },
  methods: {
    somar: () => {
      state.count = state.count + 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p{
  padding: 0 0px;
}

.tabs-container {
  margin: auto;
  position: relative;
  width: 360px;
  top: 30%;
}

.tabs-container:after {
  content: '.';
  display: block;
  clear: both;
  height: 0;
  font-size: 0;
  line-height: 0;
  visibility: none;
  
}
input.tabs {
  display: none;
}
input.tabs + label {
  border-radius: 2px;
  border-width: 1px;  
  width: 180px;
  line-height: 40px;
  padding: 0 20px;
  float: left;

  background: #000;
  color: #fff;
  cursor: pointer;
  transition: background ease-in-out .3s;
}
input.tabs:checked + label {
  color: #000;
  background: #f2a900;
}
input.tabs + label + div {
  width: auto;
  opacity: 0;
  position: absolute;
background-color: rgba(0,0,0,.8);
  top: 40px;
  left: 0;
  height: auto;
  padding: 0px;
  z-index: -1;
  transition: opacity ease-in-out .3s;
}
input.tabs:checked + label + div {
  opacity: 1;
  z-index: 1000;
}
.content-container{
  text-align: center;
}

</style>
