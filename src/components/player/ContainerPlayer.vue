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
import historicModeState from '../historicModeState.js'

var states = state;
export default {
    name: 'ContainerPlayer',
    components: {

    },
    data: () => {
        
        return states
    },
    created: function () {
        var nickname = localStorage.getItem("Player_nickname");
        states.nickname = nickname
        this.setPlayer()
    },
    methods: {
           setPlayer: () =>{
               var myHeaders = new Headers({
                    "accept": "application/vnd.api+json",
                    "Authorization": states.api_pubg_key
                });
                var myInit = {  method: 'GET',
                                headers: myHeaders,
                                mode: 'cors',
                                cache: 'default' 
                            };
                
                if(!localStorage.getItem("id_pubg")){
                    var nickname = localStorage.getItem("Player_nickname");
                    fetch('https://api.pubg.com/shards/steam/players?filter[playerNames]='.concat(nickname) ,myInit)
                    .then(stream => {
                        if (!stream.ok) {
                                console.log(stream.statusText);
                            }else{
                            return stream.json()
                            }
                        })
                    .then(data =>{
                        if(data){
                            localStorage.setItem("id_pubg",data.data[0].id);
                        }
                    });
                }
                fetch('https://api.pubg.com/shards/steam/players/'.concat(localStorage.getItem("id_pubg")).concat('/seasons/lifetime') ,myInit)
                .then(stream => {
                     if (!stream.ok) {
                            console.log(stream.statusText);
                        }else{
                           return stream.json()
                        }
                    })
                .then(data =>{
                    if(data){
                        //set mode solo 
                        historicModeState.Solo.Kills = data.data.attributes.gameModeStats.solo.kills;
                        historicModeState.Solo.total_matche = data.data.attributes.gameModeStats.solo.losses + data.data.attributes.gameModeStats.solo.wins;
                        historicModeState.Solo.dmg_per_match = data.data.attributes.gameModeStats.solo.damageDealt
                        historicModeState.Solo.rating = data.data.attributes.gameModeStats.solo.bestRankPoint
                        historicModeState.Solo.wins = data.data.attributes.gameModeStats.solo.wins
                        historicModeState.Solo.win =  ((historicModeState.Solo.wins / historicModeState.Solo.total_matche )*100).toFixed(2)+'%'
                        historicModeState.Solo.kd_ratio = (data.data.attributes.gameModeStats.solo.kills/data.data.attributes.gameModeStats.solo.losses).toFixed(2)
                        historicModeState.Solo.top_10_rate = data.data.attributes.gameModeStats.solo.top10s
                        //set mode Duo 
                        historicModeState.Duo.Kills = data.data.attributes.gameModeStats.duo.kills;
                        historicModeState.Duo.total_matche = data.data.attributes.gameModeStats.duo.losses + data.data.attributes.gameModeStats.duo.wins;
                        historicModeState.Duo.dmg_per_match = data.data.attributes.gameModeStats.duo.damageDealt
                        historicModeState.Duo.rating = data.data.attributes.gameModeStats.duo.bestRankPoint
                        historicModeState.Duo.wins = data.data.attributes.gameModeStats.duo.wins
                        historicModeState.Duo.win =  ((historicModeState.Duo.wins/historicModeState.Duo.total_matche )*100).toFixed(2)+'%'
                        historicModeState.Duo.kd_ratio = (data.data.attributes.gameModeStats.duo.kills/data.data.attributes.gameModeStats.duo.losses).toFixed(2)
                        historicModeState.Duo.top_10_rate = data.data.attributes.gameModeStats.duo.top10s
                        //set mode squad
                        historicModeState.Squad.Kills = data.data.attributes.gameModeStats.squad.kills;
                        historicModeState.Squad.total_matche = data.data.attributes.gameModeStats.squad.losses + data.data.attributes.gameModeStats.squad.wins;
                        historicModeState.Squad.dmg_per_match = data.data.attributes.gameModeStats.squad.damageDealt
                        historicModeState.Squad.rating = data.data.attributes.gameModeStats.squad.bestRankPoint
                        historicModeState.Squad.wins = data.data.attributes.gameModeStats.squad.wins
                        historicModeState.Squad.win =  ((historicModeState.Squad.wins/historicModeState.Squad.total_matche)*100).toFixed(2)+'%'
                        historicModeState.Squad.kd_ratio = (data.data.attributes.gameModeStats.squad.kills /data.data.attributes.gameModeStats.squad.losses).toFixed(2)
                        historicModeState.Squad.top_10_rate = data.data.attributes.gameModeStats.squad.top10s
                        //set mode solo-Fpp
                        historicModeState.Solo_fpp.Kills = data.data.attributes.gameModeStats['solo-fpp'].kills;
                        historicModeState.Solo_fpp.total_matche = data.data.attributes.gameModeStats['solo-fpp'].losses + data.data.attributes.gameModeStats['solo-fpp'].wins;
                        historicModeState.Solo_fpp.dmg_per_match = data.data.attributes.gameModeStats['solo-fpp'].damageDealt
                        historicModeState.Solo_fpp.rating = data.data.attributes.gameModeStats['solo-fpp'].bestRankPoint
                        historicModeState.Solo_fpp.wins = data.data.attributes.gameModeStats['solo-fpp'].wins
                        historicModeState.Solo_fpp.win =  ((historicModeState.Solo_fpp.wins/historicModeState.Solo_fpp.total_matche )*100).toFixed(2)+'%'
                        historicModeState.Solo_fpp.kd_ratio = (data.data.attributes.gameModeStats['solo-fpp'].kills/data.data.attributes.gameModeStats['solo-fpp'].losses).toFixed(2)
                        historicModeState.Solo_fpp.top_10_rate = data.data.attributes.gameModeStats['solo-fpp'].top10s
                        //set mode Duo-fpp
                        historicModeState.Duo_fpp.Kills = data.data.attributes.gameModeStats['duo-fpp'].kills;
                        historicModeState.Duo_fpp.total_matche = data.data.attributes.gameModeStats['duo-fpp'].losses + data.data.attributes.gameModeStats['duo-fpp'].wins;
                        historicModeState.Duo_fpp.dmg_per_match = data.data.attributes.gameModeStats['duo-fpp'].damageDealt
                        historicModeState.Duo_fpp.rating = data.data.attributes.gameModeStats['duo-fpp'].bestRankPoint
                        historicModeState.Duo_fpp.wins = data.data.attributes.gameModeStats['duo-fpp'].wins
                        historicModeState.Duo_fpp.win =  ((historicModeState.Duo_fpp.wins/historicModeState.Duo_fpp.total_matche)*100).toFixed(2)+'%'
                        historicModeState.Duo_fpp.kd_ratio = (data.data.attributes.gameModeStats['duo-fpp'].kills/data.data.attributes.gameModeStats['duo-fpp'].losses).toFixed(2)
                        historicModeState.Duo_fpp.top_10_rate = data.data.attributes.gameModeStats['duo-fpp'].top10s
                        //set mode squad-fpp
                        historicModeState.Squad_fpp.Kills = data.data.attributes.gameModeStats['squad-fpp'].kills;
                        historicModeState.Squad_fpp.total_matche = data.data.attributes.gameModeStats['squad-fpp'].losses + data.data.attributes.gameModeStats['squad-fpp'].wins;
                        historicModeState.Squad_fpp.dmg_per_match = data.data.attributes.gameModeStats['squad-fpp'].damageDealt
                        historicModeState.Squad_fpp.rating = data.data.attributes.gameModeStats['squad-fpp'].bestRankPoint
                        historicModeState.Squad_fpp.wins = data.data.attributes.gameModeStats['squad-fpp'].wins
                        historicModeState.Squad_fpp.win =  ((historicModeState.Squad_fpp.wins/historicModeState.Squad_fpp.total_matche)*100).toFixed(2)+'%'
                        historicModeState.Squad_fpp.kd_ratio = (data.data.attributes.gameModeStats['squad-fpp'].kills /data.data.attributes.gameModeStats['squad-fpp'].losses).toFixed(2)
                        historicModeState.Squad_fpp.top_10_rate = data.data.attributes.gameModeStats['squad-fpp'].top10s
                    }
                });
            } 
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
