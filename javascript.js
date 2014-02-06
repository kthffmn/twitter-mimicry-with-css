$(function() {
    $(".icon").click(function(event) {
        if (!$(this).hasClass("clicked")) {
            $(this).addClass("clicked");
        } else {
            $(this).removeClass("clicked");
        }
    });
});