# Contributing

## Project Rules

### Naming Rules

- Keep file names in lowercase
- Use underscores for multi-word names where appropriate (for example `line_graph.js`)

### Directory Structure

- Put all CSS(Cascading Style Sheet) into the `src/css` Folder the naming should be `css/feature_name.css`
- Put all Javascript files into the `src/js` Folder the naming should be `js/feature_name.js`
- All HTML Files are put directly into the `src` Folder named as `src/feature_name.html`
- Feature code belongs in `src/`
- Documentation belongs in `docs/`
- Shared standards and quality rules are defined in this file

## Technologies

### CSS

- Bootstrap: <https://getbootstrap.com/>

### JavaScript

- Chart.js: <https://www.chartjs.org/>

## Tests and Quality

### Prerequisites

```bash
npm install
```

### Linting

```bash
npm run lint
npm run lint:fix
```

### End-to-End Tests (Playwright)

```bash
# Install browsers once
npm run test:e2e:install-browsers

# Run all configured browser projects
npm run test:e2e

# Run a single browser project
npm run test:e2e:chrome
npm run test:e2e:edge
npm run test:e2e:firefox
```

### Current Test Focus

- Dashboard view
- Menu navigation
- Smoke tests for Dashboard, Forms, and Tables
- Execution in Chrome, Edge, and Firefox
