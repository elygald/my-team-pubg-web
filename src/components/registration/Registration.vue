<template>
</template>

<script  lang='css'>
import state from '../state'
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
