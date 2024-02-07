const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Uma linguagem de programação de alto nível.",
      "Um tipo de café muito popular entre os programadores.",
      "Um software de edição de texto.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a finalidade do operador 'typeof' em JavaScript?",
    respostas: [
      "Para verificar o tipo de dado de uma variável.",
      "Para multiplicar dois números.",
      "Para criar loops em uma função.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
    respostas: [
      "variavel = valor",
      "constante = valor",
      "let variavel = valor",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o resultado da expressão '2 + '2' em JavaScript?",
    respostas: [
      "'22'",
      "4",
      "'4'",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o método utilizado para converter uma string em um número inteiro em JavaScript?",
    respostas: [
      "parseInt()",
      "toNumber()",
      "parseString()",
    ],
    correta: 0
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um bloco de código que pode ser chamado e executado.",
      "Um tipo de variável.",
      "Um tipo de operador aritmético.",
    ],
    correta: 0
  },
  {
    pergunta: "O que significa 'NaN' em JavaScript?",
    respostas: [
      "Não é um número (Not a Number)",
      "Número Aritmético Negativo (Negative Arithmetic Number)",
      "Número Aleatório (Random Number)",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a sintaxe correta para um comentário de uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "' Este é um comentário",
      "/* Este é um comentário */",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
    respostas: [
      "'==' compara apenas os valores, enquanto '===' compara os valores e os tipos de dados.",
      "'===' compara apenas os valores, enquanto '==' compara os valores e os tipos de dados.",
      "'==' e '===' são idênticos, não há diferença.",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do operador '&&' em JavaScript?",
    respostas: [
      "Operador lógico AND (E)",
      "Operador lógico OR (OU)",
      "Operador lógico NOT (NÃO)",
    ],
    correta: 0
  },
];
//para selecionar um 'id', se bota #
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
//sempre vai responder o total de itens lá dentro
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop, enquanto tal coisa estiver acontecendo..
for(const item of perguntas){
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    // o espaço entre um e outro ('dl dt') significa que dentro do dl, ele vai procurar um dt
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      //onchange significa quando ocorrer alguma mundança, irá ocorrer tal evento (event)
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }


    quizItem.querySelector('dl').appendChild(dt)
    //dl que está selecionado DENTRO do quizItem, está sendo adicionado o dt, isto é, as opções para cada valor [0,1,2]
  }
    //Após adicionar as opções, ainda existe a opção que consta no HTML, logo usamos 'dl dt' que está selecionado DENTRO do quizItem, e usamos o remove(). Como não há nada dentro do paranteses do remove, ele removeu o 'dl dt'.
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}