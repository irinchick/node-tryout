var querystring = require("querystring");
var static = require("node-static");
var util = require("util");
var root = "";
var file = new(static.Server)(root, {
	cache: 600
});
function start(request, response, postData) {
	file.serve(request, response, function(error, result) {
		if (error) {
			console.error("Error serving %s - %s", request.url, error.message);
		} else {
			console.log("I'm here");
		}
    });
}

function upload(request, response, postData) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent: " + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;