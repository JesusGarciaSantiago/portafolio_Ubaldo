function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleButton = document.getElementById('toggleButton');
    
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        content.classList.remove('expanded');
        toggleButton.style.left = '20%';
    } else {
        sidebar.classList.add('hidden');
        content.classList.add('expanded');
        toggleButton.style.left = '10px';
    }
}

function navigateTo(page) {
    window.location.href = page;
}
