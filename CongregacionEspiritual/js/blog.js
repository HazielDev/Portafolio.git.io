$(document).ready(function(){

    $(".content").css("display","none")

    $(".ver").click(function(){

        $(this).next().fadeToggle();

    });

});