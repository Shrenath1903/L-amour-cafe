// Nav scroll state
const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Hero slider
const slides = document.querySelectorAll('.hero-slide');
const dotsWrap = document.getElementById('slideDots');
let current = 0;
slides.forEach((s, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => showSlide(i));
  dotsWrap.appendChild(dot);
});
function showSlide(i){
  slides[current].classList.remove('active');
  dotsWrap.children[current].classList.remove('active');
  current = i;
  slides[current].classList.add('active');
  dotsWrap.children[current].classList.add('active');
}
setInterval(() => showSlide((current + 1) % slides.length), 5000);

// Floating hearts in hero
const heartsLayer = document.getElementById('heartsLayer');
const heartSymbols = ['♥','♡'];
function spawnHeart(){
  const h = document.createElement('span');
  h.className = 'heart';
  h.textContent = heartSymbols[Math.floor(Math.random()*heartSymbols.length)];
  h.style.left = Math.random()*100 + '%';
  const duration = 9 + Math.random()*8;
  h.style.animationDuration = duration + 's';
  h.style.fontSize = (12 + Math.random()*14) + 'px';
  heartsLayer.appendChild(h);
  setTimeout(() => h.remove(), duration*1000);
}
setInterval(spawnHeart, 900);
for(let i=0;i<5;i++) setTimeout(spawnHeart, i*400);

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-scale');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, {threshold:.15});
revealEls.forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 90 + 'ms';
  io.observe(el);
});

// Lightbox for gallery and about images
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.querySelector('.lightbox-close');

function openLightbox(src) {
  lightboxImage.src = src;
  lightboxModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightboxModal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) closeLightbox();
});

// Add click listeners to gallery items
document.querySelectorAll('.g-item img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function() {
    openLightbox(this.src);
  });
});

// Add click listeners to about section images
document.querySelectorAll('.about-media img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function() {
    openLightbox(this.src);
  });
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
    closeLightbox();
  }
});
