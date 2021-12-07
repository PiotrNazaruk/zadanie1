
const Columns = ( data)=>{
  const domElements ={
    container: document.querySelector(".main__item-list"),
  }
  const renderELements =(data)=>{
    const {container} = domElements
    const div = document.createElement("div");
    console.log(data)
    const item = (data)=>{
      return`
        <ul class="even">${data.even.sort((a, b) => a - b).map(item=>{
          return(`<li> ${item} </li>`)
        }).join('')}</ul>
        <ul class="odd">${data.odd.sort((a, b) => a - b).map(item=>{
          return(`<li> ${item} </li>`)
        }).join('')}</ul>
      `
  }
    div.innerHTML= item(data)
    container.appendChild(div)
  }
  renderELements(data)

}
export default Columns;