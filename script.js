console.log("Welcome to NOOR WEB3");

// Fade in page
window.onload = function () {
    document.body.style.opacity = "1";
};

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Open / Close Menu
menuBtn.onclick = function (e) {
    e.stopPropagation();
    navMenu.classList.toggle("active");
};

// Prevent closing when clicking inside menu
navMenu.onclick = function (e) {
    e.stopPropagation();
};

// Close menu when clicking anywhere else
document.onclick = function () {
    navMenu.classList.remove("active");
};

// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Scroll Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});
const words = [
  "Blockchain Explorer",
  "Web3 Project Tester",
  "Crypto Researcher",
  "AI Enthusiast"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;
let lastTime = 0;

const typingSpeed = 55;
const deletingSpeed = 28;
const pauseTime = 1500;

function animate(time) {
  if (!lastTime) lastTime = time;

  const delay = deleting ? deletingSpeed : typingSpeed;

  if (time - lastTime >= delay) {
    const word = words[wordIndex];

    if (!deleting) {
      charIndex++;
      typing.textContent = word.substring(0, charIndex);

      if (charIndex === word.length) {
        deleting = true;
        lastTime = time + pauseTime;
      } else {
        lastTime = time;
      }
    } else {
      charIndex--;
      typing.textContent = word.substring(0, charIndex);

      if (charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
      lastTime = time;
    }
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
