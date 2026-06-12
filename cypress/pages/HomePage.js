class HomePage {
    visit() {
        cy.visit('/en');
        cy.acceptCookies();
    }

    openBookingPanel() {
        cy.get('.swiper-slide-active > .banner-overlay > .row > .panel_content > .panel_inner > .show-for-medium').click();
    }

    openLoginMenu() {
        cy.contains('span', 'Login').click();
        cy.get('#ui-accordion-3-header-0').click();
    }

    openCheckin() {
        cy.get('.menu-514 > .attached-block').should('be.visible').click();
    }

    openCarHire() {
        cy.get('#ui-id-4').click();
    }

    openCustomerClaim() {
        cy.contains('a', 'Customer Claim').click();
        cy.contains('a', 'Click here').click();
    }
}

export default new HomePage();
