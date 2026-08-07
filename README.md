# Gefühlskompass PWA V0.23

Neu in V0.23:

- vollständiges gewichtetes Gefühlsmodell aus `Gefuehlsmodell_Import.xlsx`
- Netz 1: Grundrichtung, Energie, Körperzustand, Körperempfindungen und Handlungsimpulse werden gewichtet zu Untergefühlsvorschlägen verrechnet
- Netz 1 wird über die tatsächlich verwendeten Eingabegruppen normalisiert
- Netz 2: ausgewählte Untergefühle werden über ihre gewichteten Beziehungen zu Hauptgefühlen verrechnet
- die Hauptgefühle werden intern nach Gewichtung sortiert; die Zahlen bleiben im Dialog unsichtbar
- Vorschlagsregeln bleiben im Katalog editierbar; Gewichtungen können dort pro Beziehung zwischen 0,1 und 1,0 verändert werden
- bestehende Verlaufsdaten bleiben erhalten
- bestehende nicht-modellbezogene Kataloge (Situationen, Körperregionen, Bedürfnisse) bleiben bei der Aktualisierung erhalten

Hinweis zur Modellübernahme:
Beim ersten Start von V0.23 wird ein älterer ungewichteter Regelkatalog auf das neue gewichtete Basismodell aktualisiert. Gespeicherte Verlaufseinträge werden dabei nicht verändert.

Nicht geändert:
- Optik und Navigation
- Fragestellungen und Dialogreihenfolge
- Statistik, Verlauf, Import/Export und Gesamt-Backup
