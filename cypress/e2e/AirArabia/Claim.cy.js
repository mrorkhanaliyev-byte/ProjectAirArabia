import homePage from '../../pages/HomePage';

describe('Customer claim', () => {
    it('opens the EC261 claim form from the footer link', () => {
        homePage.visit();
        homePage.openCustomerClaim();

        cy.origin('https://claims.airarabia.com', () => {
            cy.url({ timeout: 30000 }).should('include', 'claims.airarabia.com');
        });
    });
});
