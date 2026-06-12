import homePage from '../../pages/HomePage';
import subscriptionPage from '../../pages/SubscriptionPage';

describe('Newsletter subscription', () => {
    it('fills and submits the subscription form', () => {
        cy.fixture('subscriptionData').then((data) => {
            homePage.visit();

            subscriptionPage.fillForm(data);
            subscriptionPage.submit();
            subscriptionPage.assertNoValidationErrors();
        });
    });
});
