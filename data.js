const dataMapping = {
    ny: {
        businessTypes: ["Finance", "Healthcare", "Retail"],
        platforms: ["LinkedIn", "Facebook", "Twitter"],
        data: [
            { account: "finance.com", address: " Hyderabad", status: "Active" },
            { account: "healthcare.com", address: " Hyderabad", status: "Pending" },
            { account: "retail.com", address: "Hyderabad", status: "Inactive" },
        ],
    },
    la: {
        businessTypes: ["Entertainment", "Technology", "Fashion"],
        platforms: ["Instagram", "YouTube", "TikTok"],
        data: [
            { account: "tech@example.com", address: "Banglore", status: "Active" },
            { account: "fashion.com", address: " Banglore", status: "Inactive" },
            { account: "entertainment.com", address: "Banglore", status: "Pending" },
        ],
    },
    sf: {
        businessTypes: ["Startup", "E-Commerce", "Consulting"],
        platforms: ["Google", "Amazon", "Slack"],
        data: [
            { account: "startup_sf.com", address: " chenni", status: "Active" },
            { account: "ecommerce.com", address: " chenni", status: "Pending" },
            { account: "consulting.com", address: " cehnni", status: "Inactive" },
        ],
    },
};

function updateFields(type) {
    if (type === "location") {
        const location = document.getElementById("location").value;
        const businessTypeSelect = document.getElementById("business-type");
        const platformSelect = document.getElementById("platform");

        // Update business types
        businessTypeSelect.innerHTML = '<option value="" selected disabled>Choose Business Type</option>';
        dataMapping[location].businessTypes.forEach((business) => {
            const option = document.createElement("option");
            option.value = business.toLowerCase();
            option.textContent = business;
            businessTypeSelect.appendChild(option);
        });

        // Update platforms
        platformSelect.innerHTML = '<option value="" selected disabled>Choose Platform</option>';
        dataMapping[location].platforms.forEach((platform) => {
            const option = document.createElement("option");
            option.value = platform.toLowerCase();
            option.textContent = platform;
            platformSelect.appendChild(option);
        });
    }
}

function searchResults() {
    const location = document.getElementById("location").value;
    const businessType = document.getElementById("business-type").value;
    const platform = document.getElementById("platform").value;

    const resultsList = document.getElementById("results-list");
    resultsList.innerHTML = ""; // Clear previous results

    if (location && businessType && platform) {
        const results = dataMapping[location].data.filter(
            (item) => item.account.includes(businessType)
        );

        if (results.length > 0) {
            results.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>Account:</strong> ${item.account}<br>
                                      <strong>Address:</strong> ${item.address}<br>
                                      <strong>Status:</strong> ${item.status}<br>
                                      <strong>Business Activity:</strong> ${item.status === "Active" ? "Running Smoothly" : "Needs Attention"}`;
                resultsList.appendChild(listItem);
            });
        } else {
            resultsList.innerHTML = "<li>No data found for the selected filters.</li>";
        }
    } else {
        alert("Please select all fields to see results!");
    }
}

function extractFollowers() {
    const platform = document.getElementById("platform").value;

    if (platform) {
        alert(
            platform === "whatsapp"
                ? "Extracting linked groups from WhatsApp..."
                : `Extracting followers data from ${platform.charAt(0).toUpperCase() + platform.slice(1)}...`
        );
    } else {
        alert("Please select a platform first!");
    }
    const listItem = document.createElement("div");
listItem.className = "results-box"; // Apply styling
listItem.innerHTML = `<strong>Account:</strong> ${item.account}<br>
                      <strong>Address:</strong> ${item.address}<br>
                      <strong>Status:</strong> ${item.status}<br>
                      <strong>Business Activity:</strong> ${item.status === "Active" ? "Running Smoothly" : "Needs Attention"}`;

}
