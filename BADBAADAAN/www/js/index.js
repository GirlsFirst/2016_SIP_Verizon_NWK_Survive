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
function options(){
	if (value="check"){
		location.href='outside_school.html'
	}
	else if(value=uncheck){
		location.href='math_classroom.html'
	} 
	else{
		location.href='starting_page.html'
	}
}