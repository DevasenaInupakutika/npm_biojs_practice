/*
 * biojs-vis-proj
 * https://github.com/DevasenaInupakutika/biojs-vis-proj
 *
 * Copyright (c) 2014 Devasena Inupakutika
 * Licensed under the Apache 2 license.
 */

/**
@class biojsvisproj
 */

var parser = require("biojs-io-snipspector");
var vis = function(opts){
  var divEl = opts.el;
  var self = this; // save reference to itself (in callbacks this is different)
  parser.read("http://files.biojs.net/chromosomes/manny.dummy", function(result){
    console.log(result);
    var resText = document.createElement("div")
    resText.textContent = Object.keys(result).length + " chromosome(s) found.";
	opts.el.appendChild(resText)
  })
};
module.exports = vis;
vis({el: document.body})
