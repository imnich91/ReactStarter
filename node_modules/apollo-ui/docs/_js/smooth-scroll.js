/* global window */

import jump from 'jump.js';

const $ = window.jQuery;
const scrollTiming = 500;
const SELECTORS = {
  ANCHOR_TAGS: '.js-docs-smooth-scroll',
  SCROLL_AREA: 'html, body'
};

$(() => {
  $( SELECTORS.ANCHOR_TAGS ).on( 'click', ( event ) => {
    jump( event.target.hash, {
      duration: scrollTiming
    });
  });
});
