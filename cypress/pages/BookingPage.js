class BookingPage {
    selectRoundTrip() {
        cy.get('#journey_type_rt').check({ force: true });
    }

    setOrigin(airport) {
        cy.get('.from-field input[name="flying-from"]').click({ force: true }).type(airport);
        cy.get('.from-field').contains('li', airport, { timeout: 10000 }).click({ force: true });
    }

    setDestination(airport) {
        cy.get('.to-field input[name="flying-to"]').click({ force: true }).type(airport);
        cy.get('.to-field').contains('li', airport, { timeout: 10000 }).click({ force: true });
    }

    // isoDate format: YYYY-MM-DD — matches v-calendar's day cell class (.id-YYYY-MM-DD).
    // The page renders a second, hidden calendar for mobile, so clicks must target
    // the visible day cell only. The calendar may auto-open after destination
    // selection — clicking the input again would close it, so open it only if needed.
    pickDepartureDate(isoDate) {
        cy.get('body').then(($body) => {
            if (!$body.find('.vc-day .vc-day-content:visible').length) {
                cy.get('input[name="departure-date"]').click({ force: true });
            }
        });
        cy.get(`.vc-day.id-${isoDate} .vc-day-content:visible`, { timeout: 10000 }).first().click();
    }

    pickReturnDate(isoDate) {
        cy.get(`.vc-day.id-${isoDate} .vc-day-content:visible`, { timeout: 10000 }).first().click();
        cy.get('input[name="departure-date"]').should('not.have.value', '');
        cy.get('input[name="return-date"]').should('not.have.value', '');
    }

    search() {
        cy.get('.fly-search-btn .button-submit').click({ force: true });
    }
}

export default new BookingPage();
