const limit = 15; // Change this number to however many images you want to display
const api_key = 'live_Dz8ZiOyF9uQH8YFNWjm7CWF4fKwlN3W4SKUrwJnKxNoR15wABaQIgPbpGavaJusB';
const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;

function fetchImages() {
    // Clear current images
    document.getElementById('grid').innerHTML = '';

    fetch(url, {
        headers: {
            'x-api-key': api_key
        }
    })
    .then((response) => response.json())
    .then((data) => {
        data.forEach((imageData) => {
            let image = document.createElement('img');
            image.src = imageData.url;
            image.classList.add('cat-image'); // Adding a class for custom styling

            let gridCell = document.createElement('div');
            gridCell.classList.add('col', 'col-lg');
            gridCell.appendChild(image);

            document.getElementById('grid').appendChild(gridCell);
        });
    })
    .catch((error) => {
        console.log(error);
    });
}

// Initial fetch to load images on page load
fetchImages();

// Add event listener to the refresh button
document.getElementById('refresh-button').addEventListener('click', fetchImages);
