

function init() {
  // Write your JavaScript code inside the init() function
 
const body = document.querySelector('body')
body.addEventListener('keydown', e => onKeyDownHandler(e))
 
}
  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let index = 0;

 function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  if (key === code[index]) {
    index++;
    console.log(key)
    if (index === code.length-1) {
      alert("Hurray!");
      index = 0;
    }
  } else {
    index = 0;
  }
}