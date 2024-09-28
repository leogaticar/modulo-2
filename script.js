// Requerimiento 1

let image = document.querySelector('#imagen-a-trabajar')
let image_clicked = false;

image.addEventListener("click",function(){
if(image_clicked === false){
    image.style.border= "2px solid red";
    image_clicked = true;
} else {
image.style.border = "0px"
image_clicked = false;
}
});

// Requerimiento 2

selector_sticker_1 = document.querySelector('#input_1');
selector_sticker_2 = document.querySelector('#input_2');
selector_sticker_3 = document.querySelector('#input_3');

selector_sticker_1.addEventListener("change", function() {
    const suma_req2 = 
    Number(selector_sticker_1.value) + 
    Number(selector_sticker_2.value) + 
    Number(selector_sticker_3.value);
    if (suma_req2 > 10){
        resultado_requerimiento_2.innerHTML = "Llevas demasiados stickers"
    }else {
        resultado_requerimiento_2.innerHTML = "Llevas "+ suma_req2 + " stickers" }
});
selector_sticker_2.addEventListener("change", function() {
    const suma_req2 = 
    Number(selector_sticker_1.value) + 
    Number(selector_sticker_2.value) + 
    Number(selector_sticker_3.value);
    if (suma_req2 > 10){
        resultado_requerimiento_2.innerHTML = "Llevas demasiados stickers"
    }else {
    resultado_requerimiento_2.innerHTML = "Llevas "+ suma_req2 + " stickers" }
});
selector_sticker_3.addEventListener("change", function() {
    const suma_req2 = 
    Number(selector_sticker_1.value) + 
    Number(selector_sticker_2.value) + 
    Number(selector_sticker_3.value);
    if (suma_req2 > 10){
        resultado_requerimiento_2.innerHTML = "Llevas demasiados stickers"
    }else {
        resultado_requerimiento_2.innerHTML = "Llevas "+ suma_req2 + " stickers" }
});


resultado_requerimiento_2 = document.querySelector('#resultado_requerimiento_2');
resultado_requerimiento_2.innerHTML = "Llevas 0 stickers" 

// Requerimiento 3