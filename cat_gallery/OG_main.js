const limit = 15; // Since I keep changing limit, this is for easier change. and it looks cool!
const api_key = 'live_Dz8ZiOyF9uQH8YFNWjm7CWF4fKwlN3W4SKUrwJnKxNoR15wABaQIgPbpGavaJusB';
const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}&size=med`; // for this one I want to have pictrue size medium so it can kinda into boxes

// To do: 
// Fetch picture from API
// adjust it to the box
// refrush button, make sure to clear all picture (so doesn't reuse), then run the fetchimage to get new pictures


function fetchimages() {
    document.getElementById('grid').innerHTML = ''; //clear all pictures. This is usefull for the refrush button


    fetch(url, { // this will get API keys
        headers: {
            'x-api-key': api_key 
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
