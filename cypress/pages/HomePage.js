class HomePage {
    visit() {
        cy.suppressCookieBanner();
        cy.visit('/en');
        cy.acceptCookies();
    }

    loginLink() {
        return cy.get('.pd001-header-login a');
    }

    openCustomerClaim() {
        cy.contains('a', 'Customer claim').invoke('removeAttr', 'target').click({ force: true });
        cy.contains('a', 'Click here').invoke('removeAttr', 'target').click();
    }
}

export default new HomePage();
