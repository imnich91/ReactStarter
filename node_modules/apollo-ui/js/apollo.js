/*!
 * Apollo JS v1.3.3
 */

/* global window, document */

const $ = window.jQuery;
const offCanvas = require( './off-canvas' );

//
// Bootstrap jQuery Plugins
//

require( '../node_modules/bootstrap/dist/js/bootstrap' );


//
// Custom scripts
//


$( document ).ready(() => {
  offCanvas.init();
});
