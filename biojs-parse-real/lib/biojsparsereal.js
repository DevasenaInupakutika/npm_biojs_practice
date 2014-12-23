/*
 * biojs-parse-real
 * https://github.com/DevasenaInupakutika/biojs-parse-real
 *
 * Copyright (c) 2014 Devasena Inupakutika
 * Licensed under the Apache 2 license.
 */

/**
@class biojsparsereal
 */


var  biojsparsereal;
module.exports = biojsparsereal = function(opts){
  this.el = opts.el;
  this.el.textContent = biojsparsereal.hello(opts.text);
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
 *     biojsparsereal.hello('biojs');
 *
 * @method hello
 * @param {String} name Name of a person
 * @return {String} Returns hello name
 */


biojsparsereal.hello = function (name) {

  return 'hello ' + name;
};

