function santriProgrammer(nama ,status,asal){
    console.log(`Nama santri ${nama} ` +`Berasal dari ${asal}`);
    status()
}
function status(){
    alert("Statusnya adalah santri");
}
santriProgrammer("Rahmad",status,"Medan")
