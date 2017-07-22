window._ = require('lodash');
window.$ = window.jQuery = require('jquery');

var hljs = require('./../../static/js/highlight/highlight.pack.js');

$(document).ready(function () {
    hljs.initHighlighting();
});
