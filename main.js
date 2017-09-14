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
var count = 0;

function turns(){

	$('.square').click(function (event){

		if (player1 == 1) {
			$(this).addClass('x');

			player1 = 0;
			wins('x');
			count++;
			console.log(count);

		} else {

			$(this).addClass('o');

			player1 = 1;
			wins('o');
			count++;
			console.log(count);
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

	if (count === 9) {
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
	console.log(count)
	$('#board table td').removeClass('x');
	$('#board table td').removeClass('o');
	count = 0
}



