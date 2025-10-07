var autok = new Map();

function Auto(gyarto, tipus, szin){
    this.gyarto = gyarto;
    this.tipus = tipus;
    this.szin = szin;
}

document.getElementById("gomb").addEventListener("click", function(){
    var rsz = document.getElementById("rendszam").value;
    var gy = document.getElementById("gyarto").value;
    var t = document.getElementById("tipus").value;
    var sz = document.getElementById("szin").value;

    var aktAuto = new Auto(gy, t, sz);

    autok.set(rsz, aktAuto);
    //var a1 = autok.get("AB-12-AB"); //Auto tipusu objektum

    //console.log(autok);
}, false);

document.getElementById("keresesGomb").addEventListener("click", function(){
    var keresettRendszam = document.getElementById("keresettRendszam").value;
    var h3 = document.getElementById("eredmeny");

    if(autok.has(keresettRendszam)){
        var keresettAuto = autok.get(keresettRendszam);
        h3.innerHTML = "Gyarto: " + keresettAuto.gyarto + ", tipus: " + keresettAuto.tipus + ", szin: " + keresettAuto.szin;
    }
    else{
        h3.innerHTML = "A megadott rendszamhoz nem tartozik jarmu a rendszerben!";
    }

}, false);
