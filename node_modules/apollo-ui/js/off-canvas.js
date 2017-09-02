/* global window */

const $ = window.jQuery;
const STRINGS = require( './util/strings' ).strings;
const CLASSES = require( './util/strings' ).classes;
const SELECTORS = require( './util/strings' ).selectors;

/**
 * Binds a click handler to the given jQuery object
 * @param  { Object }   $el   jQuery object which represents the element(s)
 *                            that should be bound to toggle the off-canvas menu.
 */
function bindOffCanvasToggle( $el ) {
  $el.on( 'click', ( event ) => {
    const targetString = event.target.attributes.getNamedItem( `data-${ STRINGS.target }` ).value;
    const $target = $( targetString );

    $target.toggleClass( CLASSES.open );

    return false;
  });
}

module.exports.init = () => {
  const $offCanvasToggle = $( SELECTORS.offCanvasToggle );

  bindOffCanvasToggle( $offCanvasToggle );
};
