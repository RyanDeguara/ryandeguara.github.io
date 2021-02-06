var image_array = ["HOMEIMG1.jpg","HEADER1.jpg","HOMEIMG1.jpg"];
var image_array2 = ["XBOXHEADER2.1.jpg","XBOXHEADER1.jpg","XBOXHEADER1.jpg"];
var image_array3 = ["ESPORTHEADER3.jpg","ESPORTHEADER1.jpg","ESPORTHEADER2.jpg"];
var image_path = "Assets/Images/";
var counter = 0;

function rotator()
{
	path = image_path + image_array[counter];
	counter = counter + 1;

	if(counter == image_array.length-1) {
		counter = 0;
}

	setTimeout(rotator, 9000);
	transition(path);
	
	var mySites =  [
					"https://www.youtube.com/embed/AfG0vBW-riU",
					"https://www.youtube.com/embed/YHsdYu8RRSI",
					"https://www.youtube.com/embed/H-sFdMgJ93M",
					"https://www.youtube.com/embed/VGR4W5nqDxI"
					];

	var count = 0;

	document.getElementById('myButton').onclick = function() {
		 
		var myFrame = document.getElementById("myFrame");
		
		myFrame.src = mySites[count];
		
		count++;
		
		if(count > 2) {
			 count = 0;   
		}
		
	}
}

function transition(path) {
	$('#HeaderImage').fadeOut(500, function() {
		$('#HeaderImage').attr("src",path).stop().fadeIn(700);
	});
}

function rotator2()
{
	path = image_path + image_array2[counter];
	counter = counter + 1;

	if(counter == image_array2.length-1) {
		counter = 0;
}

	setTimeout(rotator2, 9000);
	transition(path);
}

function transition(path) {
	$('#HeaderImage').fadeOut(500, function() {
		$('#HeaderImage').attr("src",path).stop().fadeIn(700);
	});
}

function rotator3()
{
	path = image_path + image_array3[counter];
	counter = counter + 1;

	if(counter == image_array3.length-1) {
		counter = 0;
}

	setTimeout(rotator3, 9000);
	transition(path);
}

function transition(path) {
	$('#HeaderImage').fadeOut(500, function() {
		$('#HeaderImage').attr("src",path).stop().fadeIn(700);
	});
}

function validate() {
	
	if(document.regForm.firstname.value =="") {
		document.getElementById("firstnameMessage").innerHTML = " (This field must be filled!)";
		return false;
	}
	if(document.regForm.lastname.value =="") {
		document.getElementById("lastnameMessage").innerHTML = " (This field must be filled!)";
		return false;
	}
	if(document.regForm.password.value =="") {
		document.getElementById("passwordMessage").innerHTML = " (This field must be filled!)";
		return false;
	}
	return true
}

var questions = [];
var answers = [];

questions[0] = "What console has Sony recently released?";
answers[0] = "PlayStation 5";

questions[1] = "What price does the Xbox series X cost in Euros?";
answers[1] = "500";

questions[2] = "What popular game has been recently released after waiting 8 years since the first teaser trailer in 2012?";
answers[2] = "Cyberpunk 2077";

questions[3] = "What game had the highest prize pool in Esport Competitions 2020?";
answers[3] = "Dota 2";

questions[4] = "What popular game cancelled their annual World Cup in 2020?"
answers[4] = "Fortnite";

var currentQuestion;

function setQuestion(questionNumber) {
	currentQuestion = questionNumber;
	document.getElementById("question").innerHTML = questions[questionNumber];
}


function checkAnswer() {
	var tmpAnswer = document.getElementById("answer").value;
	if (tmpAnswer == answers[currentQuestion]) {
		document.getElementById("correct").innerHTML = "Correct, your are good!!";
	} else {
		document.getElementById("correct").innerHTML = "Wrong!!!";
	}
}
