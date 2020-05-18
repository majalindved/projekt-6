/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function filter() {
  document.getElementById("dropdown-filter").classList.toggle("show-filter-content");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-filter-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-filter-content')) {
        openDropdown.classList.remove('show-filter-content');
      }
    }
  }
}