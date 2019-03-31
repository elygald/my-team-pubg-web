<template>
    <div class='container-player'>
        <div v-if = "in_game == true" class="ingame" >
            <div class="player-mode">
                <span class="icon-player">MODE: </span><span class="title-mode">{{ match_info.mode }}</span>
            </div>
            <div class="player-name">
                <span class="icon-player">PLAYER<br><span class="title-player">{{me.name}}</span></span>
            </div> 
            <div class="player-rank">
                <span class="icon-trophy">RANK <br><span class="title-player">{{match_info.me}}</span></span>
            </div>
            <div class="player-line">
                <hr class='player'>
            </div>
            <div class='player-map'>
                <span class="icon-map">MAP<br><span class="title-player">{{match_info.map}}</span></span>
            </div>
            <!-- <span class="icon-location"><span class="title-player">x={{location.x}} y={{location.y}} z={{location.z}}</span></span>
            <span v-if="phase == 'aircraft'" class="icon-freefly"></span> -->
            <div class='player-kill'>
                <span class="icon-kills">KILLS<br><span class="title-player">{{match_info.kills}}</span></span>
            </div>
            <div class='player-kill'>
                <span class="icon-headshots">HEADSHOTS<br><span class="title-player">{{match_info.headshots}}</span></span>
            </div>
            <div class='player-kill'>
                <span class="icon-distance">DISTANCE<br><span class="title-player">{{match_info.max_kill_distance}}</span></span><br>
            </div>
            <span v-if = "match_info.mode == 'duo'" class="icon-headshots">TEAM 
                <span class="icon-player1 title-player">{{match_info.nicknames.team_members[0]}}</span> 
                <span class="icon-player2 title-player"> {{match_info.nicknames.team_members[1]}}</span>
            </span>
           <span v-if = "match_info.mode == 'squad'" class="icon-headshots">TEAM 
                <span class="icon-player1 title-player">{{match_info.nicknames.team_members[0]}}</span> 
                <span class="icon-player2 title-player"> {{match_info.nicknames.team_members[1]}}</span>
                <span class="icon-player3 title-player">{{match_info.nicknames.team_members[2]}}</span> 
                <span class="icon-player4 title-player"> {{match_info.nicknames.team_members[3]}}</span>
            </span>     </div>
    </div>    
</template>
<script>
import state from '../inGameState.js'
var overwolf = require('./overwolf.js');

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
.title-mode{
    float: right;
    text-align: center;
    font-size: 18px;
    color: #fff;
    padding-right: 5px;
}
.player-mode{  
    width: 100%;
    float: left;
    text-align: center;
    background-color: black;
    }
.player-name{
    width: 50%;
    float: left;
    text-align: center;
}
.player-rank{
    text-align: center;
    width: 50%;
    float: left;
}
.player-line{
    width: 100%;
    float: left;
}

.player-map{
    width: 25%;
    float: left;
    text-align: center;
}
.player-kill{
    width: 25%;
    float: left;
    text-align: center;
    
}

.container-player{
    margin: auto;
    background-color: rgba(0,0,0,.8);
    margin-top: 20px;
    width: 95%;
    border-radius: 4px;
    text-align: left;
    color: #f2a900;


}
.ingame:after{
    content: "";
    display: table;
    clear: both;
}

.title-player{
    font-family: "Oswald", sans-serif;
    text-align: center;
    font-size: 18px;
    color: #fff;
}
.icon-player{
    /* background-image: url('../../assets/ico/player2.png'); */
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    float: left;
  
}
.icon-player1{
    background-image: url('../../assets/ico/player1.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    margin-left: 3px;
}
.icon-player2{
    background-image: url('../../assets/ico/player2.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    margin-left: 3px; 
}
.icon-player3{
    background-image: url('../../assets/ico/player3.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    margin-left: 3px;
}
.icon-player4{
    background-image: url('../../assets/ico/player4.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    margin-left: 3px; 
}
.icon-map{
    /* background-image: url('../../assets/ico/map.png'); */
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-location{
    /* background-image: url('../../assets/ico/location.png'); */
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-freefly{
    /* background-image: url('../../assets/ico/freefly.png'); */
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-headshots{
    /* background-image: url('../../assets/ico/headshot1.png'); */
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-kills{
    /* background-image: url('../../assets/ico/kill.png'); */
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-distance{
    /* background-image: url('../../assets/ico/distance_kill.png'); */
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 2.5%;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
}
.icon-trophy{
    padding-left: 36.109;
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 3px;
    float: right;
}
.icon-team{
    background-image: url('../../assets/ico/team.png');
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 3.5%;
    padding-top: 0.5%;
    padding-bottom: 0%;
}
hr.player{
    margin-top: 6px;
    margin-bottom: 0px;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #2c3e50;
}

.title-ingame{
    font-size: 25px;
    margin: auto;
    background-color: black; 
    width: 100%;
    border-radius: 4px;
    text-align: left;
    color: #ffffff;
}
</style>
