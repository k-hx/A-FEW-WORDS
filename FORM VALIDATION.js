function validateForm() {
	var poetName = document.forms["contributePoem"]["poetName"].value;
	var poemTitle = document.forms["contributePoem"]["poemTitle"].value;
	var poem = document.forms["contributePoem"]["poem"].value;

	if(poetName.length > 45) {
		alert("Name cannot be longer than 45 characters.Thank you.");
		return false;
	}

	if(poemTitle.length > 45) {
		alert("Poem title cannot be longer than 45 characters. Thank you.");
		return false;
	}

	if (poem == "") {
		alert("Hmm... it seems that you haven't enter your poem yet.");
		return false;
	}
}
