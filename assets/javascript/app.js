$(document).ready(function(){

$('#timer').hide();
var count = 30;
var correctCount = 0;
var incorrectCount = 0;
var unanswered = 0;
$('#questionContainer').hide();
$('#submit').hide();
$('#scores').hide();
var myForm = $('#questionForm');




var questions = [{
    question: "What is 2*5?",
    choices: [2, 5, 10, 15, 20],
    correctAnswer: 10
  }, {
    question: "What is 3*6?",
    choices: [3, 6, 9, 12, 18],
    correctAnswer: 18
  }, {
    question: "What is 8*9?",
    choices: [72, 99, 108, 134, 156],
    correctAnswer: 72
  }, {
    question: "What is 1*7?",
    choices: [4, 5, 6, 7, 8],
    correctAnswer: 7
  }, {
    question: "What is 8*8?",
    choices: [20, 30, 40, 50, 64],
    correctAnswer: 64
  }];



	function startGame(){

		$('#startBtn').on('click', function(){
			$('#startBtn').hide();
			timer();
		});

		myForm.on("submit", onSubmit);

	}




	function timer(){

			var counter = setTimeout(timer, 1000);


			$('#timer').show();

			$('#questionContainer').show();

			$('#submit').show();

			$('#scores').show();

			
			
			if (count <= 0) {
				clearTimeout(counter);
				return;

			} else {
				$('#timer').html("Time Remaining: " + count + " seconds");
				count--;
			}
	}



	function displayQuestions(){

		for (var i=0; i < questions.length; i++) {

			var question_el = $('<p>').html(questions[i].question);
	
			var choices_el = $('<div>');
	
				questions[i].choices.forEach(function(choice) {
					choices_el.append(
						$('<label class="choice">')
						.append($('<input type="radio" name="q_' + i + '" value="' + choice + '"/>'))
						.append(choice)
					)
				});

				$('#questionContainer').append(
					$('<div class="question">')
					.append(question_el)
					.append(choices_el)
				);
		}
	}
	
	function onSubmit(){
		 for (var i = 0; i < questions.length; i ++) {

		 	console.log("questions", questions[i].correctAnswer);
		 	console.log("value", myForm[0]['q_' + i].value);

		 	if (myForm[0]['q_' + i].value === ""){
		 		unanswered++;
		 		$('#unansweredScore').html(unanswered);
		 	}

			else if (questions[i].correctAnswer == myForm[0]['q_' + i].value) {
				correctCount++;
				$('#correctScore').html(correctCount);
			}

			else {

				incorrectCount++;
				$('#incorrectScore').html(incorrectCount);
			}

			

		}
		

		return false;

	}
	
	
displayQuestions();
startGame();

});