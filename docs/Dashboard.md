# Dashboard

## Zweck der View

Das Dashboard ist die Startansicht der App. Es bietet einen schnellen Ueberblick und ist der Einstiegspunkt in die Navigation zu weiteren Bereichen.

## Was die View aktuell bietet

- Titelbereich "Dashboard (page title)"
- Platzhalter fuer Chart- und Tabellenbereiche
- Seitenlayout fuer kleine und grosse Displays
- Direkte Menue-Navigation zu `Forms` und `Tables`

## Nutzerfluss

1. App starten und Dashboard laden
2. Im Menue die gewuenschte View waehlen
3. Zurueck auf Dashboard wechseln, um wieder den Ueberblick zu sehen

## Technischer Hinweis

Die View wird dynamisch in den Content-Bereich (`#view`) geladen. Das Routing erfolgt ueber den URL-Hash (`#dashboard`, `#forms`, `#tables`).
