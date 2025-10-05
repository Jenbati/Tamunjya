  const galleryImages = document.querySelectorAll(".gallery-img");
      const lightboxImage = document.getElementById("lightboxImage");
      const prevBtn = document.getElementById("prevBtn");
      const nextBtn = document.getElementById("nextBtn");
      const lightboxModal = document.getElementById("lightboxModal");

      let currentIndex = 0;

      // Open modal with clicked image
      galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
          currentIndex = index;
          lightboxImage.src = img.dataset.bsImg;
        });
      });

      // Show previous image
      function showPrev() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        lightboxImage.src = galleryImages[currentIndex].dataset.bsImg;
      }

      // Show next image
      function showNext() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        lightboxImage.src = galleryImages[currentIndex].dataset.bsImg;
      }

      prevBtn.addEventListener("click", showPrev);
      nextBtn.addEventListener("click", showNext);

      // Keyboard navigation (only when modal is open)
      document.addEventListener("keydown", (e) => {
        if (lightboxModal.classList.contains("show")) {
          if (e.key === "ArrowLeft") {
            showPrev();
          } else if (e.key === "ArrowRight") {
            showNext();
          } else if (e.key === "Escape") {
            // Close modal on Esc
            const modalInstance = bootstrap.Modal.getInstance(lightboxModal);
            modalInstance.hide();
          }
        }
      });