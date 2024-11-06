#!/bin/bash

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
git push https://git.heroku.com/portfolio-nino-meier.git master

# .gitignore-Datei wiederherstellen
mv .gitignore_backup .gitignore

# Push zu GitHub mit .gitignore
echo "Pushing zu GitHub mit .gitignore..."
git add .
git commit -m "$1"
git push origin master

echo "Deployment abgeschlossen."
