// get a grid on the screen

//when you click on each grid tile, make x and then o appear

//after each player has made a move, check to see if someone has won.

//if winner - display winners message.

var player1 = 1;
var $box1 = $('#1')
var $box2 = $('#2')
var $box3 = $('#3')
var $box4 = $('#4')
var $box5 = $('#5')
var $box6 = $('#6')
var $box7 = $('#7')
var $box8 = $('#8')
var $box9 = $('#9')
var scoreCounterX = 0
var scoreCounterO = 0

function turns(){


	$('.square').click(function (event){

		if (player1 == 1) {
			$(this).addClass('x');

			player1 = 0;
			wins('x');

		} else {

			$(this).addClass('o');

			player1 = 1;
			wins('o')
		}
	});
}
turns()


function wins(player){
	if($box1.hasClass(player) && $box2.hasClass(player) && $box3.hasClass(player)){
 		scoreCounter()
	}

	if ($box4.hasClass(player) && $box5.hasClass(player) && $box6.hasClass(player)){
		console.log('win')
	}

	if ($box7.hasClass(player) && $box8.hasClass(player) && $box9.hasClass(player)){
		console.log('win')
	}

	if($box1.hasClass(player) && $box4.hasClass(player) && $box7.hasClass(player)){
		console.log('win')
	}

	if ($box2.hasClass(player) && $box5.hasClass(player) && $box8.hasClass(player)){
		console.log('win')
	}	

	if ($box3.hasClass(player) && $box6.hasClass(player) && $box9.hasClass(player)){
		console.log('win')
	}

	if ($box1.hasClass(player) && $box5.hasClass(player) && $box9.hasClass(player)){
		console.log('win')
	}

	if ($box3.hasClass(player) && $box5.hasClass(player) && $box7.hasClass(player)){
		alert('')
	}
}

function scoreCounter(player){
	if (player = 'x') {
 			scoreCounterX++;
 			console.log(scoreCounterX);
 		} else scoreCounterO++
}




