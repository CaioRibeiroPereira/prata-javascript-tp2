function erroLet() {
  let x = 1;
  if (true) {
    let x = 2;
    let x = 3;
    console.log(x); // Erro de Sintaxe: SyntaxError: Identifier 'x' has already been declared (at script.js:5:9) (o erro é que o let não pode ser redeclarado no mesmo bloco de declarações )
  }
}
function erroConst() {
  const c = 1;
  console.log(c);

  const c = 2;
  console.log(c);
  //  Erro de Sintaxe: SyntaxError: Identifier 'c' has already been declared (at script.js:13:9) (o erro é que o const c não pode ser redeclarado)
}
function erroVar() {
  var v = 20;
  var v = 30;
  console.log(v);// Saída: 30 . A variável Var pode ser redeclarada no mesmo bloco/escopo, fazendo com que possa ocorrer bugs que podem ser difíceis de serem detectados em um grande programa.
}