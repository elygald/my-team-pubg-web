<template>
    <div class='container-player'>
        <h1 class="title-ingame">{{ingame}}</h1>
        <span class="icon-player"><span class="title-player">{{me.name}}</span></span> <span class="icon-trophy"><span class="title-player">{{match_info.me}}</span></span>
        <hr class='player'>
        <span class="icon-map"><span class="title-player">{{match_info.map}}</span></span>
        <span class="icon-location"><span class="title-player">x={{location.x}} y={{location.y}} z={{location.z}}</span></span>
        <span v-if="phase == 'aircraft'" class="icon-freefly"></span>
        <span class="icon-kills"><span class="title-player">{{match_info.kills}}</span></span>
        <span class="icon-headshots"><span class="title-player">{{match_info.headshots}}</span></span>
        <span class="icon-distance"><span class="title-player">{{match_info.max_kill_distance}}</span></span><br>
        <span class="icon-team"><span class="title-player">1.{{match_info.nicknames.team_members[0]}} 2.{{match_info.nicknames.team_members[1]}} </span></span>
       
    </div>    
</template>
<script>
import state from '../inGameState.js'
//var overwolf = require('./overwolf.js');

var states = state;
export default {
    name: 'ContainerPlayer',
    components: {

    },
    data: () => {
        return states
    },
    created: function() {
        //this.name();
    },
    methods: {
           // name: () => overwolf.name, 
        }    
}
</script>
<style>
.container-player{
    margin: auto;
    background-color: white;
    width: 95%;
    height: auto;
    margin-top: 20px;
    border-radius: 4px;
    text-align: left;

}
.title-player{
    font-family: "Oswald", sans-serif;
    text-align: left;
    font-size: 25px;
    padding: 10px;
    color: #f2a900;
}
.icon-player{
    background-image: url('../../assets/ico/player2.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-map{
    background-image: url('../../assets/ico/map.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-location{
    background-image: url('../../assets/ico/location.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-freefly{
    background-image: url('../../assets/ico/freefly.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-headshots{
    background-image: url('../../assets/ico/headshot1.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-kills{
    background-image: url('../../assets/ico/kill.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-distance{
    background-image: url('../../assets/ico/distance_kill.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-trophy{
    background-image: url('../../assets/ico/trophy.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 36.109;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 35px;
    margin-top: 3px;
    float: right;
}
.icon-team{
    background-image: url('../../assets/ico/team.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
hr.player{
    margin-top: 6px;
    margin-bottom: 0px;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #2c3e50;
}

.title-ingame{
    margin: auto;
    background-color: black;
    width: 100%;
    height: 55px;
    margin-top: 20px;
    border-radius: 4px;
    text-align: left;
    color: #f2a900;
}
</style>
