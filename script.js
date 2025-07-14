document.addEventListener('DOMContentLoaded', function() {
    const meuBotao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagem');

    meuBotao.addEventListener('click', function() {
        mensagem.textContent = 'Você clicou no botão!';
        alert('Botão clicado!');
    });
});
