// Resume download functionality
document.getElementById("resume-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default behavior
  window.open("resume.pdf", "_blank"); // Open resume in new tab
});
