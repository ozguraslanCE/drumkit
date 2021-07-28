
$(document).keypress(function(event){
  
    makeSound(event.key);

})
$(".A").on("click", function(){
    
    makeSound($(".A").html());

})
$(".S").on("click", function(){
    
    makeSound($(".S").html());

})
$(".D").on("click", function(){
    
    makeSound($(".D").html());

})
$(".F").on("click", function(){
    
    makeSound($(".F").html());

})
$(".G").on("click", function(){
    
    makeSound($(".G").html());

})
$(".H").on("click", function(){
    
    makeSound($(".H").html());

})
$(".J").on("click", function(){
    
    makeSound($(".J").html());

})

function makeSound(key){
    switch (key) {
        case "a":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play()
            break;
        case "d":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play()
            break;
        case "f":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play()
            break;
        case "g":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play()
            break;
        case "h":
            var kickBass = new Audio ("sounds/kick-bass.mp3");
            kickBass.play()
            break;
        case "j":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play()
            break;
        default:
    }
}

