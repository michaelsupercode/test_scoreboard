

// Window Prompt
// ==================================
function nameTeamHome(){
    let Team=prompt("name home team?");
    if(Team!=null){
        document.getElementById('groupHome').innerHTML=Team;
    }
}
function nameTeamOpponent(){
    let Team=prompt("name guest team?");
    if(Team!=null){
        document.getElementById('groupOpponent').innerHTML=Team;
    }
}
// Buttons +1 +2 +3 Home Counter
// ==================================
function plusOneHome(){
    let startNmb=document.getElementById('nmbHome').innerHTML;
    let endNmb=Number(startNmb)+Number(1);
    document.getElementById('nmbHome').innerHTML=endNmb;
}
function plusTwoHome(){
    let startNmb=document.getElementById('nmbHome').innerHTML;
    let endNmb=Number(startNmb)+Number(2);
    document.getElementById('nmbHome').innerHTML=endNmb;
}
function plusThreeHome(){
    let startNmb=document.getElementById('nmbHome').innerHTML;
    let endNmb=Number(startNmb)+Number(3);
    document.getElementById('nmbHome').innerHTML=endNmb;
}
// Buttons +1 +2 +3 Opponent Counter
// ==================================
function plusOneOpponent(){
    let startNmb=document.getElementById('nmbOpponent').innerHTML;
    let endNmb=Number(startNmb)+Number(1);
    document.getElementById('nmbOpponent').innerHTML=endNmb;
}
function plusTwoOpponent(){
    let startNmb=document.getElementById('nmbOpponent').innerHTML;
    let endNmb=Number(startNmb)+Number(2);
    document.getElementById('nmbOpponent').innerHTML=endNmb;
}
function plusThreeOpponent(){
    let startNmb=document.getElementById('nmbOpponent').innerHTML;
    let endNmb=Number(startNmb)+Number(3);
    document.getElementById('nmbOpponent').innerHTML=endNmb;
}
// Button Reset
// ==================================
function reset(){
    document.getElementById('nmbHome').innerHTML=0;
    document.getElementById('nmbOpponent').innerHTML=0;
    document.getElementById('groupHome').innerHTML="Home";
    document.getElementById('groupOpponent').innerHTML="Opponent";
}