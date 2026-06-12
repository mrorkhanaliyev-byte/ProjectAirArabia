import homePage from '../../pages/HomePage';
import carHirePage from '../../pages/CarHirePage';
import { futureDate } from '../../support/utils';

describe('Car hire', () => {
    it('searches for a car hire in Azerbaijan', () => {
        homePage.visit();
        homePage.openCarHire();

        carHirePage.selectCountry('Azerbaijan');
        carHirePage.setPickup(futureDate(14), '07:00');
        carHirePage.setReturn(futureDate(20), '12:00');
        carHirePage.search();
    });
});
