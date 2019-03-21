<template>
    <div class='container-player'>
        <h1 class="title-player">Player</h1>
    </div>    
</template>
<script>
import state from '../state'

export default {
    name: 'ContainerPlayer',
  components: {

  },
  data: () => {
    return state
  }
}
</script>
<style>
.container-player{
    margin: auto;
    background-color: white;
    width: 95%;
    height: 300px;
    margin-top: 20px;
    border-radius: 4px;

}
.title-player{
    font-family: "Oswald", sans-serif;
    text-align: left;
    font-size: 24px;
    padding: 10px;
    color: #f2a900;
}
</style>
