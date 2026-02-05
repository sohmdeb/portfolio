/* Loader */

let load = 0, frame = 0;

const loadText = document.getElementById("loadText");
const bar = document.getElementById("barFill");
const frameText = document.getElementById("frameText");
const loader = document.getElementById("loader");

window.addEventListener("load", () => {

const int = setInterval(() => {

load += Math.floor(Math.random() * 5) + 1;
if (load > 100) load = 100;

frame += Math.floor(Math.random() * 200) + 50;

loadText.innerText = `Rendering ${load}%`;
frameText.innerText = `Frame ${frame}`;
bar.style.width = load + "%";

if (load === 100) {
clearInterval(int);
setTimeout(() => loader.style.display = "none", 500);
}

}, 60);

});


/* Glow */

document.addEventListener("mousemove", e => {
document.body.style.setProperty("--x", e.clientX + "px");
document.body.style.setProperty("--y", e.clientY + "px");
});


/* Scroll Reveal */

const sections = document.querySelectorAll(".section");

const obs = new IntersectionObserver(entries => {
entries.forEach(e => {
if (e.isIntersecting) e.target.classList.add("show");
});
}, { threshold: 0.15 });

sections.forEach(s => obs.observe(s));


/* Theme */

document.getElementById("theme").addEventListener("change", () => {
document.body.classList.toggle("light");
});



/* Typing Effect */

const texts = [
"I'm a video editor.",
"I'm a graphic designer.",
"I'm an enthusiast.",
"I create messy timelines."
"I create magic."
];

let count = 0, index = 0, current = "", letter = "";
const speed = 90;

(function type() {

if (count === texts.length) count = 0;

current = texts[count];
letter = current.slice(0, ++index);

document.getElementById("typed").textContent = letter;

if (letter.length === current.length) {

setTimeout(() => {

let del = setInterval(() => {

document.getElementById("typed").textContent =
current.slice(0, --index);

if (index === 0) {
clearInterval(del);
count++;
type();
}

}, 50);

}, 1200);

} else {
setTimeout(type, speed);
}

})();
