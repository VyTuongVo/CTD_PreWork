// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'live_Dz8ZiOyF9uQH8YFNWjm7CWF4fKwlN3W4SKUrwJnKxNoR15wABaQIgPbpGavaJusB'; // Replace with your actual API key
    const breedsApiUrl = 'https://api.thecatapi.com/v1/breeds';

    // Add event listener to each checkbox to enforce a 3-selection limit
    const checkboxes = document.querySelectorAll(".personality-checkbox");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            const checkedBoxes = document.querySelectorAll(".personality-checkbox:checked");
            
            if (checkedBoxes.length > 3) {
                this.checked = false; // Deselect the current checkbox
                alert("You can select up to 3 personality traits only.");
            }
        });
    });

    // Function to get selected personality traits
    function getSelectedPersonalities() {
        const selectedOptions = Array.from(document.querySelectorAll(".personality-checkbox:checked"));
        return selectedOptions.map(option => option.value);
    }

    // Function to get the selected energy level range
    function getEnergyLevelRange() {
        const energyLevel = document.getElementById("energy-level").value;
        if (energyLevel === "low") return { min: 1, max: 5 };
        if (energyLevel === "middle") return { min: 6, max: 10 };
        if (energyLevel === "high") return { min: 11, max: 20 };
        return null; // Return null if "Unknown" is selected
    }

    // Function to find the best matching breeds
    async function findBestMatch() {
        const personalities = getSelectedPersonalities();
        const energyLevelRange = getEnergyLevelRange();

        try {
            const response = await fetch(breedsApiUrl, {
                headers: {
                    'x-api-key': apiKey
                }
            });
            const breeds = await response.json();

            // Filter breeds based on personality and energy level range
            const matchedBreeds = breeds.filter(breed => {
                const matchesPersonality = !personalities.length || 
                    personalities.some(personality => breed.temperament && breed.temperament.includes(personality));
                
                const matchesEnergyLevel = !energyLevelRange || 
                    (breed.energy_level >= energyLevelRange.min && breed.energy_level <= energyLevelRange.max);

                return matchesPersonality && matchesEnergyLevel;
            });

            displayResults(matchedBreeds);
        } catch (error) {
            console.error("Error fetching breeds:", error);
        }
    }

    // Function to display the matching results
    function displayResults(matchedBreeds) {
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = ""; // Clear previous results
        resultsDiv.classList.remove("hidden");

        if (matchedBreeds.length === 0) {
            resultsDiv.innerHTML = "<p>No matching breeds found. Try different preferences!</p>";
        } else {
            matchedBreeds.forEach(breed => {
                const breedInfo = `
                    <div class="breed-result">
                        <h3>${breed.name}</h3>
                        <p><strong>Temperament:</strong> ${breed.temperament}</p>
                        <p><strong>Energy Level:</strong> ${breed.energy_level}</p>
                        <p><strong>Origin:</strong> ${breed.origin}</p>
                        <p><strong>Life Span:</strong> ${breed.life_span} years</p>
                        <a href="${breed.wikipedia_url}" target="_blank">Learn more on Wikipedia</a>
                    </div>
                `;
                resultsDiv.innerHTML += breedInfo;
            });
        }
    }

    // Event listener for the "Find My Cat Match" button
    document.getElementById("submit-button").addEventListener("click", findBestMatch);
});

