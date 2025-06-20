// --- Variáveis Globais ---
// Define o usuário atual. Por padrão, 'preto'. Armazena a preferência no LocalStorage.
let currentUser = localStorage.getItem('currentUser') || 'preto';

// --- Elementos do DOM (Document Object Model) ---
// Obtém referências para os elementos HTML com base em seus IDs.
// As verificações 'if' são para garantir que o script não tente acessar elementos que
// não existem na página atual (ex: elementos de index.html não existem em treino.html e vice-versa),
// evitando erros no console.
const btnPreto = document.getElementById('btn-preto');
const btnPreta = document.getElementById('btn-preta');
const currentUserDisplay = document.getElementById('current-user-display');
const statusTreino = document.getElementById('status-treino');
const btnConcluirTreino = document.getElementById('btn-concluir-treino');
const listaRefeicoes = document.getElementById('lista-refeicoes');
const formAdicionarRefeicao = document.getElementById('form-adicionar-refeicao');
const tipoRefeicao = document.getElementById('tipo-refeicao');
const descricaoRefeicao = document.getElementById('descricao-refeicao');

// Elemento para o título do treino do dia na index.html
const treinoDoDiaTitulo = document.getElementById('treino-do-dia-titulo');

// Elementos específicos da página 'treino.html'
const treinoTitulo = document.getElementById('treino-titulo');
const exerciciosContainer = document.getElementById('exercicios-container');

// --- Dados dos Treinos ---
// Array contendo os detalhes dos 5 treinos diferentes.
// Cada treino possui um nome e um array de exercícios.
// Cada exercício contém nome, imagem (img), descrição (desc), e as novas informações de séries/repetições.
// Os intervalos de descanso foram ajustados: Músculos Grandes = 120s, Músculos Pequenos = 90s.
const todosOsTreinos = [
    {
        nome: "Treino 1",
        exercicios: [
            { nome: "Cadeira Flexora", img: "cadeira-flexora.jpg", desc: "Foco nos isquiotibiais, flexione as pernas.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "120 segundos" }, // Grande
            { nome: "Leg 45º", img: "leg-45.jpg", desc: "Empurre a plataforma com os pés, mantendo a coluna apoiada.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "120 segundos" }, // Grande
            { nome: "Puxada aberta no pulley", img: "puxada-aberta-pulley.jpg", desc: "Puxe a barra em direção ao peito, contraindo as costas.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "120 segundos" }, // Grande
            { nome: "Rosca bíceps na barra", img: "rosca-biceps-barra.jpg", desc: "Mantenha os cotovelos fixos, levante a barra até o peito.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "90 segundos" }, // Pequeno
            { nome: "Desenvolvimento ombro com halter", img: "desenvolvimento-halter.jpg", desc: "Levante os halteres acima da cabeça, controlando o movimento.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "90 segundos" }, // Pequeno
            { nome: "Supino inclinado com halter", img: "supino-inclinado-halter.jpg", desc: "Deitado no banco inclinado, empurre os halteres para cima.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "120 segundos" }, // Grande
            { nome: "Tríceps francês no cabo", img: "triceps-frances-cabo.jpg", desc: "Deitado, estenda os braços com a barra ou corda acima da cabeça.", series_warmup: 1, reps_warmup: 15, series: 2, reps: "10-12", series2: 1, reps2: 10, series3: 2, reps3: "6-8", descanso: "90 segundos" } // Pequeno
        ]
    },
    {
        nome: "Treino 2",
        exercicios: [
            { nome: "Mesa Flexora", img: "mesa-flexora.jpg", desc: "Deitado, flexione as pernas contraindo os posteriores de coxa.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "120 segundos" }, // Grande
            { nome: "Agachamento Livre", img: "agachamento.jpg", desc: "Agache como se fosse sentar, mantendo a coluna reta.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "120 segundos" }, // Grande
            { nome: "Remada no pulley pegada aberta", img: "remada-pulley-aberta.jpg", desc: "Puxe a barra em direção ao abdômen, contraindo as costas.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "120 segundos" }, // Grande
            { nome: "Rosca bíceps com halter", img: "rosca-biceps-halter.jpg", desc: "Alterne a rosca com halteres, mantendo os cotovelos fixos.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "90 segundos" }, // Pequeno
            { nome: "Elevação frontal no cabo", img: "elevacao-frontal-cabo.jpg", desc: "Levante o cabo à frente, elevando os braços até a altura dos ombros.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "90 segundos" }, // Pequeno
            { nome: "Supino reto com halter", img: "supino-reto-halter.jpg", desc: "Deitado no banco reto, empurre os halteres para cima.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "120 segundos" }, // Grande
            { nome: "Tríceps testa no cabo", img: "triceps-testa-cabo.jpg", desc: "Deitado ou em pé, estenda os braços acima da cabeça, levando o cabo à testa.", series_warmup: 1, reps_warmup: 15, series: 2, reps: "10-12", series2: 1, reps2: 10, series3: 2, reps3: "6-8", descanso: "90 segundos" } // Pequeno
        ]
    },
    {
        nome: "Treino 3",
        exercicios: [
            { nome: "Stiff com barra", img: "stiff-barra.jpg", desc: "Mantenha as pernas semi-flexionadas, desça a barra até sentir alongar a parte posterior da coxa.", series_warmup: 2, reps_warmup: 15, series: 1, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Cadeira extensora (com pico de contração)", img: "cadeira-extensora.jpg", desc: "Estenda as pernas na cadeira, segurando a contração por 1-2 segundos no topo.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Remada curvada com barra", img: "remada-curvada-barra.jpg", desc: "Incline o tronco, puxe a barra em direção ao abdômen, contraindo as costas.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Rosca bíceps concentrado", img: "rosca-biceps-concentrado.jpg", desc: "Com o cotovelo apoiado na coxa, realize o movimento concentrado.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "90 segundos" }, // Pequeno
            { nome: "Elevação lateral unilateral no cabo", img: "elevacao-lateral-cabo.jpg", desc: "Levante o braço para o lado, focando no deltoide lateral.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "90 segundos" }, // Pequeno
            { nome: "Supino reto máquina", img: "supino-reto-maquina.jpg", desc: "Sente-se na máquina, empurre as alças para frente, contraindo o peito.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Tríceps corda", img: "triceps-corda.jpg", desc: "Puxe a corda para baixo, estendendo os braços e contraindo o tríceps.", series_warmup: 1, reps_warmup: 15, series: 2, reps: "10-12", series2: 1, reps2: 10, series3: 2, reps3: "6-8", descanso: "90 segundos" } // Pequeno
        ]
    },
    {
        nome: "Treino 4",
        exercicios: [
            { nome: "Cadeira abdutora", img: "cadeira-abdutora.jpg", desc: "Empurre as almofadas para fora, trabalhando os glúteos laterais.", series_warmup: 1, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Agachamento búlgaro", img: "agachamento-bulgaro.jpg", desc: "Uma perna no banco, agache com a outra, focando no equilíbrio.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Remada unilateral com halter", img: "remada-unilateral-halter.jpg", desc: "Apoie uma mão e joelho no banco, puxe o halter com o outro braço.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Rosca bíceps unilateral", img: "rosca-biceps-unilateral.jpg", desc: "Realize a rosca com um halter por vez, focando na contração.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "90 segundos" }, // Pequeno
            { nome: "Desenvolvimento na máquina", img: "desenvolvimento-maquina.jpg", desc: "Sente-se na máquina, empurre as alças para cima, trabalhando os ombros.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "90 segundos" }, // Pequeno
            { nome: "Supino inclinado com halter", img: "supino-inclinado-halter.jpg", desc: "Deitado no banco inclinado, empurre os halteres para cima.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Tríceps testa no cabo", img: "triceps-testa-cabo.jpg", desc: "Estenda os braços acima da cabeça.", series_warmup: 1, reps_warmup: 15, series: 2, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "6-8", descanso: "90 segundos" } // Pequeno
        ]
    },
    {
        nome: "Treino 5",
        exercicios: [
            { nome: "Stiff com barra", img: "stiff-barra.jpg", desc: "Mantenha as pernas semi-flexionadas, desça a barra até sentir alongar a parte posterior da coxa.", series_warmup: 1, reps_warmup: 15, series: 2, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Leg 45º", img: "leg-45.jpg", desc: "Empurre a plataforma.", series_warmup: 2, reps_warmup: 15, series: 2, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Puxada fechada no pulley (pegada supinada)", img: "puxada-fechada-supinada-pulley.jpg", desc: "Puxe a barra com pegada supinada (palmas para você) em direção ao peito.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Rosca bíceps com barra", img: "rosca-biceps-barra.jpg", desc: "Mantenha os cotovelos fixos, levante a barra até o peito.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "90 segundos" }, // Pequeno
            { nome: "Elevação lateral com halter", img: "elevacao-lateral-halter.jpg", desc: "Levante os halteres para o lado, elevando os braços até a altura dos ombros.", series_warmup: 2, reps_warmup: 15, series: 3, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "90 segundos" }, // Pequeno
            { nome: "Voador", img: "voador.jpg", desc: "Sente-se na máquina, junte as alças à frente, contraindo o peito.", series_warmup: 2, reps_warmup: 15, series: 2, reps: "10-12", series2: 2, reps2: 10, series3: 2, reps3: "8-10", descanso: "120 segundos" }, // Grande
            { nome: "Tríceps supinado", img: "triceps-supinado.jpg", desc: "No pulley, com a pegada supinada, empurre a barra para baixo, estendendo o tríceps.", series_warmup: 1, reps_warmup: 15, series: 2, reps: "10-12", series2: 2, reps2: 10, series3: 1, reps3: "6-8", descanso: "90 segundos" } // Pequeno
        ]
    }
];

// --- Funções Auxiliares ---

/**
 * Retorna a data de hoje no formato ISO (AAAA-MM-DD).
 * @returns {string} Data atual formatada.
 */
function getTodayDate() {
    return new Date().toISOString().slice(0, 10);
}

/**
 * Atualiza o display do usuário atual e o estado visual dos botões 'Preto'/'Preta'.
 * Adiciona a classe 'active' ao botão do usuário selecionado para indicar o usuário ativo.
 */
function updateCurrentUserDisplay() {
    // Remove a classe 'active' de ambos os botões para resetar o estado visual antes de aplicar o novo.
    if (btnPreto) btnPreto.classList.remove('active');
    if (btnPreta) btnPreta.classList.remove('active');

    // Adiciona a classe 'active' ao botão do usuário atualmente selecionado.
    if (currentUser === 'preto') {
        if (btnPreto) btnPreto.classList.add('active');
    } else {
        if (btnPreta) btnPreta.classList.add('active');
    }
    // Atualiza o texto na interface do usuário para mostrar quem está usando o sistema.
    if (currentUserDisplay) currentUserDisplay.textContent = `Usuário Atual: ${currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}`;
}

/**
 * Determina qual treino deve ser exibido com base na data atual, seguindo um ciclo de 5 dias.
 * A data de início do ciclo é '2025-01-01'.
 * @returns {Object} O objeto do treino correspondente ao dia.
 */
function getTreinoDoDia() {
    // Define uma data de referência para o início da contagem dos treinos.
    // Incluímos 'T00:00:00' para zerar o horário e evitar problemas de fuso horário
    // ou horário de verão que poderiam afetar o cálculo do dia.
    const dataInicial = new Date('2025-01-01T00:00:00'); 
    const hoje = new Date();
    
    // Zera as horas do dia atual também para garantir que a comparação seja estritamente por dia,
    // independentemente da hora exata em que o usuário acessa o sistema.
    hoje.setHours(0,0,0,0);

    // Calcula a diferença de tempo em milissegundos entre a data de hoje e a data inicial.
    const diferencaTempo = hoje.getTime() - dataInicial.getTime();
    // Converte a diferença de milissegundos para o número de dias, arredondando para baixo.
    const diferencaDias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

    // Usa o operador módulo (%) para ciclar entre os índices do array 'todosOsTreinos'.
    // Como temos 5 treinos, 'todosOsTreinos.length' será 5. O resultado será um índice de 0 a 4.
    const indiceTreino = diferencaDias % todosOsTreinos.length; 
    return todosOsTreinos[indiceTreino]; // Retorna o objeto completo do treino correspondente a esse índice.
}

// --- Funções de Carregamento e Salvamento de Dados (Para index.html) ---

/**
 * Carrega e exibe o status de conclusão do treino para o usuário e dia atuais na página principal.
 */
function loadTreinoStatus() {
    // Se o elemento 'statusTreino' não existir na página (significa que não estamos em index.html),
    // a função retorna imediatamente para evitar erros.
    if (!statusTreino) return; 

    // NOVO: Atualiza o título do treino do dia na página principal com o nome do treino atual.
    if (treinoDoDiaTitulo) {
        treinoDoDiaTitulo.textContent = `Treino do Dia: ${getTreinoDoDia().nome}`;
    }

    // Pega os registros de treinos concluídos do LocalStorage. Se não houver dados salvos,
    // inicializa um objeto vazio para evitar erros de 'null'.
    const treinosConcluidos = JSON.parse(localStorage.getItem('treinosConcluidos')) || {};
    const today = getTodayDate();
    // Cria uma chave única para o registro do treino, combinando o usuário e a data (ex: "preto_2025-06-19").
    const userTodayKey = `${currentUser}_${today}`;
    const treinoDoDia = getTreinoDoDia(); // Obtém qual treino deveria ser feito hoje.

    // Verifica se o treino para o usuário e dia atuais está marcado como concluído no LocalStorage.
    if (treinosConcluidos[userTodayKey]) {
        statusTreino.textContent = `Parabéns, ${currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}! O ${treinoDoDia.nome} foi concluído hoje.`;
        btnConcluirTreino.disabled = true; // Desabilita o botão 'Concluir Treino' se já foi feito.
    } else {
        statusTreino.textContent = `Olá, ${currentUser.charAt(0).toUpperCase() + currentUser.slice(1)}! O ${treinoDoDia.nome} ainda não foi concluído.`;
        btnConcluirTreino.disabled = false; // Habilita o botão 'Concluir Treino'.
    }
}

/**
 * Carrega e exibe as refeições registradas para o usuário e dia atuais na página principal.
 */
function loadRefeicoes() {
    // Se o elemento 'listaRefeicoes' não existir na página, a função retorna.
    if (!listaRefeicoes) return; 

    // Pega todas as refeições do LocalStorage. Se não houver, inicializa um array vazio.
    const todasRefeicoes = JSON.parse(localStorage.getItem('refeicoes')) || [];
    const today = getTodayDate();

    // Filtra as refeições para mostrar apenas as do usuário atualmente selecionado e do dia de hoje.
    const refeicoesDoDia = todasRefeicoes.filter(refeicao =>
        refeicao.usuario === currentUser && refeicao.data === today
    );

    listaRefeicoes.innerHTML = ''; // Limpa a lista na interface antes de recarregar para evitar duplicatas.

    if (refeicoesDoDia.length === 0) {
        listaRefeicoes.innerHTML = '<p>Nenhuma refeição registrada para hoje.</p>';
    } else {
        const ul = document.createElement('ul');
        refeicoesDoDia.forEach((refeicao) => {
            const li = document.createElement('li');
            // Anexa o ID único da refeição como um atributo de dado (data-id) no elemento <li>.
            // Isso é crucial para identificar qual refeição deletar quando o botão 'Excluir' é clicado.
            li.setAttribute('data-id', refeicao.id); 
            li.innerHTML = `
                <span><strong>${refeicao.tipo}:</strong> ${refeicao.descricao}</span>
                <button class="delete-refeicao-btn">Excluir</button>
            `;
            ul.appendChild(li); // Adiciona o item da refeição à lista.
        });
        listaRefeicoes.appendChild(ul); // Adiciona a lista de refeições ao DOM.
    }
}

// --- Funções de Carregamento de Treino (Para treino.html) ---

/**
 * Exibe os detalhes do treino do dia na página 'treino.html'.
 * Pega as informações do treino do dia e as renderiza dinamicamente.
 */
function displayTreinoDoDia() {
    // Verifica se o container de exercícios existe na página. Se não, a função retorna.
    if (!exerciciosContainer) return; 

    const treinoDoDia = getTreinoDoDia(); // Obtém o objeto do treino que deve ser exibido hoje.
    treinoTitulo.textContent = `Detalhes do ${treinoDoDia.nome}`; // Atualiza o título da página.
    exerciciosContainer.innerHTML = ''; // Limpa o container antes de adicionar os exercícios dinamicamente.

    treinoDoDia.exercicios.forEach(exercicio => {
        const exercicioDiv = document.createElement('div');
        exercicioDiv.classList.add('exercicio'); // Adiciona uma classe para estilização CSS.
        exercicioDiv.innerHTML = `
            <h2>${exercicio.nome}</h2>
            <img src="img/${exercicio.img}" alt="${exercicio.nome}" onerror="this.onerror=null;this.src='https://placehold.co/300x200/cccccc/333333?text=Sem Imagem'">
            <p><strong>Descrição:</strong> ${exercicio.desc}</p>
            <p><strong>Aquecimento:</strong> ${exercicio.series_warmup} x ${exercicio.reps_warmup}</p>
            <p><strong>Séries de Trabalho 1:</strong> ${exercicio.series} x ${exercicio.reps}</p>
            ${exercicio.series2 ? `<p><strong>Séries de Trabalho 2:</strong> ${exercicio.series2} x ${exercicio.reps2}</p>` : ''}
            ${exercicio.series3 ? `<p><strong>Séries de Trabalho 3:</strong> ${exercicio.series3} x ${exercicio.reps3}</p>` : ''}
            <p><strong>Descanso:</strong> ${exercicio.descanso}</p>
        `;
        exerciciosContainer.appendChild(exercicioDiv); // Adiciona o div do exercício ao container.
    });
}

// --- Event Listeners (Ouvintes de Eventos) ---

// Adiciona listeners para os botões de seleção de usuário ('Preto' e 'Preta').
// Só executa se os botões existirem na página (ou seja, em index.html).
if (btnPreto && btnPreta) {
    btnPreto.addEventListener('click', () => {
        currentUser = 'preto';
        localStorage.setItem('currentUser', 'preto'); // Salva a preferência do usuário no LocalStorage.
        updateCurrentUserDisplay(); // Atualiza a interface do usuário.
        loadTreinoStatus();        // Recarrega o status do treino para o novo usuário.
        loadRefeicoes();           // Recarrega as refeições para o novo usuário.
    });

    btnPreta.addEventListener('click', () => {
        currentUser = 'preta';
        localStorage.setItem('currentUser', 'preta');
        updateCurrentUserDisplay();
        loadTreinoStatus();
        loadRefeicoes();
    });
}

// Listener para o botão "Concluí o Treino de Hoje".
// Só executa se o botão existir na página (em index.html).
if (btnConcluirTreino) {
    btnConcluirTreino.addEventListener('click', () => {
        const treinosConcluidos = JSON.parse(localStorage.getItem('treinosConcluidos')) || {};
        const today = getTodayDate();
        const userTodayKey = `${currentUser}_${today}`; // Chave única para o registro do treino concluído.

        treinosConcluidos[userTodayKey] = true; // Marca o treino como feito para o usuário e data de hoje.
        localStorage.setItem('treinosConcluidos', JSON.stringify(treinosConcluidos)); // Salva o estado atualizado no LocalStorage.
        loadTreinoStatus(); // Recarrega o status para atualizar a interface (desabilitar o botão, mostrar mensagem).
    });
}

// Listener para o formulário "Adicionar Nova Refeição".
// Só executa se o formulário existir na página (em index.html).
if (formAdicionarRefeicao) {
    formAdicionarRefeicao.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário, que recarregaria a página.

        const tipo = tipoRefeicao.value;
        const descricao = descricaoRefeicao.value;
        const today = getTodayDate();
        // Gera um ID único simples baseado no timestamp atual. Isso ajuda a identificar refeições individualmente para exclusão.
        const id = Date.now().toString(); 

        const todasRefeicoes = JSON.parse(localStorage.getItem('refeicoes')) || [];

        // Adiciona a nova refeição ao array de todas as refeições com seu ID único.
        todasRefeicoes.push({
            id: id, 
            usuario: currentUser,
            data: today,
            tipo: tipo,
            descricao: descricao
        });

        localStorage.setItem('refeicoes', JSON.stringify(todasRefeicoes)); // Salva o array atualizado no LocalStorage.
        formAdicionarRefeicao.reset(); // Limpa os campos do formulário após o envio.
        loadRefeicoes(); // Recarrega a lista de refeições na interface para exibir a nova refeição.
    });
}

// Listener para os botões "Excluir" refeição.
// Usa delegação de eventos no elemento pai 'listaRefeicoes' para capturar cliques nos botões 'Excluir',
// que são adicionados dinamicamente.
if (listaRefeicoes) {
    listaRefeicoes.addEventListener('click', (event) => {
        // Verifica se o elemento clicado possui a classe 'delete-refeicao-btn'.
        if (event.target.classList.contains('delete-refeicao-btn')) {
            const listItem = event.target.closest('li'); // Encontra o elemento <li> pai do botão clicado.
            const idToDelete = listItem.dataset.id; // Pega o ID único da refeição do atributo 'data-id' do <li>.

            let todasRefeicoes = JSON.parse(localStorage.getItem('refeicoes')) || [];
            
            // Filtra o array de todas as refeições, criando um novo array que exclui
            // a refeição cujo ID corresponde ao ID a ser deletado.
            todasRefeicoes = todasRefeicoes.filter(refeicao => refeicao.id !== idToDelete);
            
            localStorage.setItem('refeicoes', JSON.stringify(todasRefeicoes)); // Salva o array atualizado no LocalStorage.
            loadRefeicoes(); // Recarrega a lista de refeições na interface.
        }
    });
}


// --- Inicialização ---
// Este bloco de código é executado assim que o DOM (Document Object Model) da página é completamente carregado.
document.addEventListener('DOMContentLoaded', () => {
    // Verifica qual página está sendo carregada para chamar as funções de inicialização corretas.
    // A classe 'treino-detalhes' é adicionada ao <body> do treino.html para essa verificação.
    if (document.body.classList.contains('treino-detalhes')) { 
        displayTreinoDoDia(); // Se for 'treino.html', exibe os detalhes do treino do dia.
    } else { // Se for 'index.html' (ou qualquer outra página que não seja 'treino-detalhes').
        updateCurrentUserDisplay(); // Atualiza o display do usuário selecionado.
        loadTreinoStatus();        // Carrega e exibe o status do treino para o dia.
        loadRefeicoes();           // Carrega e exibe as refeições registradas para o dia.
    }
});
