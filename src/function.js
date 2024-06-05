document.getElementById('menuButton').addEventListener('click', function() {
    var menuItems = document.getElementById('menuItems');
    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
    } else {
        menuItems.classList.add('hidden');
    }
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('#menuButton')) {
        var dropdowns = document.getElementsByClassName('menuItems');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('hidden')) {
                openDropdown.classList.add('hidden');
            }
        }
    }
}