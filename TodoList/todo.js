// Add a new list item
function newElement() {
  let inputValue = document.getElementById("myInput").value.trim();

  if (inputValue === "") {
    alert("You must write something!");
    return; // Exit function if input is empty
  }

  let li = document.createElement("li");
  li.textContent = inputValue;

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";
}

// Toggle checked class on list item click
let list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
});

// Remove list item when close button is clicked
document.addEventListener("click", function (ev) {
  if (ev.target.classList.contains("close")) {
    ev.target.parentElement.remove();
  }
});
