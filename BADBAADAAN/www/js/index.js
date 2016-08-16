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
	
	if (id==="talk"){

		location.href='math_classroom.html';
	}
	else if(id==="ditch"){
		location.href='outside_school.html'
		
	} 
	else{
		location.href='math_classroom.html'
	}
	// var choices=['outside_school.html','math_classroom.html','starting_page.html']
	// var formoptions = document.getElementById("challengesform");
	

	// for(var i=0; i <formoptions.length; i++){
	// 	if(formoptions[i].checked){
	// 		return choices[i];
	// 	}

	

}
