// Ajuste dinâmico da altura dos campos de texto
const tx = document.querySelectorAll('textarea');
tx.forEach(textarea => {
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});

// Lógica de envio e impressão
document.getElementById('scriptForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Pequeno delay para garantir que o foco saia do botão antes de imprimir
    setTimeout(() => {
        window.print();
    }, 500);
});

// Função para limpar o formulário
function limparCampos() {
    if(confirm("Deseja realmente limpar todo o roteiro?")) {
        document.getElementById('scriptForm').reset();
        tx.forEach(textarea => {
            textarea.style.height = 'auto';
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}