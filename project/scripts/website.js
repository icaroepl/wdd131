const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Exibe a data de última modificação do arquivo
const lastModifiedP = document.getElementById('lastmodified');
if (lastModifiedP) {
    lastModifiedP.textContent = `Last Modification: ${document.lastModified}`;
}