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


// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Array of video game names
  const games = ['MushroomrGal', 'Monster Rhythm', 'Throne of Shadows', 'Code Sculpt'];

  // Cost per game
  const costPerGame = 50;

  // Target the games list and total cost elements
  const gamesList = document.getElementById('games-list');
  const totalCostElement = document.getElementById('total-cost');

  // Iterate through the games array to display names
  games.forEach((game) => {
    // Create list item for each game
    const listItem = document.createElement('li');
    listItem.textContent = game;

    // Add the item to the games list
    gamesList.appendChild(listItem);
  });

  // Iterate again to add the price next to each game
  games.forEach((game) => {
    // Find the list item corresponding to the game
    const listItem = Array.from(gamesList.children).find(item => item.textContent === game);

    // Add the price next to the game name
    listItem.textContent += ` - $${costPerGame}`;
  });

  // Calculate the total cost (cost per game multiplied by the number of games)
  const totalCost = costPerGame * games.length;

  // Display the total cost
  totalCostElement.textContent = totalCost;
});
