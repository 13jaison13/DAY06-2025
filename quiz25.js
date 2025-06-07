// =======================================================================
// 1) Barra de Progresso (Pergunta X de N)
// 2) Timer de 90 segundos
// 3) Modo Revisão das Questões
// 4) Acessibilidade e Responsividade (simples)
// 5) Mensagens Finais / Conquistas
// =======================================================================

// (Opcional) Sons de acerto e erro
const acertoSound = new Audio('acerto.mp3');
const erroSound = new Audio('erro.mp3');

// Exemplo de 40 perguntas (você pode colar as suas aqui):
const questions = [
  {
    "question": "1. Um cirurgião, ao entrar na cavidade abdominal do paciente através da parede do abdome, toma cuidado para evitar lesão aos vasos e nervos no interior da parede. A parte principal desses vasos e nervos é encontrada imediatamente profunda a qual das seguintes estruturas?",
    "options": [
      "Pele",
      "Músculo oblíquo externo do abdome",
      "Músculo oblíquo interno do abdome",
      "Músculo transverso do abdome"
    ],
    "answer": 2,
    "explanation": "Justificativa: Os vasos e nervos percorrem o plano entre o oblíquo interno e o transverso."
  },
  {
    "question": "2. Qual artéria é responsável pela irrigação superficial da parede anterior do abdome nas regiões púbica e umbilical inferior?",
    "options": [
      "Artéria epigástrica superior",
      "Artéria epigástrica superficial",
      "Artéria epigástrica inferior",
      "Artéria circunflexa ilíaca superficial"
    ],
    "answer": 1,
    "explanation": "Justificativa: Ramo da artéria femoral que irriga a parede abdominal inferior superficial."
  },
  {
    "question": "3. A veia epigástrica inferior drena para qual veia?",
    "options": [
      "Veia Ilíaca Interna",
      "Veia Ilíaca Externa",
      "Veia Femoral",
      "Veia Torácica Interna"
    ],
    "answer": 1,
    "explanation": "Justificativa: Ela acompanha a artéria de mesmo nome e drena para a veia ilíaca externa."
  },
  {
    "question": "4. Durante uma cirurgia, o cirurgião atravessa uma camada logo abaixo do músculo oblíquo interno contendo tecido fibroso. Essa camada é:",
    "options": [
      "Fáscia Intermediária",
      "Fáscia Superficial",
      "Fáscia Profunda",
      "Fáscia Parietal"
    ],
    "answer": 2,
    "explanation": "Justificativa: A fáscia profunda recobre o músculo transverso do abdome."
  },
  {
    "question": "5. Quais são os locais de constrição normal do esôfago, em ordem crânio-caudal?",
    "options": [
      "Cervical - Faringolaringea - Diafragmática - Gastroesofágica",
      "Faringolaringea - Broncoaórtica - Diafragmática - Gastroesofágica",
      "Cervical → Broncoaórtica → Diafragmática → Gastroenterica",
      "Cervical → Broncoaórtica → Diafragmática → Gastroesofágica"
    ],
    "answer": 3,
    "explanation": "Justificativa: As constrições anatômicas do esôfago são essas quatro em ordem inferior."
  },
  {
    "question": "6. Em pacientes com lesão bilateral do nervo vago, qual alteração funcional é esperada no esôfago?",
    "options": [
      "Hipertonia esofágica com disfagia paradoxal",
      "Aumento da motilidade e refluxo ácido",
      "Diminuição do peristaltismo e acúmulo de alimentos no esôfago",
      "Abertura permanente do esfíncter esofágico superior"
    ],
    "answer": 2,
    "explanation": "Justificativa: O vago controla o peristaltismo, sua lesão leva à disfagia e estase."
  },
  {
    "question": "7. Durante a cirurgia de um tumor cervical, ocorre lesão da artéria tireóidea inferior. Qual porção do esôfago terá sua irrigação prejudicada?",
    "options": [
      "Cervical",
      "Abdominal",
      "Torácica",
      "Diafragmática"
    ],
    "answer": 0,
    "explanation": "Justificativa: A artéria tireóidea inferior irriga a porção cervical do esôfago."
  },
  {
    "question": "8. Em pacientes com varizes esofágicas, qual estrutura venosa contribui diretamente para essa formação?",
    "options": [
      "Veia cava inferior",
      "Veia gástrica esquerda",
      "Veia gastroduodenal",
      "Veia mesentérica superior"
    ],
    "answer": 1,
    "explanation": "Justificativa: A veia gástrica esquerda drena o esôfago inferior e conecta-se ao sistema porta."
  },
  {
    "question": "9. A drenagem venosa do terço inferior do esôfago está diretamente relacionada com o sistema porta hepático. Qual implicação clínica importante essa anatomia tem?",
    "options": [
      "Predisposição a infarto esofágico",
      "Formação de varizes esofágicas em casos de hipertensão portal",
      "Risco aumentado de trombose esplênica",
      "Incapacidade de reabsorver substâncias tóxicas"
    ],
    "answer": 1,
    "explanation": "Justificativa: As anastomoses portossistêmicas favorecem o surgimento de varizes esofágicas."
  },
  {
    "question": "10. Quais estruturas aumentam a área de absorção intestinal em ordem crescente de amplificação?",
    "options": [
      "PREGAS SEMICIRCULARES, MICROVILOSIDADES, VILOSIDADES",
      "VILOSIDADES, MICROVILOSIDADES, PREGAS SEMICIRCULARES",
      "MICROVILOSIDADES, PREGAS SEMICIRCULARES, VILOSIDADES",
      "PREGAS SEMICIRCULARES, VILOSIDADES, MICROVILOSIDADES"
    ],
    "answer": 3,
    "explanation": "Justificativa: A ordem correta é pregas semicirculares → vilosidades → microvilosidades."
  },
  {
    "question": "11. A principal função das células de Paneth localizadas nas criptas intestinais é:",
    "options": [
      "Produção de muco",
      "Secreção de colecistocinina e secretina",
      "Absorção de nutrientes",
      "Secreção de lisozima e defensina"
    ],
    "answer": 3,
    "explanation": "Justificativa: As células de Paneth secretam substâncias antimicrobianas."
  },
  {
    "question": "12. No grau Marsh 3C da doença celíaca, observa-se:",
    "options": [
      "Apenas linfocitose intraepitelial",
      "Hiperplasia de criptas",
      "Atrofia vilositária total",
      "Mucosa normal"
    ],
    "answer": 2,
    "explanation": "Justificativa: O grau 3C corresponde à atrofia total das vilosidades intestinais."
  },
  {
    "question": "13. A ausência de sintomas digestivos em paciente com sorologia positiva para doença celíaca e biópsia compatível com Marsh 3B indica doença celíaca:",
    "options": [
      "Clássica",
      "Silenciosa",
      "Atípica",
      "Subclínica"
    ],
    "answer": 1,
    "explanation": "Justificativa: Forma silenciosa tem alterações laboratoriais e histológicas, sem sintomas."
  },
  {
    "question": "14. Qual manifestação cutânea é classicamente associada à doença celíaca?",
    "options": [
      "Dermatite herpetiforme",
      "Eczema atópico",
      "Psoríase",
      "Eritema nodoso"
    ],
    "answer": 0,
    "explanation": "Justificativa: Dermatite herpetiforme é manifestação cutânea típica da doença celíaca."
  },
  {
    "question": "15. Cite duas partes do intestino grosso que são consideradas retroperitoneais.",
    "options": [
      "COLO ASCENDENTE, COLO DESCENDENTE",
      "COLO DESCENDENTE, CECO",
      "SECO, CÓLON, RETO, âNUS",
      "RETO, ÂNUS"
    ],
    "answer": 0,
    "explanation": "Justificativa: Colo ascendente e descendente são fixos à parede abdominal posterior."
  },
  {
    "question": "16. Em uma cirurgia por apendicite, observa-se que o apêndice está localizado atrás do ceco. Essa posição é chamada de:",
    "options": [
      "Pélvica",
      "Subcecal",
      "Retrocecal",
      "Pré-ileal"
    ],
    "answer": 2,
    "explanation": "Justificativa: A posição retrocecal é a mais comum do apêndice vermiforme."
  },
  {
    "question": "17. As saculações do cólon surgem devido:",
    "options": [
      "À presença de tecido muscular circular contínuo",
      "À contração das tênias",
      "Ao acúmulo de fezes",
      "À ausência de válvulas intestinais"
    ],
    "answer": 1,
    "explanation": "Justificativa: As tênias ao se contraírem formam as saculações (háustros)."
  },
  {
    "question": "18. Qual estrutura pode servir de guia anatômico para localizar o apêndice durante uma laparotomia?",
    "options": [
      "Ligamento hepatoduodenal",
      "Tênia",
      "Mesoapêndice",
      "Artéria mesentérica superior"
    ],
    "answer": 1,
    "explanation": "Justificativa: As tênias convergem na base do apêndice."
  },
  {
    "question": "19. Ao realizar um exame físico com suspeita de apendicite, o ponto de dor localizado entre a espinha ilíaca ântero-superior direita e o umbigo é chamado:",
    "options": [
      "Ponto de Cullen",
      "Ponto de McBurney",
      "Ponto de Rovsing",
      "Ponto de Murphy"
    ],
    "answer": 1,
    "explanation": "Justificativa: O ponto de McBurney é clássico para apendicite."
  },
  {
    "question": "20. Qual a localização do fígado?",
    "options": [
      "Hipocôndrio direito",
      "Hipocôndrio esquerdo",
      "Epigástrio",
      "Todas as alternativas estão corretas"
    ],
    "answer": 3,
    "explanation": "Justificativa: O fígado ocupa principalmente o HD e epigástrio, podendo se estender ao HE."
  },
  {
    "question": "21. A tríade portal é composta por três estruturas essenciais. Quais são elas?",
    "options": [
      "Veia porta, artéria hepática e ducto biliar",
      "Veia porta, artéria hepatoduodenal e ducto cístico",
      "Veia hepática, artéria hepática e veia centrolobular",
      "Veia porta, veia hepática e veia centrolobular"
    ],
    "answer": 0,
    "explanation": "Justificativa: Tríade = veia porta + artéria hepática própria + ducto biliar."
  },
  {
    "question": "22. A tríade portal é envolvida por qual ligamento?",
    "options": [
      "Ligamento redondo",
      "Ligamento triangular",
      "Omento menor",
      "Ligamento falciforme"
    ],
    "answer": 2,
    "explanation": "Justificativa: A tríade está na borda livre do omento menor (ligamento hepatoduodenal)."
  },
  {
    "question": "23. O lobo hepático localizado entre a veia cava inferior e a tríade portal é denominado:",
    "options": [
      "Lobo caudado",
      "Lobo quadrado",
      "Lobo redondo",
      "Lobo piriforme"
    ],
    "answer": 0,
    "explanation": "Justificativa: O lobo caudado está entre a VCI e o ligamento venoso (tríade)."
  },
  {
    "question": "24. Qual hormônio, produzido pelas ilhotas pancreáticas, é responsável por estimular glicogênese?",
    "options": [
      "Glicogênio",
      "Insulina",
      "Glucagon",
      "Adrenalina"
    ],
    "answer": 1,
    "explanation": "Justificativa: A insulina estimula a síntese de glicogênio e a captação de glicose."
  },
  {
    "question": "25. João, 14 anos, chega ao PS com rebaixamento da consciência e hálito cetônico. Glicemia: 450 mg/dL. Qual o diagnóstico mais provável?",
    "options": [
      "Necessária repetição do teste",
      "Requer Hb glicada",
      "Diabetes mellitus",
      "Pré-diabetes"
    ],
    "answer": 2,
    "explanation": "Justificativa: Hiperglicemia + sintomas típicos = diagnóstico de DM confirmado."
  },
  {
    "question": "26. São sintomas clássicos de diabetes:",
    "options": [
      "Poliúria, polidipsia, polifagia e perda de peso",
      "Perda de apetite, polidipsia e perda de peso",
      "Poliúria, aumento da ingesta de doces e ganho de peso",
      "Polidipsia, respiração de Kussmaul e ganho de peso"
    ],
    "answer": 0,
    "explanation": "Justificativa: Os quatro sintomas clássicos incluem poliúria, polidipsia, polifagia e perda de peso."
  },
  {
    "question": "27. A respiração de Kussmaul observada em pacientes com cetoacidose diabética ocorre como uma tentativa do organismo de:",
    "options": [
      "Compensar a hiperglicemia eliminando CO₂",
      "Eliminar corpos cetônicos pelos pulmões",
      "Corrigir acidose metabólica por hiperventilação compensatória",
      "Aumentar a captação de oxigênio"
    ],
    "answer": 2,
    "explanation": "Justificativa: A hiperventilação reduz a acidose ao eliminar CO₂ e elevar o pH."
  }
];

// Frases de acerto e erro
const frasesAcerto = [
  "Acertouuu! Tá feliz por quê? Ainda tem mais pra responder...",
  "Leu os slides? Grande coisa... Mas dessa vez deu certo.",
  "Olha só, mandou bem! talvez não seja uma decepção completa",
  "Uau, acertou! Tá sorrindo por quê?",
  "Puta merda né, até um papagaio acertaria essa.",
  "Eu poderia elogiar, mas com seu histórico é melhor não arriscar.",
  "Saber o básico não te faz melhor que ninguém.",
  "Até que enfim uma luz no fim do túnel.",
  "Tá aí uma rara ocasião em que você não fez bobagem.",
  "Nem parece você respondendo... acertou!"
];

const frasesErro = [
  "A professora está rindo de você nesse momento.",
  "Tão ruim que até o Google se recusaria a sugerir algo.",
  "Tá de sacanagem, né? A resposta tava na sua cara!",
  "Tem certeza que tá no curso certo?",
  "Dá tempo de voltar pro ensino médio e repensar tudo.",
  "Se errar fosse arte, você seria um gênio.",
  "Isso foi tão errado que o botão 'responder' devia ter travado.",
  "Você tá jogando com o modo 'desligado' ativado?",
  "Errou? Pra variar, né? Acertar que seria novidade.",
  "O ChatGPT desistiu de você, e até a Wikipédia ficou constrangida."
];

// Variáveis globais de controle
let score = 0;
let current = 0;
let countdownInterval = null; // para armazenar o setInterval do timer
let timeLeft = 90; // tempo em segundos para cada pergunta
let userAnswers = Array(questions.length).fill(null); 
// Armazena o índice selecionado em cada pergunta (ou "null" se não respondeu/tempo esgotou)

// =======================================================================
// Carrega a pergunta da vez
// =======================================================================
function loadQuestion() {
  // Limpa qualquer contagem anterior antes de iniciar outra
  stopTimer();

  // Configura o texto de progresso
  const progressText = document.getElementById("progressText");
  progressText.innerText = `Pergunta ${current + 1} de ${questions.length}`;

  // Carrega a pergunta e opções
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const opt = document.createElement("div");
    opt.className = "option";
    opt.innerHTML = `
      <input type='radio' name='option' value='${index}' id='option${index}'>
      <label for='option${index}'> ${option}</label>`;
    optionsDiv.appendChild(opt);
  });

  // Esconde explicação, botão "Próxima", resultado, etc.
  document.getElementById("explanation").style.display = "none";
  document.getElementById("explanation").innerText = "";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("result").innerText = "";

  // Remove destaques anteriores
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.classList.remove("highlight-correct", "highlight-wrong");

  // Mostra botão "Responder"
  document.getElementById("submitBtn").style.display = "block";

  // Inicia o timer de 90 segundos para responder
  startTimer(90);
}

// =======================================================================
// Inicia o cronômetro de X segundos
// =======================================================================
function startTimer(seconds) {
  timeLeft = seconds;
  document.getElementById("timer").textContent = timeLeft;

  countdownInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;

    if (timeLeft <= 0) {
      // Tempo esgotou!
      stopTimer();
      timeIsUp();
    }
  }, 1000);
}

// =======================================================================
// Para o cronômetro
// =======================================================================
function stopTimer() {
  if (countdownInterval) {
    clearInterval(countdownInterval);
    countdownInterval = null;
  }
}

// =======================================================================
// Quando o tempo se esgota, conta como resposta errada automaticamente
// =======================================================================
function timeIsUp() {
  alert("Tempo esgotado! Resposta contada como errada.");

  // Marca a resposta do usuário como null (ou outro valor que indique “não respondeu”)
  userAnswers[current] = null;

  // Aplica visual de erro e mostra explicação
  forceWrongAnswer();
}

// =======================================================================
// Força o comportamento de "errou" sem ver se o usuário selecionou algo
// =======================================================================
function forceWrongAnswer() {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.classList.add("highlight-wrong");
  quizContainer.classList.add("shake");
  setTimeout(() => {
    quizContainer.classList.remove("shake");
  }, 1000);

  erroSound.play();

  // Mostra um feedback aleatório de erro
  const feedback = document.createElement("div");
  feedback.style.fontWeight = "bold";
  feedback.style.marginTop = "10px";
  feedback.classList.add("animate", "erro");
  const usada = frasesErro[Math.floor(Math.random() * frasesErro.length)];
  feedback.innerText = usada;
  document.getElementById("options").appendChild(feedback);

  // Mostrar explicação
  const explanation = questions[current].explanation || "Sem explicação para esta pergunta.";
  document.getElementById("explanation").innerText = explanation;
  document.getElementById("explanation").style.display = "block";

  // Exibir botão "Próxima"
  document.getElementById("nextBtn").style.display = "inline-block";
  // Ocultar botão "Responder"
  document.getElementById("submitBtn").style.display = "none";
}

// =======================================================================
// Dispara ao clicar em "Responder"
// =======================================================================
function submitAnswer() {
  // Interrompe o timer (se ainda estiver rodando)
  stopTimer();

  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Selecione uma opção!");
    // Reinicia o timer caso tenha parado antes do alerta
    // (Opcional: você pode optar por não reiniciar.)
    startTimer(timeLeft);
    return;
  }

  // Ocultar o botão "Responder"
  document.getElementById("submitBtn").style.display = "none";

  const selectedIndex = parseInt(selected.value);
  userAnswers[current] = selectedIndex; // salva escolha do usuário

  const correctIndex = questions[current].answer;
  const explanation = questions[current].explanation || "Sem explicação para esta pergunta.";
  const quizContainer = document.getElementById("quizContainer");

  if (selectedIndex === correctIndex) {
    score++;
    acertoSound.play();
    quizContainer.classList.add("highlight-correct");
  } else {
    erroSound.play();
    quizContainer.classList.add("highlight-wrong");
    quizContainer.classList.add("shake");
    setTimeout(() => {
      quizContainer.classList.remove("shake");
    }, 1000);
  }

  // Feedback de acerto ou erro
  const feedback = document.createElement("div");
  feedback.style.fontWeight = "bold";
  feedback.style.marginTop = "10px";
  feedback.classList.add("animate");
  feedback.classList.add(selectedIndex === correctIndex ? "acerto" : "erro");

  const usada = selectedIndex === correctIndex
    ? frasesAcerto[Math.floor(Math.random() * frasesAcerto.length)]
    : frasesErro[Math.floor(Math.random() * frasesErro.length)];

  feedback.innerText = usada;
  document.getElementById("options").appendChild(feedback);

  // Exibir explicação
  document.getElementById("explanation").innerText = explanation;
  document.getElementById("explanation").style.display = "block";

  // Botão "Próxima" visível
  document.getElementById("nextBtn").style.display = "inline-block";
}

// =======================================================================
// Quando clica em "Próxima"
// =======================================================================
function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    // Fim do quiz
    finishQuiz();
  }
}

// =======================================================================
// Final do quiz - exibir pontuação e mensagens de conquista
// =======================================================================
function finishQuiz() {
  document.getElementById("quiz").innerHTML = "";

  // Cálculo de pontos
  const totalQ = questions.length;
  const pontos = score * 10;
  const pct = (score / totalQ) * 100;

  let finalMsg = `
    Você acertou ${score} de ${totalQ} perguntas!<br>
    Pontuação final: ${pontos} pontos.<br><br>
  `;

  // Exemplo de conquista
  if (pct >= 80) {
    finalMsg += "Parabéns, você obteve um ótimo resultado!<br>";
  } else if (pct >= 50) {
    finalMsg += "Resultado razoável, mas ainda há espaço para melhorar.<br>";
  } else {
    finalMsg += "Não foi dessa vez. Bora estudar mais um pouquinho!<br>";
  }

  finalMsg += `<button onclick="showReview()">Revisar Respostas</button>`;

  document.getElementById("quiz").innerHTML = `
    <div class='result'>
      ${finalMsg}
    </div>
  `;
}

// =======================================================================
//  Modo Revisão: exibe todas as perguntas, a resposta do usuário e a correta
// =======================================================================
function showReview() {
  // Esconde o quizContainer
  document.getElementById("quizContainer").style.display = "none";

  // Mostra a reviewContainer
  const reviewContainer = document.getElementById("reviewContainer");
  reviewContainer.style.display = "block";

  const reviewContent = document.getElementById("reviewContent");
  reviewContent.innerHTML = "";

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const userAns = userAnswers[i];   // índice marcado
    const correctAns = q.answer;      // índice correto
    const isCorrect = (userAns === correctAns);
    
    // Montar texto das alternativas (A, B, C, D) etc.
    // Supondo que 0->A, 1->B, 2->C, 3->D
    const userAnsText = userAns !== null ? q.options[userAns] : "Não respondeu (Tempo Esgotado)";
    const correctAnsText = q.options[correctAns];

    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");

    reviewItem.innerHTML = `
      <div class="review-question">${i+1}. ${q.question}</div>
      <div><strong>Sua resposta:</strong> 
        <span class="${isCorrect ? 'review-correct' : 'review-wrong'}">
          ${userAnsText ?? "Nenhuma"}
        </span>
      </div>
      <div><strong>Resposta correta:</strong> ${correctAnsText}</div>
      <div><strong>Explicação:</strong> ${q.explanation ?? "Sem explicação"}</div>
    `;

    reviewContent.appendChild(reviewItem);
  }
}

// =======================================================================
// Inicial
// =======================================================================
window.onload = function() {
  loadQuestion();
};
