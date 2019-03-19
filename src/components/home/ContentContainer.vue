<template>
    <div class="content-container">
        
    </div>
</template>

<script>
import state from '../state'

export default {
  name: 'ContentContainer',
  components: {

  },
  data: () => {
    return state
  }
}
</script>

<style lang="css">
    .content-container{
        background-color: black;
        opacity: 0.5;
        width: 64.517%;
        height: 1040px;
        max-width: 64.517%;
        max-height: 1040px;
        min-height: 839px;
        position: relative;
        float: left;
    }
</style>
