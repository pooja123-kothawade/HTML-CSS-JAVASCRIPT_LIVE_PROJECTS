// script.js
// Array of specials (images + titles)
const images = [
  { src: "assets/menu/square.png", title: "square.png" },
  { src: "assets/menu/browser.png", title: "browser.png" },
   { src: "assets/menu/png.png", title: "png.png" },
  { src: "assets/menu/wireframe.png", title: "wireframe.png" },
  { src: "assets/menu/one.png", title: "one.png" },
  { src: "assets/menu/two.png", title: "two.png" },
  { src: "assets/menu/three.png", title: "three.png" },
  { src: "assets/menu/four.png", title: "four.png" }
];

 let currentIndex = 0;

    document.body.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      document.getElementById("special-image").src = images[currentIndex].src;
      document.getElementById("special-title").textContent = images[currentIndex].title;

    })

 


