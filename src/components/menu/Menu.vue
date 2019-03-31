<template>
    <nav> 
        <ul class='menu'>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/team">Teams</router-link></li>
            <li><router-link to="/player">Players</router-link></li>
            <li><router-link to="/find-teams">Find Teams</router-link></li>
            <li><router-link to="/find-players">Find players</router-link></li>
            <li><router-link to="/login">login</router-link></li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "Menu",
}
</script>
<style>
*{margin: 0; padding: 0;}
 
body{
font-family: "Oswald", sans-serif;
font-size: 12px;
}
 
.menu{
    background-color: rgba(0,0,0,.5);
    list-style:none; 
    
    float:left; 
    width: 64.517%;
    margin-bottom: 0px;
}
.menu li{
    position:relative; 
    float: left; 
    border-right:1px solid #c0c0c0; 
}

.menu li a{color:#f2a900; text-decoration: none; padding:5px 10px; display:block;}
 
.menu li a:hover{
    background:#333; 
    color:#f2a900; 
    text-shadow:0px 0px 2px #c0c0c0; 
}

</style>

