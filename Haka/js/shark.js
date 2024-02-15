$(document).ready(function(){

    let ancho = $("body").width();
    let shark = $("#shark");

    $("#btn-action").on("click",function(){

      $(this).hide();
      QueEmpiceElShow();

    });

    function QueEmpiceElShow(){

      let audio = $("#myAudio")[0];
      let ariana = $("#myAudio2")[0];
      audio.play();

      let IntervalID = setInterval(() => {
        
        let time = audio.currentTime;
        let ftime = Math.round(time)
        console.log(time);

        switch(ftime){

          case 1: GoRight(1,50); break;
          case 5: GoLeft(1,50); break;
          case 9: GoRight(0.8,100); break;
          case 10: GoLeft(0.8,100); break;
          case 13: GoRight(0.7,110); break;
          case 14: GoLeft(0.7,110); break;
          case 15: GoRight(0.7,200); break;
          case 16: GoLeft(0.7,200); break;
          case 18: GoRight(0.7,250); break;
          case 19: GoLeft(0.5,270); break;
          case 20: GoRight(0.5,350); break;
          case 21: GoLeft(0.5,350); break;
          case 25: GoRight(0.9,350); break;
          case 28: GoLeft(0.9,350); break;
          case 32: GoRight(1.2,350); break;
          case 36: GoLeft(1.2,350); break;
          case 40: GoRight(1.4, 350); break;
          case 44: GoLeft(2, 350); break;
          case 46: GoRight(5, 350); break;
          case 57: 
          
          shark.css("height","10px"); 
          audio.pause(); 
          BigFinal();
          ariana.play();
          clearInterval(IntervalID);

          break;

        }

      }, 1000);


    }

    function GoLeft(vel,size){

      shark.css({

        "left":"-"+510+"px",
        "transform":"scaleX(100%)",
        "transition":"left "+vel+"s",
        "height":size+"px"

      })

    }

    function GoRight(vel,size){

      shark.css({

        "left":ancho+400+"px",
        "transform":"scaleX(-100%)",
        "transition":"left "+vel+"s",
        "height":size+"px"

      })

    }

    function BigFinal(){

      shark.attr("src","images/sharky_valentine.png");
      shark.css({

        "left":(ancho/2)+"px",
        "height":"550px",
        "transition":"all 5s",
        "transform":"scaleX(100%)"

      })

    }

})