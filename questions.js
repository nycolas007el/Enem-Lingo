// BANCO DE QUESTÕES REAIS DO ENEM DOS ÚLTIMOS 5 ANOS (2020 a 2024/2025)
// Adaptadas e estruturadas com contexto oficial, distratores e justificativa pedagógica

const QUESTION_DATABASE = {
  humanas_linguagens: [
    // ==========================================
    // ENEM 2025 - LINGUAGENS & HUMANAS
    // ==========================================
    {
      difficulty: "medio",

      category: "Linguagens • Inteligência Artificial e Autoria",
      topic: "ENEM 2025: LINGUAGEM, IA GENERATIVA E AUTORIA",
      title: "Autoria Literária vs. Modelos de Linguagem",
      context: "Com a proliferação de grandes modelos de linguagem (LLMs) capazes de emular estilos líricos e produzir crônicas em segundos, teóricos da literatura discutem o deslocamento da experiência humana de fruição e subjetividade na criação artística.",
      question: "No debate contemporâneo de Linguagens do ENEM 2025, a especificidade irredutível da autoria humana diante de textos gerados por IA reside na:",
      options: [
        { text: "Velocidade superior dos poetas humanos para processar bancos de dados lexicais em tempo real.", isCorrect: false },
        { text: "Experiência sensível corporificada, intenção ética e engajamento histórico com o sofrimento e a memória social.", isCorrect: true },
        { text: "Obrigação legal de rimar todas as estrofes em decassílabos estritos.", isCorrect: false },
        { text: "Recusa deliberada de qualquer metáfora ou ambiguidade semântica na literatura.", isCorrect: false },
        { text: "Inexistência de erros gramaticais ou lapsos sintáticos nos manuscritos originais.", isCorrect: false }
      ],
      explanation: "A IA recombina padrões probabilísticos de texto, enquanto a literatura humana emerge da experiência corpórea, afetiva e histórica."
    },
    {
      difficulty: "dificil",

      category: "Ciências Humanas • Geopolítica e Meio Ambiente",
      topic: "ENEM 2025: COP30 EM BELÉM E TRANSIÇÃO ENERGÉTICA",
      title: "Protagonismo Amazônico e Bioeconomia",
      context: "A realização da 30ª Conferência da ONU sobre Mudanças Climáticas (COP30) em Belém do Pará colocou a floresta tropical no epicentro das negociações globais de crédito de carbono, preservação de bacias hidrográficas e bioeconomia florestal em pé.",
      question: "O conceito de 'bioeconomia da sociobiodiversidade' defendido na COP30 visa principalmente:",
      options: [
        { text: "Substituir integralmente a cobertura florestal nativa por monoculturas de soja transgênica para exportação.", isCorrect: false },
        { text: "Gerar valor econômico sustentável a partir dos recursos da floresta, valorizando o conhecimento tradicional sem desmatamento.", isCorrect: true },
        { text: "Privatizar todas as bacias e afluentes dos rios amazônicos transferindo-os a fundos soberanos estrangeiros.", isCorrect: false },
        { text: "Proibir qualquer atividade de subsistência das populações ribeirinhas e indígenas.", isCorrect: false },
        { text: "Incentivar a expansão de garimpos fluviais com mercúrio sob isenção fiscal.", isCorrect: false }
      ],
      explanation: "A bioeconomia amazônica mantém a floresta em pé, gerando renda com produtos florestais não madeireiros e valorizando os povos originários."
    },
    {
      difficulty: "medio",

      category: "Ciências Humanas • Sociologia e Desinformação",
      topic: "ENEM 2025: DEEPFAKES E INTEGRIDADE DEMOCRÁTICA",
      title: "Manipulação Audiovisual e Cidadania",
      context: "A disseminação em larga escala de deepfakes hiper-realistas e conteúdos sintéticos manipulados durante períodos de consulta popular desafia os sistemas eleitorais e os tribunais constitucionais.",
      question: "No contexto dos direitos de cidadania analisados pelo ENEM 2025, o impacto mais danoso das deepfakes consiste em:",
      options: [
        { text: "Aumentar a velocidade de navegação na internet de banda larga em áreas periféricas.", isCorrect: false },
        { text: "Corroer a confiança pública na verdade factual e polarizar o debate cívico através do engano programado.", isCorrect: true },
        { text: "Eliminar a necessidade de debates políticos televisionados e sessões legislativas.", isCorrect: false },
        { text: "Obrigar o uso de cabines eleitorais analógicas de madeira em todas as capitais.", isCorrect: false },
        { text: "Diminuir o interesse dos jovens por celulares e jogos eletrônicos online.", isCorrect: false }
      ],
      explanation: "A falsificação profunda (deepfake) desestabiliza o discernimento factual dos eleitores, ameaçando a soberania democrática."
    },

    // ==========================================
    // ENEM 2024 - LINGUAGENS & HUMANAS
    // ==========================================
    {
      difficulty: "facil",

      category: "Linguagens • Variação e Identidade Cultural",
      topic: "ENEM 2024: SOCIOLINGUÍSTICA E PATRIMÔNIO ORAL",
      title: "Linguagem e Marcas de Oralidade Regional",
      context: "Em relatos orais de comunidades ribeirinhas amazônicas catalogados em projeto etnográfico, observa-se o emprego frequente de termos como 'igarapé', 'maromba' e simplificações na concordância nominal.",
      question: "No contexto da prova de Linguagens do ENEM 2024, a preservação e valorização dessas expressões orais revelam:",
      options: [
        { text: "A necessidade de imposição estrita do vocabulário urbano litorâneo para garantir a coesão nacional.", isCorrect: false },
        { text: "A vitalidade linguística como patrimônio cultural imaterial e elemento de identidade territorial.", isCorrect: true },
        { text: "Uma barreira cognitiva que impossibilita o aprendizado de conceitos da tecnologia digital moderna.", isCorrect: false },
        { text: "O isolamento absoluto dessas populações em relação ao mercado consumidor de bens culturais.", isCorrect: false },
        { text: "A inexistência de estruturas morfológicas organizadas na linguagem das comunidades tradicionais.", isCorrect: false }
      ],
      explanation: "O ENEM 2024 reforça a língua como fenômeno vivo e patrimônio identitário de povos originários e comunidades tradicionais."
    },
    {
      difficulty: "facil",

      category: "Ciências Humanas • História e Cidadania",
      topic: "ENEM 2024: POVOS INDÍGENAS E DEMARCAÇÃO",
      title: "A Luta pelos Territórios Tradicionais",
      context: "Ao longo do século XX e início do XXI, lideranças indígenas brasileiras intensificaram sua atuação política em Brasília, reivindicando o cumprimento do artigo 231 da Constituição de 1988, que reconhece seus direitos originários sobre as terras que tradicionalmente ocupam.",
      question: "Essa mobilização política contemporânea dos povos originários caracteriza-se por:",
      options: [
        { text: "Rejeitar o uso de instrumentos jurídicos institucionais em favor do retorno ao isolamento pré-cabralino.", isCorrect: false },
        { text: "Subordinar integralmente suas decisões às diretrizes comerciais de corporações madeireiras internacionais.", isCorrect: false },
        { text: "Apropriar-se dos canais democráticos e constitucionais para afirmar a autodeterminação e a soberania socioambiental.", isCorrect: true },
        { text: "Renunciar à identidade ancestral em troca de subsídios fiscais para a produção de monoculturas exportadoras.", isCorrect: false },
        { text: "Limitar suas pautas à defesa exclusiva de reservas ecológicas administradas por exércitos estrangeiros.", isCorrect: false }
      ],
      explanation: "A presença indígena na arena política pós-88 utiliza os próprios mecanismos do Estado de Direito para garantir direitos territoriais inalienáveis."
    },
    {
      difficulty: "facil",

      category: "Ciências Humanas • Geografia Urbana",
      topic: "ENEM 2024: MUDANÇAS CLIMÁTICAS E CIDADES",
      title: "Ilhas de Calor e Vulnerabilidade Socioespacial",
      context: "O adensamento construtivo desordenado, a pavimentação asfáltica extensiva e a escassez de cobertura vegetal nas periferias e centros das metrópoles potencializam a retenção térmica solar.",
      question: "Esse fenômeno microclimático, associado à segregação socioespacial, resulta prioritariamente em:",
      options: [
        { text: "Redução uniforme das contas de eletricidade residencial em todos os estratos sociais urbanos.", isCorrect: false },
        { text: "Formação de ilhas de calor e intensificação da vulnerabilidade térmica em populações de menor renda.", isCorrect: true },
        { text: "Neutralização imediata da poluição fotoquímica produzida pelos veículos automotores a combustão.", isCorrect: false },
        { text: "Deslocamento espontâneo de todas as indústrias de base para regiões desérticas inabitadas.", isCorrect: false },
        { text: "Congelamento perene dos mananciais e bacias hidrográficas metropolitanas.", isCorrect: false }
      ],
      explanation: "As ilhas de calor urbanas afetam com mais severidade áreas periféricas desprovidas de arborização, saneamento e isolamento térmico."
    },

    // ==========================================
    // ENEM 2023 - LINGUAGENS & HUMANAS
    // ==========================================
    {
      difficulty: "medio",

      category: "Linguagens • Gêneros Digitais e Sociedade",
      topic: "ENEM 2023: CULTURA DIGITAL E PRIVACIDADE",
      title: "Economia da Atenção e Algoritmos de Recomendação",
      context: "Plataformas digitais desenham suas interfaces com base em mecanismos de rolagem infinita e notificações intermitentes projetadas para reter a atenção dos usuários pelo maior tempo possível.",
      question: "Do ponto de vista comunicacional e sociológico cobrado no ENEM 2023, esse design de retenção tem como objetivo precípuo:",
      options: [
        { text: "Democratizar irrestritamente o acesso universal à literatura clássica gratuita.", isCorrect: false },
        { text: "Maximizar a extração e monetização de dados comportamentais para o direcionamento de anúncios patrocinados.", isCorrect: true },
        { text: "Incentivar pausas regulares para o descanso ocular e equilíbrio emocional dos internautas.", isCorrect: false },
        { text: "Eliminar definitivamente a proliferação de boatos e desinformação na internet.", isCorrect: false },
        { text: "Garantir a neutralidade absoluta de rede e a criptografia ponto a ponto dos conteúdos cívicos.", isCorrect: false }
      ],
      explanation: "A 'economia da atenção' converte o tempo de engajamento do usuário em dados preditivos altamente lucrativos para o mercado publicitário."
    },
    {
      difficulty: "medio",

      category: "Ciências Humanas • História do Brasil",
      topic: "ENEM 2023: TRABALHO E RESISTÊNCIA NEGRA",
      title: "Pós-Abolição e Lutas por Inserção Social",
      context: "Após a assinatura da Lei Áurea em 1888, o Estado brasileiro não desenvolveu políticas públicas de indenização, acesso à terra ou educação formal para a população recém-liberta, privilegiando o subsídio à imigração europeia.",
      question: "No contexto da Primeira República (1889-1930), a principal consequência dessa omissão estatal foi:",
      options: [
        { text: "A ascensão socioeconômica imediata e homogênea dos libertos à elite cafeeira paulista.", isCorrect: false },
        { text: "A marginalização estrutural da população negra e o recurso a redes de solidariedade comunitária e religiosidade.", isCorrect: true },
        { text: "A concessão de títulos de propriedade agrícola pública em todas as fronteiras nacionais.", isCorrect: false },
        { text: "A extinção espontânea do racismo e das hierarquias de cor nas corporações de ofício.", isCorrect: false },
        { text: "A nomeação paritária de homens e mulheres negras para os ministérios civis federais.", isCorrect: false }
      ],
      explanation: "A ausência de reformas estruturantes no pós-abolição empurrou os negros para a informalidade e a periferização social."
    },
    {
      difficulty: "medio",

      category: "Ciências Humanas • Filosofia e Ética",
      topic: "ENEM 2023: INDÚSTRIA CULTURAL E CONSUMO",
      title: "Adorno e Horkheimer: A Padronização da Cultura",
      context: "Segundo os teóricos da Escola de Frankfurt, a Indústria Cultural submete a produção artística à lógica mercantil de reprodutibilidade em série, transformando a obra de arte em mercadoria descartável.",
      question: "Para Theodor Adorno, a consequência direta dessa mercantilização para o espectador é:",
      options: [
        { text: "O estímulo ao pensamento crítico radical e a superação da alienação do trabalho fabril.", isCorrect: false },
        { text: "A conformação passiva e a atrofia da imaginação em favor de fórmulas pré-fabricadas e de fácil digestão.", isCorrect: true },
        { text: "A preservação autêntica do folclore popular contra a dominação do capital financeiro.", isCorrect: false },
        { text: "A distribuição igualitária dos lucros das produtoras de cinema entre os operários fabris.", isCorrect: false },
        { text: "A eliminação definitiva das propagandas publicitárias nos meios de comunicação de massa.", isCorrect: false }
      ],
      explanation: "Para Adorno e Horkheimer, a indústria cultural massifica e anestesia a reflexão crítica da sociedade."
    },

    // ==========================================
    // ENEM 2022 - LINGUAGENS & HUMANAS
    // ==========================================
    {
      difficulty: "medio",

      category: "Linguagens • Literatura e Modernismo",
      topic: "ENEM 2022: CENTENÁRIO DA SEMANA DE ARTE MODERNA (1922)",
      title: "Ruptura Estética e Linguagem Cotidiana",
      context: "Em 'Poética' (1925), Manuel Bandeira escreve: 'Estou farto do lirismo comedido / Do lirismo bem-comportado / Do lirismo funcionário público com livro de ponto expediente protocolo e manifestações de apreço ao sr. diretor.'",
      question: "No contexto da consolidação do Modernismo no Brasil, esses versos simbolizam:",
      options: [
        { text: "A defesa intransigente do retorno ao parnasianismo com métrica e rimas ricas e raras.", isCorrect: false },
        { text: "A rebeldia contra a rigidez formal academicista em prol da liberdade expressiva e do verso livre.", isCorrect: true },
        { text: "A proibição do uso de termos irônicos ou coloquiais na poesia de circulação nacional.", isCorrect: false },
        { text: "A apologia da burocracia estatal como matéria-prima exclusiva da grande arte lírica.", isCorrect: false },
        { text: "A submissão incondicional dos poetas às ordens dos órgãos oficiais de censura da época.", isCorrect: false }
      ],
      explanation: "Bandeira rompe com a afetação parnasiana em favor do poema piada, da oralidade e da libertação formal."
    },
    {
      difficulty: "medio",

      category: "Ciências Humanas • História Geral",
      topic: "ENEM 2022: GUERRA FRIA E ORDEM GLOBAL",
      title: "Bipolaridade e Disputa Geopolítica",
      context: "Entre o final da Segunda Guerra Mundial e o colapso da União Soviética (1991), o mundo experimentou um conflito ideológico, tecnológico e militar indireto polarizado entre Washington e Moscou.",
      question: "A estratégia de contenção militar e dissuasão mútua entre as duas superpotências traduziu-se em:",
      options: [
        { text: "Confronto nuclear bélico direto e prolongado nos territórios continentais dos EUA e da URSS.", isCorrect: false },
        { text: "Corrida armamentista, corrida espacial e guerras por procuração na Ásia, África e América Latina.", isCorrect: true },
        { text: "Unificação de todos os bancos centrais do planeta sob supervisão exclusiva do Pacto de Varsóvia.", isCorrect: false },
        { text: "Abolição dos arsenais atômicos logo após a assinatura dos acordos de Bretton Woods.", isCorrect: false },
        { text: "Eliminação das agências de espionagem e inteligência militar nas potências ocidentais.", isCorrect: false }
      ],
      explanation: "Na Guerra Fria, a 'Destruição Mútua Assegurada' evitou a guerra atômica direta, transferindo o atrito para guerras por procuração (Vietnã, Coreia, etc.)."
    },

    // ==========================================
    // ENEM 2021 - LINGUAGENS & HUMANAS
    // ==========================================
    {
      difficulty: "dificil",

      category: "Ciências Humanas • Sociologia do Trabalho",
      topic: "ENEM 2021: UBERIZAÇÃO E PLATAFORMIZAÇÃO",
      title: "Trabalho por Aplicativo e Precariedade Laboral",
      context: "O crescimento exponencial de entregadores e motoristas plataformizados estabeleceu novos modelos de remuneração subordinados a algoritmos, sem jornada fixa, férias remuneradas ou seguridade previdenciária.",
      question: "Na sociologia contemporânea cobrada no ENEM 2021, esse fenômeno é caracterizado por:",
      options: [
        { text: "A transferência total dos riscos econômicos da atividade para o trabalhador mascarada pelo discurso do empreendedorismo.", isCorrect: true },
        { text: "A garantia legal de salários mínimos diários indexados à inflação sem cobrança de taxas das empresas.", isCorrect: false },
        { text: "A eliminação completa das desigualdades de renda nos centros metropolitanos brasileiros.", isCorrect: false },
        { text: "A extinção de aparelhos de telecomunicação na mediação dos serviços logísticos urbanos.", isCorrect: false },
        { text: "A obrigatoriedade de concursos públicos para o cadastramento em aplicativos digitais.", isCorrect: false }
      ],
      explanation: "A uberização transfere custos (veículo, combustível, manutenção, risco de saúde) ao operário enquanto a plataforma retém a mais-valia dos dados."
    },
    {
      difficulty: "medio",

      category: "Ciências Humanas • Geografia Agrária",
      topic: "ENEM 2021: AGRONEGÓCIO VS. AGRICULTURA FAMILIAR",
      title: "Segurança Alimentar e Estrutura Fundiária",
      context: "Enquanto o agronegócio de commodities (como soja, milho e cana) é voltado precipuamente para o mercado exterior e a balança comercial, a agricultura familiar desempenha papel crucial no abastecimento interno de hortaliças, feijão e mandioca.",
      question: "A coexistência desses dois modelos no campo brasileiro reflete uma contradição histórica marcada pela:",
      options: [
        { text: "Concentração fundiária secular com distribuição desproporcional de crédito e subsídios agrícolas.", isCorrect: true },
        { text: "Extinção definitiva de todos os latifúndios improdutivos pela reforma agrária de 1964.", isCorrect: false },
        { text: "Autossuficiência alimentar irrestrita que erradicou os índices de fome em todas as macrorregiões.", isCorrect: false },
        { text: "Substituição completa do maquinário moderno por tração animal no cultivo de grãos para exportação.", isCorrect: false },
        { text: "Ausência de tecnologias de irrigação no semiárido nordestino.", isCorrect: false }
      ],
      explanation: "O agronegócio atrai a maior parte do crédito oficial (Plano Safra), enquanto a agricultura familiar emprega a maioria dos trabalhadores rurais e alimenta a mesa do brasileiro."
    },

    // ==========================================
    // ENEM 2020 - LINGUAGENS & HUMANAS
    // ==========================================
    {
      difficulty: "facil",

      category: "Linguagens • Interpretação e Direitos Humanos",
      topic: "ENEM 2020: ACESSIBILIDADE E INCLUSÃO",
      title: "Comunicação Inclusiva e Cidadania Surda",
      context: "A Lei Brasileira de Inclusão e o reconhecimento oficial da Libras (Língua Brasileira de Sinais - Lei 10.436/2002) representaram marcos na superação de barreiras atitudinais e comunicacionais enfrentadas pela comunidade surda.",
      question: "No âmbito dos direitos de cidadania, a garantia da Libras em escolas, órgãos públicos e canais televisivos visa:",
      options: [
        { text: "Restringir o convívio social dos indivíduos surdos exclusivamente a associações fechadas.", isCorrect: false },
        { text: "Garantir a autonomia comunicativa, o acesso irrestrito à informação e a dignidade humana do cidadão surdo.", isCorrect: true },
        { text: "Substituir a escrita do português em todo o território nacional pela linguagem datilológica.", isCorrect: false },
        { text: "Impor a oralização forçada com punição disciplinar aos que sinalizarem em sala de aula.", isCorrect: false },
        { text: "Desobrigar as instituições públicas de disponibilizarem intérpretes juramentados em tribunais.", isCorrect: false }
      ],
      explanation: "A Libras assegura equidade de oportunidades e pleno exercício dos direitos civis à comunidade surda."
    },
    {
      difficulty: "medio",

      category: "Ciências Humanas • Filosofia Política",
      topic: "ENEM 2020: CONTRATUALISMO E ESTADO DE DIREITO",
      title: "John Locke e os Direitos Naturais Inalienáveis",
      context: "Para o filósofo iluminista inglês John Locke no 'Segundo Tratado sobre o Governo Civil', o poder político dos governantes só é legítimo enquanto proteger os direitos naturais fundamentais dos cidadãos.",
      question: "Segundo a teoria liberal clássica de Locke, caso um governante viole sistematicamente o direito à vida, à liberdade e aos bens de seus súditos, a sociedade tem o direito legítimo de:",
      options: [
        { text: "Submeter-se em resignação passiva e absoluta à vontade inquestionável do soberano.", isCorrect: false },
        { text: "Exercer o direito de resistência e rebelião para destituir o tirano e instituir novo governo justo.", isCorrect: true },
        { text: "Extinguir todas as leis civis e retornar à barbárie perpétua sem propriedade privada.", isCorrect: false },
        { text: "Entregar a soberania das cidades a piratas e mercenários navais estrangeiros.", isCorrect: false },
        { text: "Renunciar à vida em sociedade e isolar-se nas florestas ermas para sempre.", isCorrect: false }
      ],
      explanation: "Locke fundamentou o 'direito de resistência': se o governo quebra o contrato social que protege os direitos naturais, os cidadãos têm direito à desobediência civil e destituição do poder."
    }
  ,
{
      "difficulty": "medio",

      "category": "Linguagens • Interpretação e Ideia Central",
      "topic": "ENEM 2024: ESTRATÉGIAS ARGUMENTATIVAS",
      "title": "A Sociedade do Cansaço e a Hiperconexão",
      "context": "Em ensaio contemporâneo, reflete-se sobre o paradoxo da hiperconectividade: 'Acreditávamos que a tecnologia nos concederia tempo livre; na verdade, transformou o tempo de descanso em tempo de prontidão ininterrupta para a demanda.'",
      "question": "A ideia central defendida pelo autor articula-se em torno da crítica à:",
      "options": [
            {
                  "text": "Incapacidade da indústria tecnológica de baratear aparelhos móveis.",
                  "isCorrect": false
            },
            {
                  "text": "Dissolução da fronteira entre a vida produtiva e o descanso pessoal pela conexão contínua.",
                  "isCorrect": true
            },
            {
                  "text": "Falta de investimentos em redes de fibra óptica nas áreas rurais.",
                  "isCorrect": false
            },
            {
                  "text": "Recusa das novas gerações em utilizar a comunicação digital no cotidiano.",
                  "isCorrect": false
            },
            {
                  "text": "Eliminação total de postos de trabalho no setor de serviços remotos.",
                  "isCorrect": false
            }
      ],
      "explanation": "O texto denuncia como o celular e o trabalho remoto colonizaram o tempo livre, gerando exaustão."
},
{
      "difficulty": "medio",

      "category": "Linguagens • Variação Linguística",
      "topic": "ENEM 2023: PRECONCEITO LINGUÍSTICO E REGISTRO",
      "title": "A Legitimação da Oralidade Periférica",
      "context": "No slam e nas batalhas de rima urbanas, jovens poetas constroem métricas ágeis utilizando gírias, contrações fonéticas ('pra', 'tá') e concordâncias associadas a variedades sociolinguísticas não prestigiadas.",
      "question": "Com base na matriz de Linguagens do ENEM, a manifestação linguística desses saraus deve ser compreendida como:",
      "options": [
            {
                  "text": "Empobrecimento da norma-padrão que deve ser censurado nas escolas públicas.",
                  "isCorrect": false
            },
            {
                  "text": "Expressão artística e identitária legítima, dotada de coerência discursiva e ritmo poético próprio.",
                  "isCorrect": true
            },
            {
                  "text": "Erro estrutural irremediável decorrente da ausência de leitura de clássicos.",
                  "isCorrect": false
            },
            {
                  "text": "Impossibilidade de transmissão de sentimentos humanos universais.",
                  "isCorrect": false
            },
            {
                  "text": "Recurso provisório a ser abandonado com a profissionalização do artista.",
                  "isCorrect": false
            }
      ],
      "explanation": "O ENEM reconhece a diversidade linguística e valoriza a potência expressiva de variedades orais e periféricas."
},
{
      "difficulty": "facil",

      "category": "Linguagens • Figuras de Linguagem",
      "topic": "ENEM 2022: IRONIA E METÁFORA EM CRÔNICAS",
      "title": "Machado de Assis e a Ironia Social",
      "context": "Em 'Memórias Póstumas de Brás Cubas', o defunto-autor dedica sua obra: 'Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas.'",
      "question": "O recurso da ironia corrosiva e da dedicatória ao verme cumpre a função de:",
      "options": [
            {
                  "text": "Expressar apego romântico ingênuo aos bens materiais acumulados.",
                  "isCorrect": false
            },
            {
                  "text": "Desmistificar a vaidade da elite e expor com cinismo a finitude da existência humana.",
                  "isCorrect": true
            },
            {
                  "text": "Defender preceitos teocêntricos sobre a vida após a morte segundo o clero.",
                  "isCorrect": false
            },
            {
                  "text": "Comprovar cientificamente teses de biologia sobre a decomposição de matéria orgânica.",
                  "isCorrect": false
            },
            {
                  "text": "Desculpar-se formalmente perante os leitores pelos equívocos de juventude.",
                  "isCorrect": false
            }
      ],
      "explanation": "Machado de Assis utiliza o humor negro e a ironia para desmascarar a hipocrisia e a soberba das elites patriarcais."
},
{
      "difficulty": "facil",

      "category": "Linguagens • Funções da Linguagem",
      "topic": "ENEM 2024: FUNÇÕES DA LINGUAGEM NA PUBLICIDADE",
      "title": "Campanhas Sanitárias e a Função Conativa",
      "context: ": "Cartaz do Ministério da Saúde: 'Elimine os focos de água parada hoje mesmo! Proteja sua família contra a dengue. Faça a sua parte.'",
      "question": "A estruturação gramatical baseada no imperativo direto ('Elimine', 'Proteja', 'Faça') caracteriza a função:",
      "options": [
            {
                  "text": "Metalinguística, voltada para explicar a origem etimológica da palavra dengue.",
                  "isCorrect": false
            },
            {
                  "text": "Fática, preocupada apenas em testar o canal de comunicação sonora.",
                  "isCorrect": false
            },
            {
                  "text": "Conativa (ou apelativa), que visa persuadir e mobilizar uma conduta preventiva no interlocutor.",
                  "isCorrect": true
            },
            {
                  "text": "Emotiva, centrada exclusivamente nas queixas individuais do redator do anúncio.",
                  "isCorrect": false
            },
            {
                  "text": "Poética, focada na criação de rimas raras e ritmo musical hermético.",
                  "isCorrect": false
            }
      ],
      "explanation": "A função conativa/apelativa orienta-se para o receptor através do imperativo, típica de campanhas educativas e publicitárias."
},
{
      "difficulty": "facil",

      "category": "Linguagens • Literatura: 2ª Fase do Modernismo",
      "topic": "ENEM 2021: GRACILIANO RAMOS E O REGIONALISMO DE 30",
      "title": "Vidas Secas e a Desumanização do Sertanejo",
      "context": "Em 'Vidas Secas', Fabiano comunica-se com a família por meio de guturais e grunhidos, sentindo-se muitas vezes inferior à cachorra Baleia no domínio da linguagem verbal.",
      "question": "Graciliano Ramos constrói essa carência vocabular de Fabiano com o objetivo sociopolítico de:",
      "options": [
            {
                  "text": "Ridicularizar a inteligência natural das populações nordestinas do semiárido.",
                  "isCorrect": false
            },
            {
                  "text": "Evidenciar como a opressão social e o isolamento imposto pelo latifúndio mutilam a própria condição humana e comunicativa.",
                  "isCorrect": true
            },
            {
                  "text": "Enaltecer a vida bucólica e pacífica do campo em contraposição ao caos das grandes cidades.",
                  "isCorrect": false
            },
            {
                  "text": "Sugerir a eliminação do gado de corte nas fazendas tradicionais de Alagoas.",
                  "isCorrect": false
            },
            {
                  "text": "Defender a adoção compulsória do espanhol como idioma de trabalho nas secas.",
                  "isCorrect": false
            }
      ],
      "explanation": "A mudez social de Fabiano reflete a violência estrutural da seca e do coronelismo, que nega a posse da palavra ao sertanejo."
},
{
      "difficulty": "medio",

      "category": "Linguagens • Artes e Vanguarda Europeia",
      "topic": "ENEM 2020: DADAÍSMO E PROVOCAÇÃO ESTÉTICA",
      "title": "Marcel Duchamp e o Ready-Made",
      "context": "Em 1917, Marcel Duchamp enviou um mictório de porcelana invertido assinado com o pseudônimo 'R. Mutt' sob o título 'A Fonte' para uma exposição de arte em Nova York.",
      "question": "Ao deslocar um objeto utilitário industrial para o espaço museológico, a intenção revolucionária do artista era:",
      "options": [
            {
                  "text": "Celebrar a superioridade técnica da encanação pública norte-americana sobre a europeia.",
                  "isCorrect": false
            },
            {
                  "text": "Questionar o conceito burguês tradicional de arte, transferindo o valor estético do objeto para a ideia e a atitude do autor.",
                  "isCorrect": true
            },
            {
                  "text": "Promover a venda em massa de louças sanitárias para os visitantes da galeria.",
                  "isCorrect": false
            },
            {
                  "text": "Homenagear a pintura acadêmica renascentista e seus mestres clássicos.",
                  "isCorrect": false
            },
            {
                  "text": "Defender a privatização de todos os museus de arte contemporânea.",
                  "isCorrect": false
            }
      ],
      "explanation": "O 'ready-made' dadaísta desafia as convenções acadêmicas: a arte reside na concepção conceitual e na ressignificação crítica do objeto."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • História do Brasil",
      "topic": "ENEM 2024: ERA VARGAS E PROPAGANDA POLÍTICA",
      "title": "O DIP e a Criação do Imaginário Trabalhista",
      "context": "Criado por Getúlio Vargas em 1939, o Departamento de Imprensa e Propaganda (DIP) censurava jornais e produzia o programa radiofônico obrigatório 'A Hora do Brasil', enaltecendo a figura do presidente junto aos operários.",
      "question": "A articulação varguista entre a censura prévia e a exaltação do trabalhador nas transmissões oficiais visava:",
      "options": [
            {
                  "text": "Implantar imediatamente a revolução proletária nos moldes do anarcossindicalismo espanhol.",
                  "isCorrect": false
            },
            {
                  "text": "Construir a imagem de Vargas como provedor generoso dos direitos sociais (paternalismo) e neutralizar revoltas autônomas.",
                  "isCorrect": true
            },
            {
                  "text": "Privatizar todas as jazidas de petróleo e ferrovias em benefício de investidores ingleses.",
                  "isCorrect": false
            },
            {
                  "text": "Entregar a governança das capitais nordestinas a chefias tribais quilombolas.",
                  "isCorrect": false
            },
            {
                  "text": "Proibir manifestações folclóricas populares e o samba em todo o território nacional.",
                  "isCorrect": false
            }
      ],
      "explanation": "Vargas cooptou o movimento operário através da legislação trabalhista aliada à propaganda estatal, consolidando o trabalhismo tutelado."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • História Geral",
      "topic": "ENEM 2023: TOTALITARISMO NO ENTREGUERRAS",
      "title": "Nazifascismo e Manipulação de Massas",
      "context": "No período entre a Primeira e a Segunda Guerra Mundial, regimes totalitários na Europa mobilizaram rituais de massas, militarização da juventude e a identificação de 'bodes expiatórios' internos.",
      "question": "Esses regimes autoritários ascenderam ao poder explorando primordialmente:",
      "options": [
            {
                  "text": "O crescimento equilibrado e a estabilidade financeira trazida pelo pleno emprego pacífico.",
                  "isCorrect": false
            },
            {
                  "text": "A crise do liberalismo democrático e a insegurança socioeconômica gerada pela quebra de 1929 e pelo medo do comunismo.",
                  "isCorrect": true
            },
            {
                  "text": "A exigência internacional de abertura total de fronteiras para refugiados sem passaporte.",
                  "isCorrect": false
            },
            {
                  "text": "A dissolução de todas as forças armadas convencionais em favor do pacifismo cósmico.",
                  "isCorrect": false
            },
            {
                  "text": "O apoio irrestrito da Liga das Nações ao desarmamento militar das potências do Eixo.",
                  "isCorrect": false
            }
      ],
      "explanation": "O trauma da Primeira Guerra associado ao crash econômico de 1929 e ao pânico da elite com o socialismo abriu espaço para o nazifascismo."
},
{
      "difficulty": "dificil",

      "category": "Ciências Humanas • Filosofia Moderna",
      "topic": "ENEM 2022: RACIONALISMO VS. EMPIRISMO",
      "title": "René Descartes e a Dúvida Metódica",
      "context": "Em 'Discurso sobre o Método', Descartes propõe duvidar de todas as crenças e informações provenientes dos sentidos corporais até encontrar um princípio indubitável: 'Penso, logo existo'.",
      "question": "A dúvida cartesiana diferencia-se do ceticismo radical por ter caráter:",
      "options": [
            {
                  "text": "Pessimista, afirmando a impossibilidade definitiva de qualquer conhecimento verdadeiro.",
                  "isCorrect": false
            },
            {
                  "text": "Metódico e provisório, funcionando como instrumento de purificação para alcançar uma verdade clara e distinta.",
                  "isCorrect": true
            },
            {
                  "text": "Exclusivamente místico, submetendo a lógica racional à autoridade bíblica incontestável.",
                  "isCorrect": false
            },
            {
                  "text": "Utilitarista, visando apenas o ganho financeiro em negociações comerciais.",
                  "isCorrect": false
            },
            {
                  "text": "Empírico, fundamentando a ciência na repetição sensorial de experimentos laboratoriais.",
                  "isCorrect": false
            }
      ],
      "explanation": "A dúvida de Descartes não é um fim em si mesma, mas um método de reconstrução do conhecimento seguro e racional."
},
{
      "difficulty": "dificil",

      "category": "Ciências Humanas • Sociologia: Indústria Cultural",
      "topic": "ENEM 2021: ZYGMUNT BAUMAN E A MODERNIDADE LÍQUIDA",
      "title": "Relações Humanas e Sociedade de Consumo",
      "context": "Para o sociólogo Zygmunt Bauman, a 'modernidade líquida' caracteriza-se pela fluidez, efemeridade e fragilidade dos laços comunitários e afetivos, onde os indivíduos são estimulados a agir como consumidores antes de agirem como cidadãos.",
      "question": "A principal consequência dessa transição social apontada por Bauman é:",
      "options": [
            {
                  "text": "A construção de identidades sólidas e inalteráveis transmitidas por dinastias hereditárias.",
                  "isCorrect": false
            },
            {
                  "text": "A mercantilização das relações sociais e o aumento da incerteza, da ansiedade e da solidão individual.",
                  "isCorrect": true
            },
            {
                  "text": "O desaparecimento total dos shopping centers em benefício do comércio comunitário de trocas.",
                  "isCorrect": false
            },
            {
                  "text": "A garantia perpétua de empregos estáveis para toda a juventude universitária.",
                  "isCorrect": false
            },
            {
                  "text": "A proibição de redes sociais em todos os países da Organização dos Estados Americanos.",
                  "isCorrect": false
            }
      ],
      "explanation": "Bauman explica como os laços se tornaram descartáveis ('líquidos'), transformando afetos e compromissos sociais em bens de consumo rápido."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • Geografia Física",
      "topic": "ENEM 2024: EL NIÑO E EVENTOS CLIMÁTICOS EXTREMOS",
      "title": "Aquecimento Anômalo do Oceano Pacífico",
      "context": "O fenômeno climático do El Niño consiste no aquecimento anômalo das águas superficiais do Oceano Pacífico Equatorial, alterando os padrões de circulação atmosférica global.",
      "question": "No território brasileiro, a atuação intensa do El Niño costuma deflagrar tipicamente:",
      "options": [
            {
                  "text": "Secas severas no Semiárido nordestino e chuvas torrenciais volumosas com inundações na Região Sul.",
                  "isCorrect": true
            },
            {
                  "text": "Nevascas históricas no litoral da Bahia e secas prolongadas no Rio Grande do Sul.",
                  "isCorrect": false
            },
            {
                  "text": "Congelamento dos rios navegáveis de todo o Pantanal mato-grossense.",
                  "isCorrect": false
            },
            {
                  "text": "Redução a zero da radiação solar sobre os cafezais de Minas Gerais.",
                  "isCorrect": false
            },
            {
                  "text": "Aumento uniforme da pluviosidade em 100% de todos os municípios brasileiros.",
                  "isCorrect": false
            }
      ],
      "explanation": "Historicamente, o El Niño bloqueia frentes frias no Sul do Brasil (inundações severas) e inibe nuvens convectivas no Nordeste e Amazônia (secas)."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • Geografia Humana",
      "topic": "ENEM 2023: TRANSIÇÃO DEMOGRÁFICA NO BRASIL",
      "title": "Queda da Fecundidade e Envelhecimento Populacional",
      "context": "Dados do Censo do IBGE revelam que a taxa de fecundidade no Brasil caiu para menos de 1,6 filho por mulher, ao mesmo tempo em que a expectativa de vida média ultrapassou os 76 anos.",
      "question": "Essa mudança na pirâmide etária brasileira impõe como desafio socioeconômico premente:",
      "options": [
            {
                  "text": "A expansão massiva de maternidades pediátricas em detrimento da saúde geriátrica.",
                  "isCorrect": false
            },
            {
                  "text": "A reforma e sustentabilidade das contas previdenciárias aliada à adaptação do sistema de saúde para doenças crônicas da terceira idade.",
                  "isCorrect": true
            },
            {
                  "text": "A proibição do ingresso de mulheres no mercado de trabalho fabril e executivo.",
                  "isCorrect": false
            },
            {
                  "text": "A extinção definitiva de todas as universidades federais por falta de candidatos.",
                  "isCorrect": false
            },
            {
                  "text": "O recrutamento compulsório de idosos para operações militares de combate nas fronteiras.",
                  "isCorrect": false
            }
      ],
      "explanation": "Com o estreitamento da base e o alargamento do topo da pirâmide etária, o Brasil precisa planejar previdência e geriatria pública."
}
  ,
{
      "difficulty": "medio",

      "category": "Linguagens • Inteligência Artificial e Autoria",
      "topic": "ENEM 2025: LINGUAGEM, IA GENERATIVA E AUTORIA (VARIANTE)",
      "title": "Treinamento de Modelos e Direitos Autorais",
      "context": "Escritores e ilustradores entraram com ações coletivas contra desenvolvedoras de inteligência artificial alegando que suas obras foram utilizadas sem consentimento ou remuneração para treinar algoritmos geradores de texto e imagem.",
      "question": "A controvérsia jurídica e ética exposta fundamenta-se na tensão entre o avanço tecnológico e:",
      "options": [
            {
                  "text": "A preservação da propriedade intelectual e a justa retribuição pelo trabalho criativo originário.",
                  "isCorrect": true
            },
            {
                  "text": "A proibição do acesso à internet para artistas e ilustradores profissionais.",
                  "isCorrect": false
            },
            {
                  "text": "A exigência de que todos os livros sejam impressos exclusivamente em papel artesanal.",
                  "isCorrect": false
            },
            {
                  "text": "A obrigatoriedade de registrar textos apenas em cartórios medievais.",
                  "isCorrect": false
            },
            {
                  "text": "A extinção definitiva de softwares de edição gráfica vetorial.",
                  "isCorrect": false
            }
      ],
      "explanation": "O centro do debate ético da IA generativa é a raspagem de dados (data scraping) não autorizada de obras protegidas por direitos autorais."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • Geopolítica e Meio Ambiente",
      "topic": "ENEM 2025: COP30 EM BELÉM E TRANSIÇÃO ENERGÉTICA (VARIANTE)",
      "title": "Manejo Florestal e Conhecimento Empírico",
      "context": "Estudos apresentados nos painéis da COP30 apontam que terras indígenas e reservas extrativistas apresentam as menores taxas de desmatamento da Amazônia nos últimos 30 anos.",
      "question": "A eficácia da conservação ambiental nessas áreas decorre fundamentalmente do(a):",
      "options": [
            {
                  "text": "Uso intensivo de defensivos químicos para aniquilar insetos polinizadores.",
                  "isCorrect": false
            },
            {
                  "text": "Manejo tradicional sustentável que integra subsistência e preservação da biodiversidade.",
                  "isCorrect": true
            },
            {
                  "text": "Substituição da fauna nativa por gado leiteiro confinado em galpões.",
                  "isCorrect": false
            },
            {
                  "text": "Isolamento comercial que impede a venda legal de castanha e açaí.",
                  "isCorrect": false
            },
            {
                  "text": "Instalação de usinas termelétricas a óleo diesel no interior das aldeias.",
                  "isCorrect": false
            }
      ],
      "explanation": "O modo de vida dos povos tradicionais harmoniza a extração com os ciclos naturais, tornando as reservas barreiras vivas contra o desmatamento."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • Sociologia e Desinformação",
      "topic": "ENEM 2025: DEEPFAKES E INTEGRIDADE DEMOCRÁTICA (VARIANTE)",
      "title": "Moderação de Conteúdo e Responsabilidade das Redes",
      "context": "Diante da propagação viral de vídeos sintetizados que simulam declarações falsas de autoridades públicas, debate-se a responsabilidade civil das plataformas digitais na rotulagem e remoção preventiva desses conteúdos.",
      "question": "A dificuldade central enfrentada na regulação algorítmica de conteúdos hiper-realistas reside em:",
      "options": [
            {
                  "text": "Equilibrar o combate à desinformação lesiva com a salvaguarda da liberdade de expressão e da crítica paródica legítima.",
                  "isCorrect": true
            },
            {
                  "text": "Impedir que usuários com computadores pessoais tenham acesso a gravadores de áudio.",
                  "isCorrect": false
            },
            {
                  "text": "Cobrar tarifas alfandegárias de todas as mensagens de texto enviadas no país.",
                  "isCorrect": false
            },
            {
                  "text": "Eliminar o uso de celulares por menores de 21 anos em todo o continente.",
                  "isCorrect": false
            },
            {
                  "text": "Exigir assinatura presencial em cartório para postar fotografias em redes sociais.",
                  "isCorrect": false
            }
      ],
      "explanation": "A fronteira tênue entre censura prévia, paródia/humor e difamação dolosa por deepfake é o maior dilema regulatório contemporâneo."
},
{
      "difficulty": "medio",

      "category": "Linguagens • Variação e Identidade Cultural",
      "topic": "ENEM 2024: SOCIOLINGUÍSTICA E PATRIMÔNIO ORAL (VARIANTE)",
      "title": "Adequação Linguística em Entrevistas de Emprego",
      "context": "Um linguista afirma: 'Saber usar a língua é como saber que roupa vestir: não se vai à praia de terno e gravata, nem a uma audiência judicial de bermuda e chinelos.'",
      "question": "A analogia formulada pelo especialista sustenta o princípio linguístico de que:",
      "options": [
            {
                  "text": "A gramática normativa deve ser abolida de todos os concursos públicos.",
                  "isCorrect": false
            },
            {
                  "text": "A eficiência comunicativa depende da adequação do registro ao contexto social e à esfera de interlocução.",
                  "isCorrect": true
            },
            {
                  "text": "A fala das capitais é naturalmente superior e mais elegante que a do interior.",
                  "isCorrect": false
            },
            {
                  "text": "Apenas advogados e juízes têm legitimidade para produzir discursos compreensíveis.",
                  "isCorrect": false
            },
            {
                  "text": "O vocabulário coloquial deve ser utilizado compulsoriamente em laudos médicos.",
                  "isCorrect": false
            }
      ],
      "explanation": "O domínio linguístico pleno envolve a competência de navegar entre diferentes registros (formal e informal) conforme a situação exige."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • História e Cidadania",
      "topic": "ENEM 2024: POVOS INDÍGENAS E DEMARCAÇÃO (VARIANTE)",
      "title": "Ailton Krenak e a Crítica à Visão Mercantil da Natureza",
      "context": "No livro 'Ideias para Adiar o Fim do Mundo', Ailton Krenak critica a visão ocidental que transforma rios e montanhas em recursos abstratos para exploração mercantil desmedida.",
      "question": "A perspectiva cosmológica indígena apresentada por Krenak propõe uma relação com o meio ambiente pautada pelo(a):",
      "options": [
            {
                  "text": "Entendimento da Terra como organismo vivo parente e sujeito de direitos inalienáveis.",
                  "isCorrect": true
            },
            {
                  "text": "Aceleração da mineração em larga escala para enriquecer comunidades locais.",
                  "isCorrect": false
            },
            {
                  "text": "Abandono de qualquer prática agrícola em favor da dependência alimentar externa.",
                  "isCorrect": false
            },
            {
                  "text": "Construção de megarepresas de concreto em todas as cabeceiras dos afluentes.",
                  "isCorrect": false
            },
            {
                  "text": "Submissão da natureza à propriedade privada individual de latifundiários.",
                  "isCorrect": false
            }
      ],
      "explanation": "Krenak propõe descolonizar o pensamento: rios e montanhas não são 'mercadoria', mas entes com quem os humanos convivem em reciprocidade."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • Geografia Urbana",
      "topic": "ENEM 2024: MUDANÇAS CLIMÁTICAS E CIDADES (VARIANTE)",
      "title": "Impermeabilização do Solo e Inundações Relâmpago",
      "context": "A canalização subterrânea de córregos e a impermeabilização generalizada de várzeas em cidades brasileiras transformam chuvas intensas de verão em inundações catastróficas frequentes.",
      "question": "Para mitigar esse impacto hidrológico, o urbanismo sustentável contemporâneo propõe:",
      "options": [
            {
                  "text": "A concretagem total de todos os leitos fluviais até a foz oceânica.",
                  "isCorrect": false
            },
            {
                  "text": "A criação de 'cidades-esponja' com parques inundáveis e pavimentos permeáveis que facilitam a drenagem natural.",
                  "isCorrect": true
            },
            {
                  "text": "A remoção de todas as árvores das calçadas para facilitar o fluxo de veículos.",
                  "isCorrect": false
            },
            {
                  "text": "A canalização de esgoto a céu aberto nas avenidas residenciais.",
                  "isCorrect": false
            },
            {
                  "text": "A proibição de edificações com mais de dois andares em áreas centrais secas.",
                  "isCorrect": false
            }
      ],
      "explanation": "As cidades-esponja restauram a capacidade do solo urbano de infiltrar e reter águas pluviais, evitando enxurradas destruidoras."
},
{
      "difficulty": "medio",

      "category": "Linguagens • Gêneros Digitais e Sociedade",
      "topic": "ENEM 2023: CULTURA DIGITAL E PRIVACIDADE (VARIANTE)",
      "title": "Bolhas de Informação e Câmaras de Eco",
      "context": "Algoritmos de redes sociais priorizam conteúdos que geram indignação moral para aumentar cliques, confinando usuários em 'câmaras de eco' onde pontos de vista divergentes são filtrados.",
      "question": "O confinamento cognitivo nessas bolhas informativas provoca no convívio democrático:",
      "options": [
            {
                  "text": "A intensificação da polarização afetiva e a intolerância a narrativas plurais divergentes.",
                  "isCorrect": true
            },
            {
                  "text": "O enriquecimento imediato do repertório literário de toda a sociedade.",
                  "isCorrect": false
            },
            {
                  "text": "A superação de conflitos partidários em favor de consensos ecumênicos rápidos.",
                  "isCorrect": false
            },
            {
                  "text": "A eliminação definitiva de fake news sobre temas de saúde pública.",
                  "isCorrect": false
            },
            {
                  "text": "O fim da publicidade comercial direcionada por idade e localidade.",
                  "isCorrect": false
            }
      ],
      "explanation": "As câmaras de eco alimentadas por viés algorítmico reforçam preconceitos e corroem o debate público plural necessário à democracia."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • História do Brasil",
      "topic": "ENEM 2023: TRABALHO E RESISTÊNCIA NEGRA (VARIANTE)",
      "title": "Cais do Valongo e Memória Histórica",
      "context": "Escavações na zona portuária do Rio de Janeiro revelaram o Cais do Valongo, principal porta de entrada de cerca de um milhão de africanos escravizados nas Américas, hoje Patrimônio Mundial da UNESCO.",
      "question": "O reconhecimento do Cais do Valongo como sítio arqueológico de memória mundial cumpre a função de:",
      "options": [
            {
                  "text": "Celebrar a eficiência comercial das companhias de tráfico transatlântico de escravos.",
                  "isCorrect": false
            },
            {
                  "text": "Tornar visível a tragédia da escravidão e valorizar a resistência e o legado civilizatório afro-brasileiro.",
                  "isCorrect": true
            },
            {
                  "text": "Impedir a visitação pública de turistas afrodescendentes ao centro da cidade.",
                  "isCorrect": false
            },
            {
                  "text": "Reconstruir as feiras de comercialização de cativos como atração folclórica.",
                  "isCorrect": false
            },
            {
                  "text": "Substituir a memória dos quilombos históricos do interior por marcos exclusivamente urbanos.",
                  "isCorrect": false
            }
      ],
      "explanation": "Lugares de memória como o Valongo resgatam o trauma da diáspora e reafirmam a dívida histórica com os povos escravizados."
},
{
      "difficulty": "dificil",

      "category": "Ciências Humanas • Filosofia e Ética",
      "topic": "ENEM 2023: INDÚSTRIA CULTURAL E CONSUMO (VARIANTE)",
      "title": "Walter Benjamin: A Reprodutibilidade Técnica da Arte",
      "context": "Em 'A Obra de Arte na Era de sua Reprodutibilidade Técnica', Walter Benjamin analisa que a fotografia e o cinema possibilitam a reprodução infinita das imagens artísticas originais.",
      "question": "Segundo Benjamin, a principal perda sofrida pela obra de arte ao ser massificada pela cópia técnica é a sua:",
      "options": [
            {
                  "text": "Utilidade comercial nas vitrines de antiquários.",
                  "isCorrect": false
            },
            {
                  "text": "'Aura' (a sua autenticidade e presença única e irrepetível no tempo e espaço).",
                  "isCorrect": true
            },
            {
                  "text": "Visibilidade perante as classes populares da periferia urbana.",
                  "isCorrect": false
            },
            {
                  "text": "Capacidade de gerar lucro para as empresas produtoras.",
                  "isCorrect": false
            },
            {
                  "text": "Estrutura físico-química de tintas a óleo sobre a tela de linho.",
                  "isCorrect": false
            }
      ],
      "explanation": "Para Benjamin, a reprodutibilidade técnica destrói a 'aura' (o aqui e agora único da obra), democratizando o acesso mas dessacralizando a arte."
},
{
      "difficulty": "medio",

      "category": "Linguagens • Literatura e Modernismo",
      "topic": "ENEM 2022: CENTENÁRIO DA SEMANA DE ARTE MODERNA (1922) (VARIANTE)",
      "title": "Carlos Drummond: 'A Rosa do Povo' e o Sentimento de Mundo",
      "context": "Nos versos de 'A Flor e a Náusea': 'Uma flor nasceu na rua! / Furou o asfalto, o tédio, o nojo e o ódio.'",
      "question": "A imagem da flor que rompe o asfalto em meio à Segunda Guerra Mundial simboliza:",
      "options": [
            {
                  "text": "A fragilidade inútil da beleza poética perante o poder do maquinário bélico pesado.",
                  "isCorrect": false
            },
            {
                  "text": "A força da esperança e da resistência humana pulsando mesmo nas conjunturas mais opressivas e desumanas.",
                  "isCorrect": true
            },
            {
                  "text": "O desinteresse do poeta mineiro pelos problemas do seu tempo histórico.",
                  "isCorrect": false
            },
            {
                  "text": "A necessidade de asfaltar todas as ruas de terra do interior do país.",
                  "isCorrect": false
            },
            {
                  "text": "A adesão incondicional do escritor aos discursos belicistas da época.",
                  "isCorrect": false
            }
      ],
      "explanation": "A flor drummondiana furando o asfalto é o símbolo máximo da poesia engajada: a vida e a esperança resistindo à barbárie fascista."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • História Geral",
      "topic": "ENEM 2022: GUERRA FRIA E ORDEM GLOBAL (VARIANTE)",
      "title": "A Crise dos Mísseis em Cuba (1962)",
      "context": "Em outubro de 1962, a descoberta de plataformas soviéticas de lançamento de ogivas nucleares em Cuba levou os Estados Unidos a decretarem o bloqueio naval à ilha, levando o mundo à iminência de uma guerra atômica total.",
      "question": "O desfecho pacífico da Crise dos Mísseis através de negociação direta entre Kennedy e Kruschev resultou no(a):",
      "options": [
            {
                  "text": "Desmonte imediato de todas as ogivas dos dois países e extinção da OTAN.",
                  "isCorrect": false
            },
            {
                  "text": "Instalação do 'telefone vermelho' (canal direto de comunicação) e assinatura de tratados de restrição a testes nucleares.",
                  "isCorrect": true
            },
            {
                  "text": "Invasão e anexação territorial definitiva da União Soviética pelo exército americano.",
                  "isCorrect": false
            },
            {
                  "text": "Destituição imediata do governo revolucionário cubano de Fidel Castro.",
                  "isCorrect": false
            },
            {
                  "text": "Subordinação de Cuba ao controle administrativo do governo britânico.",
                  "isCorrect": false
            }
      ],
      "explanation": "O susto com o risco real de apocalipse nuclear inaugurou a 'Coexistência Pacífica' e acordos de controle de testes atômicos."
},
{
      "difficulty": "dificil",

      "category": "Ciências Humanas • Sociologia do Trabalho",
      "topic": "ENEM 2021: UBERIZAÇÃO E PLATAFORMIZAÇÃO (VARIANTE)",
      "title": "Gamificação do Trabalho e Algoritmos de Desempenho",
      "context": "Aplicativos de entrega utilizam metas dinâmicas, pontuações de reputação e bônus relâmpago para induzir entregadores a permanecerem logados por mais de 14 horas diárias nas ruas.",
      "question": "A utilização de técnicas de 'gamificação' nas plataformas digitais atua na esfera laboral para:",
      "options": [
            {
                  "text": "Garantir descanso remunerado a cada duas horas de pedalada ou pilotagem.",
                  "isCorrect": false
            },
            {
                  "text": "Estimular a autointensificação do trabalho pelo próprio operário sem a presença física de um feitor ou supervisor.",
                  "isCorrect": true
            },
            {
                  "text": "Eliminar a necessidade de pagamento de taxas de serviço pelas empresas clientes.",
                  "isCorrect": false
            },
            {
                  "text": "Distribuir lucros societários igualitariamente entre todos os ciclistas cadastrados.",
                  "isCorrect": false
            },
            {
                  "text": "Proibir que jovens realizem entregas sob condições climáticas de chuva.",
                  "isCorrect": false
            }
      ],
      "explanation": "A gamificação disfarça a exploração como jogo, fazendo o próprio trabalhador autoexplorar sua energia para atingir metas algorítmicas."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • Geografia Agrária",
      "topic": "ENEM 2021: AGRONEGÓCIO VS. AGRICULTURA FAMILIAR (VARIANTE)",
      "title": "Pulverização Aérea e Comunidades Vizinhas",
      "context": "A dispersão aérea de defensivos agrícolas em lavouras monoculturais adjacentes a assentamentos e aldeias tem gerado contaminação por deriva em hortas orgânicas e lençóis freáticos.",
      "question": "O conflito ambiental decorrente da deriva de agrotóxicos expõe a contradição entre:",
      "options": [
            {
                  "text": "A produtividade em larga escala para exportação e a segurança ambiental e de saúde das populações do entorno.",
                  "isCorrect": true
            },
            {
                  "text": "A preferência dos consumidores urbanos por alimentos com resíduos tóxicos visíveis.",
                  "isCorrect": false
            },
            {
                  "text": "A falta de pistas de pouso asfaltadas para aviões cargueiros transatlânticos.",
                  "isCorrect": false
            },
            {
                  "text": "O excesso de chuva que anula o efeito químico de qualquer pesticida comercial.",
                  "isCorrect": false
            },
            {
                  "text": "A extinção definitiva de abelhas como benefício para as colheitas de grãos.",
                  "isCorrect": false
            }
      ],
      "explanation": "A expansão das monoculturas com pulverização em massa colide diretamente com a soberania alimentar e a saúde das comunidades vizinhas."
},
{
      "difficulty": "facil",

      "category": "Linguagens • Interpretação e Direitos Humanos",
      "topic": "ENEM 2020: ACESSIBILIDADE E INCLUSÃO (VARIANTE)",
      "title": "Desenho Universal e Acessibilidade Arquitetônica",
      "context": "O conceito de 'Desenho Universal' postula que ambientes e produtos devem ser projetados desde a origem para serem utilizados por todas as pessoas, sem necessidade de adaptações tardias ou segregadas.",
      "question": "A implementação do desenho universal em escolas e espaços culturais públicos fundamenta-se no princípio ético de:",
      "options": [
            {
                  "text": "Construir salas separadas para estudantes com necessidades motoras ou sensoriais.",
                  "isCorrect": false
            },
            {
                  "text": "Reconhecer a diversidade humana como norma e garantir a convivência integrada com autonomia e dignidade.",
                  "isCorrect": true
            },
            {
                  "text": "Baratear as obras eliminando rampas e elevadores em edifícios de vários andares.",
                  "isCorrect": false
            },
            {
                  "text": "Restringir o acesso a museus para evitar desgastes nos pisos de madeira.",
                  "isCorrect": false
            },
            {
                  "text": "Substituir o contato interpessoal por óculos de realidade virtual individuais.",
                  "isCorrect": false
            }
      ],
      "explanation": "O Desenho Universal rejeita guetos e adaptações improvisadas, acolhendo a pluralidade dos corpos no mesmo espaço comunitário."
},
{
      "difficulty": "dificil",

      "category": "Ciências Humanas • Filosofia Política",
      "topic": "ENEM 2020: CONTRATUALISMO E ESTADO DE DIREITO (VARIANTE)",
      "title": "Rousseau e a Vontade Geral",
      "context": "Em 'Do Contrato Social', Jean-Jacques Rousseau afirma que 'o homem nasce livre, e por toda parte encontra-se acorrentado', postulando que a legitimidade do poder emana da 'vontade geral' do povo soberano.",
      "question": "Para Rousseau, a superação da opressão política e a recuperação da liberdade civil ocorrem quando o cidadão:",
      "options": [
            {
                  "text": "Obedece cegamente aos decretos de uma aristocracia hereditária incontestável.",
                  "isCorrect": false
            },
            {
                  "text": "Submete seus interesses egoístas particulares ao bem comum expresso pelas leis que ele próprio ajudou a instituir.",
                  "isCorrect": true
            },
            {
                  "text": "Renuncia à convivência civil e retorna à vida solitária em cavernas selvagens.",
                  "isCorrect": false
            },
            {
                  "text": "Transfere toda a riqueza mineral do país para mercadores estrangeiros.",
                  "isCorrect": false
            },
            {
                  "text": "Abole o poder judiciário para que cada família faça justiça com as próprias mãos.",
                  "isCorrect": false
            }
      ],
      "explanation": "Para Rousseau, a verdadeira liberdade civil consiste em obedecer às leis que a comunidade instituiu democraticamente guiada pelo bem comum."
}
  ,
{
      "difficulty": "medio",

      "category": "Linguagens • Literatura: Modernismo de 45",
      "topic": "TOP ENEM: CLARICE LISPECTOR E A INVISIBILIDADE SOCIAL",
      "title": "A Hora da Estrela e a Marginalidade de Macabéa",
      "context": "Em 'A Hora da Estrela', o narrador Rodrigo S.M. descreve Macabéa: 'Ela não sabia que era uma infeliz. Vivia numa cidade feita toda contra ela. Comia cachorro-quente e achava que isso era a glória.'",
      "question": "A caracterização da protagonista nordestina na metrópole carioca constrói um sentido crítico voltado para a:",
      "options": [
            {
                  "text": "Condenação moral da gastronomia rápida nos centros urbanos.",
                  "isCorrect": false
            },
            {
                  "text": "Alienação involuntária e a invisibilidade socioeconômica e existencial dos retirantes periféricos.",
                  "isCorrect": true
            },
            {
                  "text": "Apologia ingênua da vida suburbana como modelo de felicidade plena.",
                  "isCorrect": false
            },
            {
                  "text": "Incapacidade congênita dos migrantes de aprender regras básicas de etiqueta.",
                  "isCorrect": false
            },
            {
                  "text": "Celebração do enriquecimento financeiro imediato das classes populares.",
                  "isCorrect": false
            }
      ],
      "explanation": "Clarice expõe a tragédia de quem não tem consciência da própria miséria e exploração, retratando a exclusão dos migrantes nordestinos."
},
{
      "difficulty": "dificil",

      "category": "Linguagens • Literatura: Modernismo de 45",
      "topic": "TOP ENEM: CLARICE LISPECTOR E A INVISIBILIDADE SOCIAL (CLONE)",
      "title": "A Epifania Cotidiana e o Fluxo de Consciência",
      "context": "Nos contos de Clarice Lispector (como em 'Amor'), um incidente trivial do dia a dia — como ver um homem cego mascando chicles no bonde — desencadeia uma súbita revelação existencial que desorganiza a rotina da personagem burguesa.",
      "question": "Esse recurso narrativo, amplamente explorado pela autora e cobrado no ENEM, é conceituado como:",
      "options": [
            {
                  "text": "Poema-piada satírico com rimas ricas e métrica fixa.",
                  "isCorrect": false
            },
            {
                  "text": "Epifania, momento de iluminação interior e ruptura da normalidade que desvela a verdade íntima do sujeito.",
                  "isCorrect": true
            },
            {
                  "text": "Crônica jornalística puramente informativa sem introspecção psicológica.",
                  "isCorrect": false
            },
            {
                  "text": "Tratado científico de neurologia clínica experimental.",
                  "isCorrect": false
            },
            {
                  "text": "Panfleto partidário de propaganda governamental compulsória.",
                  "isCorrect": false
            }
      ],
      "explanation": "A epifania clariceana é o instante de choque existencial que desmascara as certezas burguesas a partir de um fato aparentemente banal."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • História do Brasil",
      "topic": "TOP ENEM: ERA VARGAS E INDÚSTRIA DE BASE",
      "title": "Criação da CSN e Vale do Rio Doce",
      "context": "Durante o Estado Novo, Getúlio Vargas negociou com os Estados Unidos no contexto da Segunda Guerra Mundial a concessão de empréstimos e apoio técnico para a fundação da Companhia Siderúrgica Nacional (CSN) em Volta Redonda.",
      "question": "A implantação estatal da siderurgia e da mineração pesada no Brasil cumpria a função estratégica de:",
      "options": [
            {
                  "text": "Subordinar permanentemente a economia nacional à importação de manufaturados agrícolas europeus.",
                  "isCorrect": false
            },
            {
                  "text": "Criar a infraestrutura industrial básica (aço e minério) indispensável para a industrialização nacional autônoma.",
                  "isCorrect": true
            },
            {
                  "text": "Eliminar o uso de eletricidade no transporte ferroviário de passageiros.",
                  "isCorrect": false
            },
            {
                  "text": "Restringir o acesso dos operários brasileiros a qualquer tipo de formação técnica.",
                  "isCorrect": false
            },
            {
                  "text": "Descentralizar a política tributária entregando a arrecadação aos coronéis nordestinos.",
                  "isCorrect": false
            }
      ],
      "explanation": "A CSN forneceu o aço necessário para que o Brasil pudesse desenvolver suas próprias indústrias de bens de consumo duráveis e maquinários."
},
{
      "difficulty": "medio",

      "category": "Ciências Humanas • História do Brasil",
      "topic": "TOP ENEM: ERA VARGAS E INDÚSTRIA DE BASE (CLONE)",
      "title": "A Campanha do 'Petróleo é Nosso' e a Petrobras (1953)",
      "context": "No segundo governo Vargas (1951-1954), intensas mobilizações cívicas sob o lema 'O Petróleo é Nosso' culminaram na criação da Petrobras com monopólio estatal sobre a prospecção e o refino de hidrocarbonetos.",
      "question": "A criação de empresas públicas de energia no modelo nacional-desenvolvimentista varguista visava:",
      "options": [
            {
                  "text": "Privatizar todas as refinarias em favor de multinacionais estrangeiras sem regulação.",
                  "isCorrect": false
            },
            {
                  "text": "Garantir a soberania energética e proteger um setor estratégico de segurança nacional contra o controle cartelizado externo.",
                  "isCorrect": true
            },
            {
                  "text": "Substituir o consumo de combustíveis fósseis por carvão vegetal artesanal.",
                  "isCorrect": false
            },
            {
                  "text": "Impedir a construção de rodovias asfaltadas entre os estados federativos.",
                  "isCorrect": false
            },
            {
                  "text": "Abolir o comércio exterior com todos os países vizinhos da América do Sul.",
                  "isCorrect": false
            }
      ],
      "explanation": "A fundação da Petrobras materializou a doutrina da soberania sobre recursos naturais estratégicos indispensáveis ao crescimento econômico."
},
{
      "difficulty": "facil",

      "category": "Ciências Humanas • História e Cidadania",
      "topic": "TOP ENEM: CONQUISTA DO VOTO FEMININO (1932)",
      "title": "Bertha Lutz e o Movimento Sufragista",
      "context": "O Código Eleitoral de 1932 e a Constituição de 1934 consagraram formalmente o direito de voto e de candidatura às mulheres brasileiras, após décadas de intensa militância da Federação Brasileira pelo Progresso Feminino.",
      "question": "Essa conquista cívica no Brasil da década de 1930 representou:",
      "options": [
            {
                  "text": "A concessão espontânea da elite cafeeira sem qualquer reivindicação dos movimentos sociais.",
                  "isCorrect": false
            },
            {
                  "text": "A ampliação dos direitos políticos e a superação parcial da histórica exclusão das mulheres da esfera pública deliberativa.",
                  "isCorrect": true
            },
            {
                  "text": "A obrigatoriedade de todas as mulheres abandonarem seus empregos formais na indústria.",
                  "isCorrect": false
            },
            {
                  "text": "A proibição da participação de homens nos pleitos eleitorais municipais.",
                  "isCorrect": false
            },
            {
                  "text": "A extinção definitiva das desigualdades salariais entre os gêneros em todo o mercado de trabalho.",
                  "isCorrect": false
            }
      ],
      "explanation": "O sufrágio feminino de 1932 rompeu o monopólio masculino da política institucional, ampliando a cidadania republicana."
},
{
      "difficulty": "facil",

      "category": "Ciências Humanas • História e Cidadania",
      "topic": "TOP ENEM: CONQUISTA DO VOTO FEMININO (1932) (CLONE)",
      "title": "Sub-representação Feminina no Parlamento Contemporâneo",
      "context": "Apesar de constituírem mais de 52% do eleitorado brasileiro, as mulheres ainda ocupam menos de 18% das cadeiras no Congresso Nacional, o que motivou a criação de cotas mínimas de candidaturas e de financiamento eleitoral por partido.",
      "question": "A disparidade entre a proporção de eleitoras e a quantidade de parlamentares eleitas reflete:",
      "options": [
            {
                  "text": "O desinteresse biológico inato das mulheres por debates de orçamento público.",
                  "isCorrect": false
            },
            {
                  "text": "Barreiras estruturais patriarcais na partilha de recursos e a persistência de assimetrias de gênero nos espaços de poder.",
                  "isCorrect": true
            },
            {
                  "text": "A proibição constitucional do registro de chapas eleitorais lideradas por mulheres.",
                  "isCorrect": false
            },
            {
                  "text": "A igualdade material já plenamente consolidada em todos os níveis de representação partidária.",
                  "isCorrect": false
            },
            {
                  "text": "A preferência unânime das cidadãs por candidatos do sexo masculino.",
                  "isCorrect": false
            }
      ],
      "explanation": "A sub-representação parlamentar demonstra que o direito formal ao voto não basta sem políticas afirmativas contra a desigualdade estrutural de gênero."
}
  ],

  natureza_matematica: [
    // ==========================================
    // ENEM 2025 - NATUREZA & MATEMÁTICA
    // ==========================================
    {
      difficulty: "medio",

      category: "Natureza • Química e Matriz Energética",
      topic: "ENEM 2025: HIDROGÊNIO VERDE (H₂V) E DESCARBONIZAÇÃO",
      title: "Eletrólise da Água por Fontes Renováveis",
      context: "O Brasil tem consolidado plantas industriais para a produção de 'hidrogênio verde' (H₂V), obtido por meio da eletrólise da água alimentada exclusivamente por energia eólica e solar fotovoltaica.",
      question: "Diferente do hidrogênio 'cinza' ou 'marrom', a classificação do hidrogênio como 'verde' decorre prioritariamente do fato de:",
      options: [
        { text: "Possuir coloração esmeralda visível que facilita a detecção de vazamentos em gasodutos.", isCorrect: false },
        { text: "Ser produzido a partir de eletrólise com eletricidade 100% renovável, sem emissão líquida de carbono em sua cadeia.", isCorrect: true },
        { text: "Reagir com o oxigênio atmosférico liberando monóxido de carbono e fuligem pesada.", isCorrect: false },
        { text: "Apresentar densidade energética inferior à da lenha de reflorestamento comum.", isCorrect: false },
        { text: "Ser sintetizado unicamente a partir de rejeitos plásticos descartados em aterros sanitários.", isCorrect: false }
      ],
      explanation: "O H₂V é 'verde' pelo processo de obtenção limpo: a eletrólise (2 H₂O -> 2 H₂ + O₂) utiliza energia solar/eólica sem emitir gases estufa."
    },
    {
      difficulty: "medio",

      category: "Natureza • Biologia e Ecologia Aquática",
      topic: "ENEM 2025: MICROPLÁSTICOS E CADEIA TRÓFICA MARINHA",
      title: "Fragmentação Polimérica e Toxicidade Celular",
      context: "A degradação mecânica e fotoquímica de plásticos descartados no oceano gera partículas microscópicas (< 5 mm) que adsorvem poluentes orgânicos persistentes (POPs).",
      question: "A ingestão acidental de microplásticos pelo zooplâncton marinho afeta os níveis tróficos superiores porque:",
      options: [
        { text: "O microplástico é digerido e metabolizado pelas enzimas digestivas transformando-se em vitaminas.", isCorrect: false },
        { text: "Provoca a biomagnificação dos poluentes tóxicos ao longo da teia alimentar até chegar aos peixes e humanos.", isCorrect: true },
        { text: "Elimina a necessidade de oxigênio dissolvido na água para a respiração de mamíferos marinhos.", isCorrect: false },
        { text: "Provoca a calcificação instantânea de todas as espécies de algas fotossintetizantes.", isCorrect: false },
        { text: "Aumenta a profundidade das fossas oceânicas pelo acúmulo de polímeros solúveis.", isCorrect: false }
      ],
      explanation: "Os microplásticos adsorvem toxinas e, por não serem digeridos, concentram-se exponencialmente nos predadores de topo (biomagnificação)."
    },
    {
      difficulty: "dificil",

      category: "Matemática • Funções e Exponencial",
      topic: "ENEM 2025: CRESCIMENTO EXPONENCIAL DE DADOS EM NUVEM",
      title: "Modelagem Exponencial do Tráfego Global",
      context: "O tráfego de dados processados por servidores de inteligência artificial em uma nuvem computacional é modelado pela função T(t) = 50 × 2⁰’⁵ᵗ, onde T é o volume em petabytes e t é o tempo em anos decorridos.",
      question: "O tempo t necessário para que o volume de dados atinja exatamente 400 petabytes é de:",
      options: [
        { text: "3 anos", isCorrect: false },
        { text: "4 anos", isCorrect: false },
        { text: "6 anos", isCorrect: true },
        { text: "8 anos", isCorrect: false },
        { text: "10 anos", isCorrect: false }
      ],
      explanation: "400 = 50 × 2⁰’⁵ᵗ -> 2⁰’⁵ᵗ = 8 = 2³. Logo, 0,5t = 3 -> t = 3 / 0,5 = 6 anos!"
    },

    // ==========================================
    // ENEM 2024 - NATUREZA & MATEMÁTICA
    // ==========================================
    {
      difficulty: "medio",

      category: "Natureza • Biologia e Meio Ambiente",
      topic: "ENEM 2024: QUEIMADAS E POLUIÇÃO ATMOSFÉRICA",
      title: "Material Particulado e Trocas Gasosas",
      context: "As intensas queimadas em biomas brasileiros no ano de 2024 geraram plumas densas de fumaça carregadas de material particulado fino (PM₂,₅), que encobriu cidades a milhares de quilômetros das áreas florestais.",
      question: "A inalação crônica desse material particulado fino atinge as regiões mais profundas do aparelho respiratório humano, provocando danos primordiais nos(as):",
      options: [
        { text: "Cartilagens da laringe, impedindo a produção de saliva.", isCorrect: false },
        { text: "Alvéolos pulmonares, comprometendo a hematose e provocando inflamações vasculares sistêmicas.", isCorrect: true },
        { text: "Células hepáticas responsáveis pela digestão de lipídios da dieta.", isCorrect: false },
        { text: "Glândulas salivares parótidas, anulando a quebra mecânica dos carboidratos.", isCorrect: false },
        { text: "Músculos esqueléticos da tíbia, impedindo a locomoção voluntária.", isCorrect: false }
      ],
      explanation: "O material PM₂,₅ ultrapassa os cílios respiratórios e penetra nos alvéolos, dificultando a difusão do oxigênio para os capilares sanguíneos (hematose)."
    },
    {
      difficulty: "dificil",

      category: "Natureza • Física e Eletricidade",
      topic: "ENEM 2024: ENERGIA SOLAR FOTOVOLTAICA",
      title: "Efeito Fotoelétrico e Potência Gerada",
      context: "Painéis fotovoltaicos residenciais convertem a energia luminosa solar incidente diretamente em corrente elétrica contínua por meio da excitação de elétrons em semicondutores de silício.",
      question: "Para que um inversor de corrente entregue 6.000 W de potência útil à rede elétrica em uma tensão de 220 V, a intensidade média de corrente alternada de saída deve ser de aproximadamente:",
      options: [
        { text: "12 A", isCorrect: false },
        { text: "27,3 A", isCorrect: true },
        { text: "55 A", isCorrect: false },
        { text: "110 A", isCorrect: false },
        { text: "1.320 A", isCorrect: false }
      ],
      explanation: "Da relação de potência elétrica P = U × i: i = P / U = 6.000 W / 220 V ≈ 27,27 A!"
    },
    {
      difficulty: "facil",

      category: "Matemática • Proporção e Razão",
      topic: "ENEM 2024: RENDIMENTO DE MÁQUINAS E ESCALA",
      title: "Cálculo de Consumo e Proporção Direta",
      context: "Um drone agrícola utilizado para pulverização de precisão consegue cobrir 15 hectares de lavoura utilizando 3 baterias recarregáveis em 90 minutos de operação contínua.",
      question: "Mantendo a mesma velocidade e vazão de aplicação, a quantidade de baterias necessárias para pulverizar uma área de 60 hectares será de:",
      options: [
        { text: "6 baterias", isCorrect: false },
        { text: "9 baterias", isCorrect: false },
        { text: "12 baterias", isCorrect: true },
        { text: "15 baterias", isCorrect: false },
        { text: "18 baterias", isCorrect: false }
      ],
      explanation: "A área quadruplicou (60 ha / 15 ha = 4). Como as grandezas são diretamente proporcionais: 3 baterias × 4 = 12 baterias!"
    },

    // ==========================================
    // ENEM 2023 - NATUREZA & MATEMÁTICA
    // ==========================================
    {
      difficulty: "dificil",

      category: "Natureza • Biologia e Genética",
      topic: "ENEM 2023: BIOTECNOLOGIA E CRISPR",
      title: "Edição Gênica e Precisão Molecular",
      context: "O sistema CRISPR-Cas9, derivado de um mecanismo de defesa bacteriano contra bacteriófagos, atua como uma 'tesoura molecular' guiada por uma fita de RNA para clivar sequências precisas no DNA de células vivas.",
      question: "A grande inovação biotecnológica do CRISPR em relação às técnicas tradicionais de transgenia reside na:",
      options: [
        { text: "Incapacidade de alterar organismos eucariotos e mamíferos superiores.", isCorrect: false },
        { text: "Alta especificidade e precisão no corte de sequências-alvo previamente programadas no genoma.", isCorrect: true },
        { text: "Substituição completa do RNA pela síntese de lipídios bacterianos estéreis.", isCorrect: false },
        { text: "Exigência de clonagem integral do organismo reprodutivo para cada gene modificado.", isCorrect: false },
        { text: "Eliminação espontânea de todas as mitocôndrias das células animais modificadas.", isCorrect: false }
      ],
      explanation: "O CRISPR permite editar, ativar ou desativar genes em locais exatos do DNA com precisão cirúrgica sem inserções aleatórias."
    },
    {
      difficulty: "medio",

      category: "Natureza • Química e Soluções",
      topic: "ENEM 2023: EQUILÍBRIO QUÍMICO E CO₂ NOS OCEANOS",
      title: "Acidificação Oceânica e Recifes de Coral",
      context: "O aumento das emissões antrópicas de CO₂ faz com que mais gás se dissolva nos oceanos, formando ácido carbônico (H₂CO₃) que se dissocia liberando íons H+, que reagem com o carbonato (CO₃²⁻).",
      question: "A diminuição da disponibilidade de íons carbonato no meio aquático afeta de forma letal os recifes de coral porque:",
      options: [
        { text: "Aumenta drasticamente a salinidade da água congelando os oceanos equatoriais.", isCorrect: false },
        { text: "Dificulta a síntese do exoesqueleto calcário de carbonato de cálcio (CaCO₃) de corais e moluscos.", isCorrect: true },
        { text: "Impede que os animais aquáticos realizem a excreção de ureia pelas brânquias.", isCorrect: false },
        { text: "Acelera a fotossíntese dos tubarões carnívoros do topo da cadeia trófica.", isCorrect: false },
        { text: "Neutraliza completamente a luz solar na zona fótica costeira.", isCorrect: false }
      ],
      explanation: "A acidificação rouba íons carbonato livres da água, impedindo os corais de formar e manter seus esqueletos de CaCO₃."
    },
    {
      difficulty: "facil",

      category: "Matemática • Estatística",
      topic: "ENEM 2023: MEDIDAS DE TENDÊNCIA CENTRAL",
      title: "Média Aritmética e Nota de Corte do SiSU",
      context: "Um vestibulando obteve as seguintes notas nas quatro provas objetivas do ENEM: Matemática: 750; Natureza: 650; Humanas: 700; Linguagens: 600. Para o curso desejado, a faculdade adota pesos iguais (1) para todas as áreas objetivas.",
      question: "A nota média aritmética simples desse candidato nas provas objetivas foi de:",
      options: [
        { text: "650 pontos", isCorrect: false },
        { text: "675 pontos", isCorrect: true },
        { text: "680 pontos", isCorrect: false },
        { text: "700 pontos", isCorrect: false },
        { text: "710 pontos", isCorrect: false }
      ],
      explanation: "(750 + 650 + 700 + 600) / 4 = 2.700 / 4 = 675 pontos!"
    },

    // ==========================================
    // ENEM 2022 - NATUREZA & MATEMÁTICA
    // ==========================================
    {
      difficulty: "medio",

      category: "Natureza • Física e Ondulatória",
      topic: "ENEM 2022: ESPECTRO ELETROMAGNÉTICO E REDE 5G",
      title: "Frequência e Comprimento de Onda (v = λ . f)",
      context: "A implementação das redes de telefonia celular 5G utiliza faixas de radiofrequência mais elevadas (como 3,5 GHz) em comparação com as tecnologias 4G anteriores (cerca de 700 MHz a 2,5 GHz).",
      question: "Sabendo que todas as ondas eletromagnéticas viajam na velocidade da luz no vácuo (c ≈ 3 x 10⁸ m/s), o aumento da frequência na transmissão do sinal 5G acarreta:",
      options: [
        { text: "Aumento na mesma proporção do comprimento de onda da radiação emitida.", isCorrect: false },
        { text: "Redução do comprimento de onda, exigindo maior quantidade de antenas repetidoras com menor raio de alcance.", isCorrect: true },
        { text: "Redução da velocidade de propagação do sinal eletromagnético para zero no ar.", isCorrect: false },
        { text: "Inversão do campo gravitacional nas proximidades das torres de transmissão.", isCorrect: false },
        { text: "Transformação espontânea das ondas de rádio em partículas alfa e gama ionizantes.", isCorrect: false }
      ],
      explanation: "Como v = λ * f é constante no meio, se a frequência (f) sobe, o comprimento de onda (λ) diminui, o que reduz o poder de contornar obstáculos e exige mais antenas."
    },
    {
      difficulty: "facil",

      category: "Matemática • Geometria Espacial",
      topic: "ENEM 2022: CÁLCULO DE CAPACIDADE DE EMBALAGENS",
      title: "Volume de Paralelepípedo Retângulo",
      context: "Uma indústria de laticínios desenha caixas de leite no formato de paralelepípedo reto-retângulo com base medindo 10 cm por 5 cm e altura de 20 cm.",
      question: "Sabendo que 1 cm³ equivale a 1 mL, o volume total de líquido que essa caixa comporta completamente cheia é de:",
      options: [
        { text: "500 mL", isCorrect: false },
        { text: "750 mL", isCorrect: false },
        { text: "1.000 mL (1 litro)", isCorrect: true },
        { text: "1.500 mL", isCorrect: false },
        { text: "2.000 mL", isCorrect: false }
      ],
      explanation: "V = comprimento × largura × altura = 10 cm × 5 cm × 20 cm = 1.000 cm³ = 1.000 mL = 1 Litro!"
    },

    // ==========================================
    // ENEM 2021 - NATUREZA & MATEMÁTICA
    // ==========================================
    {
      difficulty: "medio",

      category: "Natureza • Biologia e Imunologia",
      topic: "ENEM 2021: PLATAFORMAS DE VACINAS DE RNA MENSAGEIRO",
      title: "Mecanismo Celular das Vacinas de mRNA",
      context: "Durante a pandemia de COVID-19, vacinas inovadoras de RNA mensageiro sintético foram desenvolvidas para instruir células do hospedeiro a produzir a proteína spike do coronavírus.",
      question: "Nas células humanas inoculadas com essa vacina, a síntese temporária da proteína viral ocorre na organela denominada:",
      options: [
        { text: "Lisossomo primário autofágico.", isCorrect: false },
        { text: "Ribossomo citoplasmático durante o processo de tradução do mRNA.", isCorrect: true },
        { text: "Centríolo organizador do fuso mitótico celular.", isCorrect: false },
        { text: "Complexo de Golgi exclusivamente durante a mitose nuclear.", isCorrect: false },
        { text: "Vacúolo de suco celular vegetal com cloroplasto.", isCorrect: false }
      ],
      explanation: "Os ribossomos leem a fita de mRNA vacinal no citoplasma e sintetizam o antígeno viral que ativa a resposta dos linfócitos."
    },
    {
      difficulty: "facil",

      category: "Matemática • Porcentagem Financeira",
      topic: "ENEM 2021: JUROS E INFLAÇÃO NO DIA A DIA",
      title: "Desconto Comercial À Vista vs. Parcelado",
      context: "Um eletrodoméstico custa R$ 1.200,00 a prazo. No pagamento à vista, a loja oferece um desconto imediato de 15%.",
      question: "O valor pago em reais pelo consumidor que opta pelo pagamento à vista é de:",
      options: [
        { text: "R$ 1.000,00", isCorrect: false },
        { text: "R$ 1.020,00", isCorrect: true },
        { text: "R$ 1.080,00", isCorrect: false },
        { text: "R$ 1.150,00", isCorrect: false },
        { text: "R$ 980,00", isCorrect: false }
      ],
      explanation: "Desconto: 15% de 1.200 = 0,15 × 1.200 = R$ 180,00. Preço final: 1.200 - 180 = R$ 1.020,00!"
    },

    // ==========================================
    // ENEM 2020 - NATUREZA & MATEMÁTICA
    // ==========================================
    {
      difficulty: "medio",

      category: "Natureza • Química e Separação de Misturas",
      topic: "ENEM 2020: TRATAMENTO DE ÁGUA E SANEAMENTO",
      title: "Etapas da Estação de Tratamento de Água (ETA)",
      context: "Na captação de água de mananciais superficiais turvos com argila coloidal em suspensão, adiciona-se sulfato de alumínio [Al₂(SO₄)₃] e cal virgem para promover a união das partículas menores em agregados mais densos.",
      question: "As etapas sucessivas em que ocorrem a formação desses flocos e a sua posterior deposição no fundo do tanque pelo efeito da gravidade são denominadas, respectivamente:",
      options: [
        { text: "Destilação fracionada e flotação gasosa.", isCorrect: false },
        { text: "Floculação e Decantação.", isCorrect: true },
        { text: "Sublimação atômica e filtração magnética.", isCorrect: false },
        { text: "Eletrólise aquosa e centrifugação térmica.", isCorrect: false },
        { text: "Aeração por vácuo e cloração efervescente.", isCorrect: false }
      ],
      explanation: "Coagulação/Floculação aglutina as impurezas e a Decantação permite que os flocos densos afundem por gravidade antes da filtração."
    },
    {
      difficulty: "dificil",

      category: "Matemática • Probabilidade",
      topic: "ENEM 2020: CÁLCULO DE PROBABILIDADE CONDICIONAL",
      title: "Diagnóstico Clínico e Falsos Positivos",
      context: "Em um grupo de 100 pacientes com sintomas gripais, 40 estão infectados com o vírus influenza e 60 não estão. Entre os infectados, 36 testaram positivo no exame rápido; entre os não infectados, 6 testaram positivo (falsos positivos).",
      question: "Sorteando-se ao acaso um paciente cujo resultado do teste foi positivo, a probabilidade de ele realmente estar infectado pelo vírus é de:",
      options: [
        { text: "36 / 100 (36%)", isCorrect: false },
        { text: "36 / 42 (aproximadamente 85,7%)", isCorrect: true },
        { text: "40 / 100 (40%)", isCorrect: false },
        { text: "6 / 42 (aproximadamente 14,3%)", isCorrect: false },
        { text: "36 / 40 (90%)", isCorrect: false }
      ],
      explanation: "Espaço amostral reduzido (todos os positivos): 36 (infectados) + 6 (falsos positivos) = 42 pessoas. Casos favoráveis (realmente infectados): 36. Probabilidade = 36 / 42 ≈ 85,7%!"
    }
  ,
{
      "difficulty": "medio",

      "category": "Natureza • Biologia (Ecologia)",
      "topic": "ENEM 2024: RELAÇÕES ECOLÓGICAS E BIOPIRATARIA",
      "title": "Bioinvasão e Perda de Biodiversidade",
      "context": "A introdução de espécies exóticas invasoras, como o mexilhão-dourado em usinas hidrelétricas e o peixe-leão em recifes costeiros brasileiros, representa uma das maiores ameaças à fauna nativa.",
      "question": "A proliferação descontrolada dessas espécies exóticas decorre primordialmente da:",
      "options": [
            {
                  "text": "Incapacidade dos predadores originais de viver em águas tropicais.",
                  "isCorrect": false
            },
            {
                  "text": "Ausência de predadores naturais e parasitas locais adaptados, aliada a altas taxas reprodutivas na nova área.",
                  "isCorrect": true
            },
            {
                  "text": "Alimentação exclusiva de plásticos descartados por turistas nas praias.",
                  "isCorrect": false
            },
            {
                  "text": "Mutação gênica imediata provocada pela temperatura média do ar atmosférico.",
                  "isCorrect": false
            },
            {
                  "text": "Fotossíntese cutânea realizada pelos animais invasores durante o período noturno.",
                  "isCorrect": false
            }
      ],
      "explanation": "Sem inimigos naturais para controlar suas populações, os invasores competem vantajosamente por nicho e dizimam espécies nativas."
},
{
      "difficulty": "medio",

      "category": "Natureza • Biologia (Citologia)",
      "topic": "ENEM 2023: RESPIRAÇÃO CELULAR E FERMENTAÇÃO",
      "title": "Glicólise e Produção de ATP",
      "context": "Durante um esforço físico vigoroso e prolongado (como uma corrida de 100 metros rasos), o suprimento de oxigênio nos miócitos musculares pode se tornar insuficiente para atender à demanda de ATP pela fosforilação oxidativa mitocondrial.",
      "question": "Nessas condições de hipóxia momentânea, as células musculares obtêm energia complementar por meio da:",
      "options": [
            {
                  "text": "Fermentação alcoólica com produção e liberação de gás carbônico e etanol.",
                  "isCorrect": false
            },
            {
                  "text": "Fermentação lática com redução do piruvato a lactato no citosol.",
                  "isCorrect": true
            },
            {
                  "text": "Fotólise da água com síntese imediata de glicose pura.",
                  "isCorrect": false
            },
            {
                  "text": "Transformação instantânea de nitrogênio atmosférico em colágeno.",
                  "isCorrect": false
            },
            {
                  "text": "Fagocitose das hemácias vizinhas para consumo de hemoglobina.",
                  "isCorrect": false
            }
      ],
      "explanation": "Na ausência temporária de O₂, o músculo realiza fermentação lática para regenerar NAD+ e manter a produção emergencial de 2 ATPs por glicose."
},
{
      "difficulty": "facil",

      "category": "Natureza • Biologia (Fisiologia e Doenças)",
      "topic": "ENEM 2022: CICLO DA ESQUISTOSSOMOSE",
      "title": "Saneamento Básico e Barriga d'Água",
      "context": "A esquistossomose mansônica é uma verminose endêmica prevalente em regiões sem saneamento básico, onde fezes humanas contendo ovos do parasita contaminam lagoas com caramujos do gênero Biomphalaria.",
      "question": "A forma infectante do Schistosoma mansoni que penetra ativamente pela pele de pessoas que se banham nessas águas contaminadas é a:",
      "options": [
            {
                  "text": "Ovo embrionado com opérculo calcário.",
                  "isCorrect": false
            },
            {
                  "text": "Cercária natatória dotada de cauda bifurcada.",
                  "isCorrect": true
            },
            {
                  "text": "Miracídio ciliado que busca o hospedeiro intermediário.",
                  "isCorrect": false
            },
            {
                  "text": "Cisticerco vesicular encistado na carne bovina.",
                  "isCorrect": false
            },
            {
                  "text": "Larva filarioide transmitida pela picada do mosquito Culex.",
                  "isCorrect": false
            }
      ],
      "explanation": "O miracídio infecta o caramujo; após multiplicação, o caramujo libera as cercárias, que nadam e penetram ativamente na pele humana."
},
{
      "difficulty": "dificil",

      "category": "Natureza • Física (Eletrodinâmica)",
      "topic": "ENEM 2024: CIRCUITOS EM PARALELO E DISJUNTORES",
      "title": "Sobrecarga Elétrica e Fiação Residencial",
      "context": "Em uma residência cuja rede opera em 127 V, todos os aparelhos de uma mesma tomada múltipla (benjamim/régua) são ligados em paralelo. Quando muitos eletrodomésticos de alta potência são conectados simultaneamente, o disjuntor desarma.",
      "question": "O desarme do disjuntor de proteção decorre do fato de que a associação em paralelo de novos aparelhos promove:",
      "options": [
            {
                  "text": "O aumento da resistência equivalente do circuito, reduzindo a corrente a zero.",
                  "isCorrect": false
            },
            {
                  "text": "A diminuição da resistência elétrica equivalente total, elevando a corrente total demandada acima do limite de segurança da fiação.",
                  "isCorrect": true
            },
            {
                  "text": "A multiplicação da tensão de entrada de 127 V para 10.000 V instantaneamente.",
                  "isCorrect": false
            },
            {
                  "text": "O congelamento térmico dos fusíveis mecânicos por indução eletrostática.",
                  "isCorrect": false
            },
            {
                  "text": "A inversão do sentido de rotação dos campos magnéticos do medidor de consumo.",
                  "isCorrect": false
            }
      ],
      "explanation": "Na ligação em paralelo: 1/Req = 1/R1 + 1/R2... Quanto mais aparelhos, MENOR a resistência equivalente e MAIOR a corrente total (Itotal = U / Req), aquecendo a fiação até desarmar o disjuntor."
},
{
      "difficulty": "dificil",

      "category": "Natureza • Física (Mecânica e Energia)",
      "topic": "ENEM 2023: CONSERVAÇÃO DA ENERGIA MECÂNICA",
      "title": "Montanha-Russa e Transformação Energética",
      "context": "Um carrinho de montanha-russa de massa m = 400 kg parte do repouso do ponto mais alto da pista, situado a uma altura h = 20 metros do solo. (Considere g = 10 m/s² e despreze os atritos com os trilhos e com o ar).",
      "question": "A velocidade atingida pelo carrinho no ponto mais baixo da pista (ao nível do solo) será de:",
      "options": [
            {
                  "text": "10 m/s",
                  "isCorrect": false
            },
            {
                  "text": "14,1 m/s",
                  "isCorrect": false
            },
            {
                  "text": "20 m/s (72 km/h)",
                  "isCorrect": true
            },
            {
                  "text": "40 m/s",
                  "isCorrect": false
            },
            {
                  "text": "200 m/s",
                  "isCorrect": false
            }
      ],
      "explanation": "Ep = Ec -> m × g*h = (m × v²)/2 -> v² = 2 × g*h = 2 × 10 × 20 = 400 -> v = 20 m/s (72 km/h)!"
},
{
      "difficulty": "dificil",

      "category": "Natureza • Física (Óptica e Ondas)",
      "topic": "ENEM 2021: REFRAÇÃO E FIBRA ÓPTICA",
      "title": "Transmissão de Luz e Reflexão Total",
      "context": "Cabos de fibra óptica transportam terabits de dados por segundo por meio de pulsos de luz que viajam confinadas em núcleos de vidro flexível de alta pureza sem vazar pelas laterais.",
      "question": "O princípio físico fundamental que mantém os feixes de luz confinados no interior do núcleo da fibra óptica é a:",
      "options": [
            {
                  "text": "Polarização magnética por elétrons livres de cobre.",
                  "isCorrect": false
            },
            {
                  "text": "Reflexão interna total, pois o índice de refração do núcleo é superior ao da casca e o ângulo de incidência supera o ângulo limite.",
                  "isCorrect": true
            },
            {
                  "text": "Absorção completa das ondas infravermelhas pela camada protetora externa.",
                  "isCorrect": false
            },
            {
                  "text": "Difração gravitacional das partículas de fótons pelo vácuo interno.",
                  "isCorrect": false
            },
            {
                  "text": "Interferência destrutiva entre sinais de alta e baixa frequência.",
                  "isCorrect": false
            }
      ],
      "explanation": "Para ocorrer reflexão total: a luz deve viajar do meio mais refringente para o menos refringente (n_núcleo > n_casca) incidindo com ângulo superior ao ângulo limite."
},
{
      "difficulty": "facil",

      "category": "Natureza • Química (Química Geral)",
      "topic": "ENEM 2024: FORÇAS INTERMOLECULARES E SOLUBILIDADE",
      "title": "Ação dos Sabões na Remoção de Gordura",
      "context": "Os sabões e detergentes sintéticos são moléculas anfifílicas constituídas por uma longa cadeia carbônica apolar e uma extremidade iônica polar polarizada.",
      "question": "A eficiência dos sabões na remoção de óleos hidrofóbicos em água decorre da sua capacidade de:",
      "options": [
            {
                  "text": "Acidificar instantaneamente a solução para pH 1, dissolvendo quimicamente a gordura.",
                  "isCorrect": false
            },
            {
                  "text": "Formar micelas coloidais, interagindo com as gorduras pela cauda apolar e com a água pela cabeça polar (emulsificação).",
                  "isCorrect": true
            },
            {
                  "text": "Evaporar a gordura em contato com a luz solar.",
                  "isCorrect": false
            },
            {
                  "text": "Solidificar a água em gelo para expulsar os lipídios.",
                  "isCorrect": false
            },
            {
                  "text": "Transformar lipídios em sal de cozinha inofensivo.",
                  "isCorrect": false
            }
      ],
      "explanation": "As caudas apolares dos tensoativos interagem com a gordura (apolar) e as cabeças polares ligam-se à água (polar), formando micelas emulsionadas."
},
{
      "difficulty": "dificil",

      "category": "Natureza • Química (Termoquímica)",
      "topic": "ENEM 2023: BIODIESEL E BALANÇO DE CARBONO",
      "title": "Transesterificação de Óleos Vegetais",
      "context": "O biodiesel é obtido por uma reação de transesterificação na qual triglicerídeos (óleos de soja ou palma) reagem com um álcool de cadeia curta (metanol ou etanol) na presença de um catalisador básico.",
      "question": "Além dos ésteres metílicos ou etílicos (que constituem o biodiesel), o coproduto industrial de alto valor comercial gerado nessa reação é o(a):",
      "options": [
            {
                  "text": "Ácido clorídrico concentrado.",
                  "isCorrect": false
            },
            {
                  "text": "Glicerol (glicerina), amplamente aproveitado nas indústrias cosmética e farmacêutica.",
                  "isCorrect": true
            },
            {
                  "text": "Gás metano inflamável em alta pressão.",
                  "isCorrect": false
            },
            {
                  "text": "Plástico polietileno puro para embalagens.",
                  "isCorrect": false
            },
            {
                  "text": "Carvão mineral antracito para fornos siderúrgicos.",
                  "isCorrect": false
            }
      ],
      "explanation": "Triglicerídeo + 3 Álcool -> 3 Biodiesel (éster) + Glicerol (glicerina)."
},
{
      "difficulty": "medio",

      "category": "Matemática • Razão e Proporção",
      "topic": "ENEM 2024: ESCALAS CARTOGRÁFICAS E ÁREA",
      "title": "Área Real a partir de Desenho em Escala",
      "context": "Um engenheiro projeta uma praça retangular em uma planta cadastral cuja escala é de 1 : 500. No papel, o desenho da praça mede 4 cm de largura por 6 cm de comprimento.",
      "question": "A área real ocupada por essa praça no terreno corresponde a:",
      "options": [
            {
                  "text": "120 m²",
                  "isCorrect": false
            },
            {
                  "text": "240 m²",
                  "isCorrect": false
            },
            {
                  "text": "600 m²",
                  "isCorrect": true
            },
            {
                  "text": "1.200 m²",
                  "isCorrect": false
            },
            {
                  "text": "6.000 m²",
                  "isCorrect": false
            }
      ],
      "explanation": "Largura real: 4 cm × 500 = 2.000 cm = 20 metros. Comprimento real: 6 cm × 500 = 3.000 cm = 30 metros. Área real = 20 m × 30 m = 600 m²!"
},
{
      "difficulty": "facil",

      "category": "Matemática • Estatística Aplicada",
      "topic": "ENEM 2023: MEDIANA DE DADOS AGRUPADOS",
      "title": "Tempo de Atendimento e Mediana Central",
      "context": "Um banco mediu o tempo de espera (em minutos) de 7 clientes em uma fila: 4, 8, 3, 15, 6, 9 e 7.",
      "question": "O valor da mediana do tempo de espera dessa amostra de clientes é de:",
      "options": [
            {
                  "text": "6 minutos",
                  "isCorrect": false
            },
            {
                  "text": "7 minutos",
                  "isCorrect": true
            },
            {
                  "text": "7,4 minutos",
                  "isCorrect": false
            },
            {
                  "text": "8 minutos",
                  "isCorrect": false
            },
            {
                  "text": "9 minutos",
                  "isCorrect": false
            }
      ],
      "explanation": "Ordenando o rol de dados: {3, 4, 6, 7, 8, 9, 15}. O termo central (4º elemento de 7) é o número 7 minutos!"
},
{
      "difficulty": "facil",

      "category": "Matemática • Geometria Plana",
      "topic": "ENEM 2022: ÁREA DE CÍRCULO E SETOR CIRCULAR",
      "title": "Alcance de Irrigador por Aspersão",
      "context": "Um aspersor agrícola rotativo de pivô central gira 360 graus irrigando uma região circular plana de raio r = 10 metros. (Considere π = 3,14).",
      "question": "A área total de plantio irrigada por esse equipamento é de:",
      "options": [
            {
                  "text": "31,4 m²",
                  "isCorrect": false
            },
            {
                  "text": "62,8 m²",
                  "isCorrect": false
            },
            {
                  "text": "314 m²",
                  "isCorrect": true
            },
            {
                  "text": "628 m²",
                  "isCorrect": false
            },
            {
                  "text": "3.140 m²",
                  "isCorrect": false
            }
      ],
      "explanation": "Área do círculo = π * r² = 3,14 × (10²) = 3,14 × 100 = 314 m²!"
},
{
      "difficulty": "dificil",

      "category": "Matemática • Análise Combinatória",
      "topic": "ENEM 2021: PRINCÍPIO FUNDAMENTAL DA CONTAGEM",
      "title": "Criação de Senhas de Acesso e Segurança",
      "context": "Um aplicativo bancário exige que o usuário crie uma senha alfanumérica de 4 caracteres, formada por 2 letras seguidas (escolhidas entre as 26 do alfabeto, permitindo repetição) e 2 dígitos numéricos (escolhidos de 0 a 9, também permitindo repetição).",
      "question": "A quantidade total de senhas distintas que podem ser geradas dessa forma é expressa por:",
      "options": [
            {
                  "text": "26 + 26 + 10 + 10 = 72",
                  "isCorrect": false
            },
            {
                  "text": "26 × 25 × 10 × 9 = 58.500",
                  "isCorrect": false
            },
            {
                  "text": "26² × 10² = 67.600",
                  "isCorrect": true
            },
            {
                  "text": "4! * 36 = 864",
                  "isCorrect": false
            },
            {
                  "text": "36⁴ = 1.679.616",
                  "isCorrect": false
            }
      ],
      "explanation": "Pelo Princípio Fundamental da Contagem com reposição: 26 (1ª letra) × 26 (2ª letra) × 10 (1º dígito) × 10 (2º dígito) = 26² × 10² = 67.600 senhas!"
}
  ,
{
      "difficulty": "dificil",

      "category": "Natureza • Química e Matriz Energética",
      "topic": "ENEM 2025: HIDROGÊNIO VERDE (H₂V) E DESCARBONIZAÇÃO (VARIANTE)",
      "title": "Células a Combustível em Ônibus Urbanos",
      "context": "Em veículos movidos a célula de combustível, o gás hidrogênio (H₂) reage eletroquimicamente com o oxigênio do ar (O₂) em meio aquoso, gerando corrente elétrica para os motores e liberando apenas vapor d'água pelo escapamento.",
      "question": "A reação global que ocorre no interior dessa célula eletroquímica é classificada como:",
      "options": [
            {
                  "text": "Uma reação de polimerização endotérmica por condensação.",
                  "isCorrect": false
            },
            {
                  "text": "Uma reação de oxirredução exotérmica com transferência de elétrons e liberação de energia elétrica e térmica.",
                  "isCorrect": true
            },
            {
                  "text": "Uma fissão nuclear espontânea de átomos pesados de urânio enriquecido.",
                  "isCorrect": false
            },
            {
                  "text": "Uma precipitação de sais insolúveis de cloreto de prata.",
                  "isCorrect": false
            },
            {
                  "text": "Uma fermentação bacteriana anaeróbica de glicose pura.",
                  "isCorrect": false
            }
      ],
      "explanation": "O H₂ oxida (perde elétrons) no ânodo e o O₂ reduz (ganha elétrons) no cátodo; o fluxo ordenado de elétrons move o motor elétrico (oxirredução)."
},
{
      "difficulty": "medio",

      "category": "Natureza • Biologia e Ecologia Aquática",
      "topic": "ENEM 2025: MICROPLÁSTICOS E CADEIA TRÓFICA MARINHA (VARIANTE)",
      "title": "Lavagem de Roupas Sintéticas e Poluição Hídrica",
      "context": "A lavagem doméstica de tecidos sintéticos como poliéster e náilon desprende milhares de microfibras plásticas por ciclo, que não são retidas pelas grades das estações de esgoto e deságuam em rios e baías litorâneas.",
      "question": "No organismo de pequenos peixes que ingerem essas microfibras, o principal prejuízo fisiológico inicial é o(a):",
      "options": [
            {
                  "text": "Aumento do ritmo respiratório devido ao fornecimento de oxigênio pelo plástico.",
                  "isCorrect": false
            },
            {
                  "text": "Obstrução mecânica do trato digestório, gerando falsa sensação de saciedade e desnutrição severa.",
                  "isCorrect": true
            },
            {
                  "text": "Produção instantânea de anticorpos que tornam os animais imunes a bactérias.",
                  "isCorrect": false
            },
            {
                  "text": "Conversão das fibras plásticas em hemoglobina na medula óssea dos peixes.",
                  "isCorrect": false
            },
            {
                  "text": "Multiplicação da taxa de fotossíntese dos peixes no fundo dos rios.",
                  "isCorrect": false
            }
      ],
      "explanation": "O microplástico obstrui o estômago e intestinos, impedindo a absorção real de nutrientes e levando o animal a definhar de fome."
},
{
      "difficulty": "dificil",

      "category": "Matemática • Funções e Exponencial",
      "topic": "ENEM 2025: CRESCIMENTO EXPONENCIAL DE DADOS EM NUVEM (VARIANTE)",
      "title": "Decaimento Radioativo e Meia-Vida",
      "context": "O iodo-131, utilizado no diagnóstico de tireoide, possui tempo de meia-vida de 8 dias. A massa remanescente M(t) de uma amostra inicial de 80 gramas após t dias é dada por M(t) = 80 × (0,5)^(t / 8).",
      "question": "A massa restante desse radioisótopo no organismo do paciente após exatamente 24 dias será de:",
      "options": [
            {
                  "text": "40 g",
                  "isCorrect": false
            },
            {
                  "text": "20 g",
                  "isCorrect": false
            },
            {
                  "text": "10 g",
                  "isCorrect": true
            },
            {
                  "text": "5 g",
                  "isCorrect": false
            },
            {
                  "text": "2,5 g",
                  "isCorrect": false
            }
      ],
      "explanation": "24 dias correspondem a 3 meias-vidas (24 / 8 = 3). 80 -> 40 -> 20 -> 10 gramas!"
},
{
      "difficulty": "medio",

      "category": "Natureza • Biologia e Meio Ambiente",
      "topic": "ENEM 2024: QUEIMADAS E POLUIÇÃO ATMOSFÉRICA (VARIANTE)",
      "title": "Ciclo do Carbono e Emissões por Desmatamento",
      "context": "Florestas tropicais maduras atuam como sumidouros vitais de carbono, acumulando toneladas de biomassa vegetal através da fotossíntese ao longo de séculos.",
      "question": "A queima deliberada dessas florestas interfere no ciclo biogeoquímico global do carbono ao:",
      "options": [
            {
                  "text": "Fixar nitrogênio atmosférico nas camadas profundas do manto terrestre.",
                  "isCorrect": false
            },
            {
                  "text": "Liberar rapidamente para a atmosfera sob a forma de CO₂ o carbono estocado na biomassa, agravando o aquecimento global.",
                  "isCorrect": true
            },
            {
                  "text": "Transformar todo o solo em diamantes sintéticos indestrutíveis.",
                  "isCorrect": false
            },
            {
                  "text": "Aumentar a concentração de gás ozônio na troposfera marinha equatorial.",
                  "isCorrect": false
            },
            {
                  "text": "Neutralizar a evapotranspiração dos rios voadores sem afetar o regime de chuvas.",
                  "isCorrect": false
            }
      ],
      "explanation": "A combustão da madeira converte carbono orgânico sólido em dióxido de carbono gasoso (CO₂), principal forçante do efeito estufa antropogênico."
},
{
      "difficulty": "dificil",

      "category": "Natureza • Física e Eletricidade",
      "topic": "ENEM 2024: ENERGIA SOLAR FOTOVOLTAICA (VARIANTE)",
      "title": "Relés Fotoelétricos em Postes de Luz",
      "context": "Postes de iluminação pública ligam-se automaticamente ao entardecer e desligam-se ao amanhecer graças a sensores chamados relés fotoelétricos dotados de fotodiodos de silício.",
      "question": "O funcionamento automático desses sensores baseia-se no fato de que a incidência de radiação luminosa sobre o semicondutor provoca:",
      "options": [
            {
                  "text": "A fusão térmica dos cabos subterrâneos de alta tensão.",
                  "isCorrect": false
            },
            {
                  "text": "A excitação de elétrons da banda de valência para a banda de condução, alterando a condutividade elétrica do circuito de controle.",
                  "isCorrect": true
            },
            {
                  "text": "A geração espontânea de partículas radioativas de césio.",
                  "isCorrect": false
            },
            {
                  "text": "O desvio magnético da agulha da bússola dos automóveis.",
                  "isCorrect": false
            },
            {
                  "text": "A combustão do oxigênio presente no interior da lâmpada de LED.",
                  "isCorrect": false
            }
      ],
      "explanation": "A luz fornece energia para que elétrons saltem a banda proibida do semicondutor, gerando fotocorrente que aciona ou desliga o circuito do poste."
},
{
      "difficulty": "medio",

      "category": "Matemática • Proporção e Razão",
      "topic": "ENEM 2024: RENDIMENTO DE MÁQUINAS E ESCALA (VARIANTE)",
      "title": "Vazão de Bombas e Abastecimento de Caixa-d'Água",
      "context": "Duas bombas hidráulicas idênticas funcionando simultaneamente enchem um reservatório comunitário de 10.000 litros em exatamente 4 horas.",
      "question": "Se uma das bombas quebrar e apenas uma bomba permanecer funcionando, o tempo necessário para encher esse mesmo reservatório de 10.000 litros será de:",
      "options": [
            {
                  "text": "2 horas",
                  "isCorrect": false
            },
            {
                  "text": "4 horas",
                  "isCorrect": false
            },
            {
                  "text": "6 horas",
                  "isCorrect": false
            },
            {
                  "text": "8 horas",
                  "isCorrect": true
            },
            {
                  "text": "12 horas",
                  "isCorrect": false
            }
      ],
      "explanation": "Número de bombas e tempo são grandezas inversamente proporcionais. Reduzindo as bombas à metade (de 2 para 1), o tempo dobra (de 4 para 8 horas)!"
},
{
      "difficulty": "dificil",

      "category": "Natureza • Biologia e Genética",
      "topic": "ENEM 2023: BIOTECNOLOGIA E CRISPR (VARIANTE)",
      "title": "Correção de Mutações da Anemia Falciforme",
      "context": "A anemia falciforme é causada por uma mutação pontual no gene da beta-globina, que substitui um único par de bases no DNA, gerando hemácias em forma de foice que obstruem vasos capilares.",
      "question": "A utilização de terapias de edição gênica (CRISPR) em células-tronco hematopoiéticas do próprio paciente visa:",
      "options": [
            {
                  "text": "Destruir todos os glóbulos brancos da circulação periférica.",
                  "isCorrect": false
            },
            {
                  "text": "Corrigir a sequência nucleotídica defeituosa na linhagem precursora, restabelecendo a produção de hemoglobina normal.",
                  "isCorrect": true
            },
            {
                  "text": "Substituir as hemácias por microcápsulas plásticas de oxigênio sintético.",
                  "isCorrect": false
            },
            {
                  "text": "Induzir mutações aleatórias em todas as células do tecido muscular cardíaco.",
                  "isCorrect": false
            },
            {
                  "text": "Tornar o sangue do paciente transparente e imune à gravidade.",
                  "isCorrect": false
            }
      ],
      "explanation": "O CRISPR corrige o par de bases mutado nas células precursoras na medula, permitindo a síntese de hemoglobina saudável e funcional."
},
{
      "difficulty": "medio",

      "category": "Natureza • Química e Soluções",
      "topic": "ENEM 2023: EQUILÍBRIO QUÍMICO E CO₂ NOS OCEANOS (VARIANTE)",
      "title": "Chuva Ácida e Corrosão de Monumentos Históricos",
      "context": "Estátuas e fachadas arquitetônicas esculpidas em mármore (composto predominantemente por carbonato de cálcio, CaCO₃) sofrem desgaste acelerado em capitais com tráfego veicular pesado.",
      "question": "A degradação química do mármore exposto à chuva ácida rica em ácido nítrico (HNO₃) e sulfúrico (H₂SO₄) decorre de uma reação que produz:",
      "options": [
            {
                  "text": "Gás hidrogênio puro e hidróxido de sódio corrosivo.",
                  "isCorrect": false
            },
            {
                  "text": "Sais solúveis de cálcio, água e efervescência de gás carbônico (CO₂).",
                  "isCorrect": true
            },
            {
                  "text": "Precipitação de ouro metálico sobre as superfícies esculpidas.",
                  "isCorrect": false
            },
            {
                  "text": "Petróleo fóssil viscoso que impregna as pedras.",
                  "isCorrect": false
            },
            {
                  "text": "Monóxido de chumbo que impermeabiliza o monumento.",
                  "isCorrect": false
            }
      ],
      "explanation": "CaCO₃ + 2 H+ -> Ca²+ + H₂O + CO₂ (g). O carbonato sólido reage com os ácidos da chuva, dissolvendo-se e liberando bolhas de CO₂."
},
{
      "difficulty": "medio",

      "category": "Matemática • Estatística",
      "topic": "ENEM 2023: MEDIDAS DE TENDÊNCIA CENTRAL (VARIANTE)",
      "title": "Média Ponderada para Cursos de Engenharia",
      "context": "Em uma universidade pública federal, a vaga de Engenharia Civil estabelece os seguintes pesos: Matemática (peso 3), Natureza (peso 2), Redação (peso 2), Humanas (peso 1) e Linguagens (peso 1). Um candidato obteve: Mat = 800; Nat = 700; Red = 900; Hum = 600; Ling = 600.",
      "question": "A média ponderada final desse vestibulando para a classificação no SiSU é de:",
      "options": [
            {
                  "text": "720 pontos",
                  "isCorrect": false
            },
            {
                  "text": "750 pontos",
                  "isCorrect": false
            },
            {
                  "text": "766,7 pontos (aprox. 767)",
                  "isCorrect": true
            },
            {
                  "text": "800 pontos",
                  "isCorrect": false
            },
            {
                  "text": "820 pontos",
                  "isCorrect": false
            }
      ],
      "explanation": "Soma das notas ponderadas: (800 × 3 + 700 × 2 + 900 × 2 + 600 × 1 + 600 × 1) = 2400 + 1400 + 1800 + 600 + 600 = 6800. Soma dos pesos: 3+2+2+1+1 = 9. Média = 6800 / 9 ≈ 766,67 pontos!"
},
{
      "difficulty": "dificil",

      "category": "Natureza • Física e Ondulatória",
      "topic": "ENEM 2022: ESPECTRO ELETROMAGNÉTICO E REDE 5G (VARIANTE)",
      "title": "Radar de Velocidade e Efeito Doppler em Micro-Ondas",
      "context": "Radares de fiscalização de velocidade emitem pulsos de micro-ondas em direção aos veículos e captam a onda refletida na lataria do carro em movimento.",
      "question": "O cálculo da velocidade instantânea do veículo pelo equipamento eletrônico baseia-se na variação da:",
      "options": [
            {
                  "text": "Velocidade de propagação da luz no vácuo interestelar.",
                  "isCorrect": false
            },
            {
                  "text": "Frequência da onda refletida em relação à emitida (desvio Doppler provocado pela velocidade relativa).",
                  "isCorrect": true
            },
            {
                  "text": "Resistência elétrica dos pneus de borracha sobre o asfalto.",
                  "isCorrect": false
            },
            {
                  "text": "Massa atômica dos elétrons de ferro da lataria.",
                  "isCorrect": false
            },
            {
                  "text": "Temperatura média do ar ambiente durante a madrugada.",
                  "isCorrect": false
            }
      ],
      "explanation": "Se o carro se aproxima, a frequência refletida é maior; se se afasta, é menor. Pelo desvio de frequência (Δf) da fórmula Doppler, o radar calcula a velocidade exata."
},
{
      "difficulty": "medio",

      "category": "Matemática • Geometria Espacial",
      "topic": "ENEM 2022: CÁLCULO DE CAPACIDADE DE EMBALAGENS (VARIANTE)",
      "title": "Volume de Cilindro Reto de Galão de Tinta",
      "context": "Uma lata de tinta no formato de cilindro circular reto possui raio da base igual a 10 cm e altura igual a 30 cm. (Considere a aproximação de π = 3,14 e lembre-se de que 1.000 cm³ = 1 litro).",
      "question": "O volume aproximado de tinta que essa lata comporta completamente cheia é de:",
      "options": [
            {
                  "text": "3,14 litros",
                  "isCorrect": false
            },
            {
                  "text": "6,28 litros",
                  "isCorrect": false
            },
            {
                  "text": "9,42 litros",
                  "isCorrect": true
            },
            {
                  "text": "12,56 litros",
                  "isCorrect": false
            },
            {
                  "text": "31,4 litros",
                  "isCorrect": false
            }
      ],
      "explanation": "Volume = π * r² × h = 3,14 × (10²) × 30 = 3,14 × 100 × 30 = 9.420 cm³. Convertendo para litros (/ 1.000) = 9,42 litros!"
},
{
      "difficulty": "medio",

      "category": "Natureza • Biologia e Imunologia",
      "topic": "ENEM 2021: PLATAFORMAS DE VACINAS DE RNA MENSAGEIRO (VARIANTE)",
      "title": "Anticorpos Monoclonais no Tratamento de Câncer",
      "context": "A imunoterapia moderna emprega anticorpos monoclonais sintéticos desenhados em laboratório para se ligarem a receptores específicos expressos na membrana de células tumorais.",
      "question": "A vantagem terapêutica desses anticorpos de alta especificidade em relação à quimioterapia convencional é:",
      "options": [
            {
                  "text": "Destruir indiscriminadamente todas as células de rápida divisão celular do corpo humano.",
                  "isCorrect": false
            },
            {
                  "text": "Alvejar precisamente as células cancerígenas sinalizando-as para destruição pelo sistema imune, reduzindo efeitos colaterais em tecidos saudáveis.",
                  "isCorrect": true
            },
            {
                  "text": "Eliminar a necessidade de alimentação e ingestão de água pelo paciente.",
                  "isCorrect": false
            },
            {
                  "text": "Modificar o código genético dos glóbulos vermelhos transformando-os em neurônios.",
                  "isCorrect": false
            },
            {
                  "text": "Acelerar a mitose celular de tecidos infectados por fungos patogênicos.",
                  "isCorrect": false
            }
      ],
      "explanation": "Anticorpos monoclonais agem como 'mísseis teleguiados': reconhecem exclusivamente o antígeno tumoral sem agredir tecidos sadios como na quimioterapia comum."
},
{
      "difficulty": "facil",

      "category": "Matemática • Porcentagem Financeira",
      "topic": "ENEM 2021: JUROS E INFLAÇÃO NO DIA A DIA (VARIANTE)",
      "title": "Juros do Rotativo do Cartão",
      "context": "Um consumidor atrasou uma fatura de cartão de crédito no valor de R$ 500,00 por um mês. O banco aplicou uma taxa de juros e encargos de 12% sobre o saldo devedor acumulado no período.",
      "question": "O valor total em reais cobrado na fatura subsequente após esse mês de atraso foi de:",
      "options": [
            {
                  "text": "R$ 512,00",
                  "isCorrect": false
            },
            {
                  "text": "R$ 550,00",
                  "isCorrect": false
            },
            {
                  "text": "R$ 560,00",
                  "isCorrect": true
            },
            {
                  "text": "R$ 600,00",
                  "isCorrect": false
            },
            {
                  "text": "R$ 620,00",
                  "isCorrect": false
            }
      ],
      "explanation": "12% de R$ 500 = 0,12 × 500 = R$ 60,00. Total devido: 500 + 60 = R$ 560,00!"
},
{
      "difficulty": "medio",

      "category": "Natureza • Química e Separação de Misturas",
      "topic": "ENEM 2020: TRATAMENTO DE ÁGUA E SANEAMENTO (VARIANTE)",
      "title": "Osmose Reversa em Usinas de Dessalinização",
      "context": "Para produzir água potável a partir da água do mar em Fernando de Noronha, utiliza-se a tecnologia de osmose reversa, que força a água a passar através de membranas semipermeáveis sob alta pressão mecânica.",
      "question": "Nesse processo, a aplicação de pressão superior à pressão osmótica natural provoca o fluxo de:",
      "options": [
            {
                  "text": "Sais minerais concentrados em direção à câmara de água pura.",
                  "isCorrect": false
            },
            {
                  "text": "Solvente (água pura) do meio mais concentrado para o meio menos concentrado através da membrana semipermeável.",
                  "isCorrect": true
            },
            {
                  "text": "Gás oxigênio líquido que dissolve todas as bactérias da solução salina.",
                  "isCorrect": false
            },
            {
                  "text": "Elétrons de sódio que aquecem a água até a ebulição instantânea.",
                  "isCorrect": false
            },
            {
                  "text": "Sedimentos arenosos pesados que evaporam em direção ao ar atmosférico.",
                  "isCorrect": false
            }
      ],
      "explanation": "Na osmose natural, o solvente vai do meio hipotônico para o hipertônico. Na osmose reversa com alta pressão, força-se a água a sair da água do mar salgada para o lado puro."
},
{
      "difficulty": "dificil",

      "category": "Matemática • Probabilidade",
      "topic": "ENEM 2020: CÁLCULO DE PROBABILIDADE CONDICIONAL (VARIANTE)",
      "title": "Sorteio de Alunos em Olimpíada Científica",
      "context": "Em uma sala com 30 alunos, 12 gostam de física, 15 gostam de matemática e 5 gostam de ambas as disciplinas.",
      "question": "Sorteando-se um aluno dessa sala ao acaso, a probabilidade de ele gostar de física OU de matemática é de:",
      "options": [
            {
                  "text": "12 / 30",
                  "isCorrect": false
            },
            {
                  "text": "15 / 30",
                  "isCorrect": false
            },
            {
                  "text": "22 / 30 (ou 11 / 15 ≈ 73,3%)",
                  "isCorrect": true
            },
            {
                  "text": "27 / 30",
                  "isCorrect": false
            },
            {
                  "text": "5 / 30",
                  "isCorrect": false
            }
      ],
      "explanation": "P(F ∪ M) = P(F) + P(M) - P(F ∩ M) = (12 + 15 - 5) / 30 = 22 / 30 = 11 / 15 ≈ 73,3%!"
}
  ,
{
      "difficulty": "medio",

      "category": "Natureza • Biologia (Ecologia)",
      "topic": "CAMPEÃ DO ENEM: EUTROFIZAÇÃO DAS ÁGUAS",
      "title": "Despejo de Esgoto e Mortandade de Peixes",
      "context": "Uma represa próxima a uma área urbana sofre com o despejo constante de esgoto doméstico não tratado e fertilizantes agrícolas ricos em nitratos e fosfatos.",
      "question": "A sequência cronológica correta dos eventos que culmina na mortandade em massa dos peixes por asfixia é:",
      "options": [
            {
                  "text": "Aumento do oxigênio -> proliferação de corais -> aumento da luz solar profunda.",
                  "isCorrect": false
            },
            {
                  "text": "Proliferação de algas superficiais -> bloqueio da luz solar -> morte das algas profundas -> proliferação de bactérias decompositoras aeróbicas -> queda drástica do oxigênio dissolvido (O₂).",
                  "isCorrect": true
            },
            {
                  "text": "Queda da temperatura da água -> congelamento de bactérias -> fotossíntese acelerada dos peixes.",
                  "isCorrect": false
            },
            {
                  "text": "Desidratação osmótica dos moluscos decorrente do aumento da salinidade oceânica.",
                  "isCorrect": false
            },
            {
                  "text": "Transformação instantânea de nitrato em petróleo combustível sólido.",
                  "isCorrect": false
            }
      ],
      "explanation": "Excesso de nutrientes -> 'bloom' de algas que tapam a luz -> algas do fundo morrem -> bactérias se multiplicam e devoram todo o O₂ -> peixes morrem asfixiados."
},
{
      "difficulty": "medio",

      "category": "Natureza • Biologia (Ecologia)",
      "topic": "CAMPEÃ DO ENEM: EUTROFIZAÇÃO DAS ÁGUAS (CLONE)",
      "title": "Biorremediação com Aguapés e Macrófitas",
      "context": "Para recuperar uma lagoa eutrofizada sem utilizar agentes químicos agressivos, técnicos introduziram macrófitas aquáticas flutuantes (como o aguapé, Eichhornia crassipes), promovendo podas periódicas de suas folhas.",
      "question": "A eficácia das macrófitas na biorremediação de corpos hídricos poluídos baseia-se na sua capacidade de:",
      "options": [
            {
                  "text": "Liberar mercúrio metálico puro para esterilizar todo o ecossistema bentônico.",
                  "isCorrect": false
            },
            {
                  "text": "Absorver ativamente grande quantidade de fósforo e nitrogênio dissolvidos, reduzindo a biomassa de algas oportunistas.",
                  "isCorrect": true
            },
            {
                  "text": "Aumentar a temperatura da água acima de 80 °C para matar micro-organismos.",
                  "isCorrect": false
            },
            {
                  "text": "Realizar respiração anaeróbica produzindo ácido sulfúrico concentrado.",
                  "isCorrect": false
            },
            {
                  "text": "Eliminar o leito rochoso do fundo da lagoa por lixiviação ácida.",
                  "isCorrect": false
            }
      ],
      "explanation": "O aguapé consome o excesso de nitratos e fosfatos da água; ao retirar a planta periodicamente, removem-se os nutrientes que alimentavam a eutrofização."
},
{
      "difficulty": "medio",

      "category": "Natureza • Física (Eletrodinâmica)",
      "topic": "TOP ENEM: LÂMPADAS EM SÉRIE E PARALELO",
      "title": "Circuito de Pisca-Pisca vs. Iluminação Residencial",
      "context": "Em um pisca-pisca de Natal antigo montado em série, se uma única lâmpada queimar, todas as outras se apagam instantaneamente. Já na instalação elétrica de uma casa (montada em paralelo), se a lâmpada do quarto queimar, a da sala permanece acesa com o mesmo brilho.",
      "question": "A lâmpada da sala permanece acesa inalterada porque na associação em paralelo:",
      "options": [
            {
                  "text": "Todas as lâmpadas compartilham a mesma corrente elétrica unificada.",
                  "isCorrect": false
            },
            {
                  "text": "Cada ramo do circuito é submetido à mesma diferença de potencial (ddp) da rede e possui caminho independente para a corrente.",
                  "isCorrect": true
            },
            {
                  "text": "A resistência da lâmpada queimada cai para zero, alimentando as outras.",
                  "isCorrect": false
            },
            {
                  "text": "A voltagem fornecida pela tomada é multiplicada pelo número de lâmpadas.",
                  "isCorrect": false
            },
            {
                  "text": "O disjuntor inverte o sentido da corrente contínua para alternada.",
                  "isCorrect": false
            }
      ],
      "explanation": "Em paralelo, a ddp (U) é constante em todos os ramos. A queima de um aparelho abre apenas aquele ramo; os demais continuam com a mesma tensão e brilho."
},
{
      "difficulty": "medio",

      "category": "Natureza • Física (Eletrodinâmica)",
      "topic": "TOP ENEM: LÂMPADAS EM SÉRIE E PARALELO (CLONE)",
      "title": "Qual Lâmpada Brilha Mais? (Potência Dissipada)",
      "context": "Duas lâmpadas incandescentes de filamento idênticas L1 e L2 (de mesma resistência R) são associadas inicialmente em série sob uma ddp constante U. Em seguida, as mesmas duas lâmpadas são associadas em paralelo sob essa mesma ddp U.",
      "question": "Comparando o brilho das lâmpadas nas duas montagens, constata-se que:",
      "options": [
            {
                  "text": "As lâmpadas brilham mais na associação em série, pois a corrente é compartilhada.",
                  "isCorrect": false
            },
            {
                  "text": "As lâmpadas brilham mais intensamente na associação em paralelo, pois cada uma recebe a ddp total U (P = U² / R).",
                  "isCorrect": true
            },
            {
                  "text": "O brilho é rigorosamente idêntico em ambas as configurações de montagem.",
                  "isCorrect": false
            },
            {
                  "text": "Em paralelo nenhuma lâmpada acende, pois a corrente é anulada por interferência.",
                  "isCorrect": false
            },
            {
                  "text": "Em série as lâmpadas explodem instantaneamente por sobretensão de vácuo.",
                  "isCorrect": false
            }
      ],
      "explanation": "Em paralelo, cada lâmpada recebe U (P = U²/R). Em série, cada uma recebe U/2 (P = (U/2)²/R = U²/4R, isto é, 4 vezes menos potência e brilho)."
},
{
      "difficulty": "dificil",

      "category": "Natureza • Química (Eletroquímica)",
      "topic": "TOP ENEM: PILHAS, ÂNODO, CÁTODO E CORROSÃO",
      "title": "Pilha de Daniell (Zinco e Cobre)",
      "context": "Na clássica pilha de Daniell constituída por eletrodos de zinco metálico imerso em Zn²⁺ e cobre metálico imerso em Cu²⁺, sabe-se que os potenciais-padrão de redução são: E°(Zn²⁺/Zn) = -0,76 V e E°(Cu²⁺/Cu) = +0,34 V.",
      "question": "Durante o funcionamento espontâneo dessa pilha eletroquímica, observa-se que:",
      "options": [
            {
                  "text": "O cobre oxida e sofre corrosão com perda de massa.",
                  "isCorrect": false
            },
            {
                  "text": "O zinco atua como ânodo (polo negativo, sofrendo oxidação e corrosão) e os elétrons fluem pelo fio em direção ao cobre (cátodo).",
                  "isCorrect": true
            },
            {
                  "text": "A diferença de potencial da pilha (ddp) é negativa (-1,10 V).",
                  "isCorrect": false
            },
            {
                  "text": "A ponte salina serve para transferir elétrons metálicos de uma cuba à outra.",
                  "isCorrect": false
            },
            {
                  "text": "O eletrodo de cobre diminui de massa porque seus átomos se dissolvem na água.",
                  "isCorrect": false
            }
      ],
      "explanation": "Menor potencial reduzido (Zn = -0,76 V) oxida (ânodo, polo -, perde massa); Maior potencial (Cu = +0,34 V) reduz (cátodo, polo +, ganha massa). ΔE° = +0,34 - (-0,76) = +1,10 V."
},
{
      "difficulty": "dificil",

      "category": "Natureza • Química (Eletroquímica)",
      "topic": "TOP ENEM: PILHAS, ÂNODO, CÁTODO E CORROSÃO (CLONE)",
      "title": "Metal de Sacrifício na Proteção de Cascos de Navios",
      "context": "O casco de aço dos navios, composto predominantemente por ferro (E°red Fe²⁺/Fe = -0,44 V), está em constante contato com água salgada rica em eletrólitos, favorecendo a oxidação e ferrugem. Para protegê-lo, blocos de magnésio (E°red Mg²⁺/Mg = -2,37 V) são soldados ao casco.",
      "question": "A utilização dos blocos de magnésio como 'metal de sacrifício' é eficiente porque o magnésio:",
      "options": [
            {
                  "text": "Possui maior potencial de redução que o ferro, impedindo a passagem da correnteza marítima.",
                  "isCorrect": false
            },
            {
                  "text": "Possui menor potencial de redução (maior tendência a oxidar) que o ferro, sofrendo corrosão no lugar do aço do casco.",
                  "isCorrect": true
            },
            {
                  "text": "Pinta o casco com uma camada plástica isolante e impermeabilizante.",
                  "isCorrect": false
            },
            {
                  "text": "Transforma a água do mar em água destilada potável.",
                  "isCorrect": false
            },
            {
                  "text": "Evapora instantaneamente todo o oxigênio dissolvido nas proximidades do porto.",
                  "isCorrect": false
            }
      ],
      "explanation": "O magnésio tem menor potencial de redução (-2,37 V < -0,44 V); logo, doa elétrons com mais facilidade, oxidando-se antes do ferro (sacrifica-se)."
},
{
      "difficulty": "medio",

      "category": "Matemática • Geometria Espacial",
      "topic": "CAMPEÃ DO ENEM: PROJEÇÃO ORTOGONAL",
      "title": "Sombra e Projeção no Solo",
      "context": "Uma hélice de brinquedo gira verticalmente em alta rotação paralelamente a uma parede iluminada horizontalmente pelo sol a pino (raios solares incidindo de forma perpendicular diretamente do zênite para o chão plano).",
      "question": "A projeção ortogonal da trajetória circular da ponta dessa hélice sobre o chão horizontal plano corresponde a:",
      "options": [
            {
                  "text": "Um círculo perfeito idêntico ao percorrido pela hélice no ar.",
                  "isCorrect": false
            },
            {
                  "text": "Um segmento de reta (linha) cujo comprimento equivale ao diâmetro do círculo da hélice.",
                  "isCorrect": true
            },
            {
                  "text": "Uma parábola de concavidade voltada para o norte geográfico.",
                  "isCorrect": false
            },
            {
                  "text": "Um ponto estático e imóvel no centro do piso.",
                  "isCorrect": false
            },
            {
                  "text": "Uma elipse tridimensional em constante expansão volumétrica.",
                  "isCorrect": false
            }
      ],
      "explanation": "Projetar um círculo vertical ortogonalmente sobre um plano horizontal (de cima para baixo) resulta em um segmento de reta de tamanho igual ao diâmetro."
},
{
      "difficulty": "medio",

      "category": "Matemática • Geometria Espacial",
      "topic": "CAMPEÃ DO ENEM: PROJEÇÃO ORTOGONAL (CLONE)",
      "title": "Trajetória da Formiga na Caixa Cubica",
      "context": "Uma formiga sobe em linha reta pela diagonal de uma das faces verticais de uma caixa d'água no formato de um cubo de aresta L, partindo do vértice inferior esquerdo até o vértice superior direito dessa face.",
      "question": "A projeção ortogonal do trajeto dessa formiga sobre a face horizontal do piso inferior da caixa corresponde a:",
      "options": [
            {
                  "text": "Uma circunferência de raio igual à diagonal do cubo.",
                  "isCorrect": false
            },
            {
                  "text": "Um segmento de reta coincidente com uma das arestas do quadrado da base.",
                  "isCorrect": true
            },
            {
                  "text": "Um triângulo equilátero de área igual a L² / 2.",
                  "isCorrect": false
            },
            {
                  "text": "Uma espiral logarítmica descendente.",
                  "isCorrect": false
            },
            {
                  "text": "Um plano inclinado em 45 graus.",
                  "isCorrect": false
            }
      ],
      "explanation": "A face vertical é perpendicular à base. A diagonal dessa face projetada de cima para baixo no chão coincide com a aresta da base."
},
{
      "difficulty": "medio",

      "category": "Matemática • Funções e Análise Gráfica",
      "topic": "CAMPEÃ DO ENEM: INTERPRETAÇÃO DE GRÁFICOS",
      "title": "Análise de Taxa de Crescimento de Casos",
      "context": "Um gráfico de linha monitora o número acumulado de casos de uma virose ao longo de 5 meses: Mês 1: 100 casos; Mês 2: 150 casos; Mês 3: 350 casos; Mês 4: 400 casos; Mês 5: 420 casos.",
      "question": "O intervalo de tempo de maior aceleração (onde a taxa de variação mensal ou inclinação da reta foi mais acentuada) ocorreu entre os meses:",
      "options": [
            {
                  "text": "Mês 1 e Mês 2 (variação de 50 casos).",
                  "isCorrect": false
            },
            {
                  "text": "Mês 2 e Mês 3 (variação de 200 casos).",
                  "isCorrect": true
            },
            {
                  "text": "Mês 3 e Mês 4 (variação de 50 casos).",
                  "isCorrect": false
            },
            {
                  "text": "Mês 4 e Mês 5 (variação de 20 casos).",
                  "isCorrect": false
            },
            {
                  "text": "A taxa foi estritamente constante e idêntica em todos os períodos.",
                  "isCorrect": false
            }
      ],
      "explanation": "Variação: M1->M2 = 50; M2->M3 = 200 (maior inclinação da curva); M3->M4 = 50; M4->M5 = 20."
},
{
      "difficulty": "medio",

      "category": "Matemática • Funções e Análise Gráfica",
      "topic": "CAMPEÃ DO ENEM: INTERPRETAÇÃO DE GRÁFICOS (CLONE)",
      "title": "Gráfico de Altura por Volume em Garrafas Estreitas",
      "context": "Uma torneira despeja água a uma vazão volumétrica constante em um frasco cujo formato é composto por uma base cilíndrica larga na parte inferior acoplada a um gargalo cilíndrico estreito na parte superior.",
      "question": "O gráfico que representa a altura h da coluna de água em função do tempo t decorrido durante o enchimento do frasco apresenta:",
      "options": [
            {
                  "text": "Uma reta horizontal indicando que a altura permanece constante.",
                  "isCorrect": false
            },
            {
                  "text": "Um trecho de reta inicial com inclinação suave (subida lenta na base larga), seguido por um trecho de reta com inclinação mais íngreme (subida rápida no gargalo estreito).",
                  "isCorrect": true
            },
            {
                  "text": "Uma descida contínua indicando que o nível de água esvazia com o tempo.",
                  "isCorrect": false
            },
            {
                  "text": "Uma onda senoidal que oscila periodicamente entre zero e a altura máxima.",
                  "isCorrect": false
            },
            {
                  "text": "Uma parábola com concavidade voltada para baixo com vértice no chão.",
                  "isCorrect": false
            }
      ],
      "explanation": "Vazão constante: em área transversal grande (base), o nível sobe devagar (menor inclinação); ao passar para o gargalo estreito, o nível sobe muito mais rápido (maior inclinação)."
}
  ]
};