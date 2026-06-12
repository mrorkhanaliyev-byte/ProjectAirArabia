import homePage from '../../pages/HomePage';

describe('Customer claim', () => {
    it('rejects a claim with an unknown booking reference', () => {
        cy.fixture('claimData').then((data) => {
            homePage.visit();
            homePage.openCustomerClaim();

            cy.origin(
                'https://claims.airarabia.com',
                { args: { data } },
                ({ data }) => {
                    cy.get('#root\\.F_QbtCY', { timeout: 60000 }).type(data.bookingReference);
                    cy.get('#root\\.F_Q29r0').click().type(data.passengerName);
                    cy.get("input[id='root.F_eetzh']").click({ force: true });
                    cy.get("ul[role='listbox'] li").first().click();
                    cy.get('#root\\.F_ZQoEi').click().type('2026-12-22T10:00', { force: true });
                    cy.get("button[value='Next']").click();

                    cy.contains(data.expectedMessage, { timeout: 15000 }).should('be.visible');
                }
            );
        });
    });
});
