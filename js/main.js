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

  // Initial state
  gsap.set(images, { opacity: 0, scale: 2, rotation: 0 });

  const tl = gsap.timeline({ repeat: -1 });

  images.forEach((img) => {
    tl
      // 1. enter
      .to(img, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      })

      // 2. rotate bounce
      .to(
        img,
        {
          rotation: 45,
          duration: 0.5,
          repeat: 1,
          yoyo: true,
          ease: "power1.inOut",
        },
        "-=1",
      )

      // 3. hold
      .to(img, { duration: 2 })

      // 4. exit
      .to(img, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
      })

      // 5. reset
      .set(img, { scale: 2, rotation: 0 });
  });
});
