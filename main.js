const container = document.getElementById("container");

//container.appendChild(javaDiv);

for (let i = 0; i < 256; i++) {
  const javaDiv = document.createElement("div");
  javaDiv.className = "created-div";
  container.appendChild(javaDiv);
}

container.addEventListener("mouseover", (e) => {
  if (e.target.className === "created-div") {
    e.target.classList.add("hover-color");
    console.log(e.target.classList);
  }
});
