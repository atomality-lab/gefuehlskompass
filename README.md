# Gefühlskompass PWA Prototyp V0.13

## Änderung
- Der Mittelteil nutzt ein Android-robustes Flex-Layout.
- Nur der Mittelteil scrollt; Kopf- und Menüleiste erhalten jeweils eigenen Platz.
- `overflow-y: auto`, `min-height: 0` und Touch-Scrolling sind explizit gesetzt.
- Die Dialogbuttons liegen weiterhin unter dem jeweiligen Schrittinhalt.


## Layout-Fix V0.13
- Alle alten Grid-, Flex- und Fixed-Scrollregeln entfernt.
- Normales Browser-Scrolling für die gesamte Seite.
- Hauptmenü direkt unter der Kopfzeile, nicht über dem Inhalt.
- Dialogbuttons bleiben im Schritt-Panel und sind durch normales Scrollen erreichbar.
