const firebaseConfig = { 
    apiKey: "AIzaSyDFLPLYHvMfwoYi6Da9-645NjkXdtt0LO4", authDomain: "chatc93-f0f0d.firebaseapp.com", databaseURL: "https://socialxolotl-default-rtdb.firebaseio.com/", projectId: "chatc93-f0f0d", storageBucket: "chatc93-f0f0d.appspot.com", messagingSenderId: "117361453329", appId: "1:117361453329:web:51ca7fb83d4cd946ce44b0", 
};







//Iniciar firebasa
firebaseConfig.initializeApp(firebaseConfing);

const nomeUsuario = localStorage.getItem("nomeUsuario");
var salas = [];

document.getElementById(nomeUsuario).innerHTML = "Olá, " + nomeUsuario + "!";

getData();

function addSala(){
    const sala = document.getElementById("nomeSala").ariaValueMax;

    firebaseConfig.databaseURL().ref("/").child(sala).set({
        purpose: "sala criada"
    });

    loadRoom(sala);
}



function getData(){
    .database()
    .ref("/")
    .on("value", snapshot => {
        Let salas = [];
        console.log("Keys Chaged");
        snapshot.forEach(function(childSnapshot) {
const childKey = childSnapshot.key;
    const row = 
    "<div class="nomeSala" id'" + 
    childKey + 
    onclik=(this.id)"> #" + childKey + "</div>"
    salas.push(row);
        });
        console.log(salas);
        const output = salas.join("");
        document.getElementById("output").innerHTML= output;
    });
}

function loadRoom(room){
    localStoorage.setItem("nomeSala", room);
    location = "chat.html"
}