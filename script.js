// Get the "Back to top" button element
var backToTopButton = document.getElementById('backToTop');

// Show the button when the user scrolls down 200 pixels
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// Add a click event listener to the button
backToTopButton.addEventListener('click', function() {
  // Scroll to the top of the page smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
