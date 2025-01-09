const editoId = '#editor'
const textareaId = '#textarea';

const editor = document.querySelector(editoId); 
const textarea = document.querySelector(textareaId);
const menu = document.querySelector('.menu');
const SizeTituloMenu = document.querySelector(".size-titulo");
editor.addEventListener('keydown', function(event){
  if(event.key === '/'){
    event.preventDefault(); // impede que "/" seja digitado no editor
    showMenu();
  } else if(event.key === 'Escape'){  // Corrigido para usar a tecla "Escape"
    event.preventDefault();
    hideMenu();
  }
});

document.addEventListener('click', function(event){
  if(!menu.contains(event.target) && event.target !== editor){  // Alterado para comparar com o editor
    hideMenu();
  }
});

function showMenu(){
  menu.style.top = `${editor.offsetTop + 30}px`;
  menu.style.left = `${editor.offsetLeft + 14}px`;
  menu.classList.remove('none-hidden');
  
}

function hideMenu() {
  menu.classList.add('none-hidden');
}

const ListaEditor = document.querySelectorAll('#menu ul li')
let index = 0;
document.addEventListener('keydown', (event) => {
  // Verifica se o menu está visível
  const isMenuVisible = !menu.classList.contains('none-hidden'); // Menu está visível se NÃO possui 'none-hidden'

  if (isMenuVisible) {
    ListaEditor.forEach((item) => {
      item.style.backgroundColor = '';
    });

    if (event.key === 'ArrowDown') {
      index = (index + 1) % ListaEditor.length;
    } else if (event.key === 'ArrowUp') {
      index = (index - 1 + ListaEditor.length) % ListaEditor.length;
    } else if (event.key === 'Enter') {
      event.preventDefault();
      // Garante que o item selecionado seja clicado apenas se o menu estiver visível
      handleMenuAction(ListaEditor[index]);
    }

    // Aplica o estilo ao item ativo
    ListaEditor[index].style.backgroundColor = '#ddd';
  }
});


function handleMenuAction(item) {
  switch (item.id) {
    case 'lista':
      editorLista();
      hideMenu();
      break;
    case 'image':
     editorimagem()
      break;
    case 'option-title':
    editorOptionTitle()
      break;
    case 'paragrafo':
      console.log('paragrafo');
      break;
    case 'link':
      editoLinks();
      hideMenu();
      break;
  }
 
}


ListaEditor.forEach((item) => {
  item.addEventListener('click', function () {
    handleMenuAction(item);
  });
});




// create opção de edição 
 function editorLista(){
    // criar uma nova lista dentro do item clicado 
    const newUl = document.createElement('ul'); 
    const newLi = document.createElement('li'); 
  
    newLi.contentEditable = true;  // permitir edição 
    
    newUl.appendChild(newLi); // adicionar li dentro do ul 
    editor.appendChild(newUl); // adicionar ul ao item clicado
  
 }

 function editoLinks() {
  const editor = document.getElementById('editor');

  // Criação do link
  const newLink = document.createElement('a');
  newLink.href = '#'; // URL inicial
  newLink.contentEditable = true; // Tornar o link editável
  newLink.style.color = 'blue';
  newLink.style.textDecoration = 'underline';
  newLink.style.display = 'inline-block'; // Para garantir que o link tenha um comportamento de bloco e possa ser editado corretamente

  // Criar um campo de entrada para o texto do link (textContent)
  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.placeholder = 'Digite o texto do link';
  textInput.style.marginTop = '5px';
  textInput.style.display = 'block';

  // Criar um campo de entrada para a URL
  const urlInput = document.createElement('input');
  urlInput.type = 'text';
  urlInput.placeholder = 'Digite a URL aqui';
  urlInput.style.marginTop = '5px';
  urlInput.style.display = 'block';

  // Adicionar evento para atualizar o texto do link
  textInput.addEventListener('input', () => {
    newLink.textContent = textInput.value; // Atualiza o texto do link enquanto o usuário digita
  });

  // Adicionar evento para remover o campo de entrada de texto após o foco sair
  textInput.addEventListener('focusout', () => {
    newLink.textContent = textInput.value; // Garantir que o texto do link seja atualizado
    textInput.remove(); // Remove o campo de entrada de texto após o foco sair
  });

  // Adicionar evento para salvar a URL quando o campo de input perde o foco
  urlInput.addEventListener('focusout', () => {
    let url = urlInput.value.trim();
    if (url) {
      alert(isValidUrl(url) ? 'URL atualizada!' : 'URL inválida!');
newLink.href = isValidUrl(url) ? url : newLink.href;
    }
    urlInput.remove(); // Remove o campo de entrada após o foco sair
  });

  // Adicionar o link, o campo de entrada para o texto e o campo de entrada para a URL ao editor
  editor.appendChild(newLink);
  editor.appendChild(textInput);
  editor.appendChild(urlInput);
  editor.appendChild(document.createElement('br'));
}
// Função para validar se a URL é válida
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}


function  editorimagem()
{
let MenuImagem = document.querySelector('.img-menu');
MenuImagem.classList.remove('img-none')

hideMenu()
}
const GetTodosImg = document.querySelectorAll('.all-imagem-loading img');
GetTodosImg.forEach((item) => {
item.addEventListener('click', (event)=>{
  event.target.style = "2px solid #ccc"
  let src = event.target.src
  
  SalvaSrc(src) 
})
});

const BtnSalve = document.getElementById("btn-salve");
const BtnExit = document.getElementById("btn-exit");

BtnSalve.addEventListener("click",SalvaSrc)
function SalvaSrc(src){
createImage(src)
let MenuImagem = document.querySelector('.img-menu');
MenuImagem.classList.add("img-none")
}
BtnExit.addEventListener("click", () =>{
  alert("hello Exit")
})

function createImage(src){
  // Cria o elemento da imagem 
  const img = document.createElement('img')
  img.src = src;
  img.alt = 'Imagem-blog'
  img.style.maxWidth = '100px'

  editor.appendChild(img)
}


function editorOptionTitle()
{
  let SizeTitulo = document.querySelector(".size-titulo");
  SizeTitulo.classList.remove("none-titulo-size")
  hideMenu()
  showTituloSize()
}

function showTituloSize()
{

const listaSizeTitulo = document.querySelectorAll(".size-titulo li");


let startTitulo = 0; 
document.addEventListener("keydown" , (event) =>{
  const VisibleLista = !SizeTituloMenu.classList.contains("none-titulo-size");
  if(VisibleLista){
    listaSizeTitulo.forEach((item)=>{
      item.style.backgroundColor = '';
    })
  }
 if(event.key === "ArrowDown"){
   startTitulo = (startTitulo + 1) % listaSizeTitulo.length;
 } else if(event.key === "ArrowUp"){
  startTitulo = (startTitulo - 1 + listaSizeTitulo.length) % listaSizeTitulo.length
 } else if(event.key === "Enter"){
  event.preventDefault();
  
 
  console.log( listaSizeTitulo[startTitulo]);
  
 
  
 }
 listaSizeTitulo[startTitulo].style.backgroundColor = '#ddd'
  

 
})

}

