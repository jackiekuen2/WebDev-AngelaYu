var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = []; //For recording the generated pattern
var userClickedPattern = []; //For recording the user-clicked pattern

var freshStart = true;
var level = 0;

// Function: Generate the next sequence
function nextSequence() {
    // Reset the user-clicked pattern for next level
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    // Randomly pick 1 out 4 colours
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // Game Effects
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

// Function: Play sound when buttons are pressed
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Funtion: Animations when buttons are pressed
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}

// Funtion: Check if user-clicked sequence matches game sequence
function checkAnswer(currentLevel) {
    console.log("Current level: " + level);
    console.log("Game Pattern: " + gamePattern);
    console.log("User-clicked pattern: " + userClickedPattern);
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) { // Always check the latest chosen colour

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) { // When user finishes the whole sequence, generate a new one
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");

        // Play "wrong" sound
        playSound("wrong");

        // Show "Game Over" effects
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over! Press Any Key to Restart");

        startOver();
    }
}

// Function: Start over to reset every thing
function startOver() {
    level = 0;
    gamePattern = [];
    freshStart = true;
}

// Start the game
$(document).keypress(function() {
    if (freshStart) {
        $("#level-title").text("Level " + level);
        nextSequence();
        freshStart = false;
    }
});

// Continue the game, when button is clicked
$(".btn").click(function(event) {
    var userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});