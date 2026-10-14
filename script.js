// Manager Library - Presentation Page Script
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for anchor navigation links
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Animated metric counters
  const counters = document.querySelectorAll('.stat-number');
  const animateCounter = (el) => {
    const text = el.innerText;
    // Only animate if purely numeric
    if (/^\d+$/.test(text)) {
      const target = parseInt(text, 10);
      let count = 0;
      const step = Math.max(1, Math.floor(target / 20));
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          el.innerText = target;
          clearInterval(interval);
        } else {
          el.innerText = count;
        }
      }, 40);
    }
  };

  counters.forEach(animateCounter);
});
