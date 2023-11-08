
//Detect mouse clicks


for ( var i= 0 ; i < document.querySelectorAll(".drum").length ; i++ ) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    
        var buttonInnerhtml =  this.innerHTML ;
        
        makesound(buttonInnerhtml);

        buttonAnimation(buttonInnerhtml);



    
});

}

//detect keyboard inputs


document.addEventListener("keydown", function(event) {
    makesound(event.key);
    buttonAnimation(event.key);


})

function makesound(key) {
    switch (key) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();

            break;
        
        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();

            break;

        case "g":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();

            break;

        case "d":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();

            break;
        
        case "j":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();

            break;

        case "k":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();

            break;
        
        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();

            break;



    
        default: 
            console.log(key);
            break;
    }

}

function buttonAnimation (currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){

        activeButton.classList.remove("pressed");
    }, 100 )
}











