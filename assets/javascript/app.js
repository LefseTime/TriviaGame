
let timer;
let audio = new Audio("assets/audio/mrrogers.mp3");
let number = 90;
let audio2 = new Audio("assets/audio/itsYouILike.mp3");

window.onload = function () {
    $(".quiz-content").hide();
    $("#start").on("click", run);
}

function run() {
    timer = setInterval(decrement, 1000);
    audio.play();
    $(".quiz-content").show();
    $("#start").hide();
}

function decrement() {
    number--;
    $("#timer").html(`Time Left: ${number}`);


    //  Once number hits zero...
    if (number === 0) {
        $("#timer").hide();
        $(".quiz-content").hide();
        audio2.play();
    }
}
