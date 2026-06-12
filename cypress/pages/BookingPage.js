class BookingPage {
    selectRoundTrip() {
        cy.get('#journey_type_rt').check({ force: true });
    }

    setOrigin(airportCode) {
        cy.get('input[name="flying-from"]').first().click().type(airportCode);
        cy.get('.airport-list .airportoption', { timeout: 10000 })
            .contains(airportCode)
            .click({ force: true });
    }

    setDestination(cityName) {
        cy.get('input[name="flying-to"]', { timeout: 10000 })
            .should('be.visible')
            .click({ force: true })
            .type(cityName);
        cy.contains('.airport-list .airportoption', cityName).click({ force: true });
    }

    setDates(departureDate, returnDate) {
        cy.get('input[name="deptdate"]').invoke('val', departureDate).trigger('change');
        cy.get('input[name="rtndate"]').invoke('val', returnDate).trigger('change');
    }

    selectCurrency(currency) {
        cy.get(`select[name="search_currency"] option[value="${currency}"]`).should('exist');
        cy.get('select[name="search_currency"]').select(currency, { force: true });
    }

    search() {
        cy.get('.search-button-contain > .btn-filled-red').click();
    }
}

export default new BookingPage();
