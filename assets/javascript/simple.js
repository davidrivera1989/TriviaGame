// When the page loads up these questions and answers hide.
$("label").hide(100);
$(".firstquestion").hide(100);
$(".secondquestion").hide(100);
$(".thirdquestion").hide(100);
$(".fourthquestion").hide(100);
$(".logo").hide(100);


// 
var correct = 0;
var inCorrect = 0;
var unanswered = 4;

// When clicking the button to Start these questions and answers come ALIVE.
$("button").on("click", function(){
	countdown(20)
	$("button").remove();
	$("label").show(1000);
	$(".firstquestion").show(1000);
	$(".secondquestion").show(1000);
	$(".thirdquestion").show(1000);
	$(".fourthquestion").show(1000);
	
});


// This function gets the time ticking and shows you the results
var intervalId;
function countdown(seconds) {
	var time = seconds;
	var count = function() {
		console.log(time);
		$("#countdown").html("Time Remaining: " +  time);
		time--;
		if ( time < 0) {
		$("#countdown").hide("Time Remaining: " +  time);
		$(".logo").show(1000).text("Your Results!");
		$(".Correct").show(1000).text("Correct Answers:" + correct);
		$(".Wrong").show(1000).text("Incorrect Answers:" + inCorrect);
		$(".Unanswered").show(1000).text("Unanswered:" + unanswered);
		$("label").hide(1000);
		$(".firstquestion").hide(100);
		$(".secondquestion").hide(100);
		$(".thirdquestion").hide(100);
		$(".fourthquestion").hide(100);
		clearInterval(intervalId);
		}
	}
	intervalId = setInterval(count, 1000);
}


// The logic behind each Question answer.
// Question 1
$('.response1').on("click", function() {
	var userAnswer = $(this).attr('data-name');
	if (userAnswer === "OAK") {
		correct++;
		unanswered--;
		$(".firstquestion").hide(1000);
		console.log("You got it!" + correct);
	}
	else if (userAnswer !== "OAK") {
		inCorrect++;
		unanswered--;
		$(".firstquestion").hide(1000);
		console.log("wrong answer!")

	}
});
//Question 2
$('.response2').on("click", function() {
	var userAnswer = $(this).attr('data-name');
	if (userAnswer === "Thai") {
		correct++;
		unanswered--;
		$(".secondquestion").hide(1000);
		console.log("You got it!" + correct);
	}
	else if (userAnswer !== "Thai") {
		inCorrect++;
		unanswered--;
		$(".secondquestion").hide(1000);
		console.log("wrong answer!")

	}
});
//Question 3
$('.response3').on("click", function() {
	var userAnswer = $(this).attr('data-name');
	if (userAnswer === "Athletics") {
		correct++;
		unanswered--;
		$(".thirdquestion").hide(1000);
		console.log("Correct answer" + correct);
	}
	else if (userAnswer !== "Athletics") {
		inCorrect++;
		unanswered--;
		$(".thirdquestion").hide(1000);
		console.log("Wrong answer" + inCorrect);

	}
});
//Question 3
$('.response4').on("click", function() {
	var userAnswer = $(this).attr('data-name');
	if (userAnswer === "Honda") {
		correct++;
		unanswered--;
		$(".fourthquestion").hide(1000);
		console.log("You got it!" + correct);
	}
	else if (userAnswer !== "Honda") {
		inCorrect++;
		unanswered--;
		$(".fourthquestion").hide(1000);
		console.log("wrong answer!")

	}
});







