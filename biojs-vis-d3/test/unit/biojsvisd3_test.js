/*
 * biojs-vis-d3
 * https://github.com/DevasenaInupakutika/biojs-vis-d3
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
var biojsvisd3 = require('../..');

describe('biojs-vis-d3 module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(biojsvisd3.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      biojsvisd3.hello('biojs').should.equal("hello biojs");
    });
  });
});
