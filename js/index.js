var bgImages = [], hoverImages = [], moundImages = [], checkClicked = [];
var pos = 0, score = 0, highScore = 0;

$(document).ready( function() {	
    //This code will run after your page loads
	var pNum = 0, value = 0;
	for(var i = 0; i < 9; i++ ){
		if(i == 8)
			bgImages[i] == 'images/yeti.png';
		else
			bgImages[i] = 'images/penguin_'+(i+1)+'.png';
		hoverImages[i] = 'images/mound_'+(i+1)+'_hover.png';
		moundImages[i] = 'images/mound_'+(i+1)+'.png';
	}

	//score board
	$("<div id='score'>Score</div>").appendTo("#gameholder");
	$("<h5 id='scoreval'>0</h5>").appendTo("#score");
	$("h5").css("margin", "0");
	
	//High score board
	$("<div class='score'>High Score</div>").appendTo("#gameholder");
	$("<h5 id='highscoreval'>0</h5>").appendTo(".score");
	$("h5").css("margin", "0");
	
	findPos(); //finding the random position to place yeti
	
	$("#penguin1").mousedown(function(evt){
		$(this).unbind("mouseenter mouseleave"); 
		$(this).css("background-image", "url("+bgImages[0]+")");
		playGame(1, evt);
		checkClicked.push(evt.target);
	});
	$("#penguin2").mousedown(function(evt){
		$(this).unbind("mouseenter mouseleave");
		$(this).css("background-image", "url("+bgImages[1]+")");
		playGame(2, evt);
		checkClicked.push(evt.target);
	});
	$("#penguin3").mousedown(function(evt){
		$(this).unbind("mouseenter mouseleave");
		$(this).css("background-image", "url("+bgImages[2]+")");
		playGame(3, evt);
		checkClicked.push(evt.target);
	});
	$("#penguin4").mousedown(function(evt){
		$(this).unbind("mouseenter mouseleave");
		$(this).css("background-image", "url("+bgImages[3]+")");
		playGame(4, evt);
		checkClicked.push(evt.target);
	});
	$("#penguin5").mousedown(function(evt){
		$(this).unbind("mouseenter mouseleave");
		$(this).css("background-image", "url("+bgImages[4]+")");
		playGame(5, evt);
		checkClicked.push(evt.target);
	});
	$("#penguin6").mousedown(function(evt){
		$(this).unbind("mouseenter mouseleave");
		$(this).css("background-image", "url("+bgImages[5]+")");
		playGame(6, evt);
		checkClicked.push(evt.target);
	});
	$("#penguin7").mousedown(function(evt){
		$(this).unbind("mouseenter mouseleave");
		$(this).css("background-image", "url("+bgImages[6]+")");
		playGame(7, evt);
		checkClicked.push(evt.target);
	});
	$("#penguin8").mousedown(function(evt){
		$(this).unbind("mouseenter mouseleave");
		$(this).css("background-image", "url("+bgImages[7]+")");
		playGame(8, evt);
		checkClicked.push(evt.target);
	});
    $("#yeti").mousedown(function(evt) {
		$(this).unbind("mouseenter mouseleave");
		if(pos == 9){
			yetiAudio();
			$("#yeti").css("background-image", "url('images/yeti.png')");
        	setTimeout(function(){ alert("Yaaaarrrr!"); }, 100);
			setTimeout(function(){ reset(); }, 1000);
		}else{
			playGame(9, evt);
			checkClicked.push(evt.target);
		}
    });
});

function findPos(){
	pos = Math.floor(Math.random() * 9) + 1;
//	console.log("random number is ", pos);
}

function playGame(value, evt){
	
	if(checkClicked.indexOf(evt.target) < 0){
		
		if(pos != value){
			score = score + 10;
			penguinAudio();
		}
		$("#scoreval").html(score);
	}
	
	if(score > highScore)
		highScore = score;
	$("#highscoreval").html(highScore);
	
	if(score == 80){
		winnerAudio();
		setTimeout(function(){ alert("Congratulations, You Won!!!!"); }, 500);
		setTimeout(function(){ newGame(); }, 1000);
	}else{
	
		//swapping the position of yeti with the penguin in the random position
		if(pos == value){ //checking the div is clicked
			$("#penguin"+value).css("background-image", "url('images/yeti.png')");
			yetiAudio();
			setTimeout(function(){ alert("Yaaaarrrr!"); }, 100);
			setTimeout(function(){ reset(); }, 1000);
		}
	}
	if(value == 9)  //if 9th div is clicked it should be a penguin, only if random pos is not 9.
			$("#yeti").css("background-image", "url("+bgImages[pos - 1]+")");
}

function shuffle(arr){
	var ctr = arr.length, temp, index;
	while(ctr > 0){
		index = Math.floor(Math.random() * ctr);
		ctr--;
		temp = arr[ctr];
		arr[ctr] = arr[index];
		arr[index] = temp;
	}
	return arr;
}

function reset(){
	pos = 0;
	findPos();
	
	score = 0;
	checkClicked = [];
	$("#scoreval").html("0");
//	console.log(pos, score);
	
	//shuffle array
	bgImages = shuffle(bgImages);
	for(var j = 1; j < 9; j++){
		$("#penguin"+j).css("background-image", "url("+moundImages[j - 1]+")");
	}
	$("#yeti").css("background-image", "url("+moundImages[8]+")");
	
	//resetting the hover effect
	$("#penguin1").hover(function(){
		$(this).css("background-image", "url("+hoverImages[0]+")");
	}, function(){
		$(this).css("background-image", "url("+moundImages[0]+")");
	});
	$("#penguin2").hover(function(){
		$(this).css("background-image", "url("+hoverImages[1]+")");
	}, function(){
		$(this).css("background-image", "url("+moundImages[1]+")");
	});
	$("#penguin3").hover(function(){
		$(this).css("background-image", "url("+hoverImages[2]+")");
	}, function(){
		$(this).css("background-image", "url("+moundImages[2]+")");
	});
	$("#penguin4").hover(function(){
		$(this).css("background-image", "url("+hoverImages[3]+")");
	}, function(){
		$(this).css("background-image", "url("+moundImages[3]+")");
	});
	$("#penguin5").hover(function(){
		$(this).css("background-image", "url("+hoverImages[4]+")");
	}, function(){
		$(this).css("background-image", "url("+moundImages[4]+")");
	});
	$("#penguin6").hover(function(){
		$(this).css("background-image", "url("+hoverImages[5]+")");
	}, function(){
		$(this).css("background-image", "url("+moundImages[5]+")");
	});
	$("#penguin7").hover(function(){
		$(this).css("background-image", "url("+hoverImages[6]+")");
	}, function(){
		$(this).css("background-image", "url("+moundImages[6]+")");
	});
	$("#penguin8").hover(function(){
		$(this).css("background-image", "url("+hoverImages[7]+")");
	}, function(){
		$(this).css("background-image", "url("+moundImages[7]+")");
	});
	$("#yeti").hover(function(){
		$(this).css("background-image", "url("+hoverImages[8]+")");
	}, function(){
		$(this).css("background-image", "url("+moundImages[8]+")");
	});
}

function yetiAudio(){
	var x = document.getElementById("yetisound");
	x.currentTime = 0;
	x.play();
}

function penguinAudio(){
	var x = document.getElementById("penguinsound");
	x.currentTime = 0;
	x.play();
}

function winnerAudio(){
	var x = document.getElementById("winner");
	x.play();
}

function newGame(){
	highScore = 0;
	$("#highscoreval").html("0");
	reset();
}