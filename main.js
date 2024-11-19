
const apiKey = 'live_Dz8ZiOyF9uQH8YFNWjm7CWF4fKwlN3W4SKUrwJnKxNoR15wABaQIgPbpGavaJusB'; 
const imagesUrl = 'https://api.thecatapi.com/v1/images/search?limit=10&size=med'; // in order to not have the picyture being too big, this is the attemp to keep picture size at medium


async function fetchCatOfTheDay() {
    const response = await fetch(imagesUrl, {
        headers: { 'x-api-key': apiKey } 
    });
    const data = await response.json();
    displayCatOfTheDay(data[0]);
}


function displayCatOfTheDay(catData) {
    const catContainer = document.getElementById('cat-of-the-day');   // connecting with Html to display cat <div id="cat-of-the-day"></div>
    catContainer.innerHTML = `
        <img src="${catData.url}" alt="Random Cat" class="cat-image">
    `;
}

    // working on the refresh button!
document.addEventListener('DOMContentLoaded', () => {
    fetchCatOfTheDay();  // will run fetch cat of the day (like a rerun)

        // will run fetch cat of the day (like a rerun) on clicked of the button will vbe creating in html

    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', () => {
        console.log("Refresh button clicked");
        fetchCatOfTheDay();
    });

});
