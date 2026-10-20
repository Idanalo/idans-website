document.addEventListener('DOMContentLoaded', () => {
  const siteNav = document.getElementById('site-nav');
  const openBtn = document.getElementById('menu-open-btn');
  const closeBtn = document.getElementById('menu-close-btn');

  // פתיחה וסגירה של תפריט ה-Glassmorphism
  if (openBtn && closeBtn && siteNav) {
    openBtn.addEventListener('click', () => siteNav.classList.add('open'));
    closeBtn.addEventListener('click', () => siteNav.classList.remove('open'));
  }

  // --- EASTER EGGS מתקדמים ---

  // 1. הודעה קונסולת מפתחים מתוחכמת
  console.log("%c⚡ מפקדת סייבר - עידן אלון", "font-weight: bold; font-size: 22px; color: #0284c7; background: #0f172a; padding: 6px 12px; border-radius: 6px;");
  console.log("אהלן! אם פתחת את ה-F12 כנראה שאתה מבין דבר או שניים בקוד. נסה ללחוץ על מקש M במקלדת או להקליד את קוד קונאמי (חצים למעלה למטה...).");

  // 2. מצב מטריקס סודי (לחיצה על מקש M)
  let matrixMode = false;
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'm' && document.activeElement.tagName !== 'INPUT') {
      matrixMode = !matrixMode;
      if (matrixMode) {
        document.documentElement.style.setProperty('--bg-color', '#050505');
        document.documentElement.style.setProperty('--text-main', '#00ff66');
        document.documentElement.style.setProperty('--header-bg', '#001105');
        document.body.style.fontFamily = "'Courier New', monospace";
        alert('🟢 Matrix Mode Activated: Welcome to the real world, Idan.');
      } else {
        location.reload(); // מחזיר למצב רגיל
      }
    }
  });

  // 3. מודל לחיצה כפולה על הלוגו (אפקט נפילה)
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.style.cursor = 'pointer';
    logo.addEventListener('dblclick', () => {
      document.body.style.transition = 'transform 2s ease-in, filter 2s ease-in';
      document.body.style.transform = 'translateY(100vh) rotate(15deg)';
      document.body.style.filter = 'blur(5px)';
      setTimeout(() => {
        alert('⚠️ System Error: Gravity Malfunction! (מרענן את המערכת...)');
        location.reload();
      }, 2000);
    });
  }

  // 4. Konami Code משודרג
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let konamiPosition = 0;
  
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === konamiCode[konamiPosition].toLowerCase() || e.key === konamiCode[konamiPosition]) {
      konamiPosition++;
      if (konamiPosition === konamiCode.length) {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.background = 'rgba(2, 132, 199, 0.95)';
        overlay.style.color = '#ffffff';
        overlay.style.display = 'flex';
        overlay.style.flexDirection = 'column';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '99999';
        overlay.style.fontSize = '2.5rem';
        overlay.style.fontWeight = 'bold';
        overlay.innerHTML = '🎉 CONGRATULATIONS!<br><span style="font-size: 1.2rem; margin-top: 1rem;">You found the ultimate Easter Egg. Product Manager Level: GOD.</span>';
        document.body.appendChild(overlay);

        setTimeout(() => {
          overlay.remove();
        }, 4000);

        konamiPosition = 0;
      }
    } else {
      konamiPosition = 0;
    }
  });
});