const container = document.getElementById("grid-container");

// Creating the total amount of squares
for (let i = 1; i <= 16*16; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-item");
    container.appendChild(square);
}