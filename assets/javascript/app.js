$(document).ready(function(){

$('#timer').hide();
var count = 35;
var correctCount = 0;
var incorrectCount = 0;
var unanswered = 0;
$('#questionContainer').hide();
$('#submit').hide();
var myForm = $('#questionForm');
var counter;
var questions = [{
    question: "1. This X-Man has the ability to spawn portals to teleport objects and people virtually anywhere.",
    choices: [' Cable', ' Pipeline', ' Nightcrawler', ' Blink'],
    correctAnswer: ' Blink'
  }, {
    question: "2. This X-Man has the power to absorb and store any form energy, which he/she can then release at will.",
    choices: [' Gambit', ' Rogue', ' Sunfire', ' Bishop'],
    correctAnswer: ' Bishop'
  }, {
    question: "3. Which of the following can NOT read minds?",
    choices: [' Psylocke', ' Magneto', ' Professor X', ' Jean Gray'],
    correctAnswer: ' Magneto'
  }, {
    question: "4. This mutant is naturally impervious to Cyclops' optic blasts.",
    choices: [' Juggernaut', ' Wolverine', ' Havok', ' Magneto'],
    correctAnswer: ' Havok'
  }, {
    question: "5. Before Logan became Wolverine he went by this name?",
    choices: [' Longshot', ' Magneto', ' Weapon X', ' Maverick'],
    correctAnswer: ' Weapon X'
  }, {
    question: "6. In what comic did Gambit make his first appearance?",
    choices: [' Uncanny X-Men #266', ' Spider-Man #266', ' X-Factor #266', ' Uncanny X-men #260'],
    correctAnswer: ' Uncanny X-Men #266'
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
		$('#timer').html("Time: " + count + " seconds");

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
