const container =document.querySelector(".container")
for (let i = 1; i < 16; i++) {
    let rn=Math.floor(Math.random()*15)
        container.innerHTML+=`<div class="box" id="${rn}">${rn}</div>`
  } 

const boxes = document.querySelectorAll(".box")
boxes.forEach