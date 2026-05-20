class Carousel {
  constructor(element) {
    this.element = element;
    this.inner = element.querySelector('.carousel-inner');
    this.items = Array.from(element.querySelectorAll('.carousel-item'));
    this.dots = Array.from(element.querySelectorAll('.carousel-dot'));
    this.currentIndex = 0;
    this.autoplayInterval = null;
    this.autoplayDelay = 3500;

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

    // Start autoplay
    this.startAutoplay();
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
    // Reset autoplay timer when manually navigating
    this.pauseAutoplay();
    this.startAutoplay();
  }

  updateCarousel() {
    // Update inner transform
    const offset = -this.currentIndex * 100;
    this.inner.style.transform = `translateX(${offset}%)`;

    // Update active dot
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.updateCarousel();
  }

  startAutoplay() {
    if (this.autoplayInterval) return; // Already running
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
