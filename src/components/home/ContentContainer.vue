<template>
    <div class="content-container">
        <ContainerPlayer />
        <ContainerHistoric />
        <ContainerModes />
    </div>
</template>

<script>
import state from '../state'
import ContainerPlayer from './../player/ContainerPlayer.vue'
import ContainerHistoric from './../player/historic/ContainerHistoric.vue'
import ContainerModes from './../player/ContainerModes.vue'

export default {
  name: 'ContentContainer',
  components: {
      ContainerPlayer,
      ContainerHistoric,
      ContainerModes
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
        height: 90%;
        max-width: 64.517%;
        max-height: 90%;
        min-height: 90%;
        position: relative;
        float: left;
        border-radius: 4px;
        overflow:auto; 
    }
    /* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #f2a900;
  
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
