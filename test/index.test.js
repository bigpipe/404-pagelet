describe('404 Pagelet', function () {
  'use strict';

  var Pagelet = require('pagelet')
    , fourofour = require('../')
    , assume = require('assume')
    , pagelet, P;

  beforeEach(function () {
    P = fourofour.extend({
      view: 'fixtures/view.html'
    });

    pagelet = new P(new Pagelet);
  });

  afterEach(function each() {
    pagelet = null;
  });

  it('has statusCode 404', function () {
    assume(pagelet.statusCode).to.be.an('number');
    assume(pagelet.statusCode).to.equal(404);
  });
});
