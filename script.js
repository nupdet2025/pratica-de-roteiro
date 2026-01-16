const tx = document.querySelectorAll('textarea');

// Ajuste dinâmico na tela enquanto digita
tx.forEach(textarea => {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});

document.getElementById('scriptForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Copia o conteúdo das textareas para as divs de impressão
    document.getElementById('print-gancho').innerText = document.getElementById('gancho').value;
    document.getElementById('print-conteudo').innerText = document.getElementById('conteudo').value;
    document.getElementById('print-cta').innerText = document.getElementById('cta').value;

    setTimeout(() => {
        window.print();
    }, 200);
});

function limparCampos() {
    if(confirm("Deseja realmente limpar todo o roteiro?")) {
        document.getElementById('scriptForm').reset();
        tx.forEach(textarea => {
            textarea.style.height = 'auto';
        });
        // Limpa também as divs de impressão
        document.querySelectorAll('.print-text').forEach(div => div.innerText = '');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}