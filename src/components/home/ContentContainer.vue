<template>
    <div class="content-container">
        <ContainerPlayer />
    </div>
</template>

<script>
import state from '../state'
import ContainerPlayer from './../player/ContainerPlayer.vue'

export default {
  name: 'ContentContainer',
  components: {
      ContainerPlayer
  },
  data: () => {
    return state
  }
}
</script>

<style lang="css">
    .content-container{
        background-color: rgba(0,0,0,.5);
        width: 64.517%;
        height: 1040px;
        max-width: 64.517%;
        max-height: 1040px;
        min-height: 839px;
        position: relative;
        float: left;
        border-radius: 4px;
    }
</style>
