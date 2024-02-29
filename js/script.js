
const gridContainer = document.querySelector('.grid-container');
// RESET
reset();

for(let i= 0; i<100; i++){
  // console.log(i);
  const square = getSquare(i);
  // console.log('ciao');
  gridContainer.append(square);

  console.log(square);
  
}













/////////////////////////////////////////////////////////////////////////////////////
//                         FUNZIONI
/////////////////////////////////////////////////////////////////////////////////////

function reset(){
  console.log(this);
  gridContainer.innerHTML = '';
}

// CREO square
function getSquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';

  // Proprietà custom
  // console.log(numero);
  sq._sqID = numero;
  const porcodio = this._sqID;

  console.log(this);
  sq.addEventListener('click', function(){
    const numero = this._sqID;
    
    this.innerHTML = (!this.classList.contains('clicked'))
    ? this.innerHTML = numero + 1
    : this.innerHTML = '';

    this.classList.toggle('clicked');
  });

  return sq;

}