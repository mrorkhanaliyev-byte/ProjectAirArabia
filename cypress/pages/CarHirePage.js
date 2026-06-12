class CarHirePage {
    selectCountry(country) {
        cy.get('#carhirecountries', { timeout: 15000 }).should('be.visible').select(country);
    }

    setPickup(date, time) {
        cy.get('#pickupDate').click().clear().type(date, { force: true });
        cy.get('#pickupTime').select(time);
    }

    setReturn(date, time) {
        cy.get('#returnDate').clear().type(date);
        cy.get('#returnTime').select(time);
    }

    search() {
        cy.get("input[value='Search car hire']").click();
    }
}

export default new CarHirePage();
