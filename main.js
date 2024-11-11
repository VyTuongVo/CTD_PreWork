const apiKey = 'live_Dz8ZiOyF9uQH8YFNWjm7CWF4fKwlN3W4SKUrwJnKxNoR15wABaQIgPbpGavaJusB'; 
const breedsUrl = 'https://api.thecatapi.com/v1/breeds'; //this url will give breeds
const imagesUrl = 'https://api.thecatapi.com/v1/images/search?limit=10'; //this url will give images. Currently limit is at 10 at the time



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

// Function will bring the image into the HTML
function displayCatOfTheDay(catData) {
    const catContainer = document.getElementById('cat-of-the-day');
    catContainer.innerHTML = `
        <img src="${catData.url}" alt="Random Cat" class="cat-image">
    `;
}

// Load "Cat of the Day" as the home page content on page load
document.addEventListener('DOMContentLoaded', fetchCatOfTheDay);