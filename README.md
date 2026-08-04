# Gefühlskompass – Klick-Prototyp V0.7

## Inhalt dieser Version

- vollständiger Dialog aus V0.6
- Zurück-/Weiter-Leiste liegt im normalen Seitenfluss unter den Auswahlfeldern
- sichtbare Versionsanzeige V0.7
- neue, konsistente Asset-Versionen `app.js?v=0.7` und `styles.css?v=0.7`
- neuer Service-Worker-Cache `gefuehlskompass-prototyp-v0.7`
- alte Gefühlskompass-Prototyp-Caches werden bei Aktivierung gelöscht
- Seitenaufrufe und JavaScript/CSS werden künftig zuerst aus dem Netz aktualisiert
- zusätzliche Diagnose-Datei `version.json`

## Warum V0.6 nicht zuverlässig aktualisiert wurde

In V0.6 zeigte die Kopfzeile zwar V0.6, der Service Worker verwendete aber weiterhin den Cache `gefuehlskompass-prototyp-v0-4`. Außerdem arbeitete er für die Startseite nach dem Prinzip „Cache zuerst“. Dadurch konnte der normale GitHub-Pages-Link weiterhin eine alte V0.3-Seite ausliefern. Ein Query-Parameter wie `?v=0.6` umging lediglich diesen alten Cache-Eintrag.

## Veröffentlichung

1. Alle bisherigen Dateien im Veröffentlichungsordner ersetzen.
2. V0.7 vollständig hochladen.
3. Einmal `https://DEINE-SEITE/?v=0.7` öffnen.
4. Danach die Seite schließen und über den normalen Link ohne Query-Parameter öffnen.
5. Unter `https://DEINE-SEITE/version.json` muss `0.7` erscheinen.

Die lokalen Prototyp-Daten bleiben erhalten. Die alten Speicherschlüssel mit `v03` im Namen werden absichtlich nicht verändert, weil sie nur den lokalen Datenbestand kennzeichnen und keine sichtbare App-Version darstellen.
