/*let img = document.createElement('img');
let pClass = document.querySelector(' .class-p')
let div1 = document.createElement('div');

img.setAttribute('src','https://images.pexels.com/photos/6627544/pexels-photo-6627544.jpeg?cs=srgb&dl=pexels-youngdae-kim-6627544.jpg&fm=jpg');

pClass.innerText = 'as';
pClass.append(div1);
div1.append(img);

console.log(pClass.innerText); //Respetara los estilos del elemento
console.log(pClass.textContent); // No respeta los estilos del elemento, pero si el espaciado, luego de todo eso, ambos son los mismos

onchange="console.log('Imprimio despues de escribir en el input 2')" 
*/
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result1');
const textArea = document.querySelector('.text-area');


/*function onClick(){
    const sumaInputs = (Number(input1.value) + parseInt(input2.value)); //parseInt es mas preciso
    pResult.textContent = "Resultado es: " + sumaInputs;
    console.log(sumaInputs);
}*/

/*let buscarNombres = nombres.forEach(function(nombreAnthony){
    console.log(nombreAnthony.nombre);
    
})*/
 


function resultadoText(){
    if(( ((input1.value).toUpperCase() === 'ANTHONY' ) || ((input1.value).toUpperCase() === 'OSITO' ) ) && (input2.value === '10')){
        input1.value = '';
        input2.value = '';
        textArea.textContent = 'Muy bien conejita, jamas dudé de ti ♥';
        return;
    }
    
    else if(( ((input1.value).toUpperCase() === 'ANTHONY' ) || ((input1.value).toUpperCase() === 'OSITO' ) ) && (parseInt(input2.value) > 10)){
        input1.value = '';
        input2.value = '';
        textArea.textContent = 'Owwww conejita que tiernaaaaaa 😍😘';
        return;
    }
    else if(( ((input1.value).toUpperCase() === 'ANTHONY' ) || ((input1.value).toUpperCase() === 'OSITO' ) ) && (parseInt(input2.value) < 10)){
        input1.value = '';
        input2.value = '';
        alert('uu porqué no 10 ??? 😯😖 ');

        return;
    }
    else if(( ((input1.value).toUpperCase() != 'ANTHONY' ) && ((input1.value).toUpperCase() != 'OSITO' ) ) && (parseInt(input2.value) >=0)){
        input1.value = '';
        input2.value = '';
        alert('Quien es el otrooooo :( 😫') ;
        return;
    }
}

btn.addEventListener('click',resultadoText);
input1.addEventListener('mousedown',presionarTecla);
function presionarTecla(){
 alert('tomate el tiempo de responder tranquilamente conejita 🐰 ');
}
