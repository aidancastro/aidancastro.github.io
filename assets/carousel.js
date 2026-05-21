class Carousel {
  constructor(element) {
    this.element = element;
    this.inner = element.querySelector('.carousel-inner');
    this.items = Array.from(element.querySelectorAll('.carousel-item'));
    this.dots = Array.from(element.querySelectorAll('.carousel-dot'));
    this.currentIndex = 0;
    this.autoplayInterval = null;
    this.autoplayDelay = 3500;
    this.adaptive = element.classList.contains('carousel--adaptive');

    this.init();
  }

  init() {
    // Attach dot click handlers
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });

    // Pause on hover
    this.element.addEventListener('mouseenter', () => this.pauseAutoplay());
    this.element.addEventListener('mouseleave', () => this.startAutoplay());

    // Adaptive sizing: size figure to the tallest image so layout stays stable
    // and every slide fits without cropping.
    if (this.adaptive) {
      this.setupAdaptiveSizing();
    }

    // Start autoplay
    this.startAutoplay();
  }

  setupAdaptiveSizing() {
    this.items.forEach(item => {
      const img = item.querySelector('img');
      if (!img) return;
      if (img.complete && img.naturalWidth) {
        this.fitToTallest();
      } else {
        img.addEventListener('load', () => this.fitToTallest(), { once: true });
        img.addEventListener('error', () => this.fitToTallest(), { once: true });
      }
    });
    // Initial pass in case some images were already cached
    this.fitToTallest();
  }

  // Set the figure's aspect-ratio to match the tallest image in the carousel
  // (the one with the smallest width/height). Wider images letterbox; the
  // figure never resizes between slides, so the surrounding page layout is
  // stable.
  fitToTallest() {
    if (!this.adaptive) return;
    let minRatio = null;
    this.items.forEach(item => {
      const img = item.querySelector('img');
      if (img && img.naturalWidth && img.naturalHeight) {
        const ratio = img.naturalWidth / img.naturalHeight;
        if (minRatio === null || ratio < minRatio) {
          minRatio = ratio;
        }
      }
    });
    if (minRatio !== null) {
      this.element.style.aspectRatio = String(minRatio);
    }
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    this.pauseAutoplay();
    this.startAutoplay();
  }

  updateCarousel() {
    const offset = -this.currentIndex * 100;
    this.inner.style.transform = `translateX(${offset}%)`;
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateCarousel();
  }

  startAutoplay() {
    if (this.autoplayInterval) return;
    this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplayDelay);
  }

  pauseAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}

// Initialize all carousels on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach(carousel => {
    new Carousel(carousel);
  });
});
