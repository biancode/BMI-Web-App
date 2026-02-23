# Formular

## Zweck der View

In dieser View geben Nutzende ihre Koerperdaten ein und erhalten direkt den berechneten BMI inklusive Kategorie.

## Was die View bietet

- Eingabefelder fuer:
  - Alter (1-120)
  - Datum
  - Gewicht in kg (1-500)
  - Groesse in cm (50-250)
- Button **BMI berechnen**
- Button **Clear/Reset**
- Ergebnisbereich mit BMI-Wert und Kategorie
- Fehlerbereich fuer ungueltige Eingaben

## Logik und Verhalten

- Eingaben werden vor der Berechnung validiert
- BMI wird nach Formel `Gewicht / (Groesse in m)^2` berechnet
- BMI-Kategorie wird ermittelt (Untergewicht, Normalgewicht, Uebergewicht, Adipositas)
- Daten werden in `localStorage` gespeichert und beim Laden wiederhergestellt

## Nutzerfluss

1. Daten eingeben
2. Auf **BMI berechnen** klicken
3. Ergebnis lesen
4. Optional mit **Clear/Reset** alles zuruecksetzen