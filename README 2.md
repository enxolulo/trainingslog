# Trainingslog

Persönlicher Trainingslog als Web-App für den iPhone-Homescreen. Läuft ohne Server; alle Einträge liegen nur auf dem Gerät.

## Einrichten mit GitHub Pages

1. Auf github.com ein neues Repository anlegen, zum Beispiel `trainingslog`. Sichtbarkeit: **Public** (GitHub Pages ist bei kostenlosen Accounts nur für öffentliche Repositories verfügbar).
2. Im leeren Repository auf **uploading an existing file** klicken und **alle Dateien aus diesem Ordner** hineinziehen (die Dateien selbst, nicht den Ordner). Mit **Commit changes** bestätigen.
3. **Settings → Pages**: bei *Source* „Deploy from a branch" wählen, Branch `main`, Ordner `/ (root)`, **Save**.
4. Nach ein bis zwei Minuten ist die App unter `https://DEIN-NAME.github.io/trainingslog/` erreichbar.

## Auf den Homescreen legen

1. Die Adresse auf dem iPhone in **Safari** öffnen.
2. Auf **Teilen** tippen, dann **Zum Home-Bildschirm**.
3. Die App vom Homescreen starten. Ab jetzt läuft sie auch ohne Internet.

Wichtig: Die App vom Homescreen hat einen eigenen Speicher, getrennt von Safari. Einträge immer in der Homescreen-App machen.

## Daten mitnehmen

In der bisherigen Version unter **Mehr → Sichern und laden** auf „Text kopieren" tippen. In der Homescreen-App an derselben Stelle den Text einfügen und „Eingefügten Text laden" wählen.

## Aktualisieren

`index.html` im Repository durch die neue Version ersetzen und in `sw.js` die Versionsnummer in der Zeile `const V=` erhöhen. Die App holt sich die neue Fassung beim nächsten Öffnen mit Internet.

## Dateien

- `index.html`: die ganze App
- `manifest.webmanifest`: Name, Farben und Icons für den Homescreen
- `sw.js`: Offline-Speicher
- `icon-*.png`, `apple-touch-icon.png`: App-Icons
