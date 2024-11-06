#!/bin/bash

# .env-Datei laden
# .env-Datei laden
if [ -f .env ]; then
    source .env
fi

echo "HEROKU_API_KEY: $HEROKU_API_KEY"
echo "GITHUB_API_TOKEN: $GITHUB_API_TOKEN"

# Überprüfen, ob das HEROKU_API_KEY und GITHUB_API_TOKEN gesetzt sind
if [ -z "$HEROKU_API_KEY" ] || [ -z "$GITHUB_API_TOKEN" ]; then
    echo "Fehler: HEROKU_API_KEY oder GITHUB_API_TOKEN ist nicht gesetzt."
    exit 1
fi

# Überprüfen, ob ein Kommentar übergeben wurde
if [ -z "$1" ]; then
    echo "Bitte geben Sie einen Commit-Kommentar an."
    exit 1
fi

# .gitignore-Datei umbenennen, um sie vorübergehend zu entfernen
mv .gitignore .gitignore_backup

# Push zu Heroku ohne .gitignore
echo "Pushing zu Heroku ohne .gitignore..."
git add .
git commit -m "$1"
git push https://heroku:$HEROKU_API_KEY@git.heroku.com/portfolio-nino-meier.git master

# .gitignore-Datei wiederherstellen
mv .gitignore_backup .gitignore

# Push zu GitHub mit .gitignore
echo "Pushing zu GitHub mit .gitignore..."
git add .
git commit -m "$1"
git push https://$GITHUB_API_TOKEN@github.com/Nainounen/Portfolio.git master

echo "Deployment abgeschlossen."
