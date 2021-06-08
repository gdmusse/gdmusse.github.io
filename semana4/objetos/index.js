const inputTitulo = document.getElementById("titulo-post")
const inputAutor = document.getElementById("autor-post")
const inputConteudo = document.getElementById("conteudo-post")
let arrayPostBlog = []


function criarPost(){
    if(inputTitulo.value == 0 || inputAutor.value == 0 || inputConteudo.value == 0){
        alert("Por favor, preencha todos os campos de texto.");
    }else {
        const objetoPostBlog = {
            titulo: inputTitulo.value,
            autor: inputAutor.value,
            conteudo: inputConteudo.value
        }
        arrayPostBlog.push(objetoPostBlog);
        console.log(arrayPostBlog)
        limparCampos(inputTitulo,inputAutor,inputConteudo)
        const containerPosts = document.getElementById("container-de-posts")
        containerPosts.innerHTML += `<h1>${objetoPostBlog.titulo} </h1> <p><i>${objetoPostBlog.autor}</i></p>  <p>${objetoPostBlog.conteudo}</p> <br>`
    }
}

function limparCampos(element,element2,element3){
    element.value = ""
    element2.value = ""
    element3.value = ""
}

