// Récupérez le lien de l'image à partir de son src
const imgUrl = "https://example.com/image.jpg";

// Créez une nouvelle instance de XMLHttpRequest
const xhr = new XMLHttpRequest();

// Ouvrez une requête HTTP HEAD à l'URL de l'image
xhr.open("HEAD", imgUrl);

// Envoyez la requête
xhr.send();

// Attendez la réponse
xhr.onreadystatechange = function () {
  // Vérifiez si la réponse est prête et si elle a réussi
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    // Récupérez la taille de l'image en octets à partir de l'en-tête de réponse Content-Length
    const sizeInBytes = xhr.getResponseHeader("Content-Length");

    // Convertissez la taille en mégaoctets en divisant par 1024 * 1024
    const sizeInMegabytes = sizeInBytes / (1024 * 1024);

    // Affichez un message d'avertissement si l'image est supérieure à 2 Mo
    if (sizeInMegabytes > 2) {
      alert("Attention, cette image est supérieure à 2 Mo !");
    }
  }
};
