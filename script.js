document.addEventListener("DOMContentLoaded", function () {
  // Seleziona tutti gli elementi con la classe .image-link
  var imageLinks = document.querySelectorAll(".image-link");

  // Itera su ogni elemento .image-link
  imageLinks.forEach(function (imageLink) {
    // Seleziona l'immagine all'interno di ciascun .image-link
    var img = imageLink.querySelector(".boxes");
    var originalSrc = img.getAttribute("src");

    // Aggiungi l'evento mouseover per cambiare l'immagine al passaggio del mouse
    imageLink.addEventListener("mouseover", function () {
      var newSrc = img.getAttribute("data-hover-src");
      img.setAttribute("src", newSrc);
    });

    // Aggiungi l'evento mouseout per ripristinare l'immagine originale
    imageLink.addEventListener("mouseout", function () {
      img.setAttribute("src", originalSrc);
    });
  });
});
