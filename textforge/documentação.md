# **Documentação do TextForge**

## **Introdução**
O **TextForge** é um editor de texto interativo que permite adicionar, editar e formatar elementos diretamente no editor. Ele inclui funcionalidades como criação de listas, links, parágrafos, títulos, e inserção de imagens, oferecendo uma interface dinâmica para edição de conteúdo.

---

## **Funcionalidades Principais**

### **1. Inserção de Menu de Ações**
- **Atalho:** Pressionar `/` para abrir o menu.
- **Fechar o menu:** Pressionar `Escape` ou clicar fora do menu.
- **Navegação no menu:** Utilizar as teclas `ArrowUp` e `ArrowDown`.
- **Selecionar opção:** Pressionar `Enter`.

### **2. Criação de Elementos**
- **Lista:**
  - Adiciona uma lista `<ul>` com um item editável.
  - A lista é criada ao selecionar a opção "Lista" no menu.
- **Links:**
  - Insere um link editável no editor.
  - Um campo para URL e outro para o texto do link são exibidos para personalização.
  - Validação de URL incluída.
- **Imagens:**
  - Insere imagens selecionadas a partir de um menu de imagens disponíveis.
  - Oferece um botão para salvar a imagem no editor.
- **Títulos:**
  - Permite escolher o nível do título (h1, h2, etc.).
  - Um campo de entrada permite personalizar o texto do título.
- **Parágrafos:**
  - Insere parágrafos editáveis.
  - Adicionado com estilo inicial para identificação fácil.

### **3. Personalização Dinâmica**
- Todos os elementos inseridos são editáveis, permitindo flexibilidade na personalização do conteúdo.

---

## **Estrutura do Código**

### **Principais Componentes**
1. **Controle do Editor:**
   - Adiciona e remove menus com base nas interações.
   - Posiciona o menu dinamicamente.
   
2. **Eventos de Teclado:**
   - Navegação por teclas (`ArrowUp`, `ArrowDown`, `Enter`).
   - Atalhos para abrir/fechar menus.

3. **Manipulação de Elementos:**
   - Funções para criar e estilizar listas, links, imagens, parágrafos e títulos.

4. **Validação e Feedback:**
   - URLs são validadas antes de serem aplicadas.
   - Notificações simples, como `alert`, são usadas para indicar ações inválidas ou concluídas.

---

## **Atalhos e Controles**

| **Ação**              | **Tecla/Interação**           |
|-----------------------|-------------------------------|
| Abrir menu            | `/`                           |
| Fechar menu           | `Escape` ou clicar fora       |
| Navegar no menu       | `ArrowUp` ou `ArrowDown`      |
| Selecionar opção      | `Enter`                       |
| Criar lista           | Selecionar "Lista"            |
| Adicionar link        | Selecionar "Link"             |
| Inserir imagem        | Selecionar imagem no menu     |
| Adicionar parágrafo   | Selecionar "Parágrafo"        |
| Criar título          | Selecionar "Título" e editar  |

---

## **Estilos Utilizados**
- Classes CSS são usadas para exibir/ocultar menus:
  - `.none-hidden`: Oculta o menu principal.
  - `.img-none`: Oculta o menu de seleção de imagens.
  - `.none-titulo-size`: Oculta o menu de tamanhos de título.
- Estilos padrão para elementos como:
  - Parágrafos: bordas e espaçamentos para visibilidade.
  - Links: cor azul e sublinhado.
  - Itens de menu: fundo destacado ao navegar.

---

## **Observações**
1. Certifique-se de que todos os IDs e classes usados no HTML correspondam aos utilizados no JavaScript.
2. Para funcionalidade completa, certifique-se de que o HTML inclua os seguintes elementos:
   - Editor (`#editor` e `#textarea`).
   - Menu principal com opções de lista, link, imagem, etc.
   - Menu de imagens (`.img-menu`).
   - Campo para títulos e botões de confirmação.
