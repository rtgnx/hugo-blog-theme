window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

require('./../../node_modules/bootstrap/dist/js/bootstrap.min.js'); 

function extendSidebar(minWidth) {
    if (window.screen.width > 768) {
        $('#sidebar').css('min-height', minWidth);
    }
}

$(document).ready(function () {
    extendSidebar(
        window.screen.availHeight
    );

});
