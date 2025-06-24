// main.js - Interactividad global

// Modo claro/oscuro
function setMode(mode) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(mode);
    localStorage.setItem('theme', mode);
    updateThemeButtons();
  }
  
  function updateThemeButtons() {
    const btnLight = document.getElementById('btnLightMode');
    const btnDark = document.getElementById('btnDarkMode');
    if (document.body.classList.contains('dark-mode')) {
      if (btnLight) btnLight.style.display = 'inline-block';
      if (btnDark) btnDark.style.display = 'none';
    } else {
      if (btnLight) btnLight.style.display = 'none';
      if (btnDark) btnDark.style.display = 'inline-block';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    // Animaciones de entrada
    document.querySelectorAll('main, .container').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(30px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s, transform 0.8s';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 200);
    });
  
    // Crear botones de modo claro/oscuro en el nav
    const nav = document.querySelector('nav ul');
    if (nav) {
      let btnContainer = document.querySelector('.theme-toggle-btns');
      if (!btnContainer) {
        btnContainer = document.createElement('li');
        btnContainer.className = 'theme-toggle-btns';
        nav.appendChild(btnContainer);
      } else {
        btnContainer.innerHTML = '';
      }
  
      const btnLight = document.createElement('button');
      btnLight.textContent = '☀️';
      btnLight.title = 'Modo Claro';
      btnLight.id = 'btnLightMode';
      btnLight.onclick = () => setMode('light-mode');
  
      const btnDark = document.createElement('button');
      btnDark.textContent = '🌙';
      btnDark.title = 'Modo Oscuro';
      btnDark.id = 'btnDarkMode';
      btnDark.onclick = () => setMode('dark-mode');
  
      btnContainer.appendChild(btnLight);
      btnContainer.appendChild(btnDark);
    }
  
// Validación de formularios con mensaje de éxito
const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // evitar que recargue la página

    let valid = true;
    let nombre = form.querySelector('input[name="nombre"]');
    let mensaje = form.querySelector('textarea[name="mensaje"]');

    form.querySelectorAll('input[required], textarea[required], select[required]').forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.border = '2px solid #e74c3c';
      } else {
        input.style.border = '';
      }
    });

    if (!valid) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    // Mostrar mensaje de éxito
    const mensajeFinal = document.createElement('div');
    mensajeFinal.style.padding = '1.5rem';
    mensajeFinal.style.marginTop = '1rem';
    mensajeFinal.style.background = '#dff0d8';
    mensajeFinal.style.color = '#3c763d';
    mensajeFinal.style.borderRadius = '8px';
    mensajeFinal.style.textAlign = 'center';
    mensajeFinal.textContent = `Gracias por su contacto, ${nombre.value}. En breve le estaré respondiendo.`;

    form.replaceWith(mensajeFinal);
  });
});

  
    // Aplicar el modo guardado
    const saved = localStorage.getItem('theme');
    if (saved === 'dark-mode' || saved === 'light-mode') {
      setMode(saved);
    } else {
      setMode('light-mode');
    }
    updateThemeButtons();
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');
  
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  
    // Cerrar menú si se hace clic fuera del overlay
    document.addEventListener('click', function (e) {
      if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
      ) {
        navLinks.classList.remove('open');
      }
    });
  });
  