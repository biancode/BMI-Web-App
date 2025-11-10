BMI Web App — Plan

1) Ziel & Scope

Eine kleine, modulare Web‑App zum Erfassen von Körperdaten (Gewicht & Größe), zur BMI‑Berechnung, Zielverfolgung und Visualisierung der Entwicklung

Out‑of‑scope v1: Benutzerverwaltung/Accounts, Synchronisation über Geräte, medizinische Beratung.

2) Kernfunktionen

Formular (Eingabe)
    Felder: Datum (default heute), Gewicht (kg), Größe (cm) [optional fix pro Nutzer], Notiz (optional).

    BMI direkt berechnet und angezeigt

    Validierung: Pflichtfelder, Bereichsprüfung (z. B. 30–300 kg, 120–230 cm), Nummernformat, leere Notizen erlaubt

    UX: Sofort‑Feedback, Fehlerhinweise, Tastatur‑/Enter‑Submit, Loader/Disable während Save

Ziele (Tabellen‑Ansicht)

    Anlegen eines Zielgewichts mit Stichtag

    Status/Progress (Gewicht, verbleibende Tage, Ampel‑Indikator)

    CRUD: Ziel erstellen/ändern/löschen, jeweils mit Bestätigung

Graphen (Kurven)

    Liniengraph Gewicht über Zeit; optional zweite Achse mit BMI‑Kurve.

    Aggregationen: letzte 7/30/90 Tage; Durchschnitt, Min/Max, Trendlinie.


Dashboard

    Kacheln: Aktuelles Gewicht, aktueller BMI + Kategorie (Untergewicht/Normal/Über/Adipositas), Veränderung nach 7 Tagen

---------------------------------------------------------------------------------------------------------------------------------------------

Plan.md — Tabellen-Feature für BMI-App
Ziel

Eine übersichtliche Tabelle soll dem Nutzer seine bisherigen BMI-Berechnungen anzeigen.
Jede Zeile stellt eine Messung dar, inklusive Datum, Gewicht, Größe, berechnetem BMI und Bewertung (z. B. Normalgewicht, Übergewicht).

Features

Datentabelle: Anzeige aller gespeicherten BMI-Einträge

Sortierung: Nach Datum oder BMI auf- und absteigend sortieren

Filter: Optional Filter nach Zeitraum (z. B. letzte Woche, letzter Monat)

Löschen: Einzelne oder mehrere Einträge entfernen


Tabellenstruktur
Spalte	Beschreibung	Typ / Format
Datum	Zeitpunkt der Messung	Date (dd.mm.yyyy)
Gewicht (kg)	Eingegebenes Gewicht	Number (z. B. 72.5)
Größe (cm)	Eingegebene Körpergröße	Number (z. B. 178)
BMI	Berechneter Wert (kg/m²)	Number (1 Dezimalstelle)
Bewertung	Textliche Kategorie (z. B. „Normalgewicht“)	String
