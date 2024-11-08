// Select all navbar links
const navLinks = document.querySelectorAll(".nav-bar a");

// Add a click event listener to each link
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor click behavior

    // Get the target section's ID from the href attribute
    const targetId = link.getAttribute("href").substring(1); // Remove the '#' symbol
    const targetElement = document.getElementById(targetId);

    // Convert '10rem' to pixels using the root font-size
    const remToPx = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    ); // Get root font-size in px
    const offset = 10 * remToPx; // 10rem to pixels

    // Scroll to the target element, offset by 10rem
    window.scrollTo({
      top: targetElement.offsetTop - offset, // Offset by 10rem
      behavior: "smooth", // Smooth scrolling
    });
  });
});
