$(function() {
    $(".window").draggable({
        handle: '.titlebar'
    });
});

$('.clickme').toggleClass("active");

$('.closeme').click(function() {
    $('.window').hide();
    $('.clickme').toggleClass("active");
});

$('.clickme').click(function() {
    $('.window').show();
    $('.clickme').toggleClass("active");
});

$('.checkbox').click(function() {
    $(this).toggleClass('checked');
})