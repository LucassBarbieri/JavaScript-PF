// --------------------------------------------------------------------------------//
// -- PROYECTO: TIENDA ONLINE -----------------------------------------------------//
// -- ALUMNO: Lucas Barbieri ------------------------------------------------------//
// --------------------------------------------------------------------------------//
// -- PRE LOADER ------------------------------------------------------------------//
window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}
// --------------------------------------------------------------------------------//
function logout(){

    if(bAcceso = true){
        bAcceso = false
        window.location = "index.html";
    }else{
        bAcceso = false
        window.location = "index.html";
    }
    
}
// --------------------------------------------------------------------------------//
setTimeout(()=>{
    bAcceso = false
    if (bAcceso == false){
        window.location = 'index.html';
    }
}, 180000);
// --------------------------------------------------------------------------------//
// ------------------------------- COPYRIGHT --------------------------------------//
// -------------------------------- FINGER ----------------------------------------//
// --------------------------------- 2020 -----------------------------------------//
// --------------------------------------------------------------------------------//