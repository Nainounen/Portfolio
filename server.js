const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.enable('trust proxy');

const PORT = process.env.PORT || 3000;

// Verbinde dich mit der Datenbank
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Datenbank verbunden'))
  .catch(err => console.error('Fehler bei der Verbindung zur Datenbank:', err));

// Schema für Inhalte
const ContentSchema = new mongoose.Schema({
  password: String, // Das Passwort zur Authentifizierung
  section: String,  // "about" oder "motivation"
  content: String,  // Der Inhalt
});

const Content = mongoose.model('Content', ContentSchema);

// Security headers
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://cdnjs.cloudflare.com", "https://cdn.jsdelivr.net"],
      scriptSrcAttr: ["'unsafe-inline'"]
    },
  })
);

// Middleware
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'lax'
  }
}));

// Authentication Middleware
function isAuthenticated(req, res, next) {
  if (req.session.authenticated) return next();
  res.redirect('/');
}

// Protected Routes
app.get('/portfolioindex.html', isAuthenticated, (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'portfolioindex.html'))
);

app.use('/files', isAuthenticated, express.static(path.join(__dirname, 'public', 'files')));
app.use('/img', isAuthenticated, express.static(path.join(__dirname, 'public', 'img')));
app.use('/logos', isAuthenticated, express.static(path.join(__dirname, 'public', 'logos')));
app.use('/Zertifikate', isAuthenticated, express.static(path.join(__dirname, 'public', 'Zertifikate')));
app.get('/script_portfolio.js', isAuthenticated, (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'script_portfolio.js'))
);
app.get('/styles_portfolio.css', isAuthenticated, (req, res) =>
  res.sendFile(path.join(__dirname, 'public', 'styles_portfolio.css'))
);

// Static public files
app.use(express.static(path.join(__dirname, 'public')));

// Rate Limiting for Password Check
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  handler: (req, res) => res.status(429).json({ message: "Too many login attempts. Please try again in 15 minutes." })
});

// Route zur Prüfung des Passworts
app.post('/check-password', async (req, res) => {
  const { password } = req.body;
  try {
    const content = await Content.findOne({ password });
    if (content) {
      req.session.authenticated = true;
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error('Fehler beim Überprüfen des Passworts:', error);
    res.status(500).json({ message: 'Serverfehler' });
  }
});

app.post('/get-content', async (req, res) => {
  const { password } = req.body;
  try {
    const content = await Content.findOne({ password });
    console.log('Gefundener Inhalt:', content);

    if (content) {
      res.json(content); // Sende den gesamten Inhalt zurück
    } else {
      res.status(404).json({ message: 'Kein Inhalt für dieses Passwort gefunden' });
    }
  } catch (error) {
    console.error('Fehler beim Abrufen des Inhalts:', error);
    res.status(500).json({ message: 'Serverfehler' });
  }
});






// Funktion zum Versenden der E-Mail
app.post('/sendMail', async (req, res) => {
  const { name, email, message } = req.body;

  const subject = `Feedback von ${name}`;
  const body = `${message}\n\nFreundliche Grüsse,\n${name}\n\nMeine E-Mail lautet: ${email}`;

  // Konfiguration für den SMTP-Transport
  // Stelle sicher, dass dies am Anfang deiner Datei steht

  let transporter = nodemailer.createTransport({
    host: 'in-v3.mailjet.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAILJET_USER, // Zugriff auf den öffentlichen Mailjet-Schlüssel
      pass: process.env.MAILJET_PASS, // Zugriff auf den geheimen Mailjet-Schlüssel
    },
  });
  

  try {
    // Sende die E-Mail
    await transporter.sendMail({
      from: 'home.ninomeier@gmail.com', // Verifizierte Absenderadresse, die bei Mailjet eingerichtet ist
      to: 'nino.meier@swisscom.com', // Deine Adresse, um die Nachricht zu erhalten
      subject: `Feedback von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
    });

    // Antwort an den Client senden
    res.json({ message: 'E-Mail erfolgreich versendet!' });
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    res.status(500).json({ error: 'E-Mail konnte nicht gesendet werden.' });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));



