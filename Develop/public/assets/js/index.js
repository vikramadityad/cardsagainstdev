const startButton = document.getElementById('startButton');
const cardContainer = document.querySelector('.card-container');

const getCards = () =>
  fetch('api/start', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });

    const cards = [];

    for (let i = 1; i <= 20; i++) {
      cards.push(getCards.id);
    }

startButton.addEventListener('click', () => {
  // Clear existing cards
  cardContainer.innerHTML = '';

  // Generate 10 random cards
  const randomCards = getRandomCards(cards, 10);

  // Display the random cards
  randomCards.forEach(cardText => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-content">
        <h2 class="card-text">${cardText}</h2>
      </div>
    `;
    cardContainer.appendChild(card);
  });
});

// Function to get random cards from the array
function getRandomCards(array, count) {
  const shuffledArray = array.sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, count);
}
