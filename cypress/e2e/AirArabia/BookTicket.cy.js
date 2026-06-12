import homePage from '../../pages/HomePage';
import bookingPage from '../../pages/BookingPage';
import { futureDateIso } from '../../support/utils';

describe('Air Arabia flight search', () => {
    it('searches a round-trip flight and lands on the results page', () => {
        cy.fixture('bookingData').then((data) => {
            homePage.visit();

            bookingPage.selectRoundTrip();
            bookingPage.setOrigin(data.origin);
            bookingPage.setDestination(data.destination);
            bookingPage.pickDepartureDate(futureDateIso(data.departureInDays));
            bookingPage.pickReturnDate(futureDateIso(data.departureInDays + data.tripLengthDays));
            bookingPage.search();

            cy.location('pathname', { timeout: 90000 }).should('match', /booking\/select-flight/i);
        });
    });
});
