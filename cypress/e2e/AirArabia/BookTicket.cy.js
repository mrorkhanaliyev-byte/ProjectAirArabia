import homePage from '../../pages/HomePage';
import bookingPage from '../../pages/BookingPage';
import { futureDate } from '../../support/utils';

describe('Air Arabia flight search', () => {
    it('searches a round-trip flight and lands on the results page', () => {
        cy.fixture('bookingData').then((data) => {
            homePage.visit();
            homePage.openBookingPanel();

            bookingPage.setOrigin(data.origin);
            bookingPage.selectRoundTrip();
            bookingPage.setDestination(data.destination);
            bookingPage.setDates(
                futureDate(data.departureInDays),
                futureDate(data.departureInDays + data.tripLengthDays)
            );
            bookingPage.selectCurrency(data.currency);
            bookingPage.search();

            cy.url({ timeout: 30000 }).should('not.eq', 'https://www.airarabia.com/en');
        });
    });
});
