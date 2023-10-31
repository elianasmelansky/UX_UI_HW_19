console.log("Your index.js file is loaded correctly!");
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);

    $(document).ready(function() {
        var header = $(".header");
        var sticky = header.offset().top;
    
        $(window).scroll(function() {
            if (window.pageYOffset > sticky) {
                header.addClass("sticky");
            } else {
                header.removeClass("sticky");
            }
        });
    });