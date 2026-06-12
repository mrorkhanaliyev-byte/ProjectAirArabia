// Third-party scripts on airarabia.com throw errors unrelated to the tests
Cypress.on('uncaught:exception', () => {
    return false;
});

// Marks the OneTrust consent banner as already dismissed so it never renders.
// Must run before cy.visit().
Cypress.Commands.add('suppressCookieBanner', () => {
    cy.setCookie('OptanonAlertBoxClosed', new Date().toISOString());
});

// Fallback: accepts the cookie banner if it rendered anyway
Cypress.Commands.add('acceptCookies', () => {
    cy.get('body').then(($body) => {
        if ($body.find('#onetrust-accept-btn-handler:visible').length) {
            cy.get('#onetrust-accept-btn-handler').click();
        }
    });
});

Cypress.Commands.add('findByPlaceholder', (placeholderText) => {
    return cy.get(`[placeholder="${placeholderText}"]`);
});
