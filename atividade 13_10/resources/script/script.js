// switch case

// let opcao = Number(prompt("digite uma opção"));

// switch (opcao) {
//     case 1:
//         console.log("primeira opção");
//         break;
//     case 2:
//         console.log("segunda opção");
//         break;
//     case 3:
//         console.log("terceira opção");
//         break;

//     default:
//         console.log("Valor inexistente")
//         break;
//}
// alert("Bem-vindo ao nosso restaurante!")
// alert("Escolha uma das opções abaixo:\n 1- Hamburguer e refrigerante\n 2- salgado e suco\n 3- Salgado e refri\n 4- Hamburguer, refri e batata frita")
// let opcao = Number(prompt("Escolha um lanche"));
// switch(opcao) {
//     case 1:
//         alert("Você escolheu Hamburguer e refrigerante");
//         break;
//     case 2:
//         alert("Você escolheu salgado e suco");
//         break;
//     case 3:
//         alert("Você escolheu salgado e refri");
//         break;
//         case 4:
//         alert("Você escolheu hamburguer, refri e batata frita");
//         break;

//         default:
//             alert("Essa opção não existe, por favor, escolha outro");
//             break;
// }


//arrays

// let nome = "Luiza";
// let nomes = ["TomasFerrais", "Naclara","Ericka","Kayllane"];
// // let nums = [1,2,3,4,5,6,7,8,9,10]
// // let mist = [1,"um",2 ,"dois", 3, "três"]
// // console.log(mist)
// // console.log(nums[9])
//substitui o final
// nomes[0] = "joão"
// //adiciona ao final
// nomes.push("Taehyung")
//remove do final
// nomes.pop()
//adiciona no começo
// nomes.unshift("Seokjin")
//remove do começo
// nomes.shift()
// console.log(nomes)

//ATIVIDADE 1
// let frutas = ["Uva","Kiwi","Banana","Tangerina","Morango"]
// frutas.shift()
// frutas.shift()

// frutas.push("Açaí")
// frutas.push("Ameixa")
// frutas.push("Acerola")
// console.log(frutas)

//ATIVIDADE 2

// let nomesCompostos = ["Ana Clara","Ana Liz","Enzo Gabriel","Kaylla Kyara","Maria Eduarda","Tomas Chato", "Victo Gabriel"]
// nomesCompostos.shift()
// nomesCompostos[5] = "Jhon"
// console.log(nomesCompostos)

// let nums = [1,,2,3,4,5,6,7,8,9,10]

// let listaFiltrada = nums.filter(num =>
//     num === 7
// )

// console.log(listaFiltrada)

let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let listaFiltrada = nums.filter(num => num % 2 === 0 

 )
 console.log(listaFiltrada)