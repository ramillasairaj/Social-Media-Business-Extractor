const defaultData = {
    "Hyderabad": {
        "Instagram": [
            { id: 1, username: "sai@212", platform: "Instagram", location: "Hyderabad", businessType: "Restaurant", active: "Yes" },
            { id: 2, username: "raj@12", platform: "Instagram", location: "Hyderabad", businessType: "Technology", active: "No" }
        ],
        "LinkedIn": [
            { id: 3, username: "sai@12", platform: "LinkedIn", location: "Hyderabad", businessType: "Technology", active: "Yes" }
        ]
    },
    "Bangalore": {
        "Instagram": [
            { id: 4, username: "bangalore_restaurant", platform: "Instagram", location: "Bangalore", businessType: "Restaurant", active: "Yes" }
        ],
        "Facebook": [
            { id: 5, username: "tech_bangalore_facebook", platform: "Facebook", location: "Bangalore", businessType: "Technology", active: "Yes" }
        ]
    }
};

function performSearch() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    if (!query) {
        resultsContainer.style.display = "none";
        return;
    }
    const filteredResults = [];
    for (const location in defaultData) {
        for (const platform in defaultData[location]) {
            defaultData[location][platform].forEach(user => {
                if (user.username.toLowerCase().includes(query)) {
                    filteredResults.push(user);
                }
            });
        }
    }
    resultsContainer.innerHTML = filteredResults.length 
        ? filteredResults.map(user => `<div class="result-item" onclick="selectResult('${user.username}')">${user.username}</div>`).join("")
        : '<div class="no-result">No results found</div>';
    resultsContainer.style.display = "block";
}

function selectResult(username) {
    document.getElementById('search-bar').value = username;
    document.getElementById('search-results').style.display = "none";
}

document.getElementById('extract-btn').addEventListener('click', function() {
    const platform = document.getElementById('platform').value;
    const location = document.getElementById('location').value;
    if (!platform || !location) {
        alert("Please select a platform and location.");
        return;
    }
    const results = defaultData[location]?.[platform] || [];
    displayResults(results);
});

function displayResults(results) {
    const resultsTableBody = document.getElementById('results-table-body');
    resultsTableBody.innerHTML = results.length 
        ? results.map((user, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${user.username}</td>
                <td>${user.platform}</td>
                <td>${user.location}</td>
                <td>${user.businessType}</td>
                <td>${user.active}</td>
                <td><input type="checkbox"></td>
            </tr>`).join("")
        : `<tr><td colspan="7">No results found</td></tr>`;
}

function goBack() {
    alert("Going back...");
}

