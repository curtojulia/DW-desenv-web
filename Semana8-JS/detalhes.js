const params = new URLSearchParams(window.location.search)
const id = params.get("id");



// console.log(params.get("id"));

const pega_json = async (caminho) => {   //os dados so vao aparecer no programa depois disso tudo abaixo
    const resposta = await fetch(caminho); 
    const dados = await resposta.json();
    return dados;                         // essa funcao vai na api e pega os dados
};

const montaPagina = (dados) => {
    const body = document.body;
    body.innerHTML = "";

    const nome = document.createElement("h1");
    nome.innerHTML = dados.nome;
    body.appendChild(nome);

    const imagem = document.createElement("img");
    imagem.src = dados.imagem;
    body.appendChild(imagem);

    const n_jogos = document.createElement("p");
    n_jogos.innerHTML = dados.n_jogos;
    body.appendChild(n_jogos);
}


pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    (r) => montaPagina(r)
);

