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

1. Open `formular.html` in browser
2. Fill all 4 input fields
3. Click "BMI berechnen"
4. Result is displayed and saved
5. On reload: Data is still there
6. "Clear/Reset" deletes all data


## 💾 LocalStorage

**Speicherort:** `localStorage['bmiData']`

Daten werden nach der Berechnung als JSON-String gespeichert:

```json
{
    "age": "25",
    "date": "2025-02-23",
    "weight": "75",
    "height": "180",
    "bmi": 23.1,
    "category": "Normalgewicht",
    "timestamp": "2025-02-23T14:30:45.123Z"
}
```

### Daten extrahieren
```javascript
// Einfaches Auslesen
const data = JSON.parse(localStorage.getItem('bmiData'));
console.log(data.bmi, data.category);

// Mit Null-Check
if (localStorage.getItem('bmiData')) {
    const data = JSON.parse(localStorage.getItem('bmiData'));
    console.log('Gespeicherte Daten:', data);
}
```

### Daten löschen
```javascript
localStorage.removeItem('bmiData');
```