const lightBtn = document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');
const body = document.body;

// Cargar el tema guardado o por defecto claro
const savedTheme = localStorage.getItem('theme') || 'light-mode';
body.classList.add(savedTheme);

// Modo claro
lightBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
});

// Modo oscuro
darkBtn.addEventListener('click', () => {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
});
