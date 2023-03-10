// Display the rating selection (click+save) :
const selectedRating = document.querySelectorAll(".number-circle");

for (let i = 0; i < selectedRating.length; i++) {
    selectedRating[i].addEventListener("click", function(e) {
      let prevSelectedRating = document.querySelector(".checked");
      if (prevSelectedRating) {
        prevSelectedRating.classList.remove("checked");
        e.target.classList.add("checked");
      } else {
        e.target.classList.add("checked");
      }
    });   
}



// Function to display Thanks and rating result :
function showThanks() {
    var divShowThanks = document.getElementById("thanks-state");
    var divHideRating = document.getElementById("rating-state");
    
    divHideRating.style.display = "none";
    divShowThanks.style.display = "block";
    getRating(val);
}

function getRating(val) {
    document.getElementById("result").innerHTML = val;
}


