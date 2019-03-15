<template>
    <p data-role="" class="msg_login">{{ msglogin }}</p>
</template>

<script>
import state from './state'
export default {
  name: 'Inputlogin',
  data: () => {
    return state
  }
}
</script>

<style scoped>
.msg_login{
  width: 300px;
}
</style>