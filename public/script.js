// Event-Listener für die Passwort-Eingabe
document.getElementById("password-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPassword();
  }
});

// Funktion zur Überprüfung des Passworts
function checkPassword() {
  const passwordInput = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");
  const password = passwordInput.value;

  fetch('/check-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password })
  })
  .then(response => response.json().then(data => ({ status: response.status, body: data }))) // Status und Body extrahieren
  .then(({ status, body }) => {
    if (status === 200 && body.success) {
      // Blendet das Passwortfeld aus und zeigt die Animation oder Weiterleitung an
      passwordInput.style.display = "none";
      errorMessage.style.display = "none";
      startLoadingSequence(); // Startet die Ladeanimation
    } else if (status === 429) {
      // Zeigt Rate-Limiting-Fehlermeldung an
      errorMessage.textContent = body.message;
      errorMessage.style.display = "block";
    } else {
      // Zeigt allgemeine Fehlermeldung für falsches Passwort an und startet Shake-Animation
      errorMessage.textContent = "Incorrect password. Try again.";
      errorMessage.style.display = "block";
      passwordInput.classList.add("error");
      passwordInput.value = ""; // Löscht das falsch eingegebene Passwort

      // Entferne die Shake-Animation, um sie bei einer weiteren falschen Eingabe erneut auszulösen
      setTimeout(() => {
        passwordInput.classList.remove("error");
      }, 500); // Dauer der Shake-Animation
    }
  })
  .catch(error => console.error('Error:', error));
}

// Funktionen für die Ladeanimation
const consoleText = document.getElementById("console-text");
const cursor = document.getElementById("cursor");

const loadingMessages = [
  "Initializing system...",
  "Loading assets...",
  "Establishing secure connection...",
  "Synchronizing data streams...",
  "Calibrating sensors...",
  "Applying user settings...",
  "System ready."
];

const quickCodeMessages = [
  "0x09A3 Initializing boot sequence...",
  "0x09A4 Allocating memory...",
  "0x09A5 Launching protocol handlers...",
  "0x09A6 Loading modules...",
  "0x09A7 Starting main thread...",
  "0x09A8 Security check complete.",
  "0x09A9 System operational."
];

let index = 0;
let loadingBarAdded = false;

function startLoadingSequence() {
  typeMessage();
}

function typeMessage() {
  if (index < loadingMessages.length) {
    const message = loadingMessages[index];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        consoleText.innerHTML += message[charIndex];
        charIndex++;
      } else {
        clearInterval(typeInterval);
        consoleText.innerHTML += "\n";
        index++;
        if (index < loadingMessages.length) {
          setTimeout(typeMessage, Math.random() * 1000 + 500);
        } else {
          addLoadingBar();
        }
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

    // Wenn die Ladeleiste vollständig geladen ist, wird die Seite geladen
    loadingBar.addEventListener("animationend", startSite);
  }
}

function showQuickCode() {
  consoleText.innerHTML = "";
  cursor.style.display = "none";

  quickCodeMessages.forEach((message, i) => {
    setTimeout(() => {
      consoleText.innerHTML += message + "\n";
    }, i * 100);
  });

  setTimeout(() => {
    document.getElementById("console").classList.add("fade-out");
    setTimeout(startSite, 1000);
  }, quickCodeMessages.length * 100 + 500);
}

function startSite() {
  window.location.href = "/portfolioindex.html";
}

document.addEventListener("DOMContentLoaded", () => {
  cursor.style.display = "none"; // Versteckt den Cursor, bis die Animation startet
});
