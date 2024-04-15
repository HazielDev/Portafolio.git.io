$(document).ready(function(){

    let opa = 1;
    let index = 1;
    const main_title = $("#main-title");
    const circle = $("#circle-effect");

    $("#start-btn").on("click", function(){
        main_title.addClass("animate__animated animate__slideOutLeft");
        main_title.css({
            "transition":"all 1s ease",
            "opacity":"0"
        });
        circle.css("right","-400px");
        circle.css("width","300%");
        $(this).addClass("animate__animated animate__slideOutLeft");
        $(this).css({
            "transition":"all 1s ease",
            "opacity":"0"
        });
        setTimeout(function(){
            $("main").fadeOut(500,function(){
                $("#slide-1").css({
                    "display":"flex",
                    "transition":"all 2s ease",
                    "opacity":"1"
                });
                $("#slide-1").addClass("animate__animated animate__slideInRight");
            });
        }, 1000);
    });

    $(".btn").on("click",function(){
        $("#slide-"+index).removeClass("");
        $("#slide-"+index).addClass("animate__animated animate__slideOutLeft");
        setTimeout(function(){
            $("#slide-"+index).css("display","none");
            index++;
            $("#slide-"+index).css("display","flex");
            $("#slide-"+index).addClass("animate__animated animate__slideInRight");
        }, 1000);
    });

});