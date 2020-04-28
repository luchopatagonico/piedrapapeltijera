
var playerScore = 0;
var pcScore = 0;
var round = 1;



$("img").click(function() {
var chosen = $(this).attr("id");
var options = ['piedra', 'papel', 'tijera'];
var randomNumber = Math.floor(Math.random() * 3);
var computerChoice = options[randomNumber];
var computerText = "Pc choice";


  if (chosen != computerChoice) {
    $(this).addClass("playerPressed");
    $("#" + "parrafo" + chosen).text("Player Choice");
    $("#" + computerChoice).addClass("pressed");
    $("#" + "parrafo" + computerChoice).text("PC Choice ").addClass("pcBanner");
  } else {
    $(this).addClass("draw");
    $("#" + "parrafo" + chosen).text("Draw, try again. ");

  }

  // console.log(computerChoice);
  respuesta(chosen, computerChoice);
  round += 1;

  setTimeout(resetScreen, 1000);

function respuesta(chosen, computerChoice) {
  console.log("pase las dos variables " + chosen + " " + computerChoice);

  if (chosen === computerChoice) {
    $("h1").text("Draw, try again");

  } else if (chosen === "piedra") {
    if (computerChoice === "tijera") {
      $("h1").text("Player wins.");

      $("#playerScore").text(playerScore += 1);

    } else {
      $("h1").text("You loose.");
      $("#pcScore").text(pcScore += 1);
    }
  } else if (chosen === "papel") {
    if (computerChoice === "piedra") {
      $("h1").text("Player wins.");
      $("#playerScore").text(playerScore += 1);

    } else {
      $("h1").text("You loose.");
      $("#pcScore").text(pcScore += 1);
    }
  } else if (chosen === "tijera") {
    if (computerChoice === "papel") {
      $("h1").text("Player wins.");
      $("#playerScore").text(playerScore += 1);

    } else {
      $("h1").text("You loose.");
      $("#pcScore").text(pcScore += 1);
    }
  }

}

$("#pcScore").text(pcScore);
$("#playerScore").text(playerScore);

function resetScreen() {
  $("h1").text("Round: " + round + ".Pick again.");
  $("#" + computerChoice).removeClass("pressed");
  $("#" + chosen).removeClass("playerPressed");
  $("#" + "parrafo" + chosen).text("");
  $("#" + "parrafo" + computerChoice).text("");
  $("#" + chosen).removeClass("draw");


}
});
