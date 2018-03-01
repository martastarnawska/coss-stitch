// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var submit=$("input:submit");
  submit.addClass("submit");
  var table = $("#pixel_canvas");
  var row;
  var columns;
  var cell;

  submit.on('click', function (event) {
   event.preventDefault()
   var h = $("#input_height").val();
   var w = $("#input_width").val();
   $('tr').remove();
   $('#clear').remove();

    if (h <= 40 && w <= 40) {
      for (var m = 1; m <= h; m++) {
        table.append("<tr> </tr> * m");
      };
  } else if (h > 40 && w <= 40) {
    alert("it's too high! The maximal height is 40.")
  } else if (h <= 40 && w > 40) {
    alert("it's too wide! The maximal width is 40.")
  } else {
    alert("it's too big!")
  }

    function addColumns(y) {
      for  (var n = 1; n <= y; n++) {
        columns = ('<td> </td> * n')
        $('tr').append(columns)
      }
    }
    addColumns(w)

    cell = $("td")

    cell.css('cursor', 'pointer');

    cell.click(function() {
      var color = $('#colorPicker').val()
      $(this).css('background-color', color);
    });

    cell.dblclick(function() {
      $(this).css('background-color', 'white');
    });

    table.after("<button type='button' id='clear'>Clear colors</button>");

    $('#clear').on('click', function (event) {
      cell.css('background-color', 'white');
    });
  });
}

$(makeGrid);
