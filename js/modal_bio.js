// Get the modal
var research_modal = document.getElementById('researchModal');

// Get the button that opens the research_modal
// var btn = document.getElementById("myBtn");
var research_modal_link = document.getElementById("research")

// Get the <span> element that closes the research_modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the research_modal 
// btn.onclick = function() {
//     research_modal.style.display = "block";
// }
research_modal_link.onclick = function() {
    research_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the research_modal
span.onclick = function() {
    research_modal.style.display = "none";
}

// When the user clicks anywhere outside of the research_modal, close it
window.onclick = function(event) {
    if (event.target == research_modal) {
        research_modal.style.display = "none";
    }
}



// // Get the modal
// var cv_modal = document.getElementById('my_cv_Modal');

// // Get the button that opens the modal
// // var btn = document.getElementById("myBtn");
// var cv_modal_link = document.getElementById("cv")

// // Get the <span> element that closes the modal
// var cv_span = document.getElementsByClassName("cv_close")[0];

// // When the user clicks on the button, open the modal 
// // btn.onclick = function() {
// //     modal.style.display = "block";
// // }
// cv_modal_link.onclick = function() {
//     cv_modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// cv_span.onclick = function() {
//     cv_modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         cv_modal.style.display = "none";
//     }
// }