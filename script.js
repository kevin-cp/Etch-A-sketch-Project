const container = document.querySelector('#container');
const actualGrid = document.createElement('div');
actualGrid.classList.add('square');


// sets the size of the grid
let rows = 16;
let columns = 16;
actualGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
actualGrid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
//

//function that creates the grid
function grid() {
    for (let i = 0; i < rows * columns; i++) {
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
};
grid();
//
//button
const reset = document.querySelector('#btn');
reset.addEventListener('click', function(){
     window.location.reload();
}); 
//
 



container.appendChild(actualGrid);
