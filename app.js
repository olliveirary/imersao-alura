//caixa da lógica | // Ctrl + k + c = comentário

//console.log(dados);

function pesquisar() {
    
    // Seleciona a seção onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa"); 
    // sempre que escrevo "document", representa o documento HTML que está sendo carregado no navegador. É como se fosse todo o conteúdo da página da web.  
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do atleta ou esporte</p>"
        return 
    }
    campoPesquisa = campoPesquisa.toLowerCase(campoPesquisa);
    // valor atual = novo valor.letra minuscula no campo pesquisa também executará resultados.

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) do array 'dados'.

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se o dado do 'titulo' incluir(icludes) o que está escrito no campo da pesquisa for verdadeiro OU se o dado da 'descricao' incluir o que tiver no campo de pesquisa, será exibido na tela.
       
            // Concatena uma nova div com as informações do dado atual à string 'resultados'.
            // cria um novo elemento.
           
            resultados += `
            <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a> </h2> 
                <p class="descricao-meta">${dado.descricao}</p> <a href="${dado.link}" target="_blank">Mais informações</a> </div>
        `;

        }
      
        if (!resultados) {
            resultados = "<p>Nada foi encontrado</p>";
        }

        
       
    }

    // Atribui o conteúdo HTML completo da string 'resultados' à seção selecionada.
    section.innerHTML = resultados;
}
//caso seja preciso ver o título do visualViewport(pessoa) em questão nesse caso, é preciso colocar o [índice] dentro de cochetes, seguido de um ponto . e o vscode dará sugestão se é a descrição desse índice que você quer ver, o link ou o título = console.log(dados[0].). 

// Alt + Z = identar.

//"getElementById():" É um método do objeto document que serve para buscar um elemento HTML pelo seu ID. O ID é um atributo único que você dá a um elemento para identificá-lo.

//"resultados-pesquisa": É o valor do ID que você está procurando. O método getElementById() vai procurar no documento HTML um elemento que tenha esse ID exatamente igual.




