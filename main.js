const container = document.getElementById("container");

// Sets the inital grid on page load to a 16x16 (16x16=256 grid items)
document.addEventListener("DOMContentLoaded", setGrid(256));

// Helper function for setting the grid

function setGrid(gridDensity = 256, itemProportion = 6.25 + "%") {
  for (let i = 0; i < gridDensity; i++) {
    const javaDiv = document.createElement("div");
    javaDiv.className = "created-div";
    container.appendChild(javaDiv);
    javaDiv.setAttribute(
      "style",
      `min-width: ${itemProportion}; min-height: ${itemProportion};`
    );
    container.appendChild(javaDiv);
  }
}

// set grid density by multiplying user input and appending % to use in styling.
// Nest setGrid() function to pass arguments to it.

function changeGridDensity() {
  let gridDensity = prompt("Type in a number less then 100 to set your grid");
  if (
    gridDensity <= 0 ||
    gridDensity > 100 ||
    isNaN(gridDensity) ||
    gridDensity === null
  ) {
    alert("Please pick a number less then 100");
  } else {
    const itemProportion = 100 / gridDensity + "%";
    gridDensity *= gridDensity;
    container.innerText = "";
    // Passing the calculations to the helper function.
    setGrid(gridDensity, itemProportion);
  }
}

// Add event delegation to the parent but selecting only the current target that has the created-div class
// Instead of only mouseover event, user also has to hold ctrlKey to sketch.

container.addEventListener("mouseover", (e) => {
  let repeater;
  let opacity = 0.5;
  if (e.target.className === "created-div" && e.ctrlKey) {
    let targetDiv = e.target;
    targetDiv.classList.add("hover-color");
    //repeater = setInterval(bgColor, 100);

    onmouseover = (e) => {
      repeater = setInterval(bgColor, 100);
    };

    onmouseout = (e) => {
      clearInterval(repeater);
    };

    function bgColor() {
      opacity += 0.2;
      e.target.style.background = `rgb(0, 0, 0, ${opacity})`;
    }
  }
});
