const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { opacity: 0, transform: 'translateY(22px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 650, fill: 'both', easing: 'ease-out' }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section .container, .cta').forEach((element) => {
  observer.observe(element);
});

// Preselect and focus the correct inquiry type from CTA query parameters.
const inquirySelect = document.querySelector('#inquiry-select');
const inquiryForm = document.querySelector('#inquiry-form');
if (inquirySelect) {
  const inquiry = new URLSearchParams(window.location.search).get('inquiry');
  const allowed = ['representation', 'partnership', 'general'];
  if (allowed.includes(inquiry)) inquirySelect.value = inquiry;

  if (window.location.hash === '#inquiry-form') {
    window.setTimeout(() => {
      inquiryForm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      inquirySelect.focus({ preventScroll: true });
    }, 120);
  }
}
