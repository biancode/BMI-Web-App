# Settings

## Übersicht
Das Settings-Feature ermöglicht es Benutzern, ihre persönlichen Einstellungen zu konfigurieren. Alle Einstellungen werden persistent im Browser-localStorage gespeichert.

The Settings view stores basic user preferences in browser `localStorage`.

## What This View Provides

### Beschreibung
Verwaltet benutzerspezifische Einstellungen wie das Geschlecht oder das Datumsformat. Nach jeder Änderung werden die Daten automatisch im localStorage gespeichert und bleiben auch nach einem Neustart der Anwendung erhalten.

## Data Model

### `userSettings`

```json
{
  "gender": "none" | "male" | "female",
  "dateFormat": "YYYY-MM-DD" / "YYYY-MM-DD HH:mm"
}
```

### `graphType`

#### Initialisierung
```javascript
// Standard-Einstellungen
let settings = {
    gender: 'none',
    dateFormat: 'YYYY-MM-DD'
};
```

- `bar`
- `line`

## User Flow

1. Click **Einstellungen** to open the dialog
2. Choose a gender value
3. Close the dialog
4. Re-open the app and confirm the setting is still selected

// Bei Änderung der Einstellungen
function updateGender(newGender) {
    settings.gender = newGender;
    saveSettingsToStorage();
}

function updateDateFormat(newFormat) {
    settings.dateFormat = newFormat;
    saveSettingsToStorage();
}
```

1. Open `settings/graphType/graphTypeBtn.html`
2. Click the button to toggle between bar and line
3. Re-open and verify persisted button state

## Technical Note

Settings are loaded on `DOMContentLoaded` and updated when the selected value changes.  
Both settings and graph type use inline `onclick` handlers in the current HTML.