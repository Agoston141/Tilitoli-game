const container =document.querySelector(".container")
const shuffe= document.querySelector(".shuffle")
for (let i = 1; i < 16; i++) {
    container.innerHTML+=`<div class="box" id="${i}">${i}</div>`

}
const boxes1 =document.querySelectorAll(".box,.boxEmpty")
function shuffleContainer() {
    const boxes = document.querySelectorAll(".box");
    const contents = Array.prototype.map.call(boxes, box => box.textContent);
    contents.sort(() => Math.random() - 0.5);
    boxes.forEach((box, index) => box.textContent = contents[index]);
}

/* window.onload=()=>{
    shuffleContainer()
} */


shuffe.addEventListener("click",()=>{
    shuffleContainer()
})


boxes1.forEach(box => {
    box.addEventListener("click", (event) => {
        const emptyBox = document.querySelector(".boxEmpty")
        const clickedBox = event.target.textContent;
        box.textContent = ""
        event.target.classList.remove("box")
        event.target.classList.add("boxEmpty")
        emptyBox.textContent = clickedBox;
        emptyBox.classList.remove("boxEmpty")
        emptyBox.classList.add("box")
        
    });
});
const emptyBox1 = document.querySelector(".boxEmpty")
const boxes2 =document.querySelectorAll(".box")

let answer=false
const checkButton = document.querySelector(".check")
boxes2.forEach(box =>{
    checkButton.addEventListener("click",()=>{
        if (box.id === box.textContent && emptyBox1.id === emptyBox1.textContent){
            answer=true 
        }
        else{
            answer=false
        }
    }
)})

checkButton.addEventListener("click",()=>{
    if (answer==true){
        alert("Helyes megoldás")
    }
    else{
        alert("Hibás megoldás")
    }
})