/*
* jQuery purgeFrame
* A jQuery plugin to clean up Iframes and make IE happy
*
* Copyright (c) March 2014 Tom Mooney
* licensed under the MIT license, http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {
    $.fn.purgeFrame = function () {
        var deferred = purge(this);

        return deferred;
    };

    function purge($frame) {
        var len = $frame.length
        var deferred = $.Deferred();
        $frame.one('load', function () {
            try
            {
                $(this.contentWindow).empty();

                len -= 1;
                if (len <= 0) {
                    $(this).remove();
                }

                $frame = null;
            }
            finally {
                deferred.resolve();
            }
        });

        //Set src to about:blank to so that contentWindow can be manipulated on cross-domain iframes
        $frame.attr('src', 'about:blank');

        if ($frame.length === 0) {
            deferred.resolve();
        }

        return deferred.promise();
    }
}(jQuery));