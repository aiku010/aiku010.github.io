// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Scroll animations
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});

  card.style.transition = 'all 0.6s ease';
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
});
