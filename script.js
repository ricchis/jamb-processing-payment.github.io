$("#submitButton").click(function () {
  createOverlay();
  setTimeout(function () {
    removeOverlay();
    console.log("waiting 3 seconds.");
  }, 3000);
});

var createOverlay = function () {
  var overlay = jQuery(overlayContent);
  overlay.appendTo(document.body);
};

var removeOverlay = function () {
  $("#overlay").remove();
};

var overlayContent = 
    `<div id="overlay">
<div class="spinner">
</div>
<h4 id="spinnerText">
Processing Payment...
</h4>
</div>`;