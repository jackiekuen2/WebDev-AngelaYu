var audio = new Audio("sounds/tom-1.mp3");

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    // Scenario: Click
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {        
        var buttonInnerHTML = this.innerHTML; //this returns the HTML of clicked button
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

    // Scenario: Keydown
    document.addEventListener("keydown", function (event) {
        makeSound(event.key); //event.key is the button that is pressed
        buttonAnimation(event.key);
    });
}

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play()
            break;
        case "a":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case "d":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case "k":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3")
            snare.play()
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed"); //Add the "pressed" style

    //Return back to normal, by removing the "pressed" style after 0.1 sec
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}