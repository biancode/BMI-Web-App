# Barchart

## Zweck der View

Die Barchart-Ansicht visualisiert den BMI-Verlauf als Balkendiagramm.

## Was die View bietet

- Darstellung von BMI-Werten ueber Zeit
- Farbliche Trennung nach BMI-Bereich (z. B. normal, uebergewichtig)
- Speicherung der Historie im Browser (`localStorage`)

## Datenquelle

- Aktuell basiert die Ansicht auf lokal gespeicherten Daten (`bmiHistory`)
- Die Koerpergroesse ist derzeit als fester Wert im Code hinterlegt

## Nutzerfluss

1. Gewicht eingeben
2. BMI-Eintrag erzeugen
3. Neuen Balken im Diagramm sehen
4. Beim Neuladen bleiben Daten erhalten