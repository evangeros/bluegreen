/**
 * Created by mike on 15/08/15.
 * Test edit by Stefano 16/05/17
 */

var server = require("./server.js");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;

server.start(router.route, handle);
