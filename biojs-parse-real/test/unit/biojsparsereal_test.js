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

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var biojsparsereal = require('../..');

describe('biojs-parse-real module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(biojsparsereal.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      biojsparsereal.hello('biojs').should.equal("hello biojs");
    });
  });
});
