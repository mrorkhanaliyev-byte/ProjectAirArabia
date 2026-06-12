class SubscriptionPage {
    fillForm({ email, country }) {
        // The Sitecore form re-renders shortly after page load; waiting for the
        // submit button to be visible absorbs that re-render before typing starts.
        cy.get('.newsletter-submit input[type="submit"]').first().scrollIntoView().should('be.visible');

        cy.get('.newsletter-email input[type="email"]').first().type(email);
        cy.get('.newsletter-email input[type="email"]').first().should('have.value', email);

        cy.get('.newsletter-country select').first().select(country);
        cy.get('.newsletter-country select').first().should('have.value', country);
    }

    submit() {
        cy.get('.newsletter-submit input[type="submit"]').first().click({ force: true });
    }

    assertNoValidationErrors() {
        cy.get('.field-validation-error').should('not.exist');
    }
}

export default new SubscriptionPage();
