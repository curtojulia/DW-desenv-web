const params = new URLSearchParams(window.location.search)
const id = params.get("id");

const pega_json = async (caminho) => {   //os dados so vao aparecer no programa depois disso tudo abaixo
    const resposta = await fetch(caminho); 
    const dados = await resposta.json();
    return dados;                         // essa funcao vai na api e pega os dados
};

const div = document.getElementById("div");

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
    n_jogos.innerHTML = `Número de Jogos: ${dados.n_jogos}`;
    body.appendChild(n_jogos);

    const posicao = document.createElement("p");
    posicao.innerHTML = `Posição: ${dados.posicao}`;
    body.appendChild(posicao);

    const nascimento = document.createElement("p");
    nascimento.innerHTML = `Data de Nascimento: ${dados.nascimento}`;
    body.appendChild(nascimento);

    const naturalidade = document.createElement("p");
    naturalidade.innerHTML = `Naturalidade: ${dados.naturalidade}`;
    body.appendChild(naturalidade);

    const no_botafogo_desde = document.createElement("p");
    no_botafogo_desde.innerHTML =  `Está no Botafogo desde: ${dados.no_botafogo_desde}`;
    body.appendChild(no_botafogo_desde);

}



pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then(
    (r) => montaPagina(r)
);

