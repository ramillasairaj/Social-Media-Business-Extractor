// Sample Business Data
const defaultData = [
    { id: 1, username: "sai@212", platform: "Instagram", location: "Hyderabad", businessType: "Restaurant", active: "Yes" },
    { id: 2, username: "raj@12", platform: "Instagram", location: "Hyderabad", businessType: "Technology", active: "No" },
    { id: 3, username: "sai@12", platform: "LinkedIn", location: "Hyderabad", businessType: "Technology", active: "Yes" },
    { id: 4, username: "bangalore_restaurant", platform: "Instagram", location: "Bangalore", businessType: "Restaurant", active: "Yes" },
    { id: 5, username: "tech_bangalore_facebook", platform: "Facebook", location: "Bangalore", businessType: "Technology", active: "Yes" },
    { id: 6, username: "mumbai_trader", platform: "LinkedIn", location: "Mumbai", businessType: "Trading", active: "Yes" },
    { id: 7, username: "mumbai_food", platform: "Instagram", location: "Mumbai", businessType: "Restaurant", active: "No" },
    { id: 8, username: "delhi_startup", platform: "Twitter", location: "Delhi", businessType: "Startup", active: "Yes" },
    { id: 9, username: "delhi_finance", platform: "LinkedIn", location: "Delhi", businessType: "Finance", active: "Yes" },
    { id: 10, username: "chennai_foodie", platform: "Instagram", location: "Chennai", businessType: "Restaurant", active: "Yes" }
];

// Initialize Select2
$(document).ready(function() {
    $('.select-dropdown').select2({
        placeholder: "Select an option",
        allowClear: true
    });
});

// Extract Button Click Event
document.getElementById('extract-btn').addEventListener('click', function() {
    const cityState = document.getElementById('city-state').value.trim();
    const businessType = document.getElementById('business-type').value.trim();

    if (!cityState || !businessType) {
        alert("Please fill in all fields before extracting data.");
        return;
    }

    const filteredResults = defaultData.filter(user => 
        user.location.toLowerCase().includes(cityState.toLowerCase()) && 
        user.businessType.toLowerCase().includes(businessType.toLowerCase())
    );

    displayResults(filteredResults);
});

// Display Results
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

// Search Function
function performSearch() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    document.querySelectorAll("#results-table-body tr").forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(query) ? "" : "none";
    });
}
