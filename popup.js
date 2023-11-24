// get summary
document.getElementById("getSummaryButton").addEventListener("click", async () => {
    const outputBox = document.getElementById("outputBox");
    const loadingImage = document.getElementById("loadingImage");
    outputBox.textContent = "";
    // Display loading image
    loadingImage.classList.remove("hidden");

    // Check if the user is online before proceeding
    if (navigator.onLine) {
        // Fetch the active URL
        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            const activeTab = tabs[0];
            const activeUrl = activeTab.url;

            // Fetch the summary asynchronously
            const summary = await fetchSummary(activeUrl);

            // Hide the loading image and update the content with the summary
            loadingImage.classList.add("hidden");
            outputBox.textContent = summary;
        });
    } else {
        // Display "Not Connected" message in a popup
        loadingImage.classList.add("hidden");
        alert("Your Network is not Connected");
    }
});

// Fetch summary data from the API endpoint
async function fetchSummary(url) {
    try {
        const response = await fetch("http://127.0.0.1:5000/get_summary", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: url  // Pass the active URL
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return data.summary;
        } else {
            throw new Error("Failed to fetch summary");
        }
    } catch (error) {
        console.error("Error:", error);
        return "Error fetching summary";
    }
}






// get major points
document.getElementById("getMajorPointsButton").addEventListener("click", async () => {
    const outputBox = document.getElementById("outputBox");
    const loadingImage = document.getElementById("loadingImage");
    outputBox.textContent = "";
    // Display loading image
    loadingImage.classList.remove("hidden");

    // Check if the user is online before proceeding
    if (navigator.onLine) {
        // Fetch the active URL
        chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
            const activeTab = tabs[0];
            const activeUrl = activeTab.url;

            // Fetch the summary asynchronously
            const major_points = await fetchMajorPoints(activeUrl);

            // Hide the loading image and update the content with the summary
            loadingImage.classList.add("hidden");
            outputBox.textContent = major_points;
        });
    } else {
        // Display "Not Connected" message in a popup
        loadingImage.classList.add("hidden");
        alert("Your Network is not Connected");
    }
});

// Fetch major points from the API endpoint
async function fetchMajorPoints(url) {
    try {
        const response = await fetch("http://127.0.0.1:5000/get_major_points", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: url  // Pass the active URL
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return data.major_points;
        } else {
            throw new Error("Failed to fetch summary");
        }
    } catch (error) {
        console.error("Error:", error);
        return "Error fetching summary";
    }
}






// copy button
document.getElementById("copyButton").addEventListener("click", () => {
    var outputBox = document.getElementById("outputBox");
    var messageElement = document.getElementById("message");

    // Add a checkmark emoji to the message
    if (outputBox.value){
        messageElement.innerHTML = "Copied Successfully &#10004;";
    }

    navigator.clipboard.writeText(outputBox.value);
    setTimeout(() => {
        messageElement.innerHTML = "";
    }, 3000); // Clear the message after 3 seconds
});








// theme change
const darkLightToggleSwitch = document.getElementById("darkLightToggleSwitch");

darkLightToggleSwitch.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
  }
});
