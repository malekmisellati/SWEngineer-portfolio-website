
// Select the navigation menu and toggle button
const navigation = document.querySelector("#nav-links");
const menuToggle = document.querySelector("#menu-toggle");

// Select all navigation links
const navigationLinks = document.querySelectorAll("#nav-links a");

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", function() {

    const isOpen = navigation.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// Close the menu after selecting a navigation link
navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

    });

});
