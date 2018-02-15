var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;

var app = require('../server');
var request = require('supertest')(app);
var ejs = require('ejs');

describe('Server tests:', () => {
  describe('Frontend routes:', () => {
    it('GET \'/\' can return index.ejs template', (done) => {
      var spy = sinon.spy(ejs, '__express');

      request.get('/')
      .expect(200)
      .expect('Content-Type', /html/)
      .end((err, res) => {
        expect(spy.calledWithMatch(/\/index\.ejs$/)).to.be.true;
        spy.restore();
        done(err);
      });
    });
  });
});
