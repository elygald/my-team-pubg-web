<template>
    <div id='container-main'>
      <ContentContainer />
      <ContentContainerRight />
    </div>
</template>

<script>
import state from '../state'
import ContentContainer from './ContentContainer.vue'
import ContentContainerRight from './ContentContainerRight.vue'

export default {
  name: 'Main',
  components: {
    ContentContainer,
    ContentContainerRight
  },
  data: () => {
    return state
  }
}
</script>

<style lang="css">
    #container-main{
      
        width: 100%;
        height: 839px;
        margin: 0 auto;
        position: relative;
    }
</style>
