// Saved Settings
let graphType = "line";

// Load Settings from local storage
function loadGraphTypeFromStorage() {
  try {
    const savedGraphType = localStorage.getItem("graphType");
    if (savedGraphType) {
      graphType = JSON.parse(savedGraphType);
    } else {
      // Persist default graph type immediately.
      localStorage.setItem("graphType", JSON.stringify(graphType));
    }
  } catch (e) {
    console.log("Fehler beim Laden des Graphtypens aus dem LocalStorage:\n" + e);
    showErrorToast("Fehler beim Laden des Graphtypens aus dem LocalStorage.");

    try {
      localStorage.setItem("graphType", JSON.stringify(graphType));
    } catch (storageError) {
      console.log("Fehler beim Setzen des Standard-Graphtypens im LocalStorage:\n" + storageError);
    }
  }
}

function toggleGraphType() {
  if (graphType === "bar") {
    graphType = "line";
  } else {
    graphType = "bar";
  }

  updateButtonText();
  saveGraphType();
}

function saveGraphType() {
  try {
    // Save GraphType in local storage
    localStorage.setItem("graphType", JSON.stringify(graphType));
  } catch (e) {
    console.log("Fehler beim Speichern des Graphtypens im LocalStorage:\n" + e);
    showErrorToast("Fehler beim Speichern des Graphtypens im LocalStorage.");
  }
}

function updateButtonText() {
  const button = document.getElementById("graphTypeBtn");
  const status = document.getElementById("graphTypeStatus");
  if (!button) return;

  if (graphType === "bar") {
    button.textContent = "Balkendiagramm";
    button.setAttribute("aria-label", "Graphtyp: Balkendiagramm");
    if (status) {
      status.textContent = "Graphtyp auf Balkendiagramm gestellt.";
    }
  } else {
    button.textContent = "Liniendiagramm";
    button.setAttribute("aria-label", "Graphtyp: Liniendiagramm");
    if (status) {
      status.textContent = "Graphtyp auf Liniendiagramm gestellt.";
    }
  }

  if (status) {
    setTimeout(() => {
      status.textContent = "";
    }, 1500);
  }
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

// Persist default as soon as this script is loaded.
loadGraphTypeFromStorage();

// Loads Settings into Btn
document.addEventListener("DOMContentLoaded", () => {
  updateButtonText();
});
