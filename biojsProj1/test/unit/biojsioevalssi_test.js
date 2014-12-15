/*
 * biojs-io-evalssi
 * https://github.com/DevasenaInupakutika/biojs-io-evalssi
 *
 * Copyright (c) 2014 Devasena Inupakutika
 * Licensed under the Apache 2 license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var biojsioevalssi = require('../..');

describe('biojs-io-evalssi module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(biojsioevalssi.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      biojsioevalssi.hello('biojs').should.equal("hello biojs");
    });
  });
});
