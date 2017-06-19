$(document).ready(function(){

$('#timer').hide();
var count = 25;
var correctCount = 0;
var incorrectCount = 0;
var unanswered = 0;
$('#questionContainer').hide();
$('#submit').hide();
var myForm = $('#questionForm');
var counter;
var questions = [{
    question: "In what place was Christmas once illegal?",
    choices: ['Russia', 'Brazil', 'England', 'France'],
    correctAnswer: 'England'
  }, {
    question: "Coulrophobia means fear of what?",
    choices: ['Old People', 'Clowns', 'Sacred Things', 'Jews'],
    correctAnswer: 'Clowns'
  }, {
    question: "Which of the following is the longest running American animated TV show?",
    choices: ['TV Funhouse', 'Rugrats', 'Simpsons', 'Pokemon'],
    correctAnswer: 'Simpsons'
  }, {
    question: "Every year, over 8,800 people injure themselves with what apparently harmless, tiny object?",
    choices: ['Toothpick', 'Knife', 'Baseball bat', 'Pencil'],
    correctAnswer: 'Toothpick'
  }, {
    question: "What is the fear of houses?",
    choices: ['Rhabdophobia', 'Neophobia', 'Oikophobia', 'Jedeophobia'],
    correctAnswer: 'Oikophobia'
  }];



	function startGame(){

		$('#startBtn').on('click', function(){
			$('#startBtn').hide();
			$('#timer').show();
			$('#questionContainer').show();
			$('#submit').show();

			timer();
		});

		myForm.on("submit", onSubmit);

		$('#scores').hide();
	}




	function timer(){
		$('#timer').html("Time Remaining: " + count + " seconds");

		if (count <= 0) {
			onSubmit();
		} else {
			count--;
			counter = setTimeout(timer, 1000);
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
		clearTimeout(counter);

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

		$('#submit').hide();
		$('#questionContainer').hide();
		$('#scores').show();
		return false;

	}

	
	
displayQuestions();
startGame();

});