'use strict';

const chai = require('chai');
const chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
const expect = chai.expect;
const request = chai.request;
const mongoose = require('mongoose');
const dbPort = process.env.MONGOLAB_URI;
let testToken = '';

process.env.MONGOLAB_URI = 'mongodb://localhost/test_db';
require('../server.js');

describe('unit tests for CRUD bottle routes', () => {
  before((done) => {
    request('localhost:3000')
    .post('/auth/signup')
    .send({username: 'user', password: 'password'})
    .end((err, user) => {
      testToken = user.body.token;
      if (err) console.log('error message');
      done();
    });
  });
  after((done) => {
    process.env.MONGOLAB_URI = dbPort;
    mongoose.connection.db.dropDatabase(() => {
      done();
    });
  });
  it('should get a list of bottles', (done) => {
    request('localhost:3000')
      .get('/bottle')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(200);
        expect(Array.isArray(res.body)).to.be.true;
        done();
      });
  });
  it('Should create a bottle', (done) => {
    request('localhost:3000')
    .post('/bottle')
    .set({token: testToken})
    .send({name: 'test bottle'})
    .end((err, res) => {
      expect(err).to.eql(null);
      expect(res).to.have.status(200);
      expect(res.body.name).to.eql('test bottle');
      done();
    });
  });

});
