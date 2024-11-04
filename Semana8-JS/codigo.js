const url = "https://botafogo-atletas.mange.li/2024-1/";

// https://botafogo-atletas.mange.li/docs 

const pega_json = async (caminho) => {   //os dados so vao aparecer no programa depois disso tudo abaixo
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}


const conteiner = document.getElementById("conteiner");


const montaCard = (atleta) =>{
    const cartao = document.createElement("div");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descri = document.createElement("p");
    const link = document.createElement("a");

    nome.innerHTML = atleta.nome;
    nome.style.fontFamily = 'sans-serif';
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);


    descri.innerHTML = atleta.detalhes;
    cartao.appendChild(descri);

    link.innerHTML = "Saiba Mais";
    link.href = `detalhes.html?id=${atleta.id}`;
    cartao.appendChild(link)

    return cartao;
};

pega_json(`${url}feminino`).then( 
    (r) => {
        r.forEach(
             (ele) => conteiner.appendChild(montaCard(ele))  // loop
        )
    }
);

pega_json(`${url}26`).then( (r) => console.log(r))

console.log("Isso imprime primeiro.")


