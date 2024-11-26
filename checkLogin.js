document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = sessionStorage.getItem('usuarioLogado');
    if (!usuarioLogado) {
        // Cria o aviso de login
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const overlayContent = document.createElement('div');
        overlayContent.classList.add('overlay-content');

        const aviso = document.createElement('h2');
        aviso.textContent = 'Você não está logado! Faça seu login';

        overlayContent.appendChild(aviso);
        overlay.appendChild(overlayContent);
        document.body.appendChild(overlay);

        // Exibe o aviso
        overlay.style.display = 'flex';

        // Aguarda 2 segundos e redireciona para a página de login
        setTimeout(() => {
            window.location.href = 'index.html'; // Redireciona para o login
        }, 2000);
    }
});
