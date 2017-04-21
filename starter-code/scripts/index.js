//con window.onload=function(){} se carga todo el html antes del js
// window.onload = function() {

$(document).ready(function() {

    var simon = new SimonGame();

    var gameOn = false;

    //show createRandomColor after start
    $("#start").on("click", renderColors);

    function illuminate_color(colorName){
      console.log("ilumin "+colorName);
      $("." + colorName).addClass(colorName+ '-activate');
      setTimeout(function timeout() {
          $("." + colorName).removeClass(colorName + '-activate');
      }, 700);
    }

    function renderColors() {
        gameOn = true;
        simon.createRandomColor();
          console.log("radomcolor:");
          console.log(simon.sequence);
          var pepe;
        for (var i=0; i<simon.sequence.length; i++){
          window.setTimeout (illuminate_color(simon.sequence[i]), 2000);
          // illuminate_color(simon.sequence[i]);
        }
        // for i*tant
        //en el stInterval i será i*700


        //while createRandomColor
        //quitar el botón start una vez seleccionado
    }

    //we add click event to buttons "quarter", to them light up
    var buttons = document.getElementsByClassName("quarter");
    var buttonsArray = Array.prototype.slice.call(buttons);

    buttonsArray.forEach(function(e) {
        e.onclick = function() {
            if (gameOn) {
              simon.userclickCount++;
                var currentColor = e.className.split(" ");
                console.log("default class:");
                console.log(currentColor);

                var activateClass = " " + currentColor[1] + "-activate";
                e.className += activateClass;
                console.log("activated class:");
                console.log(e.className);

                setTimeout(function timeout() {
                    var currentClass = e.className.split(" ");
                    console.log("activatedclassx2-->");
                    console.log(currentClass);

                    deactivatedClass = "quarter " + currentColor[1];
                    e.className += deactivatedClass;
                    console.log("deactivatedclass--> ");
                    console.log(deactivatedClass);
                }, 500);
                ////
                simon.userAnswer.push(currentColor[1]);
                checkUserAnswer();
            }
        };
    });

    function checkUserAnswer() {

        var isArrayCorrect = true;
        for (var i = 0; i < simon.userAnswer.length; i++) {
            if (simon.userAnswer[i] != simon.sequence[i]) {
              isArrayCorrect = false;
              break;
            }
        }

        if(isArrayCorrect){
          if (simon.userAnswer.length === simon.sequence.length) {
            nextRound();
          }else{
            console.log("Sequence is partialy correct,continue answering");
          }
        }else{
          console.log(" GAME OVER - Secuencia erronea");
        }
    }

    function nextRound() {
        simon.round++;
        simon.userAnswer = [];
        $("#counter").text(simon.round);
        window.setTimeout(renderColors, 1000);
    }



});

// var blue = document.getElementsByClassName("blue")[0];

// blue.onclick = function() {
//   blue.addClass("pedo");
// };

//
//   //buttons no es un array, es un HTMLCollections,
//y no se le pueden aplicar fes de array
//   //so we convert an HTMLCollection into an array (que entienda JS):
//   var buttonsArray = Array.prototype.slice.call(buttons);
//   //We create a click event assigned to the div class="quarter"
//   buttonsArray.forEach(function(e){
//     e.onclick = function() {
//     console.log("Add glow effect");
//     blue.addClass("pedo");
//   };
// });

//yo tenía esto:
// buttons.onclick = function() {
//   // newGame.buttonclicked()
//   console.log("This is working!");
// };

// };
