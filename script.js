const container = document.querySelector('#container');
const actualGrid = document.createElement('div');
actualGrid.classList.add('square');


// sets the size of the grid
let size = Number(prompt('Choose a grid size! Ex: 16 = 16x16 grid (Max 100)'));
actualGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
actualGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
//

//function that creates the grid
function grid() {
    for (let i = 0; i <= size * size; i++) {
        if (size <= 100) {
        const divs = document.createElement('div');
        divs.classList.add('cells');
        // func sor the hover
        divs.addEventListener("mouseover", mouseOver);
        function mouseOver () {
            divs.style.backgroundColor = 'black';
        }        
        //
        actualGrid.appendChild(divs)
    } 
} 
};
grid();
//
//button
const reset = document.querySelector('#btn');
reset.addEventListener('click', function(){
     window.location.reload();
    
}
); 
//
 



container.appendChild(actualGrid);
