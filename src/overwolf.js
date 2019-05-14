import state from './components/inGameState.js';
import historicGameState from './components/historicGameState.js';

function setatributes(feature = 'null'){
  
  overwolf.games.events.getInfo(function(info) {
    console.log(info)
    if(info.status=='error'){
      return false;
    }
    if(feature == "phase"){
      state.phase = (info.res == "undefined") ? "lobby": info.res.game_info.phase;
    }
    if(feature == 'rank'){
      console.log(info)
      state.match_info.me = (info.res.match_info.me  == "undefined") ? '0' : info.res.match_info.me; 
      if (state.match_info.me != null){
        myHistoric(state);
      }
      
    }   
    if(feature == "kill"){
      state.match_info.kills = (info.res.match_info.kills  == "undefined") ? '0' : info.res.match_info.kills;
      state.match_info.headshots = (info.res.match_info.headshots  == "undefined") ? '0' : info.res.match_info.headshots;
      state.match_info.max_kill_distance = (info.res.match_info.max_kill_distance) ? info.res.match_info.max_kill_distance : '0';
    }
    if(state.phase == 'lobby' || state.phase == 'airfield'){
      state.match_info.kills = 0;
      state.match_info.max_kill_distance = 0;
      state.match_info.me = 0;
      
    }else { 
      state.me.name = (info.res.me == "undefined") ? "undefined" : info.res.me.name;
      //localStorage.setItem("Player_nickname", state.me.name)
      state.match_info.mode = info.res.match_info.mode;
      if(state.match_info.mode != "solo" && info.res.game_info.phase != "lobby"){
        var team = JSON.parse(info.res.match_info.nicknames);
        state.match_info.nicknames.team_members = team.team_members;
      }
      state.match_info.total_teams = info.res.match_info.total_teams; 
      state.match_info.total = info.res.match_info.total;
      state.match_info.map = map(info.res.match_info.map);
    } 
  });
  
}

var g_interestedInFeatures = [
    'kill',
    'revived',
    'death',
    'killer',
    'match',
    'rank',
    'location',
    'me',
    'team',
    'phase',
    'map',
    'roster'
  ];
  
  function registerEvents() {
    // general events errors
    overwolf.games.events.onError.addListener(function(info) {
      console.log("Error: " + JSON.stringify(info));
    });
  
    // "static" data changed
    // This will also be triggered the first time we register
    // for events and will contain all the current information
    overwolf.games.events.onInfoUpdates2.addListener(function(info) {
      setatributes(info.feature);
    });
  
    // an event triggerd
    overwolf.games.events.onNewEvents.addListener(function(info) {
      setatributes(info.feature);
      console.log("EVENT FIRED: " + JSON.stringify(info));
    });
  }
  
  function gameLaunched(gameInfoinfo) {
    if (!gameInfoinfo) {
      return false;
    }
  
    if (!gameInfoinfo.gameInfo) {
      return false;
    }
  
    if (!gameInfoinfo.runningChanged && !gameInfoinfo.gameChanged) {
      return false;
    }
  
    if (!gameInfoinfo.gameInfo.isRunning) {
      return false;
    }
  
    // NOTE: we divide by 10 to get the game class id without it's sequence number
    if (Math.floor(gameInfoinfo.gameInfo.id/10) != 10906) {
      return false;
    }
    console.log("PUBG Launched");
    return true;
  
  }
  
  function gameRunning(gameInfo) {
  
    if (!gameInfo) {
      return false;
    }
  
    if (!gameInfo.isRunning) {
      return false;
    }
  
    // NOTE: we divide by 10 to get the game class id without it's sequence number
    if (Math.floor(gameInfo.id/10) != 10906) {
      return false;
    }
    
    console.log("PUBG running");
    return true;
  
  }
  
  
  function setFeatures() {
    overwolf.games.events.setRequiredFeatures(g_interestedInFeatures, function(info) {
      if (info.status == "error")
      {
        state.in_game = false;
        console.log("Could not set required features: " + info.reason);
        console.log("Trying in 2 seconds");
        window.setTimeout(setFeatures, 2000);
        return;
      }
      state.in_game = true;
      console.log("Set required features:");
      console.log(JSON.stringify(info));
    });
  }
  
  
  // Start here
  overwolf.games.onGameInfoUpdated.addListener(function (res) {
    if (gameLaunched(res)) {
      registerEvents();
      setTimeout(setFeatures, 1000);
      return 0;
    }
    if(!res.gameInfo.isRunning){
      state.in_game = false;
    }
    console.log("onGameInfoUpdated: " + JSON.stringify(res));
  });
  
  overwolf.games.getRunningGameInfo(function (res) {
    if (gameRunning(res)) {
      registerEvents();
      setTimeout(setFeatures, 1000);
    }
   
    console.log("getRunningGameInfo: " + JSON.stringify(res));
  });
  
function map(map){
    switch (map) {
      case "Desert_Main":
        return "Miramar";
        break;
      case "DihorOtok_Main":
        return "Vikendi";
        break;
      case "Erangel_Main":
        return "Erangel";
        break;
      case "Range_Main":
        return "Camp Jackal";
        break;
      case "Savage_Main":
        return "Sanhok";
        break;
      default:
        break;
    }  
  }
