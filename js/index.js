var coders = {
  lima: null,
  chile: null,
  mexico: null
};
$(document).ready(function () {
  getJSON('lima.json', function (err, json) {
    if (err) { return alert(err.message);}
    coders.lima = json;
    console.log(coders.lima[0]);
  });
});
