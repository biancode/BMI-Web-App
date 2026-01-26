// Saved Settings
let settings = {
    language: 'german',
    theme: 'dark',
    gender: 'none'
};

// Load Settings from local storage
function loadSettingsFromStorage() {
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
        settings = JSON.parse(savedSettings);
    }
}

function toggleDialog() {
    const dialog = document.getElementById("settingsDialog");
    
    if (dialog.open) {
        saveSettings();
        dialog.close();
    } else {
        dialog.showModal();
    }
}

function saveSettings() {
    settings.language = document.getElementById('language').value;
    settings.theme = document.getElementById('theme').value;
    settings.gender = document.getElementById('gender').value;
    
    // Save settings in local storage
    localStorage.setItem('userSettings', JSON.stringify(settings));
    console.log('Einstellungen im localStorage gespeichert:', settings);
}

function loadSettings() {
    document.getElementById('language').value = settings.language;
    document.getElementById('theme').value = settings.theme;
    document.getElementById('gender').value = settings.gender;
}

// Loads Settings into Dialog
document.addEventListener('DOMContentLoaded', () => {
    loadSettingsFromStorage();
    loadSettings();
    
    document.getElementById('language').addEventListener('change', saveSettings);
    document.getElementById('theme').addEventListener('change', saveSettings);
    document.getElementById('gender').addEventListener('change', saveSettings);
});