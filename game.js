var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

// Generate random number to trigger the sequence
// Button with animation and sound effect
function nextSequence() {
  randomNumber = Math.round(Math.random() * 3);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
  var level = level + 1;
  $("#level-title").text("Level" + level);
}

// Button clicked by users
$(".btn").click(function () {
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

// Sound effect when button clicked
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animation when button clicked
function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function () {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}

// Start the game
$(document).one("keypress", function () {
  nextSequence();
  var level = 0;
  $("#level-title").text("Level " + level);
});

function checkAnswer(currentLevel) {
  for (var i = 0; (i = currentLevel); i++) {
    if (userClickedPattern[i] === gamePattern[i]) {
      console.log(i);
    } else {
      console.log("end game");
    }
  }
  if (i === currentLevel) {
    setTimeout(nextSequence(), 5000);
  }
}
