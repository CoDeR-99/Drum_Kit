var numberOfButton= document.querySelectorAll(".drum").length;

// In order to add an event listener in jQuery:-
// $("h1").click(function(){

// });

for(var i=0; i<numberOfButton; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", HandleClick);

}

// With jQuery we don't required a loop as jQuery select all element at one go:-
//  $(".drum").click(function(){

//  });


function HandleClick(){
  var buttonInnerHtml= this.innerHTML;
  makeSound(buttonInnerHtml);
  buttonanimation(buttonInnerHtml);
  switch (buttonInnerHtml) {
    case 'w':
      {
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
      }
    break;
    case 'a':
      {
        var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
      }
    break;
    case 's':
      {
        var tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
      }
    break;
    case 'd':
      {
        var tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
      }
    break;
    case 'j':
      {
        var snare= new Audio("sounds/snare.mp3");
        snare.play();
      }
    break;
    case 'k':
      {
        var crash= new Audio("sounds/crash.mp3");
        crash.play();
      }
    break;
    case 'l':
      {
        var kick= new Audio("sounds/kick-bass.mp3");
        kick.play();
      }
    break;
  
    default:console.log(buttonInnerHtml);
    
  }
}

document.addEventListener("keypress", function(event){
  makeSound(event.key);
  buttonanimation(event.key);
});

// Adding keypress in jQuery:-
// $(document).keypress(function(event){         // $("body").keypress(function(event)){
//   console.log(event.key);   this give which key was pressed
// });

function makeSound(key){
  switch (key) {
    case 'w':
      {
        var tom1= new Audio("sounds/tom-1.mp3");
        tom1.play();
      }
    break;
    case 'a':
      {
        var tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
      }
    break;
    case 's':
      {
        var tom3= new Audio("sounds/tom-3.mp3");
        tom3.play();
      }
    break;
    case 'd':
      {
        var tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
      }
    break;
    case 'j':
      {
        var snare= new Audio("sounds/snare.mp3");
        snare.play();
      }
    break;
    case 'k':
      {
        var crash= new Audio("sounds/crash.mp3");
        crash.play();
      }
    break;
    case 'l':
      {
        var kick= new Audio("sounds/kick-bass.mp3");
        kick.play();
      }
    break;
  
    default:console.log(key);
    
  }
}

function buttonanimation(currentkey){
  document.querySelector("."+currentkey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentkey).classList.remove("pressed")
  }, 100);
}
