
let frases = ['Acredite em si mesmo e em suas habilidades. Você pode alcançar o que quiser se se esforçar e se dedicar.', 'Não tenha medo de tentar coisas novas. É assim que você aprende e cresce.', 'Todos cometem erros. Não se preocupe com eles. Em vez disso, aprenda com eles e siga em frente.', 'Seja gentil consigo mesmo e com os outros. Isso pode fazer uma grande diferença no seu dia.', 'O fracasso não é o fim. É uma oportunidade para recomeçar e fazer melhor.', 'Você é mais forte do que pensa. Você já superou muitas dificuldades e pode superar muitas mais.', 'Não se compare aos outros. Você é único e tem seu próprio caminho na vida.', 'Não deixe o medo te impedir de seguir seus sonhos. Às vezes, é preciso dar um passo em direção ao desconhecido para encontrar sua felicidade.', 'A vida pode ser difícil, mas você é capaz de enfrentar qualquer desafio que surja.', 'Acredite que coisas boas estão por vir. A vida é cheia de possibilidades e oportunidades, e você pode alcançar o que quiser com trabalho duro e determinação.'];

let btn = document.getElementById('button');
let txt = document.getElementById('texto');
let horario = document.getElementsByClassName('data')[0];

btn.addEventListener('click', handleClick);

function handleClick() {
    var indice = Math.floor(Math.random() * frases.length);
    var variavelAleatoria = frases[indice];
    txt.innerText = frases[indice];
}

function criarHorario(horario){
    const date = new Date();
    horario.innerText = (date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds());
}

setInterval(function() {
    criarHorario(horario);
  }, 1000);