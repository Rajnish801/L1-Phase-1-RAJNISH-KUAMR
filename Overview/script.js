function activateSection(target) {
    document.querySelectorAll('.page-section').forEach(p => p.style.display = 'none');
    const activeSection = document.getElementById(target);
    if (activeSection) activeSection.style.display = 'block';

    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    const navEl = document.querySelector(`[data-target="${target}"]`);
    if (navEl) navEl.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    activateSection('overview'); 
});

document.addEventListener('click', (e) => {
    const targetEl = e.target.closest('[data-target]');
    if (!targetEl) return;
    const target = targetEl.dataset.target;
    if (target === 'signout') return window.location.href = '../LoginPage/index.html';
    activateSection(target);
});