<template>
    <div class='container-recent' >
        <h1 class="title-recent">Recent Matches</h1>
        <div v-for="(matche,key) in recent_matches">
            <div class='matche'  v-on:click="visible(key)">
                <div class='matche-recent'>
                    <span>Matche</span><br>
                    <span class='title-matche'>{{matche.date_matche}}</span>
                </div>
                <div class='matche-recent'>
                    <span>Mode</span><br>
                    <span class='title-matche'>{{matche.mode}}</span>
                </div>
                <div class='matche-recent'>
                    <span>Rank</span><br>
                    <span class='title-matche'>{{matche.me}}</span>
                </div>
                <div class='matche-recent'>
                    <span>Kills</span><br>
                    <span class='title-matche'>{{matche.kills}}</span>
                </div>
                <div class='matche-recent'>
                    <div class='headshot'>
                        <span>headshots</span><br>
                        <span class='title-matche'>{{matche.headshots}}</span>
                    </div>
                    <div class='dropdown'>
                        <i v-if="matche.details == false" class="fas fa-angle-down" style="padding-top: 17px; 
                        font-size: 20px;"></i>
                        <i v-if="matche.details == true" class="fas fa-angle-up" style="padding-top: 17px; 
                        font-size: 20px;"></i>
                    </div>
                </div>
            </div>
            <div class='matche-details' v-if="matche.details == true">
                <div class='matche-recent-details'>
                    <span>Map</span><br>
                    <span class='title-matche'>{{matche.map}}</span>
                </div>
                <div class='matche-recent-details'>
                    <span>Total Players</span><br>
                    <span class='title-matche'>{{matche.total}}</span>
                </div>
                <div class='matche-recent-details'>
                    <span>Total Teams</span><br>
                    <span class='title-matche'>{{matche.total_teams}}</span>
                </div>
                <div class='matche-recent-details'>
                    <span>Max Kill Distance</span><br>
                    <span class='title-matche'>{{matche.max_kill_distance}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import historicGameState from '../../historicGameState.js'
import states from '../../inGameState.js'

export default {
    name: 'ContainerHistoric',
    data: () => {
        return historicGameState
    },
    created: function () {
        this.setHistoric()
    },
    methods:{
        visible: function(indice){
            if(this.recent_matches[indice].details == true){
                this.recent_matches[indice].details = false;
            }else{
                this.recent_matches[indice].details = true;
            }
        },
        setHistoric: () =>{
               var myHeaders = new Headers({
                    "accept": "application/vnd.api+json",
                    "Authorization": states.api_pubg_key,
                   
                });
                var myInit = {  method: 'GET',
                                headers: myHeaders,
                                mode: 'cors',
                                cache: 'default' 
                            };
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
                    var matches = data.data[0].relationships.matches.data.slice(0,10);
                    matches.forEach(function(item){
                	    fetch('https://api.pubg.com/shards/steam/matches/'.concat(item.id) ,myInit)
                        .then(stream => {
                        if (!stream.ok) {
                                console.log(stream.statusText);
                            }else{
                            return stream.json()
                            }
                        })
                        .then(data =>{
                            var stats = data.included
                            var types = stats.reduce((acc, item)=>(!acc.includes(item.type)) ? acc.concat([item.type]) : acc, [])
                            var participants= types.reduce((acc, type) =>{
	                                acc[type] = stats.filter(item => item.type === type);
                                    return acc }, {})
                            var participant = participants.participant.filter(function(item){
                                if(item.attributes.stats.playerId == localStorage.getItem("id_pubg")){
                                    return item.attributes.stats
                                }
                            })
                            var roster
                                participants.roster.forEach(function(item, key){
                                    item.relationships.participants.data.forEach(function(it, key){
                                        if(participant[0].id  == it.id){
                                            roster = item
                                        }
                                    })
                                })
                             var last = {
                                        headshots: participant[0].attributes.stats.headshotKills,
                                        kills: participant[0].attributes.stats.kills,
                                        map: data.data.attributes.mapName,
                                        max_kill_distance: participant[0].attributes.stats.longestKill,
                                        me: roster.attributes.stats.rank,
                                        mode: data.data.attributes.gameMode,
                                        nicknames: participant[0].attributes.stats.name,
                                        total: participants.participant.length,
                                        total_damage_dealt: participant[0].attributes.stats.damageDealt,
                                        total_teams: data.data.relationships.rosters.data.length,
                                        date_matche: data.data.attributes.createdAt,
                                        details: false
                                    };
                            historicGameState.recent_matches.unshift(last);
                           
                            if (historicGameState.recent_matches.length > 10){
                                historicGameState.recent_matches.pop();
                            }
                        });
                    })
                });
               
            } 
    }
}
</script>

<style>
.dropdown{
   float: left;
    width: 50%; 
}
.headshot{
    float: left;
    width: 50%;
}
.matche-details{
    display: block;
}
.matche{
    background: black;
    display: block;
}
.matche:after{
    content: "";
    display: table;
    clear: both;
}
.matche-details:after{
    content: "";
    display: table;
    clear: both;
}
.matche-recent-details{
    width: 25%;
    float: left;
    text-align: center;
}
.matche-recent{    
    width: 20%;
    float: left;
    text-align: center;
    }
.title-recent{
    font-size: 20px;
    padding-right: 5px;
    background: black;
}

.container-recent{
    font-family: "Oswald", sans-serif;
    margin: auto;
    background-color: rgba(0,0,0,.8);
    margin-top: 18px;
    width: 95%;
    border-radius: 4px;
    text-align: left;
    color: #f2a900;
    clear: both;

}
.container-recent:after{
    content: "";
    display: table;
    clear: both;
}
.title-matche{
    text-align: center;
    font-size: 18px;
    color: #fff;
}
</style>
