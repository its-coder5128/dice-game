let x=document.getElementsByTagName("h1")[0];

var ran2=Math.floor(Math.random()*6) + 1;
var ran1=Math.floor(Math.random()*6) + 1;

let refreshButton=document.getElementById("refresh");
document.getElementById("random1").src="./images/" + ran1 + ".png";
document.getElementById("random2").src="./images/" + ran2 + ".png";
if( ran1 > ran2)
{
    document.getElementById("result").innerText="Player 1 Wins";
}
else if(ran2 > ran1)
{
    document.getElementById("result").innerText="Player 2 Wins";
}
else{
    document.getElementById("result").innerText="Its a Draw!";
}

refreshButton.addEventListener("click",function(){
    window.location.reload(true);
});