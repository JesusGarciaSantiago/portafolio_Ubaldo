function showSummary(title, summary) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-summary').innerText = summary;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
