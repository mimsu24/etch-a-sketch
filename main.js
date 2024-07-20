let container = document.getElementById("container");

for (i = 0; i < 256; i++ ) {
    let newDiv = document.createElement("div");
    newDiv.classList.add('grid')
    newDiv.addEventListener("mouseover", (event) => {
        newDiv.style.backgroundColor = "blue";
    })

    container.appendChild(newDiv);
}

newDiv.addEventListener("mouseover", (event) => {
    
})
