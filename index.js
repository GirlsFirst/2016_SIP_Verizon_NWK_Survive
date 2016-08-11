function username(){
	document.getElementById("uname").submit();
	return document.getElementById("name1").value
}
var next= 0;
function next(){
	next += 1;
	var words = document.getElementById("score");
	words.innerHTML = "Likes: " + thumbs;