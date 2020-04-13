function displayChineseVersion() {
    document.getElementById("poemEn").style.display = "none";
    document.getElementById("poemCh").style.display = "block";
    document.getElementById("displayChineseVersion").style.display = "none";
    document.getElementById("displayEnglishVersion").style.display = "block";
}

function displayEnglishVersion() {
    document.getElementById("poemEn").style.display = "block";
    document.getElementById("poemCh").style.display = "none";
    document.getElementById("displayChineseVersion").style.display = "block";
    document.getElementById("displayEnglishVersion").style.display = "none";
}