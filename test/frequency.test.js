const app = require('../app');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('GET /frequency', () => {
    const expected = {
        unique: 2,
        average: 5,
        highest: 'a',
        'a': 6,
        'b': 4
    };

    it('should return an obj with keys', () => {
        return supertest(app)
            .get('/frequency')
            .query({ s: 'aaBBAAbbaa' })
            .expect(200)
            .expect('Content-Type', /json/)
            .then(res => {
                expect(res.body).to.include.all
                    .keys('unique', 'average', 'highest');
                expect(res.body).eql(expected);
            })
    })
})