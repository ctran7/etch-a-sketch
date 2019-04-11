createDivs(90);

function createDivs(dimension)
{
	var x = document.getElementById("parent");
	x.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;

    for (let i = 0; i < (Math.pow(dimension, 2)); i++) {
      newDiv = document.createElement('div');
      newDiv.style.height = (x.offsetHeight / dimension) + 'px';
      newDiv.style.width = (x.offsetHeight / dimension) + 'px';
      newDiv.style.background = "#a8c9ff";
      newDiv.classList.add('child');
      x.appendChild(newDiv);
    }
	
}