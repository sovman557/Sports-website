// When your webpage has loaded, setup the gallery
document.addEventListener('DOMContentLoaded', setupgallery);

// Simple gallery setup
function setupgallery() {

  // ---
  // Variables
  // ---

  // Images DOM element
  var images = document.getElementById('gallery-images');

  // Next button DOM element
  var next = document.getElementById('gallery-next');

  // Previous button DOM element
  var prev = document.getElementById('gallery-prev');

  // Number of images in your gallery
  var imageCount = images.childElementCount;

  // Current image in view
  var currentImage = 1;

  // Width of your images
  var imageWidth = images.getElementsByTagName('img')[0].clientWidth;

  // ---
  // Event Listeners
  // ---

  // Previous button
  prev.addEventListener('click', function() {

    // If the image in view is not the first image...
    if(currentImage != 1) {

      // Decrement the current image reference
      --currentImage;

      // Move the previous image into view
      images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
    }
  });

  // Next button
  next.addEventListener('click', function() {

    // If the image in view is not the last image...
    if(currentImage != imageCount) {

      // Increment the current image reference
      ++currentImage;

      // Move the next image into view
      images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
    }
  });
}
