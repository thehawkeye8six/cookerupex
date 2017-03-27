$(document).ready(function(){
    $(".addCF").click(function(){
        $("#table1").append('<tr "><td style="padding-top: 1em;">' +
            '<input type="text" class="code" id="ingredient" name="ingredient[i]" value="" placeholder="Ingredient" /> &nbsp;' +
            '<input type="text" class="code" id="amount" name="amount[i]" value="" placeholder="Amount" /> &nbsp;' +
            '<select class="code" name="unit[i]" class="form-control" style="width: 10em;">' +
            '<option value="">Unit</option>' +
            '<option value="Cup">Cup</option>' +
            '<option value="Tsp">Tsp</option>' +
            '<option value="Tbsp">Tbsp</option>' +
            '<option value="Pinch">Pinch</option>' +
            '<option value="Piece">Piece</option></select>' +
            '<a href="javascript:void(0);" class="remCF"> Remove</a></td></tr><br/>');
    });
    $("#table1").on('click','.remCF',function(){
        $(this).parent().parent().remove();
    });
});