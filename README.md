# ProjectAirArabia

Cypress E2E test automation for [airarabia.com](https://www.airarabia.com), built with the Page Object Model pattern.

> Improved fork of [Ziya860/ProjectAirArabia](https://github.com/Ziya860/ProjectAirArabia), rewritten for the redesigned Air Arabia website (Sitecore + Vue).

## Test coverage

| Spec | Scenario |
|---|---|
| `AirArabiaHomePage.cy.js` | Homepage loads with the booking widget |
| `BookTicket.cy.js` | Round-trip flight search (Baku → Sharjah) lands on the select-flight page |
| `CheckinAirArabia.cy.js` | Check-in page exposes the web check-in entry link |
| `Claim.cy.js` | Footer "Customer claim" link reaches the EC261 claim app |
| `Login.cy.js` | Header login link is correct and the AirRewards login page shows the form |
| `Subscription.cy.js` | Newsletter subscription form submits without validation errors |

## Project structure

```
cypress/
├── e2e/AirArabia/     # Test specs
├── pages/             # Page Objects (selectors + actions)
├── fixtures/          # Test data (JSON)
└── support/
    ├── commands.js    # Custom commands (suppressCookieBanner, acceptCookies)
    ├── utils.js       # Helpers (dynamic future dates for the v-calendar widget)
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

- **Rewritten for the new Air Arabia site** — the original targeted the old Drupal site; every selector was dead after the redesign
- **Page Object Model** — selectors and page actions extracted from specs into `cypress/pages/`
- **Fixtures** — test data moved out of specs into JSON files
- **Dynamic dates** — hardcoded 2025 dates replaced with computed future dates, so tests don't expire
- **No hardcoded waits** — `cy.wait(N)` replaced with proper assertions and timeouts
- **Cookie banner handled deterministically** — OneTrust consent cookie is pre-set before each visit
- **Assertions added** — every spec now verifies an outcome
- **`baseUrl`** configured, retries enabled for CI flakiness
- **Removed `cypress-xpath`** — all selectors converted to CSS / `cy.contains`
- **Secrets removed** — unrelated code containing real credentials was deleted
- **Clean CI** — simplified GitHub Actions workflow with report artifact upload

## Site-specific notes

- The booking widget renders **two calendar instances** (desktop popover + hidden mobile popup) with identical day-cell classes; clicks must be filtered to `:visible`.
- `webcheckin.airarabia.com` is protected by a WAF that blocks headless browsers, so the check-in spec verifies the entry link on airarabia.com instead of crossing origins.
- The **Car hire** feature from the original project no longer exists on the new site, so its spec was removed.
- Tests run against the live production site — occasional flakiness is expected; `retries.runMode` is set to 1.

## CI

GitHub Actions runs all specs on every push / PR to `main` and uploads the HTML report as an artifact.
