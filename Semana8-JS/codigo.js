const url = "https://botafogo-atletas.mange.li/2024-1/";

// https://botafogo-atletas.mange.li/docs 

const pega_json = async (caminho) => {   //os dados so vao aparecer no programa depois disso tudo abaixo
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}


const conteiner = document.getElementById("conteiner");

const manipulaClick = (e) => {
    console.log(e.currentTarget);  // target é um elemento
    const id = e.currentTarget.dataset.id  // esse é o article
    const url =` detalhes.html?id=${id}`;

    document.cookie = `id=${id}`;
    document.cookie = `altura=${e.currentTarget.dataset.altura}`;

    //localStorage
    localStorage.setItem('id', id)
    localStorage.setItem('dados', JSON.stringify(e.currentTarget.dataset));  // representacao em string 


    //sessionstorage
    sessionStorage.setItem('dados', JSON.stringify(e.currentTarget.dataset));


    window.location = url; // pra ir para url indicada 
} 



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

    // link.innerHTML = "Saiba Mais";
    // link.href = `detalhes.html?id=${atleta.id}`;
    // cartao.appendChild(link)

cartao.onclick = manipulaClick;

cartao.dataset.id = atleta.id;  
cartao.dataset.nJogos = atleta.n_jogos;
cartao.dataset.altura = atleta.altura;

    return cartao;
};

pega_json(`${url}masculino`).then( 
    (r) => {
        r.forEach(
             (ele) => conteiner.appendChild(montaCard(ele))  // loop
        )
    }
);

pega_json(`${url}26`).then( (r) => console.log(r))

console.log("Isso imprime primeiro.")

const manipulaBotao = () => {          // para criar a senha, logar e deslogar
    const texto = document.getElementById('senha').value;
    if (hex_md5(texto) === "5029cc9dd0295ded2f500084635c18c1"){
        sessionStorage.setItem("logado", "sim");

    } else {
        alert("Você errou a senha!");
    }
}

 document.getElementById('botao').onclick = manipulaBotao;

 document.getElementById('logout').onclick = () => sessionStorage.removeItem('logado');