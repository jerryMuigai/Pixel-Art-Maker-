$(function () {

// Select color input
    let colorPicker = $('#colorPicker');

// Select size input
    let heightInput = $('#input_height');
    let widthInput = $('#input_width');

// select canvas
    const canvas = $('#pixel_canvas');

// When size is submitted by the user, call makeGrid()
    function makeGrid() {
        canvas.find('tbody').remove();

        // "submit" the size form to update the grid size
        let gridRows = heightInput.val();
        let gridCol = widthInput.val();

        // set tbody to the table
        canvas.append('<tbody></tbody>');

        let canvasBody = canvas.find('tbody');

        // draw grid row
        for (let i = 0; i < gridRows; i++) {
            canvasBody.append('<tr></tr>');
        }

        // draw grid col
        for (let i = 0; i < gridCol; i++) {
            canvas.find('tr').append('<td class="transparent"></td>');
        }

    }


    $(document).ready(function () {
        // click the submit button to update the grid
        $('input[type="submit"]').on('click', function (e) {
            e.preventDefault();
            makeGrid();
        });


        // toggle grid color
        $('#pixel_canvas').on('click', 'td', function (e) {
            let color = colorPicker.val();
            let currentColor = $(this).css('background-color');
            console.log(currentColor+ " color:" + color);

            if($(this).hasClass('transparent')){
                $(this).toggleClass('transparent');
                $(this).css("background-color", color);
            } else{
                $(this).toggleClass('transparent');
                $(this).css("background-color", "transparent");
            }

        })

    });

});