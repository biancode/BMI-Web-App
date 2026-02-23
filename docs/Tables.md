# Tables

## Zweck der View

Die Tabellenansicht zeigt BMI-Messungen strukturiert an und ermoeglicht schnelles Filtern und Sortieren.

## Was die View bietet

- Tabelle mit:
  - Datum
  - Gewicht
  - Groesse
  - berechnetem BMI
  - BMI-Bewertung
- Filter:
  - Alle Eintraege
  - Letzte Woche
  - Letzter Monat
- Sortierung:
  - Datum auf/absteigend
  - BMI auf/absteigend
- Loesch-Funktion pro Eintrag

## Datenbasis

- Die Tabelle wird aktuell aus `src/data/mock.json` befuellt
- Beim Rendern wird BMI je Zeile aus Gewicht und Groesse berechnet

## Nutzerfluss

1. Tabelle oeffnen
2. Optional filtern und sortieren
3. Eintraege vergleichen oder loeschen
