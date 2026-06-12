class CheckinPage {
    visit() {
        cy.suppressCookieBanner();
        cy.visit('/en/check-in/online-check-in');
        cy.acceptCookies();
    }

    webCheckinLink() {
        return cy.contains('.btn-brochure a', 'Check-in online');
    }
}

export default new CheckinPage();
