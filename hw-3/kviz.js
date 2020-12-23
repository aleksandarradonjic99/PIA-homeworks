var nizPitanja;

function ucitaj(){

fetch('pitanjakviz.json').then(function(response) {
    return response.json();
}).then(function(obj) {
    nizPitanja=obj;
});

}

var brojPitanja = 0;

var brojac=true;

var interval =setInterval(prikazi,1000);

function prikazi(){

    if(brojPitanja < 10){

        document.getElementById ("pitanje").innerHTML = nizPitanja [brojPitanja].Pitanje;
        document.getElementById ("odgovor1").innerHTML = nizPitanja [brojPitanja].A;
        document.getElementById ("odgovor2").innerHTML = nizPitanja [brojPitanja].B;
        document.getElementById ("odgovor3").innerHTML = nizPitanja [brojPitanja].C;
        document.getElementById ("odgovor4").innerHTML = nizPitanja [brojPitanja].D;
        brojPitanja++;
        brojac=false;
        if(brojac==false){
            clearInterval(interval);
            brojac = true;
        }
    }



}