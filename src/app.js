import Columns from './markupColumns';


const App =(function(){

const domElements ={
  button: document.querySelector(".counter-button")
}
const data={
  even: [],
  odd: []
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
  console.log('click')
  while (n) {
      callback();
      n--;
  }
  Columns(data)
}

const buttonHandler=()=>{
  const {button}= domElements;
  button.addEventListener("click",function(){
    times(20, drawNumbers)
  })


}
const init =()=>{
  buttonHandler()
}
return {
  init: init
}
}());

App.init();