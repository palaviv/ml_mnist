// Canvas setup 0
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

// Canvas setup 1
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

// Canvas setup 2
var canvas2 = new fabric.Canvas('canvas-2');
canvas2.isDrawingMode = true;
canvas2.freeDrawingBrush.width = 20;
canvas2.freeDrawingBrush.color = "#000000";
canvas2.backgroundColor = "#ffffff";
canvas2.renderAll();


// Clear button callback
$("#clear-canvas2").click(function(){
  canvas2.clear();
  canvas2.backgroundColor = "#ffffff";
  canvas2.renderAll();
});

// Canvas setup 3
var canvas3 = new fabric.Canvas('canvas-3');
canvas3.isDrawingMode = true;
canvas3.freeDrawingBrush.width = 20;
canvas3.freeDrawingBrush.color = "#000000";
canvas3.backgroundColor = "#ffffff";
canvas3.renderAll();


// Clear button callback
$("#clear-canvas3").click(function(){
  canvas3.clear();
  canvas3.backgroundColor = "#ffffff";
  canvas3.renderAll();
});

// Canvas setup 4
var canvas4 = new fabric.Canvas('canvas-4');
canvas4.isDrawingMode = true;
canvas4.freeDrawingBrush.width = 20;
canvas4.freeDrawingBrush.color = "#000000";
canvas4.backgroundColor = "#ffffff";
canvas4.renderAll();


// Clear button callback
$("#clear-canvas4").click(function(){
  canvas4.clear();
  canvas4.backgroundColor = "#ffffff";
  canvas4.renderAll();
});

// Canvas setup 5
var canvas5 = new fabric.Canvas('canvas-5');
canvas5.isDrawingMode = true;
canvas5.freeDrawingBrush.width = 20;
canvas5.freeDrawingBrush.color = "#000000";
canvas5.backgroundColor = "#ffffff";
canvas5.renderAll();


// Clear button callback
$("#clear-canvas5").click(function(){
  canvas5.clear();
  canvas5.backgroundColor = "#ffffff";
  canvas5.renderAll();
});

// Canvas setup 6
var canvas6 = new fabric.Canvas('canvas-6');
canvas6.isDrawingMode = true;
canvas6.freeDrawingBrush.width = 20;
canvas6.freeDrawingBrush.color = "#000000";
canvas6.backgroundColor = "#ffffff";
canvas6.renderAll();


// Clear button callback
$("#clear-canvas6").click(function(){
  canvas6.clear();
  canvas6.backgroundColor = "#ffffff";
  canvas6.renderAll();
});

// Canvas setup 7
var canvas7 = new fabric.Canvas('canvas-7');
canvas7.isDrawingMode = true;
canvas7.freeDrawingBrush.width = 20;
canvas7.freeDrawingBrush.color = "#000000";
canvas7.backgroundColor = "#ffffff";
canvas7.renderAll();


// Clear button callback
$("#clear-canvas7").click(function(){
  canvas7.clear();
  canvas7.backgroundColor = "#ffffff";
  canvas7.renderAll();
});

// Canvas setup 8
var canvas8 = new fabric.Canvas('canvas-8');
canvas8.isDrawingMode = true;
canvas8.freeDrawingBrush.width = 20;
canvas8.freeDrawingBrush.color = "#000000";
canvas8.backgroundColor = "#ffffff";
canvas8.renderAll();


// Clear button callback
$("#clear-canvas8").click(function(){
  canvas8.clear();
  canvas8.backgroundColor = "#ffffff";
  canvas8.renderAll();
});

// Canvas setup 9
var canvas9 = new fabric.Canvas('canvas-9');
canvas9.isDrawingMode = true;
canvas9.freeDrawingBrush.width = 20;
canvas9.freeDrawingBrush.color = "#000000";
canvas9.backgroundColor = "#ffffff";
canvas9.renderAll();


// Clear button callback
$("#clear-canvas9").click(function(){
  canvas9.clear();
  canvas9.backgroundColor = "#ffffff";
  canvas9.renderAll();
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
  var image_data2 = canvas2.toDataURLWithMultiplier('png', fac);
  var image_data3 = canvas3.toDataURLWithMultiplier('png', fac);
  var image_data4 = canvas4.toDataURLWithMultiplier('png', fac);
  var image_data5 = canvas5.toDataURLWithMultiplier('png', fac);
  var image_data6 = canvas6.toDataURLWithMultiplier('png', fac);
  var image_data7 = canvas7.toDataURLWithMultiplier('png', fac);
  var image_data8 = canvas8.toDataURLWithMultiplier('png', fac);
  var image_data9 = canvas9.toDataURLWithMultiplier('png', fac);

  var url = "group," + group_name;
  url = url + ",img0," + image_data0;
  url = url + ",img1," + image_data1;
  url = url + ",img2," + image_data2;
  url = url + ",img3," + image_data3;
  url = url + ",img4," + image_data4;
  url = url + ",img5," + image_data5;
  url = url + ",img6," + image_data6;
  url = url + ",img7," + image_data7;
  url = url + ",img8," + image_data8;
  url = url + ",img9," + image_data9;
  url = url + ",img10,";

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
      