document.addEventListener('DOMContentLoaded',() => {
    const board = document.getElementById('board');
    const restartbutton = document.getElementById('restartbutton');
    let currentplayer = 'x';
    let moves = 0;
    let gameended = false;


    for (let i = 0; i < 9; i++){
    const cell = document.createElement('div');
    cell.classList.add ('cell');
    cell.id = i;
    cell.addEventListener('click', () =>cellclick(cell));
    board.appendChild(cell);
} 

function cellclick(cell) {
    if (cell.textContent || gameended) return;
    
    cell.textContent = currentplayer;
    moves++;
    
    if (checkwin()){
        alert(`${currentplayer} wins!`);
        gameended=true;
    }
    else if(moves === 9){
        alert('it\'s a draw!');
        gameended = true;
    } else{
        currentplayer = currentplayer === 'x' ? 'o' :'x';  
      }
}
function checkwin(){
    const cells=document.getElementsByClassName("cell");
    const winconditions=[
        [0,1,2],[3,4,5],[6,7,8,],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    for(let condition of winconditions){
        const[a,b,c]= condition;
        if(cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent){
            return true;
        }
    }

    return false;
}
    restartbutton.addEventListener("click", ()=>{
        const cells=document.getElementsByClassName("cell");
        Array.from(cells).forEach(cell=>{
            cell.textContent='';

        });
        currentplayer="x";
        moves=0;
        gameended=false;
    });

});




