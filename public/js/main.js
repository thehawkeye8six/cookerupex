$(document).ready(function () {
    $(".addCF").click(function () {
        var i = $("#table1 tr").length+1;
        $("#table1").append("<tr \"><td style=\"padding-top: 1em;\">" +
            '<input type="text" class="code btn btn-default" style="width: 15em;" id="ingredient" name="ingredient' + i + '" value="" placeholder="Ingredient" required maxlength="30"/> &nbsp;' +
            '<input type="text" class="code btn btn-default" style="width: 6em;" id="amount" name="amount' + i + '" value="" placeholder="Amount" onkeypress="validate(event)" /> &nbsp;' +
            '<select class="code btn btn-default" name="unit' + i + '" class="form-control" style="width: 10em;">' +
            '<option value="">Unit</option>' +
            '<option value=""></option>' +
            '<option value="Cup">Cup(s)</option>' +
            '<option value="Dash">Dash</option>' +
            '<option value="Drop">Drop(s)</option>' +
            '<option value="Litre">Litre(s)</option>' +
            '<option value="mL">mL</option>' +
            '<option value="Piece">Piece(s)</option>' +
            '<option value="Pinch">Pinch</option>' +
            '<option value="Quart">Quart(s)</option>' +
            '<option value="Tsp">Tsp</option>' +
            '<option value="Tbsp">Tbsp</option>' +
            '<option value="Oz">Oz</option>' +
            '</select> &nbsp;' +
            '<input type="button" style="width:7em; background-color: red; color: white; font-weight: bold;" class="remCF btn btn-default" value="Remove"></td></tr><br/>');
    });
    $("#table1").on('click', '.remCF', function () {
        $(this).parent().parent().remove();
    });
});

function search() {
    txtSearch = $("#search").val();
    window.location.href = "/search?title=" + txtSearch ;
}

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
