// Saved Settings
let settings = {
    gender: 'none',
    dateFormat: 'YYYY-MM-DD'
};

const STORAGE_KEY = 'userSettings';
const GRAPH_TYPE_KEY = 'graphType';
const GRAPH_TYPE_DEFAULT = 'line';

function ensureGraphTypeDefaultInStorage() {
    try {
        const savedGraphType = localStorage.getItem(GRAPH_TYPE_KEY);
        if (!savedGraphType) {
            localStorage.setItem(GRAPH_TYPE_KEY, JSON.stringify(GRAPH_TYPE_DEFAULT));
        }
    } catch (e) {
        console.log("Fehler beim Setzen des Standard-Graphtypens im LocalStorage:\n" + e);
    }
}

// Load Settings from local storage
function loadSettingsFromStorage() {
    try {
        const savedSettings = localStorage.getItem(STORAGE_KEY);
        if (savedSettings) {
            const parsedSettings = JSON.parse(savedSettings);
            settings = {
                ...settings,
                ...parsedSettings
            };
        } else {
            // Persist default settings immediately so other modules can rely on the key.
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        }
    } catch (e) {
        console.log("Fehler beim Laden der Einstellungen aus dem LocalStorage:\n" + e);
        showErrorToast("Fehler beim Laden der Einstellungen aus dem LocalStorage.");

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        } catch (storageError) {
            console.log("Fehler beim Setzen der Standard-Einstellungen im LocalStorage:\n" + storageError);
        }
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
    try {
        settings.gender = document.getElementById('gender').value;
        settings.dateFormat = document.getElementById('dateFormat').value;
        
        // Save settings in local storage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
        console.log('Einstellungen im localStorage gespeichert:', settings);

        const status = document.getElementById('settingsStatus');
        if (status) {
            status.textContent = 'Einstellungen gespeichert.';
            setTimeout(() => {
                status.textContent = '';
            }, 1500);
        }
    } catch (e) {
        console.log("Fehler beim Speichern der Einstellungen im LocalStorage:\n" + e);
        showErrorToast("Fehler beim Speichern der Einstellungen im LocalStorage.");
    }
}

function loadSettings() {
    document.getElementById('gender').value = settings.gender;
    document.getElementById('dateFormat').value = settings.dateFormat;
}

/* =========================================================
   Toast
========================================================= */

function showErrorToast(message) {
    const toastEl = document.getElementById("errorToast");
    const toastBody = document.getElementById("errorToastBody");

    if (!toastEl || !toastBody) return;

    toastBody.textContent = message;

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}

// Loads Settings into Dialog
document.addEventListener('DOMContentLoaded', () => {
    ensureGraphTypeDefaultInStorage();
    loadSettingsFromStorage();
    loadSettings();
    
    document.getElementById('gender').addEventListener('change', saveSettings);
    document.getElementById('dateFormat').addEventListener('change', saveSettings);
});