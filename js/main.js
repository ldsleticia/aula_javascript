/*function soma(n1, n2){
    return n1 + n2;
} //função de soma
alert(soma(5,10));*/

/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(setReplace("Vai Japão", "Japão", "Brasil")) aqui está setada a frase, o que é pra mudar da frase e o que é pra colocar no lugar com o replace*/

function validaIdade(idade){
    let validar;
    if(idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar; //ele precisa retornar validar porque é o validar que faz toda a função rodar e vai te dar se a idade é true ou false

}

let idade = parseInt(prompt("digite sua idade"));
console.log(validaIdade(idade));



/*let d = new Date(); quando vazio mostra a data completa do dia
alert(d.getMonth()+1); com getMonth, ele vai mostrar só o mês começando do 0, sempre será necessário colocar o +1
//alert(d.getDay()); pega só o dia
//alert(d.getMinutes()); pega só os minutos
/*for (let contador = 0; contador <= 100; contador++){
    console.log(contador);
}/*

/*let contador = 0;
while (contador <= 100){
    console.log(contador);
    contador++;
} colocar o console.log antes do final do laço para ficar a conta certa/*

/*let idade = parseInt(prompt("digite sua idade"));
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
} ensino do if,else*/

/*let frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas)
alert(frutas[1].nome); pega a fruta na posição 1 e dá o nome. Esse é um dicionário de array*/

/*let fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor); isso é um dicionário e sabemos disso porque está entre chaves*/

//let lista = ["maça", "pêra", "laranja"];
//console.log(lista.reverse()); muda a ordem da lista do último para o primeiro

//console.log(lista.length); mostra o tamanho do array, nesse caso o array lista

//console.log(lista.toString); deixa o array em string ao invés de elemento o que faz ele perder a ref de posição do array

//console.log(lista.join(" - ")); deixa o array em string mas você pode mudar o que separa uma palavra da outra, nesse caso um -

//lista.push("uva"); coloca um elemento, nesse caso a uva

//lista.pop(); tira um elemento, nesse caso o último


//let nome = "Letícia dos Santos";
//let idade = 24;
//let idade2 = 10;
//let frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade);
//alert(idade + idade2);
//alert(frase.replace("Japão é", "Brasil era")); //replace troca a informação da variável que tem string sem ter que mexer na declaração da var