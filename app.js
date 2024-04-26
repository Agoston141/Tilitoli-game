const container =document.querySelector(".container")
const shuffe= document.querySelector(".shuffle")
for (let i = 1; i < 16; i++) {
    container.innerHTML+=`<div class="box" id="${i}">${i}</div>`

}
const boxes1 =document.querySelectorAll(".box")
function shuffleContainer() {
    const boxes = document.querySelectorAll(".box");
    const contents = Array.prototype.map.call(boxes, box => box.textContent);
    contents.sort(() => Math.random() - 0.5);
    boxes.forEach((box, index) => box.textContent = contents[index]);
}

window.onload=()=>{
    shuffleContainer()
}

shuffe.addEventListener("click",()=>{
    shuffleContainer()
    emptyBox.textContent=""
})

const emptyBox = document.querySelector(".boxEmpty")


boxes1.forEach(box => {
    
    box.addEventListener("click", (event) => {
        const clickedBox = event.target.textContent;
        box.textContent = ""
        emptyBox.textContent = clickedBox;


    });
});


