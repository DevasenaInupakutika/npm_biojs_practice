/*
 * biojs-parse-real
 * https://github.com/DevasenaInupakutika/biojs-parse-real
 *
 * Copyright (c) 2014 Devasena Inupakutika
 * Licensed under the Apache 2 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// this is your global div instance (see index.html)
var yourDiv = document.getElementById('mocha');

// requires your main app (specified in index.js)
var biojsparsereal = require('../..');

describe('biojs-parse-real module', function(){
  describe('#init()', function(){
    it('should fill the textBox', function(){
      var opts = {el: yourDiv, text: 'biojs'};
      var instance = new biojsparsereal(opts);
      assert.equal(yourDiv.textContent,"hello biojs");
    });
  });
});
