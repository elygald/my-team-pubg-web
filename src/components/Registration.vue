<template>
  <div class="registration">
    <form name="registration" data-role="registration-form">
      <div class="" data-role="">
        <p data-role="" breed="" class="">Email *</p>
        <div class="">
          <input data-role="" name="" type="" required="" class="" value="">
        </div>
          <p data-role="" class="">We won’t share your private email address with other users.</p>
      </div>
        <div class="" data-role="">
          <p data-role="" breed="" class="">Username *</p>
          <div class="">
            <input data-role="" name="" required="" type="" class="" value="">
          </div>
          <p data-role="" class="">Username must be 4-30 characters long.</p>
        </div>
        <div class="" data-role="">
          <p data-role="" breed="" class="">Password *</p>
          <div class="">
            <div class="">
              <input data-role="" name="" required="" type="" class="" value="" aria-autocomplete="">
            </div>
            <span data-role="" class=""></span>
          </div>
          <p data-role="" class="">Minimum 6 characters.</p>
        </div>
        <div class="" data-role="">
          <label class="">
            <span class="">
              <input name="" type="" class="" data-role="" value="">
              <span class=""></span>
            </span>
            <div class="" style="">
              <p breed="" class="">I Agree to the 
                <span class="" data-role="">Personal Data Consent</span>, 
                <span class="" data-role="">Terms of Use</span> and 
                <span class="" data-role="">Privacy Policy</span>
              </p>
            </div>
          </label>
        </div>
        <div class="" style="">
          <button class="" type="" disabled="" data-role="">
            <span class="">Register</span>
          </button>
        </div>
        <div class="" style="">
          <p class="">If you already have an account, click 
            <a class="" href="/login">Log In</a>
          </p>
        </div>
      </form>
    <h1>{{ count }}</h1>
    <button v-on:click='somar'>TICK</button>
  </div>
</template>

<script>
import state from './state'
export default {
  name: 'Registration',
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
