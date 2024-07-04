let inputElement = document.querySelector("input")
let listElement = document.querySelector("ul")
let itemElement = listElement.querySelectorAll("a")

inputElement.addEventListener("input", (e) => {
    let inputed = e.target.value.toLowerCase()
    itemElement.forEach((li) => {
      let text = li.textContent.toLowerCase()
      if(text.includes(inputed)){
        li.style.display = "inline-grid";

      }else{
        li.style.display = "none"
      }
    })
  })