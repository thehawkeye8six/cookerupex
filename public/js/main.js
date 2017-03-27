$(document).ready(function () {
    $(".addCF").click(function () {
        $("#table1").append('<tr "><td style="padding-top: 1em;">' +
            '<input type="text" class="code btn btn-default" style="width: 15em;" id="ingredient" name="ingredient[i]" value="" placeholder="Ingredient" /> &nbsp;' +
            '<input type="text" class="code btn btn-default" style="width: 6em;" id="amount" name="amount[i]" value="" placeholder="Amount" /> &nbsp;' +
            '<select class="code btn btn-default" name="unit[i]" class="form-control" style="width: 10em;">' +
            '<option value="">Unit</option>' +
            '<option value="Cup">Cup</option>' +
            '<option value="Dash">Dash</option>' +
            '<option value="Drop">Drop</option>' +
            '<option value="Litre">Litre</option>' +
            '<option value="mL">mL</option>' +
            '<option value="Piece">Piece</option>' +
            '<option value="Pinch">Pinch</option>' +
            '<option value="Quart">Quart</option>' +
            '<option value="Tsp">Tsp</option>' +
            '<option value="Tbsp">Tbsp</option>' +
            '</select> &nbsp;' +
            '<input type="button" style="width:7em; background-color: red; color: white; font-weight: bold;" class="remCF btn btn-default" value="Remove"></td></tr><br/>');
    });
    $("#table1").on('click', '.remCF', function () {
        $(this).parent().parent().remove();
    });
});

function search() {
    var searchBox = $("#search").val();
    console.info(searchBox);
}