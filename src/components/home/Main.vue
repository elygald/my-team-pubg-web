<template>
    <div id='container-main'>
      <Menu />
      <ContentContainer />
      <ContentContainerRight />
    </div>
</template>

<script>
import state from '../state'
import ContentContainer from './ContentContainer.vue'
import ContentContainerRight from './ContentContainerRight.vue'
import Menu from '@/components/menu/Menu.vue'

export default {
  name: 'Main',
  components: {
    Menu,
    ContentContainer,
    ContentContainerRight,
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
