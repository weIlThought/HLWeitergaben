// Funktion zum Öffnen des Modals
function openModal(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    modal.style.display = 'flex';  // Modal sichtbar machen
    modalImage.src = imageSrc;  // Bild im Modal setzen
  }
  
  // Funktion zum Schließen des Modals
  function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';  // Modal unsichtbar machen
  }
  
  // Event Listener für das Schließen des Modals, wenn auf das "×"-Symbol geklickt wird
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  
  // Event Listener für das Schließen des Modals, wenn außerhalb des Bildes geklickt wird
  document.getElementById('image-modal').addEventListener('click', function(event) {
    if (event.target === this) {
      closeModal();
    }
  });
  
  // Alle Bilder der Galerie auswählen und einen Klick-Event Listener hinzufügen
  const galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach(image => {
    image.addEventListener('click', function() {
      openModal(this.src);  // Modal mit dem Bild öffnen
    });
  });
  
  // Preloader entfernen, wenn die Seite geladen ist
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    preloader.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });
  