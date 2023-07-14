const apiKey = '1eDQKJMkYcXx9ev8bQKLwtZhe0ghHUfaD3u7bnkeraKzU1DS0vBCkcCJ';
let currentPage = 1;

function fetchImages() {
  const apiUrl = `https://api.pexels.com/v1/search?query=nature&per_page=10&page=${currentPage}`;

  // Realizar solicitud a la API de Pexels
  fetch(apiUrl, {
    headers: {
      Authorization: apiKey
    }
  })
    .then(response => response.json())
    .then(data => {
      const gallery = $('#gallery');

      // Limpiar la galería antes de agregar las nuevas imágenes
      gallery.html('');

      // Recorrer las imágenes de la respuesta
      data.photos.forEach(photo => {
        // Crear un elemento de imagen y establecer los atributos src y estilos
        const img = $('<img>').attr('src', photo.src.large)
                               .css({
                                  width: '300px',
                                  height: '200px'
                               });
        
        // Agregar la imagen al carrusel
        gallery.append(img);
      });

      // Inicializar el carrusel utilizando Slick Carousel
      gallery.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
        nextArrow: '<button type="button" class="slick-next">&#8594;</button>'
      });
    })
    .catch(error => console.log(error));
}

function generateNewImages() {
  currentPage++;
  fetchImages();
}

$('#generateBtn').on('click', generateNewImages);

// Cargar las imágenes al iniciar la página
fetchImages();
