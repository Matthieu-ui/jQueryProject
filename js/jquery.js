$("button").on("click", function(e) {
    e.stopPropagation();
    $("#menu").menu().toggle().position({
        my: "left+45px top",
        at: "top+25px",
        of: $(this),
        collision: "fit flip"
    });
});

$(document).on("click", function(e) {
    $("#menu").hide();
});

/* ------------------------- draggable popup window ------------------------- */
$(function() {
    $(".css-draggable-box").draggable({
        handle: ".css-draggable-title-bar",
        cancel: ".css-close-button",
        containment: "window"
    });
});