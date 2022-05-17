/*Start of Show and Hide Sections found in StackOverFlow = https://stackoverflow.com/questions/8211128/multiple-distinct-pages-in-one-html-file*/
function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}

/*Start of Rules Modal*/

//Grab the Modal
var rulesModal = document.getElementById('openRulesModal');

//Grab the button that opens the modal - This is in the navBar
var rulesModalBtn = document.getElementById('openRules');

//Get the <span> element that closes the modal
var closeRulesModal = document.getElementsByClassName('closeRulesModal')[0];

//When the user clicks on the button, open the Rules Modal
rulesModalBtn.onclick = function(){
    rulesModal.style.display = "block";
}

//When the user clicks on <span> (x), then close the rulesModal
closeRulesModal.onclick = function() {
    rulesModal.style.display = "none";
}

//When the user clicks anywhere outside the rulesModal, then close it
window.onclick = function(event) {
    if (event.target == rulesModal) {
    rulesModal.style.display = "none";
    }
}

/*End of Rules Modal*/