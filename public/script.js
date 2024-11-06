// Event Listener for Password Input
document.getElementById("password-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPassword();
});

// Password Check Function
function checkPassword() {
  const passwordInput = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");
  const password = passwordInput.value;

  fetch('/check-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password })
  })
    .then(response => response.json().then(data => ({ status: response.status, body: data })))
    .then(({ status, body }) => handlePasswordResponse(status, body, passwordInput, errorMessage))
    .catch(error => console.error('Error:', error));
}

function handlePasswordResponse(status, body, passwordInput, errorMessage) {
  if (status === 200 && body.success) {
    passwordInput.style.display = "none";
    errorMessage.style.display = "none";
    startLoadingSequence();
  } else {
    displayErrorMessage(status, body, passwordInput, errorMessage);
  }
}

function displayErrorMessage(status, body, passwordInput, errorMessage) {
  if (status === 429) {
    errorMessage.textContent = body.message;
  } else {
    errorMessage.textContent = "Incorrect password. Try again.";
    passwordInput.classList.add("error");
    passwordInput.value = "";
    setTimeout(() => passwordInput.classList.remove("error"), 500);
  }
  errorMessage.style.display = "block";
}

// Loading Animation Functions
const consoleText = document.getElementById("console-text");
const cursor = document.getElementById("cursor");
const loadingMessages = [
  "Initializing system...", "Loading assets...", "Establishing secure connection...",
  "Synchronizing data streams...", "Calibrating sensors...", "Applying user settings...", "System ready."
];
const quickCodeMessages = [
  "0x09A3 Initializing boot sequence...", "0x09A4 Allocating memory...", "0x09A5 Launching protocol handlers...",
  "0x09A6 Loading modules...", "0x09A7 Starting main thread...", "0x09A8 Security check complete.", "0x09A9 System operational."
];

let index = 0, loadingBarAdded = false;

function startLoadingSequence() {
  typeMessage();
}

function typeMessage() {
  if (index < loadingMessages.length) {
    const message = loadingMessages[index];
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        consoleText.innerHTML += message[charIndex++];
      } else {
        clearInterval(typeInterval);
        consoleText.innerHTML += "\n";
        index++;
        (index < loadingMessages.length) ? setTimeout(typeMessage, Math.random() * 1000 + 500) : addLoadingBar();
      }
    }, 50);
  }
}

function addLoadingBar() {
  if (!loadingBarAdded) {
    const loadingBar = document.createElement("div");
    loadingBar.className = "loading-bar";
    consoleText.appendChild(loadingBar);
    loadingBarAdded = true;
    loadingBar.addEventListener("animationend", startSite);
  }
}

function showQuickCode() {
  consoleText.innerHTML = "";
  cursor.style.display = "none";
  quickCodeMessages.forEach((message, i) => setTimeout(() => consoleText.innerHTML += message + "\n", i * 100));
  setTimeout(() => {
    document.getElementById("console").classList.add("fade-out");
    setTimeout(startSite, 1000);
  }, quickCodeMessages.length * 100 + 500);
}

function startSite() {
  window.location.href = "/portfolioindex.html";
}

document.addEventListener("DOMContentLoaded", () => cursor.style.display = "none");
