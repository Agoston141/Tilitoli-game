const container =document.querySelector(".container")
const boxes = document.querySelectorAll(".box")
for (let i = 1; i < 16; i++) {
    container.innerHTML+=`<div class="box" id="${i}">${i}</div>`

}
function shuffleContainer() {
    const container =document.querySelector(".container")
    const boxes = document.querySelectorAll(".box")
    const boxArray = Array.prototype.slice.call(boxes);
    boxArray.sort(() => Math.random() - 0.5);
    container.innerHTML = "";
    boxArray.forEach(box => container.appendChild(box));
}

window.onload=()=>{
    shuffleContainer()
}
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
