function toggleDropdown() {
  var dropdown = document.getElementById("dropdown-content");
  if (dropdown.style.top === "-150%") {
    dropdown.style.top = "100%"; 
  } else {
    dropdown.style.top = "-450%"; 
  }
}

function toggleDropdown() {
  var dropdown = document.getElementById("dropdown-content");
  dropdown.classList.toggle("visible");
}

var gridItems = document.querySelectorAll(".grid-itemm");

gridItems.forEach(function (item) {
  item.addEventListener("click", function () {
    gridItems.forEach(function (gridItem) {
      gridItem.classList.remove("active");
    });
    this.classList.add("active");
  });
});
