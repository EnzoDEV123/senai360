let indiceAtual = 0;
const imagens = document.querySelectorAll('.imagens img');
const totalImagens = imagens.length;
function mostrarImagem(indice) {
    imagens[indiceAtual].classList.remove('ativo');
    indiceAtual = indice;
    imagens[indiceAtual].classList.add('ativo');
}
// Função para mudar a imagem automaticamente
function mudarImagemAutomaticamente() {
    mostrarImagem((indiceAtual + 1) % totalImagens);
}
// Mudar imagem a cada 3 segundos
setInterval(mudarImagemAutomaticamente, 3000);