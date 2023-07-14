document.addEventListener('DOMContentLoaded', function() {
    var player = videojs('my-video');
  
    // Personalizar aspectos del reproductor
    player.poster('ruta_al_poster.jpg');
    player.controlBar.addChild('PlaybackRateMenuButton');
    player.controlBar.addChild('ResolutionSwitcher');
  
    // Eventos personalizados
    player.on('play', function() {
      console.log('El video ha comenzado a reproducirse');
    });
  
    player.on('pause', function() {
      console.log('El video está en pausa');
    });
  
    // Personalizar controles adicionales
    player.ready(function() {
      var myButton = document.createElement('button');
      myButton.className = 'vjs-custom-button vjs-control';
      myButton.innerHTML = 'Mi Botón';
      myButton.addEventListener('click', function() {
        // Lógica personalizada para el botón
        console.log('Se ha hecho clic en el botón personalizado');
      });
      player.controlBar.addChild(myButton);
    });
  });
  