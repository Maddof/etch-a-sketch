const container = document.getElementById("container");

// set grid density by multiplying user input
// Then loops

function changeGridDensity() {
  let gridDensity = prompt("Write a number", 16);
  const itemProportion = 100 / gridDensity + "%";
  gridDensity *= gridDensity;
  container.innerText = "";
  for (let i = 0; i < gridDensity; i++) {
    const javaDiv = document.createElement("div");
    javaDiv.className = "created-div";
    javaDiv.setAttribute(
      "style",
      `min-width: ${itemProportion}; min-height: ${itemProportion};`
    );

    container.appendChild(javaDiv);
  }
}

for (let i = 0; i < 256; i++) {
  const javaDiv = document.createElement("div");
  javaDiv.className = "created-div";
  container.appendChild(javaDiv);
}

container.addEventListener("mouseover", (e) => {
  if (e.target.className === "created-div" && e.ctrlKey) {
    e.target.classList.add("hover-color");
    console.log(e.target.classList);
  }
});
