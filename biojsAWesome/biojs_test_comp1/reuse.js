var reuse = require("./index");

console.log(reuse(3,5));

// Resusing BioJS's Newick module

var parser = require("biojs-io-newick").parse_nwk;
var newick = "(homo_sapiens:1,(mus_musculus:2,danio_rerio:17):4);"
var parsed_data = parser(newick);
console.log(parsed_data);
