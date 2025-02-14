
document.addEventListener('DOMContentLoaded', function() {
  
  const exploreButton = document.getElementById("explore");

  if (exploreButton) {
    exploreButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
      window.location.href = "login.html";
    });

  } else {
    console.error("The element with ID 'explore' was not found.");
  }
});
