const container =document.querySelector(".container")
for (let i = 1; i < 16; i++) {
    let rn=Math.floor(Math.random()*15)
        container.innerHTML+=`<div class="box" id="${rn}">${rn}</div>`
  } 

const boxes = document.querySelectorAll(".box")
const upButton=document.querySelector(".up")
const downButton=document.querySelector(".down")
const leftButton=document.querySelector(".left")
const rightButton=document.querySelector(".right")

let boxid
boxes.forEach(box=>{
    box.addEventListener("click",(event)=>{
        boxid = event.target.id
    })
})

upButton.addEventListener("click", (event) => {
    
});