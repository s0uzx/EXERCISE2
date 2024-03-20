let vogais = ['a', 'e', 'i', 'o', 'u'];

let consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]

let spaces = [" "];

let text = "Não importa o que eu faça, eu sou absorvido por problemas";

text = text.toLowerCase();

let Letras = text.split('');

let Vog = [];

let Cons = [];

let arraySpaces = [];

for(let i = 0; i < Letras.length; i++){
  if(vogais.includes(Letras[i])){
    Vog.push(Letras[i]);
  }
}

for(let i = 0; i < Letras.length; i++){
  if(consoantes.includes(Letras[i])){
    Cons.push(Letras[i]);
  }
}

for(let i = 0; i < Letras.length; i++){
    if(spaces.includes(Letras[i])){
      arraySpaces.push(Letras[i]);
    }
  }
  
console.log("Original:", text);
console.log("Consoantes:", Cons.toString());
console.log("Total de Consoantes:" + Cons.length);
console.log("Vogais:", Vog.toString());
console.log("Total de Vogais:" + Vog.length);
console.log("Espaços:", arraySpaces.toString());
console.log("Total de Espaços:" + arraySpaces.length);