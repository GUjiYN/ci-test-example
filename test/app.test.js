const chai = require('chai');
const expect = chai.expect;
const add = require('../app');


describe('Add function', () => {
    it('should return 5 when adding 2 and 3', () => {
        expect(add(2, 3)).to.equal(5);
    });
});

