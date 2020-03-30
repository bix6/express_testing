const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('GET /generate endpoint', () => {
    it('should generate an arary of 5', () => {
        return supertest(app)
            .get('/generate')
            .query({ n:5 })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf.at.least(1);
                // Below fails since order is random
                // expect(res.body).to.eql([1,2,3,4,5]); 
                // Below is a soft check to make sure n is present
                // expect(res.body).to.include(5);
                // Below is a soft check to make sure values are present
                // But doesn't check if extra values are present
                // expect(res.body).to.include.members([1,2,3,4,5]);
                // Have ensures that only values 1-5 are present
                expect(res.body).to.have.members([1,2,3,4,5]);
            });
    });
});