// ============================================================================
// MOTOR DE QUESTÕES INFINITAS PROCEDURAIS (ENEM & UECE) - DIA 1 & DIA 2
// Gera infinitas variações em tempo real:
// - DIA 1: Figuras de Linguagem, Funções da Linguagem, Constituições/Cidadania e Teoria Política.
// - DIA 2: Eletrodinâmica, Geometria Espacial, Cinemática, Soluções Químicas, Financeira e Probabilidade.
// Recalcula gabarito, distratores calibrados e explicações passo a passo.
// ============================================================================

const INFINITE_GENERATORS = [
  // ==========================================================================
  // BLOCO DIA 2: NATUREZA & MATEMÁTICA
  // ==========================================================================

  // 1. FÍSICA: Consumo de Energia Elétrica e Custo em Fatura Residencial (E = P . Δt)
  {
    category: "Ciências da Natureza • Física (Eletrodinâmica)",
    topic: "GERADOR INFINITO: CONSUMO ELÉTRICO E POTÊNCIA RESIDENCIAL",
    generate: (numOptions) => {
      const appliances = [
        { name: "um aparelho de ar-condicionado inverter", potMin: 900, potMax: 1800, hoursMin: 6, hoursMax: 10 },
        { name: "um chuveiro elétrico multitemperatura", potMin: 4500, potMax: 6500, hoursMin: 0.5, hoursMax: 1.2 },
        { name: "um sistema de aquecedor elétrico de ambiente", potMin: 1200, potMax: 2200, hoursMin: 4, hoursMax: 8 },
        { name: "uma lavadora e secadora de roupas", potMin: 1500, potMax: 2500, hoursMin: 2, hoursMax: 4 }
      ];
      const app = appliances[Math.floor(Math.random() * appliances.length)];
      const powerW = Math.floor(Math.random() * ((app.potMax - app.potMin) / 100) + app.potMin / 100) * 100;
      const hoursPerDay = Math.round((Math.random() * (app.hoursMax - app.hoursMin) + app.hoursMin) * 2) / 2;
      const days = 30;
      const tariff = Math.round((Math.random() * 0.4 + 0.65) * 100) / 100; // R$ 0,65 a R$ 1,05 por kWh

      const monthlyKwh = Math.round(((powerW / 1000) * hoursPerDay * days) * 10) / 10;
      const totalCost = Math.round((monthlyKwh * tariff) * 100) / 100;

      const title = `Custo Mensal de Consumo de Energia em ${app.name.split(" ")[1]}`;
      const context = `Em uma residência atendida pela rede de distribuição elétrica, ${app.name} possui potência elétrica nominal de ${powerW.toLocaleString('pt-BR')} W e opera, em média, durante ${hoursPerDay} horas diárias ao longo de um mês de ${days} dias. A concessionária de energia cobra uma tarifa padrão de R$ ${tariff.toFixed(2).replace('.', ',')} por cada quilowatt-hora (kWh) consumido (já inclusos impostos e encargos setoriais).`;
      const question = `O valor financeiro aproximado acrescido à fatura de energia elétrica dessa família exclusivamente devido à utilização mensal desse equipamento é de:`;

      const correctText = `R$ ${totalCost.toFixed(2).replace('.', ',')}`;
      const wrongValues = [
        Math.round((monthlyKwh * tariff * 1.5) * 100) / 100,
        Math.round((monthlyKwh * tariff * 0.6) * 100) / 100,
        Math.round(((powerW * hoursPerDay / 100) * tariff) * 100) / 100,
        Math.round((monthlyKwh * 0.5) * 100) / 100
      ].filter(v => v !== totalCost && v > 0);

      const opts = [{ text: correctText, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      const chosenWrongs = Array.from(new Set(wrongValues)).slice(0, neededWrongs);
      while (chosenWrongs.length < neededWrongs) {
        const fake = Math.round((totalCost * (0.4 + Math.random() * 1.2)) * 100) / 100;
        if (fake !== totalCost && !chosenWrongs.includes(fake)) chosenWrongs.push(fake);
      }
      chosenWrongs.forEach(w => opts.push({ text: `R$ ${w.toFixed(2).replace('.', ',')}`, isCorrect: false }));

      const explanation = `Cálculo: Potência em kW = ${powerW} W / 1000 = ${(powerW/1000).toFixed(2)} kW. Consumo mensal em kWh = ${(powerW/1000).toFixed(2)} kW × ${hoursPerDay} h/dia × ${days} dias = ${monthlyKwh} kWh. Custo = ${monthlyKwh} kWh × R$ ${tariff.toFixed(2).replace('.', ',')} = R$ ${totalCost.toFixed(2).replace('.', ',')}.`;

      return {
        difficulty: "medio",
        category: "Ciências da Natureza • Física (Eletrodinâmica)",
        topic: "GERADOR INFINITO: CONSUMO ELÉTRICO E POTÊNCIA",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  },

  // 2. MATEMÁTICA: Geometria Espacial e Volume de Caixas / Reservatórios
  {
    category: "Matemática • Geometria Espacial",
    topic: "GERADOR INFINITO: VOLUME E CAPACIDADE VOLUMÉTRICA",
    generate: (numOptions) => {
      const lengthM = Math.floor(Math.random() * 3 + 2); // 2 a 4 m
      const widthM = Math.floor(Math.random() * 2 + 1);  // 1 a 2 m
      const heightM = Math.round((Math.random() * 1.5 + 1.0) * 10) / 10; // 1.0 a 2.5 m

      const volM3 = Math.round((lengthM * widthM * heightM) * 100) / 100;
      const liters = Math.round(volM3 * 1000);

      const title = `Capacidade Volumétrica de Reservatório Paralelepipédico`;
      const context = `Uma escola pública planeja construir um reservatório de água potável no formato de paralelepípedo reto-retângulo para garantir segurança hídrica em períodos de estiagem. As dimensões internas do projeto estrutural preveem comprimento de ${lengthM} metros, largura de ${widthM} metro(s) e profundidade vertical de ${heightM.toFixed(1).replace('.', ',')} metro(s).`;
      const question = `Considerando que 1 metro cúbico (m³) tem capacidade volumétrica exata de 1.000 litros de água, o volume máximo comportado por esse reservatório quando totalmente cheio corresponde a:`;

      const correctText = `${liters.toLocaleString('pt-BR')} litros`;
      const wrongList = [
        Math.round(liters / 10),
        Math.round(liters * 10),
        Math.round(liters * 0.5),
        Math.round(liters * 1.5)
      ].filter(v => v !== liters);

      const opts = [{ text: correctText, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      const chosen = Array.from(new Set(wrongList)).slice(0, neededWrongs);
      while (chosen.length < neededWrongs) {
        const fake = Math.round(liters * (0.3 + Math.random() * 1.4));
        if (fake !== liters && !chosen.includes(fake)) chosen.push(fake);
      }
      chosen.forEach(w => opts.push({ text: `${w.toLocaleString('pt-BR')} litros`, isCorrect: false }));

      const explanation = `Volume = Comprimento × Largura × Altura = ${lengthM} m × ${widthM} m × ${heightM} m = ${volM3} m³. Como cada 1 m³ = 1.000 L, Capacidade = ${volM3} × 1.000 = ${liters.toLocaleString('pt-BR')} litros.`;

      return {
        difficulty: "facil",
        category: "Matemática • Geometria Espacial",
        topic: "GERADOR INFINITO: VOLUME E CAPACIDADE",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  },

  // 3. FÍSICA: Velocidade Média e Cinemática Escalar (Δs = v . Δt)
  {
    category: "Ciências da Natureza • Física (Cinemática)",
    topic: "GERADOR INFINITO: VELOCIDADE MÉDIA E DESLOCAMENTO",
    generate: (numOptions) => {
      const routes = [
        { orig: "Fortaleza", dest: "Sobral", distKm: 240 },
        { orig: "Fortaleza", dest: "Juazeiro do Norte", distKm: 490 },
        { orig: "São Paulo", dest: "Campinas", distKm: 100 },
        { orig: "Belo Horizonte", dest: "Ouro Preto", distKm: 100 },
        { orig: "Recife", dest: "Caruaru", distKm: 135 }
      ];
      const route = routes[Math.floor(Math.random() * routes.length)];
      const avgSpeedKmH = Math.floor(Math.random() * 4 + 6) * 10; // 60 a 90 km/h
      const stopMinutes = Math.floor(Math.random() * 4 + 1) * 15; // 15 a 60 min

      const travelHours = route.distKm / avgSpeedKmH;
      const totalMinutes = Math.round(travelHours * 60 + stopMinutes);
      const hoursPart = Math.floor(totalMinutes / 60);
      const minPart = totalMinutes % 60;

      const title = `Duração de Viagem Rodoviária entre ${route.orig} e ${route.dest}`;
      const context = `Um caminhoneiro realiza o transporte rodoviário de cargas entre as cidades de ${route.orig} e ${route.dest}, percorrendo um trajeto total de ${route.distKm} km. Durante o percurso em movimento, o veículo mantém uma velocidade escalar média constante de ${avgSpeedKmH} km/h. Além disso, o motorista faz uma parada obrigatória de ${stopMinutes} minutos em um posto de fiscalização rodoviária para descanso e conferência de notas.`;
      const question = `O tempo total decorrido desde a partida em ${route.orig} até a chegada ao destino final em ${route.dest} é igual a:`;

      const correctText = minPart === 0 ? `${hoursPart} horas` : `${hoursPart} horas e ${minPart} minutos`;
      const fakeMinutes = [
        Math.round(travelHours * 60),
        totalMinutes + 30,
        totalMinutes - 20,
        totalMinutes + 60
      ].filter(m => m !== totalMinutes && m > 0);

      const opts = [{ text: correctText, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      const chosen = Array.from(new Set(fakeMinutes)).slice(0, neededWrongs);
      while (chosen.length < neededWrongs) {
        const fake = totalMinutes + Math.floor(Math.random() * 50 - 25);
        if (fake !== totalMinutes && !chosen.includes(fake) && fake > 0) chosen.push(fake);
      }
      chosen.forEach(m => {
        const h = Math.floor(m / 60);
        const mn = m % 60;
        const txt = mn === 0 ? `${h} horas` : `${h} horas e ${mn} minutos`;
        opts.push({ text: txt, isCorrect: false });
      });

      const explanation = `Tempo em movimento = ${route.distKm} km / ${avgSpeedKmH} km/h = ${travelHours.toFixed(2)} h = ${Math.round(travelHours * 60)} min. Tempo total = ${Math.round(travelHours * 60)} min + ${stopMinutes} min de parada = ${totalMinutes} minutos (${hoursPart}h e ${minPart}min).`;

      return {
        difficulty: "medio",
        category: "Ciências da Natureza • Física (Cinemática)",
        topic: "GERADOR INFINITO: VELOCIDADE MÉDIA",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  },

  // 4. QUÍMICA: Concentração Comum de Soluções (C = m / V)
  {
    category: "Ciências da Natureza • Físico-Química",
    topic: "GERADOR INFINITO: CONCENTRAÇÃO DE SOLUÇÕES QUÍMICAS",
    generate: (numOptions) => {
      const salts = [
        { name: "cloreto de sódio (sal de cozinha)", formula: "NaCl" },
        { name: "sulfato de cobre II", formula: "CuSO₄" },
        { name: "hidróxido de sódio (soda cáustica)", formula: "NaOH" },
        { name: "glicose pura", formula: "C₆H₁₂O₆" }
      ];
      const salt = salts[Math.floor(Math.random() * salts.length)];
      const massG = Math.floor(Math.random() * 8 + 2) * 5; // 10g a 50g
      const volumeMl = Math.floor(Math.random() * 4 + 2) * 100; // 200 mL a 500 mL
      const volumeL = volumeMl / 1000;

      const concentrationGL = Math.round((massG / volumeL) * 10) / 10;

      const title = `Preparo de Solução Aquosa de ${salt.name.split(" ")[0]}`;
      const context = `Em uma aula experimental de laboratório químico, um grupo de estudantes dissolve completamente uma massa de ${massG} gramas de ${salt.name} em água destilada suficiente para preparar exatamente ${volumeMl} mililitros (mL) de solução aquosa homogênea.`;
      const question = `A concentração comum dessa solução preparada pelos estudantes, expressa em gramas por litro (g/L), é rigorosamente igual a:`;

      const correctText = `${concentrationGL.toFixed(1).replace('.', ',')} g/L`;
      const wrongList = [
        (concentrationGL * 10).toFixed(1).replace('.', ','),
        (concentrationGL / 10).toFixed(1).replace('.', ','),
        (massG * volumeL).toFixed(1).replace('.', ','),
        ((massG / volumeMl) * 100).toFixed(1).replace('.', ',')
      ].filter(v => v !== correctText);

      const opts = [{ text: correctText, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      const chosen = Array.from(new Set(wrongList)).slice(0, neededWrongs);
      while (chosen.length < neededWrongs) {
        const fake = (concentrationGL * (0.3 + Math.random() * 1.5)).toFixed(1).replace('.', ',');
        if (fake !== correctText && !chosen.includes(fake)) chosen.push(fake);
      }
      chosen.forEach(w => opts.push({ text: `${w} g/L`, isCorrect: false }));

      const explanation = `Concentração Comum C = massa do soluto (g) / volume da solução (L). Volume em litros = ${volumeMl} mL / 1000 = ${volumeL} L. Logo: C = ${massG} g / ${volumeL} L = ${concentrationGL.toFixed(1).replace('.', ',')} g/L.`;

      return {
        difficulty: "facil",
        category: "Ciências da Natureza • Físico-Química",
        topic: "GERADOR INFINITO: CONCENTRAÇÃO DE SOLUÇÕES",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  },

  // 5. MATEMÁTICA: Porcentagem e Descontos Comerciais
  {
    category: "Matemática • Matemática Financeira e Porcentagem",
    topic: "GERADOR INFINITO: DESCONTOS E AUMENTOS PERCENTUAIS",
    generate: (numOptions) => {
      const items = [
        "um computador portátil para estudos",
        "um livro didático preparatório para vestibulares",
        "um curso preparatório intensivo online",
        "um pacote de materiais escolares técnicos"
      ];
      const item = items[Math.floor(Math.random() * items.length)];
      const originalPrice = Math.floor(Math.random() * 8 + 4) * 50; // R$ 200 a R$ 600
      const discountPct = Math.floor(Math.random() * 4 + 2) * 5; // 10%, 15%, 20%, 25%

      const finalPrice = originalPrice * (1 - discountPct / 100);
      const discountVal = originalPrice * (discountPct / 100);

      const title = `Desconto Promocional na Aquisição de ${item.split(" ")[1]}`;
      const context = `Uma livraria universitária oferece uma condição promocional especial de início de ano letivo: na compra à vista de ${item}, cujo preço de tabela original é de R$ ${originalPrice.toFixed(2).replace('.', ',')}, o cliente recebe um desconto imediato de ${discountPct}%.`;
      const question = `O valor líquido final a ser pago pelo estudante que optar pelo pagamento à vista com o desconto promocional aplicado é de:`;

      const correctText = `R$ ${finalPrice.toFixed(2).replace('.', ',')}`;
      const wrongList = [
        `R$ ${(originalPrice - discountPct).toFixed(2).replace('.', ',')}`,
        `R$ ${(originalPrice * (1 + discountPct / 100)).toFixed(2).replace('.', ',')}`,
        `R$ ${discountVal.toFixed(2).replace('.', ',')}`,
        `R$ ${(finalPrice * 0.9).toFixed(2).replace('.', ',')}`
      ].filter(v => v !== correctText);

      const opts = [{ text: correctText, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      const chosen = Array.from(new Set(wrongList)).slice(0, neededWrongs);
      while (chosen.length < neededWrongs) {
        const fake = `R$ ${(finalPrice + Math.floor(Math.random() * 80 - 40)).toFixed(2).replace('.', ',')}`;
        if (fake !== correctText && !chosen.includes(fake)) chosen.push(fake);
      }
      chosen.forEach(w => opts.push({ text: w, isCorrect: false }));

      const explanation = `Cálculo: Desconto = ${discountPct}% de R$ ${originalPrice.toFixed(2).replace('.', ',')} = R$ ${discountVal.toFixed(2).replace('.', ',')}. Valor final = R$ ${originalPrice.toFixed(2).replace('.', ',')} - R$ ${discountVal.toFixed(2).replace('.', ',')} = R$ ${finalPrice.toFixed(2).replace('.', ',')}.`;

      return {
        difficulty: "facil",
        category: "Matemática • Matemática Financeira e Porcentagem",
        topic: "GERADOR INFINITO: PORCENTAGEM E DESCONTOS",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  },

  // 6. MATEMÁTICA: Probabilidade Clássica e Sorteios
  {
    category: "Matemática • Probabilidade e Estatística",
    topic: "GERADOR INFINITO: PROBABILIDADE CLÁSSICA E SORTEIOS",
    generate: (numOptions) => {
      const totalBalls = Math.floor(Math.random() * 3 + 2) * 10; // 20, 30, 40 bolas
      const blueBalls = Math.floor(Math.random() * (totalBalls / 2 - 4) + 4);
      const otherBalls = totalBalls - blueBalls;

      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const divisor = gcd(blueBalls, totalBalls);
      const numSimp = blueBalls / divisor;
      const denSimp = totalBalls / divisor;

      const title = `Probabilidade em Sorteio de Esferas em Urna`;
      const context = `Uma urna opaca contém exatamente ${totalBalls} esferas maciças e idênticas em tamanho e peso, diferindo apenas na cor externa: ${blueBalls} esferas são de cor azul e ${otherBalls} esferas são de cor vermelha. Uma pessoa retira aleatoriamente e com os olhos vendados uma única esfera dessa urna.`;
      const question = `A probabilidade teórica de a esfera retirada da urna ser de cor azul é igual a:`;

      const correctText = `${numSimp} / ${denSimp}`;
      const wrongList = [
        `${otherBalls / gcd(otherBalls, totalBalls)} / ${totalBalls / gcd(otherBalls, totalBalls)}`,
        `${blueBalls} / ${otherBalls}`,
        `${numSimp} / ${denSimp + 1}`,
        `1 / ${blueBalls}`
      ].filter(v => v !== correctText);

      const opts = [{ text: correctText, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      const chosen = Array.from(new Set(wrongList)).slice(0, neededWrongs);
      while (chosen.length < neededWrongs) {
        const fake = `${Math.floor(Math.random() * 5 + 1)} / ${Math.floor(Math.random() * 10 + 6)}`;
        if (fake !== correctText && !chosen.includes(fake)) chosen.push(fake);
      }
      chosen.forEach(w => opts.push({ text: w, isCorrect: false }));

      const explanation = `Probabilidade P = Casos Favoráveis / Casos Totais = ${blueBalls} / ${totalBalls}. Simplificando a fração por ${divisor}, obtém-se P = ${numSimp} / ${denSimp}.`;

      return {
        difficulty: "medio",
        category: "Matemática • Probabilidade e Estatística",
        topic: "GERADOR INFINITO: PROBABILIDADE CLÁSSICA",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  },

  // ==========================================================================
  // BLOCO DIA 1: LINGUAGENS, LITERATURA, HUMANAS E FILOSOFIA
  // ==========================================================================

  // 7. LINGUAGENS: Figuras de Linguagem e Recursos Expressivos
  {
    category: "Linguagens • Semântica e Figuras de Linguagem",
    topic: "GERADOR INFINITO: RECURSOS EXPRESSIVOS E FIGURAS DE ESTILO",
    generate: (numOptions) => {
      const bank = [
        {
          quote: "Chorei um oceano de lágrimas de desespero enquanto as horas arrastavam-se sem notícias.",
          correct: "Hipérbole, caracterizada pelo exagero expressivo e intencional para enfatizar a intensidade da angústia.",
          type: "hiperbole",
          distractors: [
            "Metonímia, baseada na substituição de uma palavra pelo autor ou efeito em relação de contiguidade.",
            "Eufemismo, empregado para suavizar uma ideia desagradável ou amenizar um impacto doloroso.",
            "Antítese, estruturada na aproximação direta de palavras com sentidos rigorosamente opostos.",
            "Prosopopeia, consistente na atribuição de traços humanos a seres inanimados."
          ]
        },
        {
          quote: "Os clarins de prata da manhã acordavam os telhados sonolentos e preguiçosos da vila.",
          correct: "Prosopopeia ou personificação, ao atribuir qualidades e comportamentos humanos a elementos inanimados.",
          type: "personificacao",
          distractors: [
            "Hipérbole, pelo emprego deliberado de dimensões desproporcionais e fabulosas.",
            "Pleonasmo, pela repetição enfática e redundante de um termo sintático já expresso.",
            "Sinestesia, marcada pelo cruzamento e fusão de sensações de canais sensoriais distintos.",
            "Catacrese, pelo uso metafórico cristalizado por ausência de termo específico na língua."
          ]
        },
        {
          quote: "Durante os anos de formação acadêmica na biblioteca, ele devorava Machado de Assis e Guimarães Rosa todas as noites.",
          correct: "Metonímia, pela substituição do produto e das obras artísticas pelos nomes próprios de seus respectivos autores.",
          type: "metonimia",
          distractors: [
            "Metáfora, ao estabelecer uma comparação implícita sem conjunção conectiva entre termos.",
            "Antítese, fundada no confronto simétrico entre noções conceituais contrárias.",
            "Hipérbato, pela inversão drástica da ordem direta dos constituintes oracionais.",
            "Anacoluto, pela quebra da estrutura sintática inicial sem concordância do predicado."
          ]
        },
        {
          quote: "O silêncio ensurdecedor daquela floresta deserta ecoava profundamente na alma do viajante solitário.",
          correct: "Paradoxo ou oxímoro, pela aproximação de conceitos contraditórios e inconciliáveis que desafiam a lógica linear.",
          type: "paradoxo",
          distractors: [
            "Antítese, por aproximar palavras opostas sem gerar contradição lógica insolúvel.",
            "Eufemismo, pela tentativa de abrandar uma notícia trágica com circunlóquios.",
            "Polissíndeto, pela reiteração enfática de conectivos coordenativos aditivos.",
            "Assonância, pela repetição uniforme de timbres consonantais explosivos."
          ]
        },
        {
          quote: "Nas noites de chuva, sentia o perfume doce e aveludado que emanava das flores molhadas do jardim.",
          correct: "Sinestesia, decorrente da fusão harmoniosa de sensações olfativas, gustativas e táteis em uma mesma expressão.",
          type: "sinestesia",
          distractors: [
            "Hipérbole, marcada pelo alargamento desmedido das proporções da cena narrada.",
            "Zeugma, caracterizado pela omissão de forma verbal expressa em oração anterior.",
            "Metonímia, decorrente da troca da parte pelo todo na caracterização da paisagem.",
            "Elipse, pela supressão gramatical voluntária de um termo facilmente subentendido."
          ]
        }
      ];

      const item = bank[Math.floor(Math.random() * bank.length)];
      const title = `Reconhecimento de Figuras de Construção em Textos`;
      const context = `Examine o fragmento textual a seguir, no qual a linguagem literária recorre a recursos expressivos para enriquecer a construção de sentidos no imaginário do leitor: "${item.quote}"`;
      const question = `A figura de linguagem que estrutura predominantemente o trecho em análise corresponde à:`;

      const opts = [{ text: item.correct, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      item.distractors.slice(0, neededWrongs).forEach(d => opts.push({ text: d, isCorrect: false }));

      const explanation = `Análise estilística: O fragmento explora a figura ${item.type.toUpperCase()}, na qual ${item.correct.toLowerCase()}`;

      return {
        difficulty: "medio",
        category: "Linguagens • Semântica e Figuras de Linguagem",
        topic: "GERADOR INFINITO: FIGURAS DE LINGUAGEM",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  },

  // 8. LINGUAGENS: Funções da Linguagem de Roman Jakobson
  {
    category: "Linguagens • Comunicação e Funções da Linguagem",
    topic: "GERADOR INFINITO: FUNÇÕES DA LINGUAGEM DE JAKOBSON",
    generate: (numOptions) => {
      const situations = [
        {
          textSample: "Atenção consumidor! Não perca esta oportunidade imperdível! Garanta hoje mesmo sua vaga com condições exclusivas e transforme sua carreira profissional!",
          correct: "Função conativa (ou apelativa), cujo objetivo primordial é convencer, persuadir e influenciar o comportamento do interlocutor.",
          type: "conativa",
          distractors: [
            "Função emotiva, cujo centro de gravidade reside na expressão subjetiva dos sentimentos íntimos do emissor.",
            "Função fática, direcionada primordialmente à manutenção do canal físico de contato entre os interlocutores.",
            "Função metalinguística, voltada a esclarecer o funcionamento e o significado do próprio código verbal.",
            "Função referencial, cujo único escopo é a transmissão imparcial de dados factuais e objetivos da realidade."
          ]
        },
        {
          textSample: "Verbete: 'Efêmero' (adjetivo). Que tem curta duração; passageiro, transitório, fugaz. Exemplo de uso: beleza efêmera das flores primaveris.",
          correct: "Função metalinguística, na qual o código verbal utiliza a própria linguagem para explicar e definir o significado de suas palavras.",
          type: "metalinguistica",
          distractors: [
            "Função conativa, estruturada para ordenar ações imperativas ao público leitor do dicionário.",
            "Função emotiva, caracterizada pela carga lírica e sentimental derramada pelo dicionarista.",
            "Função fática, focada unicamente na checagem da conexão técnica do meio transmissor de som.",
            "Função poética, que busca exclusivamente o ritmo musical e a cadência melódica das sílabas."
          ]
        },
        {
          textSample: "— Alô? Está me ouvindo bem? Alô, testando o microfone, 1, 2, 3... O áudio está chegando claro aí no fundo da sala de conferências?",
          correct: "Função fática, empregada com a finalidade exclusiva de testar, abrir, prolongar ou verificar a eficácia do canal de comunicação.",
          type: "fatica",
          distractors: [
            "Função referencial, voltada à exposição de teorias científicas e conceitos sociológicos neutros.",
            "Função poética, centrada no trabalho estético formal sobre a harmonia rítmica dos versos.",
            "Função metalinguística, orientada à análise gramatical das classes de palavras da língua.",
            "Função conativa, com o propósito de induzir a compra compulsiva de aparelhos telefônicos."
          ]
        },
        {
          textSample: "Segundo o relatório do IPCC divulgado pela ONU, as temperaturas médias globais na superfície terrestre elevaram-se em 1,1 °C acima dos níveis pré-industriais no último século.",
          correct: "Função referencial (ou informativa), focada no contexto e na transmissão objetiva, impessoal e documental de dados científicos.",
          type: "referencial",
          distractors: [
            "Função emotiva, que expressa primordialmente os desabafos e impressões líricas subjetivas do narrador.",
            "Função poética, na qual a sonoridade das palavras se sobrepõe ao conteúdo factual transmitido.",
            "Função fática, destinada a averiguar ruídos na transmissão sonora entre os participantes da reunião.",
            "Função conativa, que recorre a verbos imperativos diretos para coagir o leitor à ação imediata."
          ]
        }
      ];

      const item = situations[Math.floor(Math.random() * situations.length)];
      const title = `Predomínio de Funções da Linguagem em Diferentes Gêneros`;
      const context = `Considere o fragmento textual a seguir, representativo de uma prática comunicativa contemporânea: "${item.textSample}"`;
      const question = `Considerando a teoria da comunicação de Roman Jakobson e os elementos da linguagem, o trecho é marcado pelo predomínio da:`;

      const opts = [{ text: item.correct, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      item.distractors.slice(0, neededWrongs).forEach(d => opts.push({ text: d, isCorrect: false }));

      const explanation = `Predomina a função ${item.type.toUpperCase()}, pois o foco do texto está direcionado de maneira inequívoca a ${item.correct.toLowerCase()}`;

      return {
        difficulty: "facil",
        category: "Linguagens • Comunicação e Funções da Linguagem",
        topic: "GERADOR INFINITO: FUNÇÕES DA LINGUAGEM",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  },

  // 9. CIÊNCIAS HUMANAS: Constituições Brasileiras e Cidadania
  {
    category: "Ciências Humanas • História do Brasil e Cidadania",
    topic: "GERADOR INFINITO: CIDADANIA E CONSTITUIÇÕES BRASILEIRAS",
    generate: (numOptions) => {
      const consts = [
        {
          year: "1824 (Constituição Outorgada do Império)",
          period: "Primeiro Reinado",
          correct: "Voto censitário baseado em renda mínima anual e instituição do Poder Moderador privativo do Imperador.",
          type: "1824",
          distractors: [
            "Voto universal aberto e irrestrito para homens e mulheres alfabetizados de todas as camadas sociais.",
            "Eleição direta republicana para presidente com mandato de quatro anos sem reeleição contínua.",
            "Garantia de sufrágio obrigatório aos escravizados domésticos alforriados por serviços prestados à Coroa.",
            "Extinção dos títulos de nobreza e separação rígida e laica entre os poderes do Estado e da Igreja Católica."
          ]
        },
        {
          year: "1891 (Primeira Constituição Republicana)",
          period: "República da Espada e Oligárquica",
          correct: "Voto aberto para cidadãos masculinos maiores de 21 anos, com exclusão expressa de mulheres, mendigos e analfabetos.",
          type: "1891",
          distractors: [
            "Voto secreto por meio de cédulas padronizadas e fiscalização eletrônica autônoma da Justiça Eleitoral.",
            "Instituição do voto censitário exigindo comprovação de posse de propriedades fundiárias nas províncias.",
            "Concessão inédita do sufrágio feminino com obrigatoriedade de alistamento eleitoral para todas as jovens.",
            "Subordinação dos governadores dos estados ao crivo soberano do Conselho de Estado da monarquia."
          ]
        },
        {
          year: "1934 (Segunda República / Era Vargas)",
          period: "Governo Constitucional de Getúlio Vargas",
          correct: "Consagração do voto secreto, extensão do sufrágio às mulheres e criação pioneira da Justiça Eleitoral e leis trabalhistas.",
          type: "1934",
          distractors: [
            "Fechamento do Congresso Nacional e instauração da pena de morte para adversários políticos civis.",
            "Revogação dos direitos previdenciários e proibição de associações sindicais em todo o território nacional.",
            "Restauração do voto censitário baseado na renda cafeeira e obrigatoriedade da religião católica nas escolas.",
            "Extinção da representação classista profissional e exclusão permanente das trabalhadoras do mercado fabril."
          ]
        },
        {
          year: "1988 (Constituição Cidadã)",
          period: "Nova República pós-Ditadura Militar",
          correct: "Voto facultativo aos analfabetos e jovens de 16 a 17 anos, racismo como crime inafiançável e ampla proteção social.",
          type: "1988",
          distractors: [
            "Interdição permanente do direito de voto a quem não comprovar conclusão do ensino superior público.",
            "Subordinação das garantias fundamentais individuais à tutela discricionária do Conselho de Segurança Nacional.",
            "Restrição do direito de greve dos trabalhadores e censura prévia institucional aos veículos de imprensa.",
            "Extinção dos mandatos eletivos diretos para governadores e prefeitos das capitais metropolitanas."
          ]
        }
      ];

      const item = consts[Math.floor(Math.random() * consts.length)];
      const title = `Marcos Constitucionais e Direitos de Cidadania no Brasil`;
      const context = `A história política brasileira é marcada por rupturas e transições institucionais refletidas em seus textos constitucionais. Em relação à Carta Magna de ${item.year}, promulgada durante o contexto do ${item.period}:`;
      const question = `Constitui característica marcante da cidadania e da ordem jurídica estabelecida por essa Constituição:`;

      const opts = [{ text: item.correct, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      item.distractors.slice(0, neededWrongs).forEach(d => opts.push({ text: d, isCorrect: false }));

      const explanation = `A Constituição de ${item.type} consagrou expressamente: ${item.correct}`;

      return {
        difficulty: "medio",
        category: "Ciências Humanas • História do Brasil e Cidadania",
        topic: "GERADOR INFINITO: CIDADANIA E CONSTITUIÇÕES",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  },

  // 10. CIÊNCIAS HUMANAS: Filosofia Política e Sociologia
  {
    category: "Ciências Humanas • Filosofia Política e Sociologia",
    topic: "GERADOR INFINITO: CONTRATUALISMO E TEORIA SOCIAL",
    generate: (numOptions) => {
      const thinkers = [
        {
          name: "Thomas Hobbes",
          work: "Leviatã (1651)",
          correct: "O estado de natureza como guerra de todos contra todos impulsionada pelo medo mútuo, exigindo um soberano absoluto garantidor da ordem.",
          type: "Hobbes",
          distractors: [
            "O ser humano como 'bom selvagem' puro corrompido pela instituição da propriedade privada nas sociedades civis.",
            "O direito inalienável dos cidadãos à rebelião armada permanente sempre que os impostos régios forem reajustados.",
            "A divisão harmônica e autônoma do Estado em três poderes soberanos e independentes entre si.",
            "A inexistência de qualquer contrato social, visto que a sociedade política nasce do instinto biológico animal."
          ]
        },
        {
          name: "John Locke",
          work: "Segundo Tratado sobre o Governo Civil (1689)",
          correct: "A defesa dos direitos naturais inalienáveis (vida, liberdade e propriedade privada) e o consentimento como fundamento legítimo do governo.",
          type: "Locke",
          distractors: [
            "A exigência de concentração ilimitada do poder estatal na coroa para reprimir os impulsos bélicos do povo.",
            "A condenação da propriedade privada como a raiz metafísica de toda a degeneração moral humana no planeta.",
            "A extinção definitiva das leis civis escritas em favor do costume oral patriarcal das corporações tradicionais.",
            "A delegação da autoridade política suprema aos bispos diocesanos sob supervisão do tribunal inquisitorial."
          ]
        },
        {
          name: "Jean-Jacques Rousseau",
          work: "Do Contrato Social (1762)",
          correct: "A soberania popular fundamentada na 'vontade geral' voltada ao bem comum, contrapondo-se à alienação da vontade a governantes déspotas.",
          type: "Rousseau",
          distractors: [
            "A submissão passiva dos indivíduos à autoridade autocrática do monarca sob a justificativa do direito divino.",
            "A primazia irrestrita dos interesses privados corporativos sobre a soberania coletiva da comunidade cidadã.",
            "A defesa da tirania esclarecida como modelo político mais eficiente para conter as paixões democráticas.",
            "A rejeição de assembleias populares diretas em benefício do monopólio político hereditário dos nobres."
          ]
        },
        {
          name: "Émile Durkheim",
          work: "As Regras do Método Sociológico (1895)",
          correct: "O 'fato social' como objeto de estudo, definido por sua exterioridade, coercitividade e generalidade sobre as condutas individuais.",
          type: "Durkheim",
          distractors: [
            "A redução de todos os fenômenos da sociedade à psicologia introspectiva e ao livre-arbítrio dos sujeitos.",
            "A concepção de que as estruturas sociais são ilusões linguísticas desprovidas de força coercitiva sobre a conduta.",
            "A defesa da anomia moral permanente como condição indispensável à prosperidade industrial do capitalismo.",
            "A negação de leis gerais na sociologia e a exaltação do individualismo metodológico atomizado puro."
          ]
        }
      ];

      const item = thinkers[Math.floor(Math.random() * thinkers.length)];
      const title = `Concepções de Estado, Cidadania e Sociedade em ${item.name}`;
      const context = `Na tradição do pensamento filosófico e sociológico ocidental, as reflexões de ${item.name} em sua clássica obra '${item.work}' marcaram os debates sobre o pacto político e a vida social.`;
      const question = `A tese central defendida por esse autor sobre o fundamento da ordem e da convivência humana postula:`;

      const opts = [{ text: item.correct, isCorrect: true }];
      const neededWrongs = numOptions - 1;
      item.distractors.slice(0, neededWrongs).forEach(d => opts.push({ text: d, isCorrect: false }));

      const explanation = `Para ${item.type}: ${item.correct}`;

      return {
        difficulty: "medio",
        category: "Ciências Humanas • Filosofia Política e Sociologia",
        topic: "GERADOR INFINITO: TEORIA POLÍTICA E SOCIAL",
        title: title,
        context: context,
        question: question,
        options: opts,
        explanation: explanation
      };
    }
  }
];

// OPÇÃO A: Função que gera uma rodada mista completa mesclando questões do Dia 1 e Dia 2
function generateInfiniteQuizBatch(count = 6, examMode = 'enem') {
  const numOptions = examMode === 'uece' ? 4 : 5;
  const questions = [];

  // Separa os geradores do Dia 1 e do Dia 2
  const day1Gens = INFINITE_GENERATORS.filter(g => g.category.includes('Linguagens') || g.category.includes('Humanas'));
  const day2Gens = INFINITE_GENERATORS.filter(g => g.category.includes('Natureza') || g.category.includes('Matemática'));

  // Embaralha aleatoriamente
  const shuff1 = [...day1Gens].sort(() => Math.random() - 0.5);
  const shuff2 = [...day2Gens].sort(() => Math.random() - 0.5);

  // Monta uma seleção mista balanceada: metade Dia 1 e metade Dia 2
  const half = Math.floor(count / 2);
  const selected = [];

  for (let i = 0; i < half; i++) {
    selected.push(shuff1[i % shuff1.length]);
  }
  for (let i = 0; i < (count - half); i++) {
    selected.push(shuff2[i % shuff2.length]);
  }

  // Embaralha a ordem final das questões para o simulado
  selected.sort(() => Math.random() - 0.5).forEach(gen => {
    questions.push(gen.generate(numOptions));
  });

  return questions;
}
