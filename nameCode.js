var voteCast = "false" ; //creates a variable set to an empty string
var dict={

	"Ada Lovelace": "true",
	"Grace Hopper": voteCast,
	
};

	
//var value;
function checkCode(){
	var name = document.getElementById("aCode").value; //sets variable code equal to whatever user entered into text box
	
	if(name in dict){ // if code entered is in valid (in dictionary), take user to ballot page
			var temp = dict[name];
			if( temp == "false"){
				window.location.href = "ballot_page.html";
				temp= "true"; 
			}
			else if (temp == "true"){
				alert("Your vote has already been submitted.");
				//window.location.href = "nameCode.html";
			}
		
	}
	else{ //if code not valid (not in dictionary) tell user to enter a valid code
		alert("Sorry, that name is not in our system. Please check your spelling and try again!"); 
		
	}
}