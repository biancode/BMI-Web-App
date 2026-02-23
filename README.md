# BMI-Web-App
Lerneinheit LF10

## Fuer wen ist die App?

Die BMI-Web-App richtet sich an Nutzende, die ihren BMI berechnen und Messwerte uebersichtlich ansehen wollen.
Die Anwendung laeuft komplett im Browser.

## Schnellstart fuer Nutzende

1. Projekt lokal starten:

```bash
python3 -m http.server 8000
```

2. Im Browser oeffnen: `http://localhost:8000`
3. Im Menue zwischen `Dashboard`, `Forms` und `Tables` wechseln

Hinweis: Bitte nicht per `file://` oeffnen, da einige Inhalte per `fetch()` geladen werden.

## Was bietet die App?

- BMI-Berechnung mit Eingaben zu Alter, Datum, Gewicht und Groesse
- Automatische Speicherung der letzten Eingaben im Browser (`localStorage`)
- Tabellenansicht mit Filter und Sortierung von BMI-Eintraegen
- Dashboard als zentrale Startansicht mit Schnellueberblick

## Ansichten im Ueberblick

- [Dashboard](./docs/Dashboard.md)
- [Formular](./docs/Formular.md)
- [Tables](./docs/Tables.md)
- [Barchart](./docs/Barchart.md)
- [Linechart](./docs/Linechart.md)
- [Settings](./docs/Settings.md)

## Haeufige Probleme

- **Leere Seite oder Fehler beim Laden:** App ueber HTTP-Server starten (siehe Schnellstart).
- **Daten wirken veraltet:** Browserdaten/`localStorage` leeren oder in der App auf Zuruecksetzen gehen.
- **Darstellung seltsam:** Seite neu laden und auf aktuelle Browser-Version achten.

## Entwickler-Dokumentation

Alle Infos fuer Entwicklung, Standards, Tests und Qualitaet:

- [Contributing Guide](./CONTRIBUTING.md)
- [Technische Doku im docs-Ordner](./docs/)