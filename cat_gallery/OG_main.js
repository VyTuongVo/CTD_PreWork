const limit = 15; // change this number to however many images you want to display
const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;
const api_key = 'live_Dz8ZiOyF9uQH8YFNWjm7CWF4fKwlN3W4SKUrwJnKxNoR15wABaQIgPbpGavaJusB';

fetch(url, {
    headers: {
        'x-api-key': api_key
    }
})
.then((response) => response.json())
.then((data) => {
    let imagesData = data;
    imagesData.forEach((imageData) => {
        let image = document.createElement('img');
        image.src = imageData.url;
        image.classList.add('cat-image'); // Adding a class for custom styling

        let gridCell = document.createElement('div');
        gridCell.classList.add('col', 'col-lg'); // Adding Bootstrap classes
        gridCell.appendChild(image);

        document.getElementById('grid').appendChild(gridCell);
    });
})
.catch((error) => {
    console.log(error);
});
