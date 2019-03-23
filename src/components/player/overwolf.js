import state from '../inGameState.js';

function name(name){
    state.me.name=name;
    state.match_info.map = '';
}

var count = 0;
setInterval(function(){
    count=count+1;
    name('Conkers_Mrc');
}, 2000);