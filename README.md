# ProjectAirArabia

**🌐 Language / Dil:** [English](#english) · [Azərbaycanca](#azərbaycanca)

---

## English

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

---

## Azərbaycanca

[airarabia.com](https://www.airarabia.com) saytı üçün Page Object Model strukturu ilə yazılmış Cypress E2E (uçdan-uca) test avtomatlaşdırması.

> [Ziya860/ProjectAirArabia](https://github.com/Ziya860/ProjectAirArabia) layihəsinin təkmilləşdirilmiş forku — yenilənmiş Air Arabia saytı (Sitecore + Vue) üçün sıfırdan yenidən yazılıb.

### Testlərin əhatə dairəsi

| Test faylı | Ssenari |
|---|---|
| `AirArabiaHomePage.cy.js` | Ana səhifə booking widget-i ilə birlikdə yüklənir |
| `BookTicket.cy.js` | Gediş-qayıdış uçuş axtarışı (Bakı → Şarja) nəticə səhifəsinə yönləndirir |
| `CheckinAirArabia.cy.js` | Check-in səhifəsi onlayn check-in keçid linkini göstərir |
| `Claim.cy.js` | Footer-dəki "Customer claim" linki EC261 şikayət tətbiqinə aparır |
| `Login.cy.js` | Header-dəki giriş linki düzgündür və AirRewards giriş səhifəsi formanı göstərir |
| `Subscription.cy.js` | Xəbər bülleteni abunə forması validasiya xətası olmadan göndərilir |

### Layihənin strukturu

```
cypress/
├── e2e/AirArabia/     # Test ssenariləri (spec-lər)
├── pages/             # Page Object-lər (selektorlar + əməliyyatlar)
├── fixtures/          # Test datası (JSON)
└── support/
    ├── commands.js    # Xüsusi əmrlər (suppressCookieBanner, acceptCookies)
    ├── utils.js       # Köməkçilər (v-calendar üçün dinamik gələcək tarixlər)
    └── e2e.js
```

### Necə başlamalı

```bash
npm install
npm run open          # interaktiv rejim
npm test              # başsız (headless) rejimdə bütün testlər
npm run test:chrome   # Chrome-da başsız işə salma
npm run test:smoke    # yalnız ana səhifə smoke testi
```

Başsız işə salmadan sonra Mochawesome HTML hesabatı `cypress/reports/html/index.html` ünvanında yaranır.

### Orijinala nisbətən nə təkmilləşdirildi

- **Yeni Air Arabia saytı üçün yenidən yazıldı** — orijinal köhnə Drupal saytını hədəfləyirdi; yenilənmədən sonra bütün selektorlar işləmir idi
- **Page Object Model** — selektorlar və səhifə əməliyyatları spec-lərdən `cypress/pages/`-ə çıxarıldı
- **Fixtures** — test datası spec-lərdən JSON fayllarına köçürüldü
- **Dinamik tarixlər** — sabit yazılmış 2025 tarixləri hesablanan gələcək tarixlərlə əvəzləndi ki, testlər köhnəlməsin
- **Sabit gözləmələr yoxdur** — `cy.wait(N)` düzgün assertion və timeout-larla əvəzləndi
- **Cookie banneri deterministik idarə olunur** — OneTrust razılıq cookie-si hər ziyarətdən əvvəl qabaqcadan qoyulur
- **Assertion-lar əlavə edildi** — indi hər spec nəticəni yoxlayır
- **`baseUrl`** konfiqurasiya edildi, CI qeyri-sabitliyi üçün retries aktivləşdirildi
- **`cypress-xpath` silindi** — bütün selektorlar CSS / `cy.contains`-ə çevrildi
- **Məxfi məlumatlar silindi** — real giriş məlumatlarını ehtiva edən aidiyyəti olmayan kod silindi
- **Təmiz CI** — sadələşdirilmiş GitHub Actions workflow + hesabat artefaktının yüklənməsi

### Sayta xas qeydlər

- Booking widget **iki kalendar nümunəsi** render edir (desktop popover + gizli mobil popup) — eyni gün-xanası class-ları ilə; kliklər `:visible` ilə filtrlənməlidir.
- `webcheckin.airarabia.com` başsız brauzerləri bloklayan WAF ilə qorunur, ona görə check-in testi origin-lər arası keçmək əvəzinə airarabia.com-dakı keçid linkini yoxlayır.
- Orijinal layihədəki **Car hire** funksiyası yeni saytda artıq mövcud deyil, ona görə həmin spec silindi.
- Testlər canlı production saytında işləyir — bəzən qeyri-sabitlik gözləniləndir; `retries.runMode` 1-ə qoyulub.

### CI (Davamlı İnteqrasiya)

GitHub Actions `main` budağına hər push / PR-da bütün testləri işə salır və HTML hesabatı artefakt kimi yükləyir.
