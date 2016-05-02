//add item to list
function addListItem () {
    var text = $("#item").val();

    var newItem = $("#item-template").clone();
    newItem.attr('id', '');
    newItem.find('label').text(text);

    $("#itemlist").append(newItem);
    $("#item").val(" ");
};

//click submit to add item
$(function() {
	$('#submit').on('click', addListItem);

});

//keypress enter to add item
$(document).keypress(function(e) {
    if(e.which == 13) {
        $("#submit", addListItem);
    }
});

//delete items on click of button
$(document).on("click", '.delete', function(){
	$(this).parent().fadeOut(500);
});
<<<<<<< HEAD

//strike through on click of button
$(document).on("click", '.check', function(){
    $(this).parent().wrap("<strike>");
});
=======
>>>>>>> 2f253cc29d591083fd4fbf743af2fc20c18f50cb
