

const textElement = document.getElementById("intro-text");
const texts = ["writes codes.", "thinks out of the box.", "solves problems."];
let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[currentTextIndex];
    if (!isDeleting && currentCharIndex <= currentText.length) {
        textElement.innerHTML = currentText.substring(0, currentCharIndex);
        currentCharIndex++;
        setTimeout(typeText, 50); // Adjust typing speed here
    } else if (isDeleting && currentCharIndex >= 0) {
        textElement.innerHTML = currentText.substring(0, currentCharIndex);
        currentCharIndex--;
        setTimeout(typeText, 50); // Adjust erasing speed here
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
        setTimeout(typeText, 600); // Time before switching to the next text
    }
}

// Start typing effect
setTimeout(typeText, 400);

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

