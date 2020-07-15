// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}



function makeGreen (evt) {
  evt.preventDefault()
  if (evt.target.classList.contains('invisible'))
		return;  
  evt.target.classList.toggle('green')
  if (evt.target.classList.contains('green'))
	 	evt.target.classList.remove('blue')
  updateCounts()
  
}

function makeBlue (evt) {

  evt.preventDefault()
  if (evt.target.classList.contains('invisible'))
		return;
    evt.target.classList.toggle('blue')
 	if (evt.target.classList.contains('blue'))
	 	evt.target.classList.remove('green')
  updateCounts()
}

function hide (evt) {

  evt.preventDefault()
  evt.target.classList.toggle('invisible')
  if (evt.target.classList.contains('invisible'))
{ 	evt.target.classList.remove('green')
  evt.target.classList.remove('blue')
}
  updateCounts()
}

function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  
  totals.blue = document.getElementsByClassName ("blue").length;
  totals.green = document.getElementsByClassName ('green').length;
  totals.invisible = document.getElementsByClassName ('invisible').length;

  displayTotals(totals);
  
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
