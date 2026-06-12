import homePage from '../../pages/HomePage';

describe('Air Arabia home page', () => {
    it('loads the homepage with the booking widget', () => {
        homePage.visit();

        cy.url().should('include', 'airarabia.com');
        cy.title().should('not.be.empty');
        cy.get('input[name="flying-from"]').first().should('exist');
    });
});
