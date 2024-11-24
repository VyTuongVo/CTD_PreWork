const limit = 15; // Since I keep changing limit, this is for easier change. and it looks cool!
const apiKey = import.meta.env.VITE_PUBLIC_KEY?.trim(); // contecting to .env
console.log('Resolved API Key:', apiKey);
const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&size=med`; // for this one I want to have pictrue size medium so it can kinda into boxes

// To do: 
// Fetch picture from API
// adjust it to the box
// refrush button, make sure to clear all picture (so doesn't reuse), then run the fetchimage to get new pictures


function fetchimages() {
    document.getElementById('grid').innerHTML = ''; //clear all pictures. This is usefull for the refrush button


    fetch(url, { // this will get API keys
        headers: {
            'x-api-key': apiKey 
        }
    })
    .then((response) => response.json())  // this will take the reponse from the API called
    .then((data) => {
        data.forEach((imageData) => {
            let image = document.createElement('img');
            image.src = imageData.url;
            image.classList.add('cat-image'); 

            let gridCell = document.createElement('div'); // this will adjust image to the box created
            gridCell.classList.add('col', 'col-lg');
            gridCell.appendChild(image);

            document.getElementById('grid').appendChild(gridCell);
        });
    })
}

// will run right when the page is access
fetchimages();

// when user add press the refresh button, run fetchImages again!
document.getElementById('refresh-button').addEventListener('click', fetchimages);
