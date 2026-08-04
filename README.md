# Gefühlskompass – Funktionaler Prototyp Phase 2, V0.20

## Neu in Phase 2

- Speicherung über IndexedDB
- Verlauf mit Bearbeiten und Löschen
- erste Statistik
- dynamische Untergefühlsvorschläge aus Körper, Grundrichtung und Handlungsimpuls
- vollständige Katalogverwaltung
- editierbare Beziehungen zwischen Körperempfindungen, Grundrichtung, Handlungsimpulsen, Untergefühlen und Hauptgefühlen
- Export und Import des gesamten Katalogs und aller Beziehungen als JSON
- Intensitätsskala mit konkreten Orientierungstexten
- optionaler Satz: „Wenn dein Gefühl sprechen könnte …“

## Beziehungen am Rechner bearbeiten

Unter `Katalog` kann eine JSON-Datei exportiert werden. Der Bereich `catalog.sub` enthält pro Untergefühl:

```json
{
  "name": "bedrückt",
  "main": "Trauer",
  "body": ["Schwere", "Müdigkeit"],
  "valence": ["unangenehm"],
  "energy": ["wenig"],
  "arousal": ["ruhig"],
  "impulses": ["Weinen", "Allein sein"]
}
```

Die Datei kann in einem Texteditor bearbeitet und anschließend wieder importiert werden. Vor dem Import wird geprüft, ob die wesentlichen Katalogbereiche vorhanden sind.

## Hinweis

Diese Version ist ein funktionaler Prototyp. Vor produktiver Nutzung sollten Importvalidierung, vollständige Datensicherung und ausführliche Tests ergänzt werden.
