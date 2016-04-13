$(document).ready(function ()
{
    $(".login-link").click(function () {
        if ($(".login-form").hasClass("show")) {
            $(".login-form").removeClass("show");
        } else {
            $(".login-form").addClass("show");
        }
    });
    $(".btn-danger").click(function () {
        if ($(".login-form").hasClass("show")) {
            $(".login-form").removeClass("show");
        } else {
            $(".login-form").addClass("show");
        }
    });


    if($(".mcholder").hasClass("listHolder")) {
    } else {
        $(".master_container").addClass("thumbHolder");
    }
});

$(document).scroll(function()
{
    var sW = screen.width;
    if(sW <= 980) {
    }else{
        if( $(this).scrollTop() >= 100 ) {
            $(".white-logo2").css({display:'inline-block', transition:'all 2s ease-in 2s'});
            $(".white-logo").css({display:'none', transition:'all 2s ease-out 2s'});
        }else{
            $(".white-logo2").css({display:'none', transition:'all 2s ease-out 2s'});
            $(".white-logo").css({display:'block', transition:'all 2s ease-in 2s'});
        }
    }
});