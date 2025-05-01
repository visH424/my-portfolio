// Typing effect
const typingText = "Hi, I'm Vishal Kumar 👋";
let i = 0;
function type() {
  if (i < typingText.length) {
    document.getElementById("typing-text").textContent += typingText.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
window.addEventListener("DOMContentLoaded", type);

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  }
});
