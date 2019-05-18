//start off by having one possible color to color the grids
let isColored = 0;

//sets back to having only one color
let simple = document.querySelector('#simple');
simple.addEventListener('click', function(e){
  isColored = 0;
  
})

//sets to randomized coloring of grid
let colorful = document.querySelector('#colorful');
colorful.addEventListener('click', function(e){
  isColored = 1;
  
})


//reset button calls the reset function to reset grid back to blank canvas
let resetGrid = document.querySelector('#reset');
resetGrid.addEventListener('click', reset);

//waits for a submit click to begin creating the grid
let btn = document.querySelector('#submit_button');
btn.addEventListener('click', grid_submit);

//allows users to submit values by the enter key and stopping reloading page on enter key
let my_form = document.getElementById("dimension_form");
my_form.onkeypress = function(e) {
  var key = e.charCode || e.keyCode || 0;     
  if (key == 13) {
    console.log("hi");
    e.preventDefault();
    btn.click();
  }
}



//colors the targeted gridspace
function color(e)
{
  const target = e.target;
    if (isColored == 0)
    {
    target.style.backgroundColor = "black";
    }
    else {target.style.backgroundColor = randomColor();}
}


//returns a random color
function randomColor()
{
  let r1 = Math.floor(Math.random() * (255)); 
  let r2 = Math.floor(Math.random() * (255));
  let r3 = Math.floor(Math.random() * (255));
  let color = "rgb(" + r1 + "," + r2 +"," + r3 + ")";

  return color;
}

//resets grid to empty canvas, removes all children
function reset()
{
  let parent = document.getElementById('parent');
  if(parent.firstChild)
  {
    while (parent.firstChild)
    {
      parent.removeChild(parent.firstChild);
    }

  }
}

//on click, reveals previously hidden buttons to configure coloring the grid
//removes any previous grid created by submit button
// and creates new grid based on dimension given by user

function grid_submit(e){

  let more_buttons = document.getElementsByClassName("after_click");
  for (i = 0; i< more_buttons.length; i++)
  {
      console.log(more_buttons[i].style.display);
      if (more_buttons[i].style.display == "") {
      more_buttons[i].style.display = "inline";
      }
  }

  let parent = document.getElementById('parent');
  if(parent.firstChild)
  {
    while (parent.firstChild)
    {
      parent.removeChild(parent.firstChild);
    }

  }

  let x = document.getElementById('textbox').value;
  createDivs(x);

}


//creates dimensions of the grid based on user input
//scales to make sure it will fit into the grid width and height
function createDivs(dimension)
{
	var x = document.getElementById("parent");
	x.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;

  let newHeight = (x.offsetHeight / dimension) + 'px';
    for ( let i = 0; i < (dimension * dimension); i++) {
      var newDiv = document.createElement('div');
      newDiv.style.height = newHeight;
      newDiv.style.background = "#e26c3d";
      newDiv.addEventListener('mouseover', color);
      newDiv.classList.add('child');
      x.appendChild(newDiv);
    }
	
}



