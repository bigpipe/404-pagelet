'use strict';

//
// Default 404, not found Pagelet.
//
require('pagelet').extend({
  path: '/404',
  statusCode: 404,
  view: '404.html',
  pagelets: {
    diagnostics: require('diagnostics-pagelet')
  }
}).on(module);