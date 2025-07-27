// Toggle Sound ON/OFF placeholder
console.log("Ready to add interactivity (scroll, sound toggle, etc.)");
// Show About section on click
document.getElementById("about-link").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("about").classList.remove("hidden");
  window.scrollTo({
    top: document.getElementById("about").offsetTop,
    behavior: "smooth"
  });
});
// Show Skills Section
document.getElementById("skills-link").addEventListener("click", function (e) {
  e.preventDefault();
  const skills = document.getElementById("skills");
  skills.classList.remove("hidden");
  window.scrollTo({
    top: skills.offsetTop,
    behavior: "smooth"
  });
});

// Close Skills Section
document.getElementById("close-skills").addEventListener("click", function () {
  document.getElementById("skills").classList.add("hidden");
});
// Close About Section
document.getElementById("close-about").addEventListener("click", function () {
  document.getElementById("about").classList.add("hidden");
});
function openModal() {
  document.getElementById("contactModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}
window.onclick = function(event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}