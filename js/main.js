/*libro*/

const BtnVuerta = document.querySelectorAll('.btn');


BtnVuerta.forEach((el, index) => {
    el.onclick = () => {

        const paginaVuertaId = el.getAttribute('data-page');
        const paginaVuerta = document.getElementById(paginaVuertaId);

        if (paginaVuerta.classList.contains('vuerta')) {
            paginaVuerta.classList.remove('vuerta')
            setTimeout(() => {
                paginaVuerta.style.zIndex = 20 - index;
            }, 200);
        }
        else {
            paginaVuerta.classList.add('vuerta')

            setTimeout(() => {
                paginaVuerta.style.zIndex = 20 + index;
            }, 200);

        }
    }
});




/*----------------------#calculadora--------------------- */
const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByTagName("button"));

buttons.map(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.dataset.value;
        if (buttonValue === "C") {
            display.value = "";
        } else if (buttonValue === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += buttonValue;
        }
    });
});

/*-------------------------fin de la calculadora--------------------------- */

let btnAmpliar = document.querySelectorAll(".btn-ampliar");
let projectoImagen = document.querySelector(".projecto-imagen");


btnAmpliar.forEach((boton, index) => {

    boton.addEventListener("click", (e) => {

        if (e.target && index) {

            document.querySelector(".container4").classList.toggle("active");
            document.querySelector(".container3").classList.remove("active");
        } else {
            document.querySelector(".container4").classList.remove("active");
            document.querySelector(".container3").classList.toggle("active");

        }
    })
});


let logosImageConten = document.querySelectorAll('.logos-image-cont');
logosImageConten.forEach(cont => {
    cont.addEventListener('click', (e) => {
     
        if (e.target && e.target.tagName === 'IMG') {
            e.target.classList.toggle('active');
        } 
     })
 })



let BtnSkillEducatExper = document.querySelector(".skill-educat-exper");
let article = Array.prototype.slice.apply(document.querySelectorAll(".article"));
  let Tab_Btn = Array.prototype.slice.apply(document.querySelectorAll(".tab-btn"));
 
BtnSkillEducatExper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === "A") {
        let index = Tab_Btn.indexOf(e.target);
        Tab_Btn.map(elemento => elemento.classList.remove('active'));
        Tab_Btn[index].classList.add('active');
        article.map((elemento) => elemento.classList.remove("visible"));
        article[index].classList.add("visible");
        
       } 
     
    })


function losArticle(primer) {
     article.forEach((article, index) => {
        
        let eyo = article.classList.add("vue");
         console.log(eyo+index)
     });
    
}
