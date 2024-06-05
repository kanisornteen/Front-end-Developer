document.getElementById("ham-button").addEventListener("click", function () {
  var menuItems = document.getElementById("navbar-hamburger");
  if (menuItems.classList.contains("hidden")) {
    menuItems.classList.remove("hidden");
  } else {
    menuItems.classList.add("hidden");
  }
});

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('#ham-button')) {
//         var dropdowns = document.getElementsByClassName('navbar-hamburger');
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (!openDropdown.classList.contains('hidden')) {
//                 openDropdown.classList.add('hidden');
//             }
//         }
//     }
// }
