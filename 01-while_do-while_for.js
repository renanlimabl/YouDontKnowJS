/**
 * Loop While / Do While : 
 * O Loop while.. e do..while ilustram o conceito de repetir um block de instruções
 * até uma condição deixar de ser verdadeira.
 * 
 * A maior diferença entre o while e o do..while é que no do..while pelo menos uma 
 * execução será feita e também que a regra fica no bloco do { }
 */
let numOfCustomersWhile = 10;
while (numOfCustomersWhile > 0) {
  console.log(`${numOfCustomersWhile} - while - Como posso ajudar?`)

  numOfCustomersWhile -= 1;
}

let numOfCustomersDoWhile = 10;
do {
  console.log(`${numOfCustomersDoWhile} - do while - Como posso ajudar?`)
  numOfCustomersDoWhile -= 1;
} while (numOfCustomersDoWhile > 0)

/**
 * Loop for ()
 * O Loop for é mais simples e mais comum, ele possui 3 parâmetros,
 * 1º atribuição inicial a uma variavel.
 * 2º um teste condicional da variavel.
 * 3º uma atualização dessa variavel.
 */
for (var i = 0; i <= 9; i = i + 1) {
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}
