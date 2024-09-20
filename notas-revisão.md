## revisão

1- o controle de histórico, permitindo voltar a versões anteriores e identificar mudanças.
colaboração de mais de um desenvolvedor, podendo todos trabalharem juntos sem conflito

2-Git é a ferramenta de controle de versão que armazena o código , enquanto GitHub é uma plataforma que utiliza o 
Git para facilitar a colaboração e o gerenciamento de projetos.

3- html- cria a estrutura das páginas da web e organiza o conteúdo de forma hierarquica
css- usado para estilizar um documento html
javascript- é a linguagem que permite adicionar interatividade e dinamismo nas páginas da web

4-tag- indica o final e o inicio de um elemento
elementos- é composto por uma tag (de abertura e fechamento) e tem conteúdo
atributos- são as informações adicionais sobre um elemento

5- <html>
<head>
<title>Minha página</title>
<meta charset="utf-8">
</head>
<body>
	<p> Estou por aqui</p>
</body>
</html>

6- Organização lógica dos protocolos de comunicação em camadas conforme seus niveis de abstração, em camadas pois a cada camada presta serviço para a camada superior

7- TCP e UDP. tcp é orientado a conexão, udp não, sendo mais rápido para enviar os dados. Udp não tem garantia de entrega, tcp tem 

8- cliente-servido- servidor e clientes, não tem comunicação entre clientes, o servidor tem endereço ip fixo, cliente pode entrar e sair, nao precisa de ip fixo.
peer-to-peer - é diferente pois os clientes se comunicam

9- processo é um programa rodando no computador, são identificados pelo numero da porta, o ip identifica o computador, o numero da porta o processo.

10- camada de segurança que é colocada por cima do tcp, oferece segurança as camadas de transporte

11- Dois (head e body- o elemneto raiz é o html). Não tem limite pois pode ser feito varios descendestes no body, e no head

12- marcação/organização de texto- <footer> indica o rodapé, <h1> ao <h6> - cabeçalhos de vários níveis, <p> - parágrafos, <div>- conteiner genérico,
 <span>-conteiner generico inline, <hr>, listas 
marcação semantica - del, ins, strong-negrito, em-itálico, a

13-form(textarea,input-todos esses são elementos do form) - form usado para capturar dados de usuário

14- <a> - cria os hiperlinks e permite a navegação (o href é um atributo do <a>, a tag é <a>)

15- input, button, textarea, select, label, option, ...

16- a) class - cria e determina o conjunto ou conjuntos que o elemento pertence 
b)id- identificador univoco (exclusivo)
c)name- defenir o nome de um elemento, o name recebe o valor do elemento que vai ser enviado para o servidor, é a variavel que o servidor vai ver 
d)hidden- esconder 
e)style- atributo que pode receber css, pode receber codigo css inline, tem prioridade sob os outros css's
f)title- atributo usado para dar mais informação sobre o conteúdo

17- capacidade da web de perder elementos/pedaços e estar funcionando mesmo com essa falta

18-regra- estrutura composta pelo seletor e um conjunto de declarações, entre chaves, separados por ;
seletor- define os elementos que serão aplicados a regra 
declaração- par (chave-valor) formado por uma propriedade e um valor, separado por dos pontos

19- 
seletor de classe- seleciona os elementos daquela classe (.minha-classe)
seletor de id- seleciona o elemento que tem o id (#meu-id)

20- margin - distanciamento do elemento para seus vizinhos
border- uma linha que sempre existe com a espessura 0
padding- distancia do texto ao border

21- valores do atributo position
static- padrão
<div style="background-color: purple; position: static;">
    posição static, padrão.
</div>

relative- deslocado em relaçao a posição original com o espaço dele mantido
<div style="background-color: darkblue; position: relative; top: 15px; left: 20px;">
   minha posição original ainda tem o espaço  mantido, mas me desloquei
</div>

absolute- caso ngm seja relacionado a position relative, vai pro absolute
html-
    <div class="box">Fixo</div>
    <div style="height: 1500px;">Role a página</div>
css-
 .box {
            position: fixed;
            top: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background-color: purple;
        }
fixed- fixo em relação ao viewport, tamanho da janela 
  <div class="tamanho-fixo">
css-
.tamanho-fixo{
width: 100px;
height: 50px;
}

