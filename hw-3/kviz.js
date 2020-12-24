var nizPitanja;

function ucitaj(){

fetch('pitanjakviz.json').then(function(response) {
    return response.json();
}).then(function(obj) {
    nizPitanja=obj;
});

}

var brojPitanja = 0;

var brojac=0;

var interval =setInterval(prikazi,1000);

var rezultat = 0;

var pitanje = document.getElementById ("pitanje");
var odgovor1 = document.getElementById ("odgovor1");
var odgovor2 = document.getElementById ("odgovor2");
var odgovor3 = document.getElementById ("odgovor3");
var odgovor4 = document.getElementById ("odgovor4");

function prikazi(){

    if(brojPitanja < 10){

        pitanje.innerHTML = nizPitanja [brojPitanja].Pitanje;
        odgovor1.innerHTML = nizPitanja [brojPitanja].A;
        odgovor2.innerHTML = nizPitanja [brojPitanja].B;
        odgovor3.innerHTML = nizPitanja [brojPitanja].C;
        odgovor4.innerHTML = nizPitanja [brojPitanja].D;

        brojPitanja++;
        brojac++;
        if(brojac==1){
            clearInterval(interval);
            
        }


        odgovor1.style.backgroundColor = "cornflowerblue";
        odgovor2.style.backgroundColor = "cornflowerblue";
        odgovor3.style.backgroundColor = "cornflowerblue";
        odgovor4.style.backgroundColor = "cornflowerblue";

        odgovor1.style.pointerEvents = "all";
        odgovor2.style.pointerEvents = "all";
        odgovor3.style.pointerEvents = "all";
        odgovor4.style.pointerEvents = "all";

        console.log(rezultat);

    }

    else{
        window.location.href = "konacno.html";

    }

}

var preskociDugme = document.getElementById("preskoci");
preskociDugme.onclick=()=> {
    prikazi();
}

var odustaniDugme = document.getElementById("odustani");
odustaniDugme.onclick = () => {
    window.location.href = "konacno.html";
}



var tacanOdgvor;


    odgovor1.onclick= () => {
        tacanOdgvor = nizPitanja[brojPitanja-1].tacno;

        if(odgovor1.innerHTML == tacanOdgvor){

            odgovor1.style.backgroundColor= "green";

            rezultat++;
        
            odgovor1.style.pointerEvents = "none";
            odgovor2.style.pointerEvents = "none";
            odgovor3.style.pointerEvents = "none";
            odgovor4.style.pointerEvents = "none";
        }
        else{
            odgovor1.style.backgroundColor = "red";

            odgovor1.style.pointerEvents = "none";
            odgovor2.style.pointerEvents = "none";
            odgovor3.style.pointerEvents = "none";
            odgovor4.style.pointerEvents = "none";

            
        }
        prikazi();
    }

    odgovor2.onclick= () => {
         tacanOdgvor = nizPitanja[brojPitanja-1].tacno;

        if(odgovor2.innerHTML == tacanOdgvor){

            odgovor2.style.backgroundColor= "green";

            rezultat++;

            odgovor1.style.pointerEvents = "none";
            odgovor2.style.pointerEvents = "none";
            odgovor3.style.pointerEvents = "none";
            odgovor4.style.pointerEvents = "none";
        
        }
        else{
            odgovor2.style.backgroundColor = "red";

            odgovor1.style.pointerEvents = "none";
            odgovor2.style.pointerEvents = "none";
            odgovor3.style.pointerEvents = "none";
            odgovor4.style.pointerEvents = "none";
        }
        prikazi();
    }

    odgovor3.onclick= () => {
        tacanOdgvor = nizPitanja[brojPitanja-1].tacno;

        if(odgovor3.innerHTML == tacanOdgvor){

            odgovor3.style.backgroundColor= "green";

            rezultat++;

            odgovor1.style.pointerEvents = "none";
            odgovor2.style.pointerEvents = "none";
            odgovor3.style.pointerEvents = "none";
            odgovor4.style.pointerEvents = "none";
        
        }
        else{
            odgovor3.style.backgroundColor = "red";

            odgovor1.style.pointerEvents = "none";
            odgovor2.style.pointerEvents = "none";
            odgovor3.style.pointerEvents = "none";
            odgovor4.style.pointerEvents = "none";
        }
        prikazi();
    }

    odgovor4.onclick= () => {
         tacanOdgvor = nizPitanja[brojPitanja-1].tacno;

        if(odgovor4.innerHTML == tacanOdgvor){

            odgovor4.style.backgroundColor= "green";

            rezultat++;

            odgovor1.style.pointerEvents = "none";
            odgovor2.style.pointerEvents = "none";
            odgovor3.style.pointerEvents = "none";
            odgovor4.style.pointerEvents = "none";
        
        }
        else{
            odgovor4.style.backgroundColor = "red";

            odgovor1.style.pointerEvents = "none";
            odgovor2.style.pointerEvents = "none";
            odgovor3.style.pointerEvents = "none";
            odgovor4.style.pointerEvents = "none";
        }
        prikazi();
    }










