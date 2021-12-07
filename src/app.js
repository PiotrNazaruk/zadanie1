import Columns from './markupColumns';


const App =(function(){

const domElements ={
  button: document.querySelector(".counter-button")
}
const data={
  even: [1,3,5],
  odd: [2,4,6]
}

const drawNumbers = ()=>{
  const drawNumber = Math.floor(Math.random()*100+1)
  if(drawNumber % 2){
    data.even.push(drawNumber)
  }
  else{
    data.odd.push(drawNumber)
  }
}
const times = (n, callback) => {
  while (n) {
      callback();
      n--;
  }
}

const buttonHandler=()=>{
  const {button}= domElements;
  button.addEventListener("click",times(10, drawNumbers))
}
const init =()=>{
  buttonHandler()
}
return {
  init: init
}
}());

App.init();