var jsdom = require('jsdom');
var chai = require('chai');

var doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
var win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
	if(!(key in global)) {
		global[key] = window[key];
	}
});
