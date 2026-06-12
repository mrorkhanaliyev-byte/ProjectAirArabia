# ProjectAirArabia

Cypress E2E test automation for [airarabia.com](https://www.airarabia.com), built with the Page Object Model pattern.

> Improved fork of [Ziya860/ProjectAirArabia](https://github.com/Ziya860/ProjectAirArabia).

## Test coverage

| Spec | Scenario |
|---|---|
| `AirArabiaHomePage.cy.js` | Homepage loads with the booking widget |
| `BookTicket.cy.js` | Round-trip flight search (GYD → Phuket, USD) |
| `CarHire.cy.js` | Car hire search in Azerbaijan |
| `CheckinAirArabia.cy.js` | Online check-in rejects a non-existent booking |
| `Claim.cy.js` | Customer claim form rejects an unknown booking reference |
| `Login.cy.js` | Navigation to the sign-in page |
| `Subscription.cy.js` | Newsletter subscription form |

## Project structure

```
cypress/
├── e2e/AirArabia/     # Test specs
├── pages/             # Page Objects (selectors + actions)
├── fixtures/          # Test data (JSON)
└── support/
    ├── commands.js    # Custom commands (acceptCookies, findByPlaceholder)
    ├── utils.js       # Helpers (dynamic future dates)
    └── e2e.js
```

## Getting started

```bash
npm install
npm run open          # interactive mode
npm test              # headless run, all specs
npm run test:chrome   # headless run in Chrome
npm run test:smoke    # homepage smoke test only
```

The Mochawesome HTML report is generated at `cypress/reports/html/index.html` after a headless run.

## What was improved over the original

- **Page Object Model** — selectors and page actions extracted from specs into `cypress/pages/`
- **Fixtures** — test data moved out of specs into JSON files
- **Dynamic dates** — hardcoded 2025 dates replaced with computed future dates, so tests don't expire
- **No hardcoded waits** — `cy.wait(N)` replaced with proper assertions and timeouts
- **Assertions added** — every spec now verifies an outcome
- **`baseUrl`** configured, retries enabled for CI flakiness
- **Removed `cypress-xpath`** — all selectors converted to CSS / `cy.contains`
- **Secrets removed** — unrelated code containing real credentials was deleted
- **Clean CI** — simplified GitHub Actions workflow with report artifact upload

## CI

GitHub Actions runs all specs on every push / PR to `main` and uploads the HTML report as an artifact. Note: tests run against the live production site, so occasional flakiness is expected.
