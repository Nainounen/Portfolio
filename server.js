const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo'); // Importiere connect-mongo für MongoDB-Sessions
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const PASSWORD = "Nino";

// Sicherheitsheader aktivieren
app.use(helmet());

// Middleware
app.use(bodyParser.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    ttl: 14 * 24 * 60 * 60 // Sessions werden 14 Tage lang gespeichert
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production' ? true : false, // Nur in Produktion auf true setzen
    httpOnly: true,
    sameSite: 'lax' // Empfohlen für Sessions auf Heroku
  }
}));


// Authentifizierungs-Middleware
function isAuthenticated(req, res, next) {
  console.log("Session status:", req.session); // Überprüft, ob die Session vorhanden ist
  if (req.session.authenticated) {
    return next();
  } else {
    console.log("User not authenticated, redirecting...");
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
  console.log(`Server läuft auf Port ${PORT}`);
});
