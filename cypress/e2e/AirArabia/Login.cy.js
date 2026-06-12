import homePage from '../../pages/HomePage';

describe('AirRewards login', () => {
    it('header has a login link and the login page shows the form', () => {
        homePage.visit();

        homePage.loginLink().should('have.attr', 'href').and('include', 'login');

        cy.visit('/en/airrewards/login');
        cy.url().should('include', 'airrewards/login');
        cy.get('input[type="password"]').should('exist');
    });
});
