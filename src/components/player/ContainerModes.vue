<template>
    <div class="container-modes">
        <div class="mode_solo">
                <h1 class='title-solo'>{{Solo.name}} <span class="matche_processed">matche {{Solo.total_matche}}</span></h1>
                <div class='matche-mode-solo'>
                    <span>Processed</span><br>
                    <span class='title-rating'>{{Solo.processed}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Rating</span><br>
                    <span class='title-rating'>{{Solo.rating}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Win</span><br>
                    <span class='title-rating'>{{Solo.win}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Top 10</span><br>
                    <span class='title-rating'>{{Solo.top_10_rate}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>K/D Ratio</span><br>
                    <span class='title-rating'>{{Solo.kd_ratio}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Wins</span><br>
                    <span class='title-rating'>{{Solo.wins}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Kills</span><br>
                    <span class='title-rating'>{{Solo.Kills}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>DMG PER MATCH</span><br>
                    <span class='title-rating'>{{Solo.dmg_per_match}}</span>
                </div>
        </div>
        <div class="mode_duo">
                <h1 class='title-duo'>{{Duo.name}} <span class="matche_processed">matche {{Duo.total_matche}}</span></h1>
                <div class='matche-mode-solo'>
                    <span>Processed</span><br>
                    <span class='title-rating'>{{Duo.processed}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Rating</span><br>
                    <span class='title-rating'>{{Duo.rating}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Win</span><br>
                    <span class='title-rating'>{{Duo.win}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Top 10</span><br>
                    <span class='title-rating'>{{Duo.top_10_rate}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>K/D Ratio</span><br>
                    <span class='title-rating'>{{Duo.kd_ratio}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Wins</span><br>
                    <span class='title-rating'>{{Duo.wins}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Kills</span><br>
                    <span class='title-rating'>{{Duo.Kills}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>DMG PER MATCH</span><br>
                    <span class='title-rating'>{{Duo.dmg_per_match}}</span>
                </div>
        </div>
        <div class="mode_squad">
            <h1 class='title-squad'>{{Squad.name}} <span class="matche_processed">matche {{Squad.total_matche}}</span></h1>
            <div class='matche-mode-solo'>
                    <span>Processed</span><br>
                    <span class='title-rating'>{{Squad.processed}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Rating</span><br>
                    <span class='title-rating'>{{Squad.rating}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Win</span><br>
                    <span class='title-rating'>{{Squad.win}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Top 10</span><br>
                    <span class='title-rating'>{{Squad.top_10_rate}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>K/D Ratio</span><br>
                    <span class='title-rating'>{{Squad.kd_ratio}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Wins</span><br>
                    <span class='title-rating'>{{Squad.wins}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Kills</span><br>
                    <span class='title-rating'>{{Squad.Kills}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>DMG PER MATCH</span><br>
                    <span class='title-rating'>{{Squad.dmg_per_match}}</span>
                </div>
        </div><br>
        <div class="mode_solo">
                <h1 class='title-solo'>{{Solo_fpp.name}} <span class="matche_processed">matche {{Solo_fpp.total_matche}}</span></h1>
                <div class='matche-mode-solo'>
                    <span>Processed</span><br>
                    <span class='title-rating'>{{Solo_fpp.processed}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Rating</span><br>
                    <span class='title-rating'>{{Solo_fpp.rating}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Win</span><br>
                    <span class='title-rating'>{{Solo_fpp.win}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Top 10</span><br>
                    <span class='title-rating'>{{Solo_fpp.top_10_rate}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>K/D Ratio</span><br>
                    <span class='title-rating'>{{Solo_fpp.kd_ratio}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Wins</span><br>
                    <span class='title-rating'>{{Solo_fpp.wins}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Kills</span><br>
                    <span class='title-rating'>{{Solo_fpp.Kills}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>DMG PER MATCH</span><br>
                    <span class='title-rating'>{{Solo_fpp.dmg_per_match}}</span>
                </div>
        </div>
        <div class="mode_duo">
                <h1 class='title-duo'>{{Duo_fpp.name}} <span class="matche_processed">matche {{Duo_fpp.total_matche}}</span></h1>
                <div class='matche-mode-solo'>
                    <span>Processed</span><br>
                    <span class='title-rating'>{{Duo_fpp.processed}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Rating</span><br>
                    <span class='title-rating'>{{Duo_fpp.rating}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Win</span><br>
                    <span class='title-rating'>{{Duo_fpp.win}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Top 10</span><br>
                    <span class='title-rating'>{{Duo_fpp.top_10_rate}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>K/D Ratio</span><br>
                    <span class='title-rating'>{{Duo_fpp.kd_ratio}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Wins</span><br>
                    <span class='title-rating'>{{Duo_fpp.wins}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Kills</span><br>
                    <span class='title-rating'>{{Duo_fpp.Kills}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>DMG PER MATCH</span><br>
                    <span class='title-rating'>{{Duo_fpp.dmg_per_match}}</span>
                </div>
        </div>
        <div class="mode_squad">
            <h1 class='title-squad'>{{Squad_fpp.name}} <span class="matche_processed">matche {{Squad_fpp.total_matche}}</span></h1>
            <div class='matche-mode-solo'>
                    <span>Processed</span><br>
                    <span class='title-rating'>{{Squad_fpp.processed}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Rating</span><br>
                    <span class='title-rating'>{{Squad_fpp.rating}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Win</span><br>
                    <span class='title-rating'>{{Squad_fpp.win}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Top 10</span><br>
                    <span class='title-rating'>{{Squad_fpp.top_10_rate}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>K/D Ratio</span><br>
                    <span class='title-rating'>{{Squad_fpp.kd_ratio}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Wins</span><br>
                    <span class='title-rating'>{{Squad_fpp.wins}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>Kills</span><br>
                    <span class='title-rating'>{{Squad_fpp.Kills}}</span>
                </div>
                <div class='matche-mode-solo'>
                    <span>DMG PER MATCH</span><br>
                    <span class='title-rating'>{{Squad_fpp.dmg_per_match}}</span>
                </div>
        </div>
    </div>
</template>

<script>
import state from '../historicModeState.js'

export default {
    name: 'ContainerModes',
    components: {

    },
    data: () =>{
        return state
    }
}
</script>
<style>
.container-modes{
    margin: auto;
    background-color: rgba(0,0,0,.8);
    margin-top: 20px;
    width: 95%;
    border-radius: 4px;
    text-align: left;
    color: #f2a900;
}
.mode_solo{
    background-color: rgba(0,0,0,.8);
    width: 32%;
    float: left;
    margin-right: 1%;
}
.modes:after{
    content: "";
    display: table;
    clear: both;
}
.matche-mode-solo{
    width: 50%;
    float: left;
    text-align: center;
}
.title-rating{
    text-align: center;
    font-size: 18px;
    color: #fff;
}
.title-solo{
     width: 100%;
    font-size: 20px;
    padding-right: 5px;
    color: #fff;
    background-color: #8F8E10;
}
.title-duo{
    font-size: 20px;
    padding-right: 5px;
    color: #fff;
    background-color: #853D17;
}

.title-squad{
    font-size: 20px;
    padding-right: 5px;
    color: #fff;
    background-color: #3B6638;
}


.mode_duo{
    background-color: rgba(0,0,0,.8);
    width: 32%;
    float: left;
    margin-right: 1%;
    margin-left: 1%; 
}

.mode_squad{
    background-color: rgba(0,0,0,.8);
    width: 32%;
    float: right;

}
.matche_processed{
    padding-top: 2%;  
    float: right;
    font-size: 12px;
}
</style>

