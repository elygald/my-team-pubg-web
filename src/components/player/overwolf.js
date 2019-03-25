import state from '../inGameState.js';

function setatributes(feature = 'null'){
  overwolf.games.events.getInfo(function(info) {
    state.phase = (info.res.game_info.phase == "undefined") ? "lobby": info.res.game_info.phase;   
    state.me.name = info.res.me.name;
    if(feature == "kill"){
      state.match_info.kills = (info.res.match_info.kills  === "undefined") ? '0' : info.res.match_info.kills;
      state.match_info.headshots = (info.res.match_info.headshots  === "undefined") ? '0' : info.res.match_info.headshots;
      state.match_info.max_kill_distance = (info.res.match_info.max_kill_distance  === "undefined") ? '0' : info.res.match_info.max_kill_distance;
    }
    var location = JSON.parse(info.res.game_info.location);
    state.location.x = location.x;
    state.location.y = location.y;
    state.location.z = location.z;
    state.match_info.mode = info.res.match_info.mode;
    if(state.match_info.mode != "solo" && info.res.game_info.phase != "lobby"){
       var team = JSON.parse(info.res.match_info.nicknames);
      state.match_info.nicknames.team_members = team.team_members;
    }
    state.match_info.me = (info.res.match_info.me  === "undefined") ? '0' : info.res.match_info.me; 
    state.match_info.total_teams = info.res.match_info.total_teams; 
    state.match_info.map = info.res.match_info.map; 
  });
  if(state.phase == 'lobby'){
    state.match_info.kills = 0;
    state.match_info.max_kill_distance = 0;
  }
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
      //console.log("Error: " + JSON.stringify(info));
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
     // console.log("EVENT FIRED: " + JSON.stringify(info));
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
  
    //console.log("PUBG running");
    return true;
  
  }
  
  
  function setFeatures() {
    overwolf.games.events.setRequiredFeatures(g_interestedInFeatures, function(info) {
      if (info.status == "error")
      {
        //console.log("Could not set required features: " + info.reason);
        //console.log("Trying in 2 seconds");
        window.setTimeout(setFeatures, 2000);
        return;
      }
  
      //console.log("Set required features:");
      //console.log(JSON.stringify(info));
    });
  }
  
  
  // Start here
  overwolf.games.onGameInfoUpdated.addListener(function (res) {
    if (gameLaunched(res)) {
      registerEvents();
      setTimeout(setFeatures, 1000);
    }
    setatributes();
    console.log("onGameInfoUpdated: " + JSON.stringify(res));
  });
  
  overwolf.games.getRunningGameInfo(function (res) {
    if (gameRunning(res)) {
      registerEvents();
      setTimeout(setFeatures, 1000);
    }
    setatributes();
    console.log("getRunningGameInfo: " + JSON.stringify(res));
  });
  