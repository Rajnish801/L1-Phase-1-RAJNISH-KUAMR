
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('notification').style.display = 'block';
});

function showSection(sectionId, element) {
    document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
    
    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
    }
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }
}
