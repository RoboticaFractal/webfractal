let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;


boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1; 
    }
    else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador=0;
    }

})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.className = ('enlaces uno');
        contador=1;
    }
})

let slider = document.querySelector(".slider-contenedors")
let sliderIndividual = document.querySelectorAll(".contenid-slider")
let con = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 10000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);



function slides(){
    slider.style.transform = "translate("+(-width*con)+"px)";
    slider.style.transition = "transform .8s";
    con++;

    if(con == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
            con=1;
        },10000)
    }
}







