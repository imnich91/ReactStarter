/* global window */

import Clipboard from 'clipboard';

const clipboard = new Clipboard( '.js-code-copy' );

// Success!
clipboard.on( 'success', ( event ) => {
  const btnText = event.trigger.textContent;
  event.trigger.textContent = 'Copied!';
  window.setTimeout(() => {
    event.trigger.textContent = btnText;
  }, 2000 );
  event.clearSelection();
});

// Oh noes!
clipboard.on( 'error', ( event ) => {
  const btnText = event.trigger.textContent;
  event.trigger.textContent = 'Press "⌘ + C" to copy';
  window.setTimeout(() => {
    event.trigger.textContent = btnText;
  }, 5000 );
});
