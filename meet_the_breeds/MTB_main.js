// Making sure that function only run when user have done selecting answer
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = import.meta.env.VITE_PUBLIC_KEY?.trim(); // contecting to .env
    console.log('Resolved API Key:', apiKey);
    const breedsApiUrl = 'https://api.thecatapi.com/v1/breeds'; // this is the breeds API

// QUESTION 1
    // For the first questionsm user can only give 3 answer. If user select more than 3, they wull get error
    const checkboxes = document.querySelectorAll(".personality-checkbox");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            const checkedboxes = document.querySelectorAll(".personality-checkbox:checked");
            
            if (checkedboxes.length > 3) {
                this.checked = false; // make sure to not count the check
                alert("Sorry, you can only select up to 3 personality traits.");
            }
        });
    });

    // it will then save for later to go to the best match which will give result
    function GetSelectedPersonalities() {
        const selectedoptions = Array.from(document.querySelectorAll(".personality-checkbox:checked"));
        return selectedoptions.map(option => option.value);
    }

// QUESTION 2
    function GetEnergyLevelRange() {
        const energyLevel = document.getElementById("energy-level").value;
        if (energyLevel === "low") return { min: 1, max: 2 };
        if (energyLevel === "middle") return { min: 3, max: 4 };
        if (energyLevel === "high") return { min: 5, max: 100 }; // there is no max so I just put 100 ( bc no energy level is greater than 100)
        return null; // return null if "Unknown" is selected
    }

    // QUESTION 3 to get selected life span range
    function GetLifeSpanRange() {
        const lifeSpan = document.getElementById("life_span").value;
        if (lifeSpan === "short") return { min: 1, max: 10 };
        if (lifeSpan === "average/long") return { min: 11, max: 100 };
        return null;
    }

    // QUESTION 4to get selected affectionate level
    function GetAffectionateLevelRange() {
        const affectionateLevel = document.getElementById("Affectionate").value;
        if (affectionateLevel === "low") return { min: 1, max: 2 };
        if (affectionateLevel === "average") return { min: 3, max: 4 };
        if (affectionateLevel === "high") return { min: 5, max: 100 };
        return null;
    }

    //QUESTION 5 Function to get selected vocalization level
    function GetVocalLevelRange() {
        const vocalLevel = document.getElementById("Vocalisation").value;
        if (vocalLevel === "low") return { min: 1, max: 2 };
        if (vocalLevel === "average") return { min: 3, max: 4 };
        if (vocalLevel === "high") return { min: 5, max: 100 };
        return null;
    }

    // this will find the best matching breeds
    async function FindBestMatch() {
        const personalities = GetSelectedPersonalities();
        const energyLevelRange = GetEnergyLevelRange();
        const lifeSpanRange = GetLifeSpanRange();
        const affectionateLevelRange = GetAffectionateLevelRange();
        const vocalizationLevelRange = GetVocalLevelRange();

        //to do list
        //get API
        // filter down each of them based on breed
        
        const response = await fetch(breedsApiUrl, {  
            headers: {
                'x-api-key': apiKey
            }
        });
        const breeds = await response.json();

        // Filter breeds based on answer
        const matchedBreeds = breeds.filter(breed => {
            // make sure it is not empty, if it is null or then check if one of the breed varaible temperment have the personality selected
            const MatchesPersonality = !personalities.length || 
                personalities.some(personality => breed.temperament && breed.temperament.includes(personality));
            
            //look if range was slection, if not, look at min and look at max ( make sure reply is not over mean and not oever max)
            const MatchesEnergyLevel = !energyLevelRange || 
                (breed.energy_level !== undefined &&
                breed.energy_level >= energyLevelRange.min &&
                breed.energy_level <= energyLevelRange.max);
            
            // Check if any selection, then check the first number (bc life spams give two answer) use min as first number (min) and use 1 as max
            const MatchesLifeSpan = !lifeSpanRange || 
                (breed.life_span &&
                parseInt(breed.life_span.split(" - ")[0]) >= lifeSpanRange.min &&
                parseInt(breed.life_span.split(" - ")[0]) <= lifeSpanRange.max);
                    // I jusy want to look at the first number. if it is smaller than 10, It would be sport, bigger would be long

            // same concept as question 2 (enegery)    
            const MatchesAffectionateLevel = !affectionateLevelRange || 
                (breed.affection_level !== undefined &&
                breed.affection_level >= affectionateLevelRange.min &&
                breed.affection_level <= affectionateLevelRange.max);

            // same concept as question 2 (enegery)    
            const MatchesVocalizationLevel = !vocalizationLevelRange || 
                (breed.vocalisation !== undefined &&
                breed.vocalisation >= vocalizationLevelRange.min &&
                breed.vocalisation <= vocalizationLevelRange.max);

            return MatchesPersonality && MatchesEnergyLevel && MatchesLifeSpan && MatchesAffectionateLevel && MatchesVocalizationLevel;
        });

        displayResults(matchedBreeds);
        
    }

// how results is given
    function displayResults(matchedBreeds) {
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = ""; // Clear previous results
        resultsDiv.classList.remove("hidden");

        if (matchedBreeds.length === 0) {
            resultsDiv.innerHTML = "<p>No matching breeds found. Try different preferences!</p>";
        } else {
            resultsDiv.innerHTML = '<h2 style="text-decoration: underline;">Your Perfect Match Are:</h2>';
            matchedBreeds.forEach(breed => {
                const breedInfo = `
                    <div class="breed-result">
                        <h3>${breed.name}</h3>
                        <p><strong>Temperament:</strong> ${breed.temperament || "N/A"}</p>
                        <p><strong>Energy Level:</strong> ${breed.energy_level || "N/A"}</p>
                        <p><strong>Life Span:</strong> ${breed.life_span || "N/A"} years</p>
                        <p><strong>Affection Level:</strong> ${breed.affection_level || "N/A"}</p>
                        <p><strong>Vocalization Level:</strong> ${breed.vocalisation || "N/A"}</p>
                        <a href="${breed.wikipedia_url}" target="_blank">Learn more on Wikipedia</a>
                    </div>
                `;
                resultsDiv.innerHTML += breedInfo;
            });
        }
    }

    // whenever user press "Find My Cat Match" button, it will look through user selection, then it will look at best match for solution
    document.getElementById("submit-button").addEventListener("click", FindBestMatch);
});

