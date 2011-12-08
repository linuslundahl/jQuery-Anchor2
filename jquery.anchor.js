/**
 *
 * jQuery Anchor² (http://github.com/linuslundahl/jquery.anchor.js)
 * Version: 0.1
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

var $j = jQuery.noConflict();

(function ($) {
  $(function () {
    $("a.anchorLink").anchorAnimate();
  });

  $.fn.anchorAnimate = function(settings) {
    settings = $.extend({
      speed: 400,
      offset: 0,
      specOffset: {},
      showHash: false
    }, settings);

    return $(this).each(function (e){
      var $caller = $(this),
          ret = true;

      $caller.click(function (event) {
        var locationHref = window.location.href,
            elementHash = this.hash,
            $elementClick = $(elementHash),
            elementKey = elementHash.replace('#', ''),
            destination;

        ret = true;

        if (elementHash.length && $elementClick.length) {
          event.preventDefault();
          destination = $elementClick.offset().top - settings.offset;
          if (elementKey in settings.specOffset) {
            destination = destination + settings.specOffset[elementKey];
          }
          $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
            if (settings.showHash) {
              window.location.hash = elementHash;
            }
          });

          ret = false;
        }

        return ret;
      });
    });
  };

}($j));