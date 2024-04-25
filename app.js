const container =document.querySelector(".container")
const boxes =document.querySelectorAll(".box, .boxEmpty")
for (let i = 1; i < 16; i++) {
    container.innerHTML+=`<div class="box" id="${i}">${i}</div>`

}
function shuffleContainer() {
    const boxes = document.querySelectorAll(".box");
    const contents = Array.prototype.map.call(boxes, box => box.textContent);
    contents.sort(() => Math.random() - 0.5);
    boxes.forEach((box, index) => box.textContent = contents[index]);
}

window.onload=()=>{
    shuffleContainer()
}

const emptyBox = document.querySelector("#_")
const up=document.querySelector(".up")
up.addEventListener("click",(event)=>{
    console.log(event.target.id)
})

boxes.forEach(box => {
    box.addEventListener("click", (event) => {
        const clickedBox = event.target;
        const tempContent = clickedBox.textContent;
        clickedBox.textContent = emptyBox.textContent;
        emptyBox.textContent = tempContent;
        console.log(event.target.id)

    });
});

