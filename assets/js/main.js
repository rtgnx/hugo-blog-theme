window._ = require('lodash');
window.$ = window.jQuery = require('jquery');

require('./../../node_modules/bootstrap/dist/js/bootstrap.min.js');
var hljs = require('./../../static/js/highlight/highlight.pack.js');

$(document).ready(function () {
    extendSidebar(
        window.screen.availHeight
    );
    hljs.initHighlighting();


});
