const container = document.getElementById("grid-container");

// Creating the total amount of squares
for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("grid-row");
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("grid-item");
        row.appendChild(square);
    }
    container.appendChild(row);
}