window.onload = function () {

    
    let number = 90;
    let correctAnswer = 0;
    let audio = new Audio("assets/audio/mrrogers.mp3");
    let audio2 = new Audio("assets/audio/itsYouILike.mp3");

    $(".quiz-content").hide();
    $(".results-section").hide();
    $("#start").on("click", run);
    $("#submit").on("click", results);
    $("#reset").on("click", reset);


    function reset(){
        window.location.reload();
        // number = 90;
        // correctAnswer = 0;
        // $("#timer").show();
        // $("#start").show();
        // $(".quiz-content").hide();
        // $(".results-section").hide();
        // audio2.pause();
    }

    function run() {
        setInterval(decrement, 1000);
        audio.play();
        $(".quiz-content").show();
        $("#start").hide();
    }

    function decrement() {
        number--;
        $("#timer").html(`Time Left: ${number}`);

        //  Once number hits zero
        if (number === 0) {
            results();
        };
       //click handler for finish button, grab input values
    }



    function results() {
        $("#timer").hide();
        $(".quiz-content").hide();
        $(".results-section").show();
        window.scrollTo(0, 0);
        audio.pause();
        audio2.play();

        let selectedAnswer1 = $('input[name=q1]:checked').val();
        let selectedAnswer2 = $('input[name=q2]:checked').val();
        let selectedAnswer3 = $('input[name=q3]:checked').val();
        let selectedAnswer4 = $('input[name=q4]:checked').val();
        let selectedAnswer5 = $('input[name=q5]:checked').val();
        let selectedAnswer6 = $('input[name=q6]:checked').val();
        let selectedAnswer7 = $('input[name=q7]:checked').val();
        let selectedAnswer8 = $('input[name=q8]:checked').val();

        if (selectedAnswer1 === "option2") {
            correctAnswer++;
        }
        if (selectedAnswer2 === "option2") {
            correctAnswer++;
        }
        if (selectedAnswer3 === "option1") {
            correctAnswer++;
        }
        if (selectedAnswer4 === "option1") {
            correctAnswer++;
        }
        if (selectedAnswer5 === "option4") {
            correctAnswer++;
        }
        if (selectedAnswer6 === "option4") {
            correctAnswer++;
        }
        if (selectedAnswer7 === "option3") {
            correctAnswer++;
        }
        if (selectedAnswer8 === "option2") {
            correctAnswer++;
        }
        $("#writeResults").text(`${correctAnswer} out of 8`);
    }
}
