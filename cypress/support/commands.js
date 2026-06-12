// Third-party scripts on airarabia.com throw errors unrelated to the tests
Cypress.on('uncaught:exception', () => {
    return false;
});

// Accepts the OneTrust cookie banner only if it is present
Cypress.Commands.add('acceptCookies', () => {
    cy.get('body').then(($body) => {
        if ($body.find('#onetrust-accept-btn-handler').length) {
            cy.get('#onetrust-accept-btn-handler').click();
        }
    });
});

Cypress.Commands.add('findByPlaceholder', (placeholderText) => {
    return cy.get(`[placeholder="${placeholderText}"]`);
});
