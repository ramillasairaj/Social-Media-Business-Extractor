const platforms = JSON.parse(localStorage.getItem('platforms')) || [];

document.getElementById('addPlatformBtn').addEventListener('click', addPlatform);
document.getElementById('saveBtn').addEventListener('click', savePlatforms);

function addPlatform() {
    const platformName = prompt("Enter Platform Name (e.g., Instagram, WhatsApp):");
    if (platformName) {
        const platform = {
            name: platformName,
            accounts: []
        };
        platforms.push(platform);
        renderPlatforms();
    }
}

function addAccount(platformIndex) {
    const accountAddress = prompt(`Enter account address for ${platforms[platformIndex].name}:`);
    if (accountAddress) {
        platforms[platformIndex].accounts.push(accountAddress);
        renderPlatforms();
    }
}

function editAccount(platformIndex, accountIndex) {
    const newAddress = prompt(`Edit account address for ${platforms[platformIndex].name}:`, platforms[platformIndex].accounts[accountIndex]);
    if (newAddress) {
        platforms[platformIndex].accounts[accountIndex] = newAddress;
        renderPlatforms();
    }
}

function removeAccount(platformIndex, accountIndex) {
    const confirmDelete = confirm("Are you sure you want to delete this account?");
    if (confirmDelete) {
        platforms[platformIndex].accounts.splice(accountIndex, 1);
        renderPlatforms();
    }
}

// Function to delete an entire platform
function removePlatform(platformIndex) {
    const confirmDelete = confirm(`Are you sure you want to delete ${platforms[platformIndex].name} and all its accounts?`);
    if (confirmDelete) {
        platforms.splice(platformIndex, 1);
        renderPlatforms();
    }
}

function renderPlatforms() {
    const platformsContainer = document.getElementById('platforms');
    platformsContainer.innerHTML = '';

    platforms.forEach((platform, platformIndex) => {
        const platformDiv = document.createElement('div');
        platformDiv.className = 'platform';
        platformDiv.innerHTML = `
            <h3>${platform.name} <span class="delete-icon" onclick="removePlatform(${platformIndex})">❌</span></h3>
            <div class="accounts">
                ${platform.accounts.map((account, accountIndex) => `
                    <div class="account">
                        <input type="text" value="${account}" readonly>
                        <button class="edit" onclick="editAccount(${platformIndex}, ${accountIndex})">Edit</button>
                        <button class="delete" onclick="removeAccount(${platformIndex}, ${accountIndex})">×</button>
                    </div>`).join('')}
                <button onclick="addAccount(${platformIndex})">+ Add Account</button>
            </div>
        `;
        platformsContainer.appendChild(platformDiv);
    });
}

function savePlatforms() {
    localStorage.setItem('platforms', JSON.stringify(platforms));
    alert("Platforms saved successfully!");
}

function viewAdmin() {
    window.location.href = "admin.html";
}

renderPlatforms();
