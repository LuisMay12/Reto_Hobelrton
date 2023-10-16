const toggle = document.querySelector(".toggle");
const links = document.querySelector(".nav-links");
const buscador = document.getElementById("buscar"); //formelement
const seleccion = document.getElementById("caja")
//recuadro de contenidos
const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const content1= document.getElementById("content1")
const content2 = document.getElementById("content2")
//segundo div
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const content3= document.getElementById("content3")
const content4 = document.getElementById("content4")
//tercer div
const option5 = document.getElementById("option5")
const option6 = document.getElementById("option6")
const content5= document.getElementById("content5")
const content6 = document.getElementById("content6")
// Recoger los bloques de infomacion
const div0 = document.getElementById("default")
const div1 = document.getElementById("1")
const div2 = document.getElementById("2")
const div3 = document.getElementById("3")

toggle.addEventListener("click",()=>{
    toggle.classList.toggle("rotate");
    links.classList.toggle("active");
})

buscador.addEventListener("submit",function(event){
    event.preventDefault();
    let seleccionHecha = buscador.querySelectorAll("option:checked");
    let selectext = Array.from(seleccionHecha).map(option => option.value)
    console.log(selectext)
    console.log(selectext[0]==="The Secret Life of Walter Mitty")
    console.log("funciona")
    cambiarReview(selectext)
})

//recuadro de reviews
let opcion = 1;
let opcion2 = 1;
let opcion3 = 1;
//let cambio = buscador.addEventListener("submit",()=>true);

const cambiarOpcion = function(option1,option2,content1,content2,opcion){


    if(opcion === 1){
        option1.classList.value = "option option-active";
        content1.classList.value = "content content-active";
    }else{
        option1.classList.value = "option";
        content1.classList.value = "content ";
    }

    if(opcion === 2){
        option2.classList.value = "option option-active";
        content2.classList.value = "content content-active";
    }else{
        option2.classList.value = "option";
        content2.classList.value = "content ";
    }
}

const cambiarReview = function(seleccion){

    if(seleccion[0] === ""){
        // div1.style.transition = "all 0.5s";
        div0.classList.value = "review1-box box-active"
    }else{
        div0.classList.value = "review1-box"
    }
    
    if(seleccion[0] === "The Secret Life of Walter Mitty"){
        // div1.style.transition = "all 0.5s";
        div1.classList.value = "review1-box box-active"
        div0.classList.value = "review1-box"
    }else{
        div1.classList.value = "review1-box"
    }

    if(seleccion[0] === "Children of Men"){
        div2.classList.value = "review1-box box-active"
        div0.classList.value = "review1-box"
    }else{
        div2.classList.value = "review1-box"
    }

    if(seleccion[0] === "At Eternity's Gate"){
        div3.classList.value = "review1-box box-active"
        div0.classList.value = "review1-box"
    }else{
        div3.classList.value = "review1-box"
    }

}

option1.addEventListener("click",()=>{
    opcion = 1;
    cambiarOpcion(option1,option2,content1,content2,opcion);
})

option2.addEventListener("click",()=>{
    opcion = 2;
    cambiarOpcion(option1,option2,content1,content2,opcion);
})

option3.addEventListener("click",()=>{
    opcion2 = 1;
    cambiarOpcion(option3,option4,content3,content4,opcion2);
})

option4.addEventListener("click",()=>{
    opcion2 = 2;
    cambiarOpcion(option3,option4,content3,content4,opcion2);
})

option5.addEventListener("click",()=>{
    opcion3 = 1;
    cambiarOpcion(option5,option6,content5,content6,opcion3);
})

option6.addEventListener("click",()=>{
    opcion3 = 2;
    cambiarOpcion(option5,option6,content5,content6,opcion3);
})
