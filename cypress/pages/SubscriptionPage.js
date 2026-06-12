class SubscriptionPage {
    fillForm({ title, name, email, country, language }) {
        cy.get('#edit-submitted-title').select(title).should('have.value', title);
        cy.get('#edit-submitted-your-name').type(name).should('have.value', name);
        cy.get('#edit-submitted-email-address').type(email).should('have.value', email);
        cy.get('#edit-submitted-country-and-language-country')
            .select(country)
            .should('have.value', country);
        cy.get('#edit-submitted-country-and-language-language')
            .select(language)
            .should('have.value', language);
    }

    submit() {
        cy.get("input[value='Subscribe']").click();
    }
}

export default new SubscriptionPage();
