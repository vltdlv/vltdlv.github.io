document.addEventListener("DOMContentLoaded", function () {
  var imageLink = document.querySelector(".image-link");
  var img = imageLink.querySelector(".boxes");
  var originalSrc = img.getAttribute("src"); // Memorizza l'attributo src originale

  imageLink.addEventListener("mouseover", function () {
    var newSrc = img.getAttribute("data-hover-src");
    img.setAttribute("src", newSrc);
  });

  imageLink.addEventListener("mouseout", function () {
    img.setAttribute("src", originalSrc); // Ripristina l'immagine originale
  });
});
