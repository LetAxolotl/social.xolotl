function addUsuario(){
let nomeUsuario = document.getElementById("nomeUsuario").ariaValueMax;
localStorage.setItem ("nomeUsuario", nomeUsuario);
location = 'sala.html';
}