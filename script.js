//Variaveis
const sections = document.querySelectorAll(`section[id]`)
//Nessa aqui eu vou pegar todos as Sections que tem e selecionar o atributo de ID.Basicamente um seletor dos meus IDs

const tablinks = document.querySelectorAll(`.tab-link`)


//Funções

//Atz a aba que está ativa 
// Uma função é um bloco de código reutilizável com nome.
// Definimos com "function nome() { ... }" e
// chamamos com "nome()"

window.addEventListener('scroll', updateTab);

function updateTab(){
    let secao = '';

    //O forEach percorre cada item da lista do sections e para cada item a função 'sec' vai ser chamada.
    sections.forEach(sec =>{

        //O getBoundingClientRect() retorna informações sobre a posição do elemento na tela neste exato momento.
        //E o ".top" é a distância do topo do elemento ao topo da janela.
        const distanciaTopo = sec.getBoundingClientRect().top;

        //Aqui estou colocando a condição de se a distância for menor ou igual a 100px, vai significar que a seção já "subiu" e está visível.
        if(distanciaTopo <= 150 && distanciaTopo >= -300){

            //getAttribute('id') pega o valor do atributo id
            secao = sec.getAttribute('id'); 
        }
    });

    //Aitvando a aba
    tablinks.forEach(link =>{

        // link.getAttribute('href') retorna ex: "#sobre" do meu HTML e vai atribuir a cor quando eu clicar para trocar a seção
        // '#' + current monta a mesma string: "#sobre" do HTML e se forem iguais, esta aba deve ficar ativa.
        const ativada = link.getAttribute(`href`) === '#' + secao;

        // Essa classe classList.toggle vai me ajudar a devinir quando a seção vai ficar ativa de acordo com a condição (classe, condição)
        // Se condição for True: adiciona a classe e se condição for false: remove a classe
        link.classList.toggle('active', ativada);
    });
}


function enviarform(){

  
  //Fica licado pae muito bom isso aqui, o .trim() no final vai remover os espaços em branco nas pontas
  const nome = document.getElementById('f-nome').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-msg').value.trim();

  // Validação: verifica se os campos obrigatórios foram preenchidos.
  // O operador ! vai ajudar a indetificar se as infos foram prenchidas (vazio = inválido).
  if (!nome || !email || !msg) {
    alert('Por favor, preencha nome, e-mail e mensagem.');
    return;
  }

  const notifica = document.getElementById('toast-form');

  //torna visível quando enviar o e-mail
  notifica.style.display = 'block';

  // Limpa os campos após enviar
  document.getElementById('f-nome').value = '';
  document.getElementById('f-email').value = '';
  document.getElementById('f-assunto').value = '';
  document.getElementById('f-msg').value = '';

  // setTimeout executa uma função após um atraso.
  // Parâmetros: (função, milissegundos)
  // 5000ms = 5 segundos
  setTimeout(() => {
    notifica.style.display = 'none'; // esconde o notifica
  }, 5000);
}

