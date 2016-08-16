function username(){
	document.getElementById("uname").submit();
	return document.getElementById("name1").value
}
var next= 0;
function next(){
	next += 1;
	var words = document.getElementById("score");
	words.innerHTML = "Likes: " + thumbs;
}
function moveimage(){
	document.getElementById("img1").style.left="500px";
}

// function check(){
// 	document.getElementById("talk").checked=true;
// }

// function uncheck(){

// }

// function oncheck(){

// }
function radioOptions(id){
	var options=document.getElementById(id);
	if (id==="talk"){

		location.href='math_classroom1.html';
	}
	else if(id==="ditch"){
		location.href='outside_school.html';
		
	} 
	else if(id==="go"){
		location.href='math_classroom2.html';
	}
	// var choices=['outside_school.html','math_classroom.html','starting_page.html']
	// var formoptions = document.getElementById("challengesform");
	

	// for(var i=0; i <formoptions.length; i++){
	// 	if(formoptions[i].checked){
	// 		return choices[i];
	// 	}

	

}

function detentionOptions(id){
	var choice=document.getElementById(id);
	if (id==="talk1"){
		location.href="survey.html"
	}
	else{
		location.href="outside_school2.html"
	}

}
