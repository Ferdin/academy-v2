document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle i");
  const menu = document.querySelector(".nav-menu");

  toggle.parentElement.addEventListener("click", function () {
    menu.classList.toggle("active");

    // switch icon
    if (menu.classList.contains("active")) {
      toggle.classList.remove("bi-list");
      toggle.classList.add("bi-x");
    } else {
      toggle.classList.remove("bi-x");
      toggle.classList.add("bi-list");
    }
  });

  const images = document.querySelectorAll(".na-hero-collage img");
  gsap.set(images, { opacity: 0, scale: 2 });

  const tl = gsap.timeline({ repeat: -1 });

  for (let i = 0; i < images.length; i++) {
    const current = images[i];
    const next = images[(i + 1) % images.length];
    const isLast = i === images.length - 1;

    tl
      // 1. current enters
      .to(current, { opacity: 1, scale: 1, duration: 1, ease: "power2.out" })
      .to(
        current,
        {
          rotation: 45,
          duration: 0.5,
          repeat: 1,
          yoyo: true,
          ease: "power1.inOut",
        },
        ">",
      ) // ">" ensures this rotation tween starts after previous tween ends
      // 2. hold for 2s
      .to(current, { duration: 2 })
      // 3. current exits
      .to(current, { opacity: 0, duration: 1 })
      // 4. next enters with same animation
      .to(next, { opacity: 1, scale: 1, duration: 1, ease: "power2.out" })
      .to(
        next,
        {
          rotation: 45,
          duration: 0.5,
          repeat: 1,
          yoyo: true,
          ease: "power1.inOut",
        },
        ">",
      )
      // 5. hold next
      .to(next, { duration: 2 })
      // 6. exit next
      .to(next, { opacity: 0, duration: 1 })
      // 7. reset both for loop
      .set([current, next], { opacity: 0, scale: 2, rotation: 0 });
  }
});
