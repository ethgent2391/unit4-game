var random;
var lost;
var wins;

//psudo code:
goal = Math.floor(Math.random() * 69) +30;
console.log(goal);

$("#selector").text('Goal: ' + goal);

//4 crystals with random values. 1-20
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) +1;
    var crystal = $(".crystalpics");
        crystal.attr({
            "value": random
        });
            
    console.log(random)
}

$(".crystalpics").on('click', function() {
    console.log($(this).attr('value'));
});
//new reandom goal on win or lose
//new unique # assigned to each crystal if win or lose changes
//on click of crystal adds its value to previous result or total points
//until it equals random goal
//if its greater than goal lost = i--
//if it is equal then wins = i++ 