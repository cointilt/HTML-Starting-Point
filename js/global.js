/**
 * Global Javascript
*/

// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}


/**
 * jQuery Wrapper
 *
 * Allows the use of the dollar sign insted of jQuery when other
 * libraries or scripts are included and are using the dollar sign.
*/

(

	function( $, document, undefined )
	{
		// Start all javascript inside wrapper to allow $


		// Start on document ready

		$(document).ready(

			function()
			{
				// Start
			}

		);
	}

) ( jQuery, document );