$(document).ready( function() {
var goalScore = 0;
var playerScore = 0;
var winCount = 0;
var lossCount = 0;

newGame();


$(document).on("keypress", function(event) {
    // console.log("keypress");
    var keycode = event.which;
    //console.log(keycode);

    
    $(".link").toggleClass("link-running");
    $(".link").toggleClass("link-resting");
    setTimeout(function() {
        $(".link").toggleClass("link-resting");
        $(".link").toggleClass("link-running");
    }, 100);


    if(keycode == "119") { // key is 'w'
        // console.log("up");
        $(".link").animate({top: "-=20px"}, 1);
        
    }
    else if (keycode=="97") { // key is 'a'
        // console.log("left");
        $(".link").animate({left: "-=20px"}, 1);
    }
    else if (keycode=="100") { // key is 'd'
        // console.log("right");
        $(".link").animate({left: "+=20px"}, 1);
    }
    else if (keycode=="115") { // key is 's'
        // console.log("down");
        $(".link").animate({top: "+=20px"}, 1);
    }
    else if (keycode=="102") { // key is 'f'
        // console.log("attack!");

        // switch to attack link
        $(".link").toggleClass("link-running", false);
        $(".link").toggleClass("link-resting", false);
        $(".link").addClass("link-attacking");
        $(".link").on("animationend", function() {
            $(".link").removeClass("link-attacking");
            $(".link").toggleClass("link-resting", true);
            $(".link").toggleClass("link-running", false);
        });

        // if link is touching rupee, add value of rupee to player score
        var linkPosition1 = parseInt($(".link").css("left")) + 220;
        var linkPosition2 = parseInt($(".link").css("top")) + 20;
        console.log("link left: " + linkPosition1);
        console.log("link top: " + linkPosition2);
        var rupee1Position1 = parseInt($("#rupee1").css("left"));
        var rupee1Position2 = parseInt($("#rupee1").css("left"));
        console.log("rupee1 left: " + rupee1Position1);
        console.log("rupee1 top: " + rupee1Position2);
        var rupee2Position1 = parseInt($("#rupee2").css("left"));
        var rupee2Position2 = parseInt($("#rupee2").css("top"));
        console.log("rupee2 left: " + rupee2Position1);
        console.log("rupee2 top: " + rupee2Position2);
        var rupee3Position1 = parseInt($("#rupee3").css("left"));
        var rupee3Position2 = parseInt($("#rupee3").css("top"));
        console.log("rupee3 left: " + rupee3Position1);
        console.log("rupee3 top: " + rupee3Position2);
        var rupee4Position1 = parseInt($("#rupee4").css("left"));
        var rupee4Position2 = parseInt($("#rupee4").css("top"));
        console.log("rupee4 left: " + rupee4Position1);
        console.log("rupee4 top: " + rupee4Position2);

        if(linkPosition1<=(rupee1Position1 + 100) && linkPosition1>=(rupee1Position1-10)) {
            if(linkPosition2<=(rupee1Position2 + 70) && linkPosition2>=(rupee1Position2)-10) {
                console.log("close to rupee1");

                // add value of rupee to player's score
                playerScore += parseInt($("#rupee1").attr("value"));
                console.log("player score " + playerScore);
                $("#player-score").text(playerScore);
            };
        }
        if (linkPosition1<=(rupee2Position1 + 100) && linkPosition1>=(rupee2Position1-10)) {
            if(linkPosition2<=(rupee2Position2 + 70) && linkPosition2>=(rupee2Position2)-10) {
                console.log("close to rupee2");

                // add value of rupee to player's score
                playerScore += parseInt($("#rupee2").attr("value"));
                console.log("player score " + playerScore);
                $("#player-score").text(playerScore);
            };
        }
        if (linkPosition1<=(rupee3Position1 + 100) && linkPosition1>=(rupee3Position1-10)) {
            if(linkPosition2<=(rupee3Position2 + 70) && linkPosition2>=(rupee3Position2)-10) {
                console.log("close to rupee3");

                // add value of rupee to player's score
                playerScore += parseInt($("#rupee3").attr("value"));
                console.log("player score " + playerScore);
                $("#player-score").text(playerScore);
            };
        }
        if (linkPosition1<=(rupee4Position1 + 100) && linkPosition1>=(rupee4Position1-10)) {
            if(linkPosition2<=(rupee4Position2 + 70) && linkPosition2>=(rupee4Position2)-10) {
                console.log("close to rupee4");

                // add value of rupee to player's score
                playerScore += parseInt($("#rupee4").attr("value"));
                console.log("player score " + playerScore);
                $("#player-score").text(playerScore);
            };
        }
    }
    else {
        alert("That is not a valid key!");
    };

    if (playerScore===goalScore) {
        alert("you won!");

        winCount++;
        $(".wins").prepend('<img src="assets/images/pixel-heart.png" width="50px"/>');
        
        newGame();
    }
    else if (playerScore>goalScore) {
        alert("you lost");

        lossCount++;
        $(".losses").prepend('<img src="assets/images/skull.jpg" width="50px"/>');

        newGame();
    };
});

function newGame() {
    // choose new goalScore & reset playerScore
    goalScore = Math.floor(Math.random()*101)+19;
    playerScore = 0;

    $("#rupee1").attr("value", Math.floor(Math.random()*12)+1);
    $("#rupee2").attr("value", Math.floor(Math.random()*12)+1);
    $("#rupee3").attr("value", Math.floor(Math.random()*12)+1);
    $("#rupee4").attr("value", Math.floor(Math.random()*12)+1);

    $("#goal-score").text(goalScore);
    $("#player-score").text(playerScore);
};

});