// ============================================================================
// MOTOR DE QUESTÕES INFINITAS PROCEDURAIS (ENEM & UECE)
// Gera infinitas variações matemáticas, físicas e químicas recalculando gabarito,
// distratores calibrados e explicações detalhadas em tempo real.
// ============================================================================

const INFINITE_GENERATORS = [
  // --------------------------------------------------------------------------
  // 1. FÍSICA: Consumo de Energia Elétrica e Custo em Fatura Residencial (E = P . Δt)
  // --------------------------------------------------------------------------
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

      // Gerar opções falsas simétricas
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

  // --------------------------------------------------------------------------
  // 2. MATEMÁTICA: Geometria Espacial e Volume de Caixas / Cilindros d'Água
  // --------------------------------------------------------------------------
  {
    category: "Matemática • Geometria Espacial",
    topic: "GERADOR INFINITO: VOLUME E CAPACIDADE VOLUMÉTRICA",
    generate: (numOptions) => {
      // Dimensões em metros
      const lengthM = Math.floor(Math.random() * 3 + 2); // 2 a 4 m
      const widthM = Math.floor(Math.random() * 2 + 1);  // 1 a 2 m
      const heightM = Math.round((Math.random() * 1.5 + 1.0) * 10) / 10; // 1.0 a 2.5 m

      const volM3 = Math.round((lengthM * widthM * heightM) * 100) / 100;
      const liters = Math.round(volM3 * 1000);

      const title = `Capacidade Volumétrica de Reservatório Paralelepipédico`;
      const context = `Uma escola pública planeja construir um reservatório de água potável no formato de paralelepípedo reto-retângulo para garantir segurança hídrica em períodos de racionamento. As dimensões internas do projeto estrutural preveem comprimento de ${lengthM} metros, largura de ${widthM} metro(s) e profundidade vertical de ${heightM.toFixed(1).replace('.', ',')} metro(s).`;
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

  // --------------------------------------------------------------------------
  // 3. FÍSICA: Velocidade Média e Cinemática Escalar (Δs = v . Δt)
  // --------------------------------------------------------------------------
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
      const avgSpeedKmH = Math.floor(Math.random() * 4 + 6) * 10; // 60, 70, 80 ou 90 km/h
      const stopMinutes = Math.floor(Math.random() * 4 + 1) * 15; // 15, 30, 45 ou 60 min

      const travelHours = route.distKm / avgSpeedKmH;
      const totalMinutes = Math.round(travelHours * 60 + stopMinutes);
      const hoursPart = Math.floor(totalMinutes / 60);
      const minPart = totalMinutes % 60;

      const title = `Duração de Viagem Rodoviária entre ${route.orig} e ${route.dest}`;
      const context = `Um caminhoneiro realiza o transporte rodoviário de cargas entre as cidades de ${route.orig} e ${route.dest}, percorrendo um trajeto total de ${route.distKm} km. Durante o percurso em movimento, o veículo mantém uma velocidade escalar média constante de ${avgSpeedKmH} km/h. Além disso, o motorista faz uma parada obrigatória de ${stopMinutes} minutos em um posto de fiscalização rodoviária para descanso e conferência da nota fiscal.`;
      const question = `O tempo total decorrido desde a partida em ${route.orig} até a chegada ao destino final em ${route.dest} é igual a:`;

      const correctText = minPart === 0 ? `${hoursPart} horas` : `${hoursPart} horas e ${minPart} minutos`;

      const fakeMinutes = [
        Math.round(travelHours * 60), // sem a parada
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

      const explanation = `Tempo em movimento: t_mov = ${route.distKm} km / ${avgSpeedKmH} km/h = ${travelHours.toFixed(2)} h = ${Math.round(travelHours * 60)} minutos. Tempo total = ${Math.round(travelHours * 60)} min + ${stopMinutes} min de parada = ${totalMinutes} minutos (${hoursPart}h e ${minPart}min).`;

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

  // --------------------------------------------------------------------------
  // 4. QUÍMICA: Concentração Comum e Título de Soluções (C = m / V)
  // --------------------------------------------------------------------------
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
        (concentrationGL * 10).toFixed(1).replace('.', ','), // esqueceu de passar para L
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

  // --------------------------------------------------------------------------
  // 5. MATEMÁTICA: Porcentagem, Descontos Sucessivos e Juros Comerciais
  // --------------------------------------------------------------------------
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
        `R$ ${(originalPrice - discountPct).toFixed(2).replace('.', ',')}`, // subtraiu a porcentagem direta
        `R$ ${(originalPrice * (1 + discountPct / 100)).toFixed(2).replace('.', ',')}`, // somou
        `R$ ${discountVal.toFixed(2).replace('.', ',')}`, // valor do desconto
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

      const explanation = `Cálculo: Desconto = ${discountPct}% de R$ ${originalPrice.toFixed(2).replace('.', ',')} = ${originalPrice} × 0,${discountPct} = R$ ${discountVal.toFixed(2).replace('.', ',')}. Valor final = R$ ${originalPrice.toFixed(2).replace('.', ',')} - R$ ${discountVal.toFixed(2).replace('.', ',')} = R$ ${finalPrice.toFixed(2).replace('.', ',')}.`;

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

  // --------------------------------------------------------------------------
  // 6. MATEMÁTICA: Probabilidade Simples de Eventos Equiprováveis
  // --------------------------------------------------------------------------
  {
    category: "Matemática • Probabilidade e Estatística",
    topic: "GERADOR INFINITO: PROBABILIDADE CLÁSSICA E SORTEIOS",
    generate: (numOptions) => {
      const totalBalls = Math.floor(Math.random() * 3 + 2) * 10; // 20, 30, 40 bolas
      const blueBalls = Math.floor(Math.random() * (totalBalls / 2 - 4) + 4);
      const otherBalls = totalBalls - blueBalls;

      // Simplificação de fração gcd
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
      const divisor = gcd(blueBalls, totalBalls);
      const numSimp = blueBalls / divisor;
      const denSimp = totalBalls / divisor;

      const title = `Probabilidade em Sorteio de Esferas em Urna`;
      const context = `Uma urna opaca contém exatamente ${totalBalls} esferas maciças e idênticas em tamanho e peso, diferindo apenas na cor externa: ${blueBalls} esferas são de cor azul e ${otherBalls} esferas são de cor vermelha. Uma pessoa retira aleatoriamente e com os olhos vendados uma única esfera dessa urna.`;
      const question = `A probabilidade teórica de a esfera retirada da urna ser de cor azul é igual a:`;

      const correctText = `${numSimp} / ${denSimp}`;
      const wrongList = [
        `${otherBalls / gcd(otherBalls, totalBalls)} / ${totalBalls / gcd(otherBalls, totalBalls)}`, // probabilidade da vermelha
        `${blueBalls} / ${otherBalls}`, // razão entre cores
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

      const explanation = `Probabilidade P = Casos Favoráveis / Casos Totais = ${blueBalls} / ${totalBalls}. Simplificando a fração dividindo numerador e denominador por ${divisor}, obtém-se P = ${numSimp} / ${denSimp}.`;

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
  }
];

// Função que gera um lote de questões procedurais infinitas
function generateInfiniteQuizBatch(count = 5, examMode = 'enem') {
  const numOptions = examMode === 'uece' ? 4 : 5;
  const questions = [];

  for (let i = 0; i < count; i++) {
    // Escolhe um gerador procedural aleatório
    const generator = INFINITE_GENERATORS[Math.floor(Math.random() * INFINITE_GENERATORS.length)];
    const q = generator.generate(numOptions);
    questions.push(q);
  }

  return questions;
}
