//start off by having one color
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

//waits for a submit click to begin creating the grid
let btn = document.querySelector('#submit_button');
btn.addEventListener('click', submit);


function color(e)
{
  const target = e.target;
    if (isColored == 0)
    {
    target.style.backgroundColor = "pink";
    }
    else {target.style.backgroundColor = randomColor();}
}

function randomColor()
{
  let r1 = Math.floor(Math.random() * (255)); 
  let r2 = Math.floor(Math.random() * (255));
  let r3 = Math.floor(Math.random() * (255));
  let color = "rgb(" + r1 + "," + r2 +"," + r3 + ")";

  return color;
}


//on click, reveals previously hidden buttons to configure coloring the grid
//removes any previous grid created by submit button
// and creates new grid based on dimension given by user

function submit(e){

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
      newDiv.style.background = "#a8c9ff";
      newDiv.addEventListener('mouseover', color);
      newDiv.classList.add('child');
      x.appendChild(newDiv);
    }
	
}



