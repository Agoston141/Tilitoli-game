const container = document.querySelector(".container")
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'box';
        gridItem.textContent = '1';
        gridItem.id
        container.appendChild(gridItem);

    }
  }