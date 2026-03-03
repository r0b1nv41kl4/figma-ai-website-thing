// Accordion
function toggleProcess(header) {
  var item = header.parentElement;
  var wasOpen = item.classList.contains('open');
  document.querySelectorAll('.process-item').forEach(function(i) { i.classList.remove('open'); });
  if (!wasOpen) item.classList.add('open');
}

// Testimonials
var testiIndex = 0;
var track = document.getElementById('testiTrack');
var dots = document.querySelectorAll('.testi-dot');
var total = 4;

function updateTesti() {
  var cardW = track.parentElement.offsetWidth;
  var shift = testiIndex * (cardW / 2 + 14);
  track.style.transform = 'translateX(-' + shift + 'px)';
  dots.forEach(function(d, i) { d.classList.toggle('active', i === testiIndex); });
}

function nextTesti() {
  testiIndex = (testiIndex + 1) % total;
  updateTesti();
}

function prevTesti() {
  testiIndex = (testiIndex - 1 + total) % total;
  updateTesti();
}

function goTesti(i) {
  testiIndex = i;
  updateTesti();
}

// Scroll fade-in
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(e) {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card,.team-card,.process-item,.case-item').forEach(function(el) {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});
