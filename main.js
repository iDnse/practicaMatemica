console.group('Calcular Triangulo');
const ladoBaseTriangulo = document.querySelector('#ladoBaseTriangulo');
const ladoTriangulo1 = document.querySelector('#lado1Triangulo');
const ladoTriangulo2 = document.querySelector('#lado2Triangulo');
const buttonCalcularTriangulo = document.querySelector('#calcularTriangulo');
const buttonResetTriangulo = document.querySelector('#resetTriangulo');
const respuestaTriangulo = document.querySelector('.respuestaTriangulo');
const calcularTriangulo=()=>{
    const ladoBase = Math.floor(ladoBaseTriangulo.value);
    const lado1 = Math.floor(ladoTriangulo1.value);
    const lado2 = Math.floor(ladoTriangulo2.value);
    const respuesta = respuestaTriangulo;
    let perimetroTriangulo=0;
    let alturaTriangulo=0;
    let areaTriangulo=0;
    if(ladoBase==lado1 && lado1==lado2){
        perimetroTriangulo=ladoBase*3;
        alturaTriangulo =(lado1*Math.sqrt(3))/2;
        areaTriangulo = (lado1*alturaTriangulo)/2;
    }else{
        perimetroTriangulo=ladoBase+lado1+lado2;
        let s = perimetroTriangulo/2;
        areaTriangulo = Math.sqrt(s*(s-ladoBase)*(s-lado1)*(s-lado2));
        alturaTriangulo = (2*areaTriangulo)/ladoBase;
    }
    respuesta.innerHTML=`Perimetro: ${perimetroTriangulo}cm / Altura: ${alturaTriangulo.toFixed(2)}cm / Area: ${areaTriangulo.toFixed(2)}cm`;
}
const removerRespuestaTriangulo=()=>{
    const respuesta = respuestaTriangulo;
    ladoBaseTriangulo.value=0;
    ladoTriangulo1.value=0;
    ladoTriangulo2.value=0;
    respuesta.innerHTML=''
}
buttonResetTriangulo.addEventListener('click',removerRespuestaTriangulo)
buttonCalcularTriangulo.addEventListener('click', calcularTriangulo)
console.groupEnd();

// cuadrado
console.group('Calcular Cuadrado');
const ladoCuadrado1 = document.querySelector('#ladoCuadrado1');
const ladoCuadrado2 = document.querySelector('#ladoCuadrado2');
const ladoCuadrado3 = document.querySelector('#ladoCuadrado3');
const ladoCuadrado4 = document.querySelector('#ladoCuadrado4');

const buttonCalcularCuadrado = document.querySelector('#calcularCuadrado')
const buttonResetCuadrado = document.querySelector('#respuestaCuadrado')

const respuestaCuadrado = document.querySelector('.respuestaCuadrado');

let areaCuadrado =0;
let perimetroCuadrado =0;
let diagonalCuadrado =0;


const calcularCuadrado=()=>{
    let lado1 = Math.floor(ladoCuadrado1.value);
    let lado2 = Math.floor(ladoCuadrado1.value);
    let lado3 = Math.floor(ladoCuadrado1.value);
    let lado4 = Math.floor(ladoCuadrado1.value);
    let respuesta = respuestaCuadrado;

    if(lado1==lado2 && lado1==lado3 && lado1==lado4){
        areaCuadrado = lado1*lado1;
        perimetroCuadrado = lado1*4;
        diagonalCuadrado = lado1*Math.sqrt(2)
    }else{
    };

    respuesta.innerHTML=`Perimetro: ${perimetroCuadrado}cm / Diagonal: ${diagonalCuadrado.toFixed(2)}cm / Area: ${areaCuadrado.toFixed(2)}cm`;
}

const removerRespuestaCuadrado=()=>{
    respuesta = respuestaCuadrado;
    ladoCuadrado1.value=0;
    ladoCuadrado2.value=0;
    ladoCuadrado3.value=0;
    ladoCuadrado4.value=0;
    respuesta.innerHTML=''
}

buttonResetCuadrado.addEventListener('click',removerRespuestaCuadrado)

buttonCalcularCuadrado.addEventListener('click', calcularCuadrado)
console.groupEnd();