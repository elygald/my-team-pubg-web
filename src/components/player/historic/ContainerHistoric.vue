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
import state from '../../historicGameState.js'

export default {
    name: 'ContainerHistoric',
    data: () => {
        return state
    },
    methods:{
        visible: function(indice){
            if(this.recent_matches[indice].details == true){
                this.recent_matches[indice].details = false;
            }else{
                this.recent_matches[indice].details = true;
            }
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
