console.log("To infinity and beyond.");

// write your JavaScript here
function rateMovie() {
  var x =
    "You rated Toy Story 4 with a score of " +
    document.getElementById("movieRating").value +
    "!";
  document.getElementById("rating").innerHTML = x;
}
