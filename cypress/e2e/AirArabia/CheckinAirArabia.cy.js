import homePage from '../../pages/HomePage';

describe('Online check-in validation', () => {
    it('shows an error for a non-existent booking', () => {
        cy.fixture('checkinData').then((data) => {
            homePage.visit();
            homePage.openCheckin();

            cy.origin(
                'https://webcheckin.airarabia.com',
                { args: { data } },
                ({ data }) => {
                    cy.get("[ng-model='login.model.prams.pnr']").type(data.pnr);
                    cy.get("[ng-model='login.model.prams.airportcode']")
                        .clear()
                        .type(data.departureAirport);
                    cy.contains('button', 'Find booking').click();
                    cy.contains(data.expectedErrorCode).should('be.visible');
                }
            );
        });
    });
});
