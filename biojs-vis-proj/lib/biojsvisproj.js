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
var _ = require("underscore");

var vis = function(opts){
  var divEl = opts.el;
  var self = this; // save reference to itself (in callbacks this is different)
  parser.read("http://files.biojs.net/chromosomes/manny", function(result){

    for(var i=0; i < result.length; i++) {    
      var chr = document.createElement("div");
      
      // count the elements in this chromosome
      var total = _.reduce(result[i], function(memo,el,key){
        if(key != "name")
           return memo + el
        else return memo
      });
  
      // header
	  var header = document.createElement("div");
      header.textContent = "chr "+ result[i].name;
      chr.appendChild(header);

      // create statistics for a single chromosome
      for(var key in result[i]){
          if(key == "name") continue
          var percentage = result[i][key] / total;
          if(percentage > 0.01){
            
            // format the name of the property
            var desc = document.createElement("span");
            desc.textContent = key;
            desc.style.width = "50px";
            desc.style.paddingLeft = "5px";
            desc.style.display = "inline-block";
            
            // show the value as barchart
            var canvasChild = document.createElement("canvas");
            drawBar(canvasChild, percentage);
                    
            // group both values in one row
            var row = document.createElement("div");
            row.appendChild(desc);
            row.appendChild(canvasChild);
            
            // dummy evts
            row.addEventListener("mouseover",mouseover,false);
            row.addEventListener("mouseout",mouseout,false);
            
            chr.appendChild(row);
          }
      }
      divEl.appendChild(chr);
    }
    
    function drawBar(el,percentage){
   	   el.width = 100
	   el.height = 10
       var ctx = el.getContext("2d");
       ctx.fillRect(0,0,percentage * 100,10);
    }
    
    function mouseover(evt){
      var el = this.childNodes[1];
      el.style.paddingLeft = "10px";
    }
    
     function mouseout(evt){
      var el = this.childNodes[1];
      el.style.paddingLeft = "0px";
    }
    
  })
};