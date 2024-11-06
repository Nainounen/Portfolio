#!/bin/bash

# API-Token direkt im Skript (Achtung: Sicherheitsrisiko!)
HEROKU_API_KEY="HRKU-2d4f80be-cf1e-4e60-ad73-b5689fd5cd27"

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

echo "Pushing zu GitHub mit .gitignore..."
git add .
git commit -m "$1"
git push origin master

echo "Deployment abgeschlossen. .gitignore wiederhergestellt."
