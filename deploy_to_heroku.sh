#!/bin/bash

# .env-Datei laden
if [ -f .env ]; then
    export $(cat .env | xargs)
fi

# Überprüfen, ob das HEROKU_API_KEY gesetzt ist
if [ -z "$HEROKU_API_KEY" ]; then
    echo "Fehler: HEROKU_API_KEY ist nicht gesetzt."
    exit 1
fi

# Überprüfen, ob ein Kommentar übergeben wurde
if [ -z "$1" ]; then
    echo "Bitte geben Sie einen Commit-Kommentar an."
    exit 1
fi

# .gitignore-Datei umbenennen, um sie vorübergehend zu entfernen
mv .gitignore .gitignore_backup

# URL überprüfen und ausgeben
echo "Pushing zu: https://heroku:$HEROKU_API_KEY@git.heroku.com/portfolio-nino-meier.git"

# Dateien zu Heroku pushen mit einer übergebenen Commit-Message
git add .
git commit -m "$1"
git push https://heroku:$HEROKU_API_KEY@git.heroku.com/portfolio-nino-meier.git master

# .gitignore-Datei wiederherstellen
mv .gitignore_backup .gitignore

echo "Deployment abgeschlossen. .gitignore wiederhergestellt."
