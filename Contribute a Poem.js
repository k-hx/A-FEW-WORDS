function validateForm() {
	var poetName = document.contributePoem.poetName;
	var poemTitle = document.contributePoem.poemTitle;
    var poem = document.contributePoem.poem;
    

    if (poem_validation(poem)) {
        alert("Poem successfully submitted. Thank you! ♡");
        window.location.reload();
        return true;
    }
        
    return false;

}

function poem_validation(poem) {
    if(poem.value == "") {
        alert("Hmm...it seems that you haven't enter your poem.");
        poem.focus();
        return false;
    } else {
        return true;
    }
}