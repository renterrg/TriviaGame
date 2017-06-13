$(document).ready(function(){

$('#timer').hide();
var count = 30;



	function startGame(){

		$('#startBtn').on('click', function(){
			$('#startBtn').hide();
			timer();

		});

	}




	function timer(){

			var counter = setTimeout(timer, 1000);


			$('#timer').show();
			
			if (count <= 0) {
				clearTimeout(counter);
				return;
			} else {
				$('#timer').html("Time Remaining: " + count + " seconds");
				count--;
			}


	}

startGame();

});