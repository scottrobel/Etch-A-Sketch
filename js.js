let grid = document.querySelector('#grid');
let array = [];
let resetButton = document.querySelector('#reset');
let randomColorButton = document.querySelector('#randomColor');
let shadeButton = document.querySelector('#shadeButton');
createGrid(16,colorRandom);

function createGrid(rowCnt = '16',colorFunction)
{

    for(x=0;x<rowCnt;x++)
    {   

        array[x] = document.createElement('div');
        array[x].setAttribute('id',`${x+1}`)
        array[x].classList.add('rows');
        grid.appendChild(array[x]);
    }
    let rows = Array.from(document.querySelectorAll('#grid > div'));
    rows.forEach(row => 
    {

        for(x=0;x<rowCnt;x++)
        {
            let innerArray =[];
            innerArray[x] = document.createElement('div');
            let parrentId = row.getAttribute('id')
            innerArray[x].setAttribute('id',`${parrentId} ${x+1}`)
            innerArray[x].classList.add('block');
            innerArray[x].style.cssText =  `width: ${640/rowCnt}; height: ${640/rowCnt}`;
            row.appendChild(innerArray[x]);
            colorFunction(innerArray[x]);
        }   

    });
}


resetButton.addEventListener('click',function()
{
    let allGridRows = Array.from(document.querySelectorAll('#grid > .rows'));
    allGridRows.forEach(div =>
    {
        grid.removeChild(div);
    })
    let newGridSize = prompt('How many Rows Would you like?');
    createGrid(newGridSize,ColorBlack);
})
function ColorBlack(element)
{
            element.addEventListener('mouseover',function (e) 
            {
            e.target.classList.add('mouseover');
            })
            
}
function colorRandom(element)
{
            element.addEventListener('mouseover',function (e) 
            {
            e.target.style.cssText += `background-color:rgb(${getRandomColorValue()},${getRandomColorValue()},${getRandomColorValue()})`
            })
            
}
function greyScale(element)
{
            let GreyShade = 0;
            element.addEventListener('mouseover',function (e) 
            {
            GreyShade++;
            e.target.style.cssText += `background-color:rgb(0,0,0,${GreyShade/10})`
            })
            
}


function getRandomColorValue()
{
let randomNumber = Math.floor(Math.random()*256);
return randomNumber;
}
randomColorButton.addEventListener('click',function(e)
{
    let allGridRows = Array.from(document.querySelectorAll('#grid > .rows'));
    allGridRows.forEach(div =>
    {
        grid.removeChild(div);
    })
    let newGridSize = prompt('How many rows would you like?');
    createGrid(newGridSize,colorRandom);
})
randomColorButton.addEventListener('mouseover',function(e)
{
    e.target.classList.add('transition');
    e.target.style.cssText = `background-color:rgb(${getRandomColorValue()},${getRandomColorValue()},${getRandomColorValue()})`; 
})
randomColorButton.addEventListener('transitionend',function(e)
{
    e.target.style.cssText = `background-color:rgb(${getRandomColorValue()},${getRandomColorValue()},${getRandomColorValue()})`;
    
})
randomColorButton.addEventListener('mouseout',function(e)
{
    
    e.target.classList.remove('transition');
    e.target.style.cssText = `background-color: white`;
    
    
})
shadeButton.addEventListener('click',function(e)
{
    eraseGridElements();
    let newGridSize = prompt('How many rows would you like?');
    createGrid(newGridSize,greyScale);
})
function eraseGridElements(){
    let allGridRows = Array.from(document.querySelectorAll('#grid > .rows'));
    allGridRows.forEach(div =>
        {
            grid.removeChild(div);
        })
}








