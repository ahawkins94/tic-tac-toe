// get a grid on the screen

//when you click on each grid tile, make x and then o appear

//after each player has made a move, check to see if someone has won.

//if winner - display winners message.

var player1 = 1;
var $box1 = $('#1');
var $box2 = $('#2');
var $box3 = $('#3');
var $box4 = $('#4');
var $box5 = $('#5');
var $box6 = $('#6');
var $box7 = $('#7');
var $box8 = $('#8');
var $box9 = $('#9');
var scoreCounterX = 0;
var scoreCounterO = 0;
var winner;

function turns(){


	$('.square').click(function (event){

		if (player1 == 1) {
			$(this).addClass('x');

			player1 = 0;
			wins('x');

		} else {

			$(this).addClass('o');

			player1 = 1;
			wins('o');
		}
	});
}
turns();


function wins(player){
	if($box1.hasClass(player) && $box2.hasClass(player) && $box3.hasClass(player)){
 		winner = player;
 		scoreCounter();
 	}

	if ($box4.hasClass(player) && $box5.hasClass(player) && $box6.hasClass(player)){
		winner = player;
		scoreCounter();
	}

	if ($box7.hasClass(player) && $box8.hasClass(player) && $box9.hasClass(player)){
		winner = player;
		scoreCounter();
	}

	if($box1.hasClass(player) && $box4.hasClass(player) && $box7.hasClass(player)){
		winner = player;
		scoreCounter();
	}

	if ($box2.hasClass(player) && $box5.hasClass(player) && $box8.hasClass(player)){
		winner = player;
		scoreCounter();
	}	

	if ($box3.hasClass(player) && $box6.hasClass(player) && $box9.hasClass(player)){
		winner = player;
		scoreCounter();
	}

	if ($box1.hasClass(player) && $box5.hasClass(player) && $box9.hasClass(player)){
		winner = player;
		scoreCounter();
	}

	if ($box3.hasClass(player) && $box5.hasClass(player) && $box7.hasClass(player)){
		winner = player;
		scoreCounter();
	}

	if ($box1.hasClass('x' || 'o') && $box2.hasClass('x' || 'o') && $box3.hasClass('x' || 'o') && $box4.hasClass('x' || 'o') && $box5.hasClass('x' || 'o') && $box6.hasClass('x' || 'o') && $box7.hasClass('x' || 'o') && $box8.hasClass('x' || 'o') && $box9.hasClass('x' || 'o')) {
		draw();
	}
}

function scoreCounter() {
	if (winner == 'x') {
 		scoreCounterX++;
 		pEditor();
 		}
 	if (winner == 'o') {
		scoreCounterO++;
 		pEditor();
 	}
 			
 		
}

function pEditor() {
	$('#x-win').text(scoreCounterX);
	$('#o-win').text(scoreCounterO);
	$('#board table td').removeClass('x');
	$('#board table td').removeClass('o');
}

function draw(){
	$('#board table td').removeClass('x');
	$('#board table td').removeClass('o');
}



