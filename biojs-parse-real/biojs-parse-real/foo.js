var request = require("nets");

request('https://raw.githubusercontent.com/biojs/biojs-io-snipspector/master/test/test.file', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Prints the reponse body
  }
})
