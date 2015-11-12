/**
* Created with LIS2360_Lesson8_jQuery.
* User: lindseywg
* Date: 2015-11-09
* Time: 03:00 AM
* To change this template use Tools | Templates.
*/


      //Project Name:  Recipe Display Application
      //Author: Lindsey Wilson-Griffith
      //Date: November 13, 2015   

      //Filename: scrip.js
   
function display(event) {
  $(event.currentTarget).next().fadeIn("slow"); 
}//end of display() 

/*
$("h3").click(display);
*/

function display2(event) {
  $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");
}

/*
$("h3").click(display2);
*/

$("h3").hover(function(){
  $(this).css("background-color", "yellow");
  }, function(){
  $(this).css("background-color", "pink");
});

$("h3").hover(display2);



 
