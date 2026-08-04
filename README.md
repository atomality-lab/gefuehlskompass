# Gefühlskompass – Klick-Prototyp V0.1

Phase 1 des neuen Projekts: ein interaktiver, installierbarer PWA-Klick-Prototyp ohne produktive Datenbank, Import oder Export.

## Dialogablauf

1. Kontext/Situation
2. Körperempfindungen und Körperregionen
3. Grundrichtung: angenehm/neutral/unangenehm, Energie, Ruhe/Aufgewühltheit
4. Handlungsimpuls
5. vorgeschlagene oder alle Untergefühle
6. Bezug und Gedanken
7. Intensität
8. abgeleitete Hauptgefühle und Entscheidung
9. Sicherheit der Benennung
10. aktuelles Bedürfnis

## Wünsche aus der Abstimmung

- „Gesundheit“ heißt klarer „Gesundheit / Behandlung“ und umfasst etwa Arzttermin, Therapie, Beschwerden, Medikamente oder Pflege.
- Bei „Sonstiges“ kann direkt ein eigener Kontext eingegeben werden; er wird in den Prototyp-Katalog aufgenommen.
- Körperempfindungen sind im Katalog erweiterbar.
- Körperregionen werden ausschließlich im Katalog gepflegt.
- Handlungsimpulse und Untergefühle sind im Katalog editierbar.
- Beim Bedürfnis ist eine direkte eigene Eingabe möglich und wird in den Katalog aufgenommen.
- Die Statistik enthält eine Gefühlsverteilung als Tortendiagramm mit Umschaltung zwischen Woche und Monat.

## Prototyp-Hinweis

Der Prototyp speichert Katalogänderungen und Testeinträge nur per `localStorage`. Er dient zum Testen von Sprache, Reihenfolge und Bedienung. Eine robuste IndexedDB, Eintragsbearbeitung, Import/Export und die lernenden Vorschläge folgen erst in Phase 2 und 3.

## Lokal starten

```bash
python -m http.server 8080
```

Anschließend `http://localhost:8080` öffnen.

## Namenshinweis

„Gefühlskompass“ wird bereits von verschiedenen Beratungs-, Coaching- und Therapieangeboten sowie als beschreibende Bezeichnung verwendet. Das ist keine abschließende Markenprüfung. Vor einer öffentlichen oder kommerziellen Veröffentlichung sollte eine professionelle Identitäts- und Ähnlichkeitsrecherche beim DPMA und gegebenenfalls EUIPO erfolgen.
