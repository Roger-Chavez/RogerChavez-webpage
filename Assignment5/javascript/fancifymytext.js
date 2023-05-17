// document
//   .getElementById("bigger-button")
//   .addEventListener("click", makeBiggerText);
//   document
//   .getElementById("")
//   .addEventListener("click", makeBiggerText);

function makeBiggerText() {
  document.getElementById("myText").style.fontSize = "24pt";
}

function toggleFancyShmancyText() {
  if (document.getElementById("fancy-shmancy").checked) {
    document.getElementById("myText").style.fontWeight = "bold";
    document.getElementById("myText").style.color = "blue";
    document.getElementById("myText").style.textDecoration = "underline";
  } else {
    document.getElementById("myText").style.fontWeight = "";
    document.getElementById("myText").style.color = "";
    document.getElementById("myText").style.textDecoration = "";
  }
}

function makeMytextMoo() {
  var myText = document.getElementById("myText").value;
  var myTextUpper = myText.toUpperCase();
  var splitText = myTextUpper.split(".");
  var mooText = splitText.join("-Moo");
  document.getElementById("myText").value = mooText;
}
