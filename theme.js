function applyTheme(theme) {
	const body = document.body;
	const toggleButton = document.getElementById('theme-toggle');

	if (theme === 'light') {

		body.classList.add('light-mode');
		if (toggleButton) {
			toggleButton.textContent = '☀️';
			toggleButton.title = 'Ativar modo escuro';
		}
	} else {
		body.classList.remove('light-mode');
		if (toggleButton) {
			toggleButton.textContent = '🌙';
			toggleButton.title = 'Ativar modo claro';
		}
	}

	localStorage.setItem('theme-mode', theme);
}

function toggleTheme() {
	const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
	const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
	applyTheme(nextTheme);
}

function initTheme() {
	const savedTheme = localStorage.getItem('theme-mode') || 'dark';
	applyTheme(savedTheme);

	const toggleButton = document.getElementById('theme-toggle');
	if (toggleButton) {
		toggleButton.addEventListener('click', toggleTheme);
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initTheme);
} else {
	initTheme();
}
