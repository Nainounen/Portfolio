const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const helmet = require('helmet'); // Helmet für Sicherheitsheader
require('dotenv').config(); // Lädt die Umgebungsvariablen aus der .env-Datei

const app = express();
const PORT = 3000;

const PASSWORD = "Nino"; // Dein Passwort für die Authentifizierung

// Sicherheitsheader aktivieren
app.use(helmet()); // Fügt Header wie Content-Security-Policy, XSS-Schutz und mehr hinzu

// Middleware
app.use(bodyParser.json());

// Sitzungsverwaltung einrichten
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Für HTTPS auf `true` setzen
}));


// Authentifizierungs-Middleware
function isAuthenticated(req, res, next) {
  if (req.session.authenticated) {
    return next();
  } else {
    res.redirect('/');
  }
}

// Geschützte Routen definieren
app.get('/portfolioindex.html', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portfolioindex.html'));
});

app.use('/files', isAuthenticated, express.static(path.join(__dirname, 'public', 'files')));
app.use('/img', isAuthenticated, express.static(path.join(__dirname, 'public', 'img')));
app.use('/logos', isAuthenticated, express.static(path.join(__dirname, 'public', 'logos')));
app.use('/Zertifikate', isAuthenticated, express.static(path.join(__dirname, 'public', 'Zertifikate')));
app.get('/script_portfolio.js', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'script_portfolio.js'));
});
app.get('/styles_portfolio.css', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'styles_portfolio.css'));
});

// `public` Ordner zuletzt laden, damit nur ungeschützte Inhalte ohne Authentifizierung erreichbar sind
app.use(express.static(path.join(__dirname, 'public')));

const rateLimit = require('express-rate-limit');

// Rate Limiting für die Passwortüberprüfung
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 Minuten
    max: 5, // Maximal 5 Anfragen pro IP innerhalb von 15 Minuten
    handler: (req, res) => {
      res.status(429).json({ message: "Too many login attempts. Please try again in 15 minutes." });
    }
  });
  

// Wende den Limiter nur auf die `/check-password`-Route an
app.post('/check-password', limiter, (req, res) => {
  const { password } = req.body;
  console.log('Passwort erhalten:', password); // Debug-Ausgabe

  if (password === PASSWORD) {
    req.session.authenticated = true;
    console.log('Session gesetzt:', req.session); // Debug-Ausgabe
    res.json({ success: true });
  } else {
    console.log('Falsches Passwort'); // Debug-Ausgabe
    res.json({ success: false });
  }
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
