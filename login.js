function IDKname() {
player_1=document.getElementById("Text_input1").value;
player_2=document.getElementById("Text_input2").value;

localStorage.setItem("Player_1",player_1);
localStorage.setItem("Player_2",player_2);

window.location="game.html"
}