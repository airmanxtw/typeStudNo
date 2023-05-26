/// <reference path="jquery-3.7.0.min.js" />
(function ($) {
  //prototype extend
  $.fn.extend({
    typer: function (params) {
      var timeId = null;

      var defaultParams = {
        time: 2000,
        input: function (value) {},
      };

      var newParams = $.extend(defaultParams, params);

      $(this).on("input", function (event) {
        if (!!timeId) {
          clearTimeout(timeId);
          timeId = null;
        }
        timeId = setTimeout(function () {
          newParams.input(event.target.value);
          timdId = null;
        }, newParams.time);
      });
    },
  });
})(jQuery);
