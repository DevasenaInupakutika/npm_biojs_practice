/*
 * biojs-test-proj
 * https://github.com/DevasenaInupakutika/biojs-test-proj
 *
 * Copyright (c) 2014 Devasena Inupakutika
 * Licensed under the Apache 2 license.
 */

/**
@class biojstestproj
 */


var  biojstestproj;
module.exports = biojstestproj = function(opts){
  this.el = opts.el;
  this.el.textContent = biojstestproj.hello(opts.text);
};

/**
 * Private Methods
 */

/*
 * Public Methods
 */

/**
 * Method responsible to say Hello
 *
 * @example
 *
 *     biojstestproj.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojstestproj.hello = function (name) {

  return 'hello ' + name;
};

