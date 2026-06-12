import homePage from '../../pages/HomePage';

describe('Login', () => {
    it('navigates to the sign-in page', () => {
        homePage.visit();
        homePage.openLoginMenu();

        cy.get("a[href*='reservationsma.airarabia.com'][href*='signIn']").click();

        cy.origin('https://reservationsma.airarabia.com', () => {
            cy.url().should('include', 'signIn');
        });
    });
});
