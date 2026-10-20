document.addEventListener('DOMContentLoaded', () => {
  const siteNav = document.getElementById('site-nav');
  const openBtn = document.getElementById('menu-open-btn');
  const closeBtn = document.getElementById('menu-close-btn');

  // פתיחה וסגירה של תפריט מובייל
  if (openBtn && closeBtn && siteNav) {
    openBtn.addEventListener('click', () => {
      siteNav.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
      siteNav.classList.remove('open');
    });
  }

  // אלרט "תגיד שלום"
  const helloBtn = document.getElementById('hello-btn');
  const nameInput = document.getElementById('user-name');
  
  if (helloBtn && nameInput) {
    helloBtn.addEventListener('click', () => {
      const typedName = nameInput.value.trim();
      if (typedName) {
        alert(`שלום, ${typedName}`);
      } else {
        alert('שלום!');
      }
    });
  }
});