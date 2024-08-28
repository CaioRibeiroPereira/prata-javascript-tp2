let peso = Number(prompt("Digite seu peso em quilograma(kg):"));
let altura = Number(prompt("Digite sua altura em metros(m)"));

let imc = peso / Math.pow(altura , 2);

alert("Seu Índice de massa corporal (IMC) é : " + imc);

if(imc < 20){
    alert("Seu IMC é menor que 20");
} else {
    alert("Seu IMC é maior ou igual a 20");
}