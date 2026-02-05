document.addEventListener("DOMContentLoaded", () => {

  /* ================= LOADER ================= */

  let load = 0;
  let frame = 0;

  const loadText = document.getElementById("loadText");
  const bar = document.getElementById("barFill");
  const frameText = document.getElementById("frameText");
  const loader = document.getElementById("loader");

  if (loader) {

    const int = setInterval(() => {

      load += Math.floor(Math.random() * 5) + 1;
      if (load > 100) load = 100;

      frame += Math.floor(Math.random() * 200) + 50;

      loadText.textContent = `Rendering ${load}%`;
      frameText.textContent = `Frame ${frame}`;
      bar.style.width = load + "%";

      if (load === 100) {
        clearInterval(int);

        setTimeout(() => {
          loader.style.opacity = "0";
          loader.style.pointerEvents = "none";

          setTimeout(() => {
            loader.style.display = "none";
          }, 400);

        }, 300);
      }

    }, 50);

    /* Safety fallback */
    setTimeout(() => {
      loader.style.display = "none";
    }, 5000);
  }


  /* ================= GLOW ================= */

  document.addEventListener("mousemove", e => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
  });


  /* ================= SCROLL REVEAL ================= */

  const sections = document.querySelectorAll(".section");

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(sec => obs.observe(sec));


  /* ================= THEME ================= */

  const themeToggle = document.getElementById("theme");

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      document.body.classList.toggle("light");
    });
  }


  /* ================= TYPING ================= */

  const texts = [
    "I'm a video editor",
    "I'm a graphic designer",
    "I'm an enthusiast",
    "I create magic"
  ];

  let count = 0;
  let index = 0;

  const speed = 90;
  const typed = document.getElementById("typed");

  function type() {

    if (!typed) return;

    if (count === texts.length) count = 0;

    const current = texts[count];
    const letter = current.slice(0, ++index);

    typed.textContent = letter;

    if (letter.length === current.length) {

      setTimeout(() => {

        const del = setInterval(() => {

          typed.textContent = current.slice(0, --index);

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
  }

  type();


  /* ================= HAMBURGER ================= */

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  if (hamburger && mobileMenu) {

    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });

    // Close menu on link click
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });

  }

});
