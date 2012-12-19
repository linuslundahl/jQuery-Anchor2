/**
 *
 * jQuery Anchor² (https://github.com/linuslundahl/jQuery-Anchor2)
 * Version: 0.2.1
 *
 * By Linus Lundahl (http://unwi.se/)
 *
 * Original script by Cedric Dugas (http://www.position-absolute.com)
 *
 * Never have an anchor jumping your content, slide it. Don't forget to put an id to your anchor!
 *
 * Terms of Use - jQuery Anchor²
 * under the MIT (http://www.opensource.org/licenses/mit-license.php) License.
 *
 */

(function ($) {
  'use strict';

  $(function () {
    $("a.anchorLink").anchorAnimate();
  });

  $.fn.anchorAnimate = function (settings) {
    settings = $.extend({
      speed: 400,
      offset: 0,
      elOffset: {},
      showHash: false
    }, settings);

    return $(this).on('click', function () {
      var $el = $(this.hash),
          key = this.hash.replace('#', ''),
          y;

      if (this.hash.length && $el.length) {
        y = $el.offset().top - settings.offset;
        if (key in settings.elOffset) {
          y = y + settings.elOffset[key];
        }
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: y }, settings.speed);

        return settings.showHash;
      }
    });

  };
}(jQuery.noConflict()));