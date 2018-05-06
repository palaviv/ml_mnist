// Canvas setup
var canvas0 = new fabric.Canvas('canvas-0');
canvas0.isDrawingMode = true;
canvas0.freeDrawingBrush.width = 20;
canvas0.freeDrawingBrush.color = "#000000";
canvas0.backgroundColor = "#ffffff";
canvas0.renderAll();


// Clear button callback
$("#clear-canvas0").click(function(){
  canvas0.clear();
  canvas0.backgroundColor = "#ffffff";
  canvas0.renderAll();
});

var canvas1 = new fabric.Canvas('canvas-1');
canvas1.isDrawingMode = true;
canvas1.freeDrawingBrush.width = 20;
canvas1.freeDrawingBrush.color = "#000000";
canvas1.backgroundColor = "#ffffff";
canvas1.renderAll();


// Clear button callback
$("#clear-canvas1").click(function(){
  canvas1.clear();
  canvas1.backgroundColor = "#ffffff";
  canvas1.renderAll();
});


// Predict button callback
$("#save").click(function(){

  // Change status indicator
  $("#status").removeClass().toggleClass("fa fa-spinner fa-spin");

  var group_name = $("#group-name").val();

  var fac = (1.) / 13.;

  // Get canvas contents as url
  var image_data0 = canvas0.toDataURLWithMultiplier('png', fac);
  var image_data1 = canvas1.toDataURLWithMultiplier('png', fac);

  var url = "group," + group_name + ",img0," + image_data0 + ",img1," + image_data1 + ",img2";

  // Post url to python script
  var jq = $.post('cgi-bin/save.py', url)
    .done(function (json) {
      if (json.result) {
        $("#status").removeClass().toggleClass("fa fa-check");
      } else {
         $("#status").removeClass().toggleClass("fa fa-exclamation-triangle");
         console.log('Script Error: ' + json.error)
      }
    })
    .fail(function (xhr, textStatus, error) {
      $("#status").removeClass().toggleClass("fa fa-exclamation-triangle");
      console.log("POST Error: " + xhr.responseText + ", " + textStatus + ", " + error);
    }
  );

});
      