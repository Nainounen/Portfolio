const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
app.enable('trust proxy');

const PORT = process.env.PORT || 3000;
const PASSWORD = "F4stConn3ct!on";

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

app.post('/check-password', limiter, (req, res) => {
  const { password } = req.body;
  if (password === PASSWORD) {
    req.session.authenticated = true;
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
