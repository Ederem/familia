/* objetivo 1 - quando passar o mouse em cima de um personagem:
  - trocar a classe selecionado no personagem que passar o mouse
  - retirar a classe selecionado do "anterior" */

/* primeiro eu criei um variavel contante com o nome personagem, depois eu fiz a função forEach para que se aplique para cada personagem, quando o mouse entra ele adiciona um evento (classList.add('selecionado')) e depois eu criei outra constante para remover a classe selecionado do "personagem anterior", porém na ordem ali em cima fica primeiro remover e depois addicionar. */

const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
  personagem.addEventListener('mouseenter', () => {

    const idSelecionado = personagem.attributes.id.value;
    //if (idSelecionado === 'ultron') return;

    const personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado')
    //isso é pra trocar a imagem
    /* const idSelecionado = personagem.attributes.id.value; essa linha subiu para que possamos fazer com que não seja possivel os dois players selecionarem o mesmo personagem. */
    const imagemJogador1 = document.getElementById('personagem-jogador-1');
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
    //esse ponto src é porque eu quero modificar somente uma parte do nome da imagem (onde ela está localizada)

    //isso para trocar o nome embaixo da imagem
    const nomeDoPersonagem = document.getElementById('nomeDoPersonagem');
    const nomeSelecionado = personagem.getAttribute('data-name')
    nomeDoPersonagem.innerHTML = nomeSelecionado;
  })
})

/* Objetivo 2 - trocar a imagem e nome do personagem:
- alterar a imagem do jogador
- alterar o nome do jogador */
