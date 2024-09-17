let currentIndex = 0;
let intervalId;

// Function to change the main image
function changeImage(imageSrc, index) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = imageSrc;
  currentIndex = index; // Update the current index
  updateActiveThumbnail();

  // Reset the auto-slide interval
  clearInterval(intervalId);
  startAutoSlide();
}

// Function to start the auto-slide
function startAutoSlide() {
  intervalId = setInterval(() => {
    nextImage();
  }, 5000); // Change image every 3 seconds
}

// Function to show the next image
function nextImage() {
  const thumbnails = document.querySelectorAll(".preview-image");
  currentIndex = (currentIndex + 1) % thumbnails.length;
  const mainImage = document.getElementById("mainImage");
  mainImage.src = thumbnails[currentIndex].dataset.src;
  updateActiveThumbnail();
}

// Function to show the previous image
function prevImage() {
  const thumbnails = document.querySelectorAll(".preview-image");
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  const mainImage = document.getElementById("mainImage");
  mainImage.src = thumbnails[currentIndex].dataset.src;
  updateActiveThumbnail();
}

// Function to update the active thumbnail
function updateActiveThumbnail() {
  const thumbnails = document.querySelectorAll(".preview-image");
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.classList.remove("active");
    if (index === currentIndex) {
      thumbnail.classList.add("active");
    }
  });
}

// Initialize slider by setting the first image and creating thumbnails
function initializeSlider() {
  const thumbnails = document.querySelectorAll(".preview-image");
  if (thumbnails.length > 0) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnails[0].dataset.src; // Set the initial main image
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () =>
        changeImage(thumbnail.dataset.src, index)
      );
    });
  }
  updateActiveThumbnail(); // Update the first thumbnail as active
  startAutoSlide(); // Start the auto-slide feature
}

// Start the slider setup when the page loads
document.addEventListener("DOMContentLoaded", initializeSlider);
