const apiKey = 'live_Dz8ZiOyF9uQH8YFNWjm7CWF4fKwlN3W4SKUrwJnKxNoR15wABaQIgPbpGavaJusB'; 
const imagesUrl = 'https://api.thecatapi.com/v1/images/search?limit=10&size=med'; // Restrict images to medium size

async function fetchCatOfTheDay() {
    try {
        const response = await fetch(imagesUrl, {
            headers: { 'x-api-key': apiKey }
        });
        const data = await response.json();
        displayCatOfTheDay(data[0]);
    } catch (error) {
        console.error("Error fetching cat of the day:", error);
    }
}

// Function to display the image in the HTML
function displayCatOfTheDay(catData) {
    const catContainer = document.getElementById('cat-of-the-day');
    catContainer.innerHTML = `
        <img src="${catData.url}" alt="Random Cat" class="cat-image">
    `;
}

// Wait for the DOM to load fully before setting up event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Load "Cat of the Day" on page load
    fetchCatOfTheDay();

    // Add event listener to the refresh button
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', () => {
        console.log("Refresh button clicked");
        fetchCatOfTheDay();
    });
});
