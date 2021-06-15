function navMenu() {
    document.getElementById("navDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.navDropBtn')) {
        var dropdowns = document.getElementsByClassName("nav-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}