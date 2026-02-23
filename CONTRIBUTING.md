# Contributing

## Projektregeln

### Naming Rules

- Dateinamen in lowercase halten
- Wo moeglich Unterstriche fuer mehrteilige Namen verwenden (z. B. `line_graph.js`)

### Directory Structure

- Feature-Code liegt in `src/`
- Dokumentation liegt in `docs/`
- Gemeinsame Standards und Qualitaetsregeln stehen in dieser Datei

## Technologien

### CSS

- Bootstrap: <https://getbootstrap.com/>

### JavaScript

- Chart.js: <https://www.chartjs.org/>

## Tests und Qualitaet

### Voraussetzungen

```bash
npm install
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### End-to-End-Tests (Playwright)

```bash
# Browser einmalig installieren
npm run test:e2e:install-browsers

# Alle konfigurierten Browser
npm run test:e2e

# Einzelne Browser
npm run test:e2e:chrome
npm run test:e2e:edge
npm run test:e2e:firefox
```

### Aktueller Testfokus

- Dashboard-View
- Menue-Navigation
- Smoke-Tests fuer Dashboard, Forms und Tables
- Ausfuehrung in Chrome, Edge und Firefox
