import checkinPage from '../../pages/CheckinPage';

// webcheckin.airarabia.com sits behind a WAF that blocks headless browsers,
// so the test verifies the entry point on airarabia.com instead of crossing origins.
describe('Online check-in', () => {
    it('check-in page links to the web check-in application', () => {
        checkinPage.visit();

        checkinPage
            .webCheckinLink()
            .should('be.visible')
            .and('have.attr', 'href')
            .and('include', 'webcheckin.airarabia.com');
    });
});
