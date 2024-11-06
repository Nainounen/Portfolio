#!/bin/bash

heroku login -i
# Überprüfen, ob ein Kommentar übergeben wurde
if [ -z "$1" ]; then
    echo "Bitte geben Sie einen Commit-Kommentar an."
    exit 1
fi

# .gitignore-Datei umbenennen, um sie vorübergehend zu entfernen
mv .gitignore .gitignore_backup

# Dateien zu Heroku pushen mit einer übergebenen Commit-Message
git add .
git commit -m "$1"
git push heroku master

# .gitignore-Datei wiederherstellen
mv .gitignore_backup .gitignore

echo "Deployment abgeschlossen. .gitignore wiederhergestellt."
