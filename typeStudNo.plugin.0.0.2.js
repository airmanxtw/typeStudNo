// 一般版

(function () {
  function typer(params) {
    var timeId = null;

    var defaultParams = {
      time: 2000,
      input: function (value) {},
    };

    var newParams = Object.assign(defaultParams, params);

    this.addEventListener("input", function (event) {
      if (!!timeId) {
        clearTimeout(timeId);
        timeId = null;
      }
      timeId = setTimeout(function () {
        newParams.input(event.target.value);
        timdId = null;
      }, newParams.time);
    });
  }

  window.typer = typer;
})();


