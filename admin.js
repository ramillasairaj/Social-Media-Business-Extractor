// Load stored platforms from localStorage or initialize an empty array
let platformsData = JSON.parse(localStorage.getItem("platforms")) || [];

// Function to create a new platform section
function createPlatform(platformName = "", accounts = [""]) {
  const platformGroup = document.createElement("div");
  platformGroup.className = "platform-group";

  // Platform header (input + remove button)
  const platformHeader = document.createElement("div");
  platformHeader.className = "platform-header";

  const platformInput = document.createElement("input");
  platformInput.type = "text";
  platformInput.placeholder = "Platform (e.g., Instagram)";
  platformInput.value = platformName;

  // Cross symbol ❌ for platform removal
  const removePlatformBtn = document.createElement("button");
  removePlatformBtn.className = "account-input-group btn-small";
  removePlatformBtn.innerHTML = "❌";
  removePlatformBtn.onclick = () => {
    platformGroup.remove();
    savePlatforms(); // Save after deletion
  };

  platformHeader.appendChild(platformInput);
  platformHeader.appendChild(removePlatformBtn);
  platformGroup.appendChild(platformHeader);

  // Add existing accounts
  accounts.forEach(account => {
    const accountInputGroup = createAccountInput(account);
    platformGroup.appendChild(accountInputGroup);
  });

  // Button to add more accounts
  const addAccountBtn = document.createElement("button");
  addAccountBtn.className = "btn-small add-btn";
  addAccountBtn.textContent = "+";
  addAccountBtn.onclick = () => {
    const accountInputGroup = createAccountInput("");
    platformGroup.appendChild(accountInputGroup);
  };

  platformGroup.appendChild(addAccountBtn);
  return platformGroup;
}

// Function to create an account input field
function createAccountInput(accountValue = "") {
  const accountInputGroup = document.createElement("div");
  accountInputGroup.className = "account-input-group";

  const accountInput = document.createElement("input");
  accountInput.type = "text";
  accountInput.placeholder = "Account Address";
  accountInput.value = accountValue;

  // Cross symbol ❌ for account removal
  const removeAccountBtn = document.createElement("button");
  removeAccountBtn.innerHTML = "❌";
  removeAccountBtn.onclick = () => {
    accountInputGroup.remove();
    savePlatforms(); // Save after deletion
  };

  accountInputGroup.appendChild(accountInput);
  accountInputGroup.appendChild(removeAccountBtn);
  return accountInputGroup;
}

// Function to save platforms and accounts to localStorage
function savePlatforms() {
  platformsData = [];
  const platformContainer = document.getElementById("platform-container");

  Array.from(platformContainer.children).forEach(platformGroup => {
    const platformName = platformGroup.querySelector(".platform-header input").value;
    const accounts = Array.from(platformGroup.querySelectorAll(".account-input-group input"))
      .map(input => input.value)
      .filter(value => value.trim() !== "");

    if (platformName && accounts.length) {
      platformsData.push({ platform: platformName, accounts });
    }
  });

  localStorage.setItem("platforms", JSON.stringify(platformsData));
  alert("Platforms saved successfully!");
}

// Function to render stored platforms on page load
function renderPlatforms() {
  const platformContainer = document.getElementById("platform-container");
  platformContainer.innerHTML = "";

  platformsData.forEach(({ platform, accounts }) => {
    const newPlatform = createPlatform(platform, accounts);
    platformContainer.appendChild(newPlatform);
  });
}

// Add platform button event listener
document.getElementById("add-platform").addEventListener("click", () => {
  const platformContainer = document.getElementById("platform-container");
  const newPlatform = createPlatform();
  platformContainer.appendChild(newPlatform);
});

// Save data button event listener
document.getElementById("save-data").addEventListener("click", savePlatforms);

// Render platforms on page load
renderPlatforms();
