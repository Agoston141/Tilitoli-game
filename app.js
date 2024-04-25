const NormalBoxes =document.querySelector(".NormalBoxes")
const boxes = document.querySelectorAll(".box")
for (let i = 1; i < 16; i++) {
    NormalBoxes.innerHTML+=`<div class="box" id="${i}">${i}</div>`

}
function shuffleContainer() {
    const NormalBoxes =document.querySelector(".NormalBoxes")
    const boxes = document.querySelectorAll(".box")
    const boxArray = Array.prototype.slice.call(boxes);
    boxArray.sort(() => Math.random() - 0.5);
    NormalBoxes.innerHTML = "";
    boxArray.forEach(box => NormalBoxes.appendChild(box));
}

window.onload=()=>{
    shuffleContainer()
}
const upButton=document.querySelector(".up")
const downButton=document.querySelector(".down")
const leftButton=document.querySelector(".left")
const rightButton=document.querySelector(".right")

function boxclick(event){
    const clickedBox = event.target;
    let clickedId= event.target.id
    const emptyBox=document.getElementById("_")
    

    const clickedBoxParent = clickedBox.parentNode;
    const emptyBoxParent = emptyBox.parentNode;
    clickedBoxParent.removeChild(clickedBox)
    emptyBoxParent.removeChildChild(emptyBox)
    emptyBoxParent.appendChild(clickedBox);
    clickedBoxParent.appendChild(emptyBox);

    clickedBox.id = "_"
    emptyBox.id = clickedId
    console.log(clickedBox)
    console.log(clickedId)
}


boxes.forEach(box=>{
    box.addEventListener("click",boxclick)
})

