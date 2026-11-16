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


// ============================================================================
// BANCO DE QUESTÕES REAIS DA UECE DOS ÚLTIMOS 5 ANOS (2022 a 2026)
// 1ª e 2ª Fases da UECE (CEV/UECE) - Questões Objetivas de 4 Alternativas (A a D)
// Rigorosamente formatadas com justificativas pedagógicas e gabaritos oficiais
// ============================================================================

const UECE_QUESTION_DATABASE = {
  humanas_linguagens: [
    // ==========================================
    // UECE - LÍNGUA PORTUGUESA & LITERATURA CEARENSE
    // ==========================================
    {
      difficulty: "medio",
      category: "Linguagens • Literatura Cearense",
      topic: "UECE 2025: PADARIA ESPIRITUAL E BOEMIA LITERÁRIA",
      title: "O Humor Crítico e a Agremiação Boêmia em Fortaleza",
      context: "Fundada em 1892 na cidade de Fortaleza por Antônio Sales, Adolfo Caminha e outros intelectuais, a Padaria Espiritual adotou uma organização satírica e irreverente, distribuindo 'pães de espírito' e desafiando o academicismo beletrista da época.",
      question: "Considerando as características estéticas e ideológicas do Manifesto da Padaria Espiritual e sua atuação no Ceará, é correto afirmar que o grupo:",
      options: [
        { text: "Defendia a manutenção estrita do soneto parnasiano e da linguagem lusitana arcaica sem elementos regionais.", isCorrect: false },
        { text: "Conjugou boemia, nacionalismo e sátira demolidora contra as instituições tradicionais, valorizando termos populares cearenses.", isCorrect: true },
        { text: "Recusava veementemente a publicação de jornais de humor ou folhetins para não vulgarizar a arte clássica.", isCorrect: false },
        { text: "Subordinou-se integralmente à censura do clero católico e às diretrizes dos partidos monarquistas vigentes.", isCorrect: false }
      ],
      explanation: "A Padaria Espiritual (1892) foi pioneira no pré-modernismo nordestino ao romper com o tom solene acadêmico por meio do humor, do jornal 'O Pão' e do léxico popular fortalezense."
    },
    {
      difficulty: "facil",
      category: "Linguagens • Literatura Cearense",
      topic: "UECE 2024: O QUINZE DE RACHEL DE QUEIROZ",
      title: "A Seca de 1915 e o Retirantismo no Sertão",
      context: "Em 'O Quinze', publicado em 1930 quando Rachel de Queiroz tinha apenas 20 anos, a tragédia da estiagem sertaneja e os campos de concentração de retirantes em Fortaleza são narrados a partir do drama de Chico Bento e sua família.",
      question: "Na estrutura temática e estilística da obra 'O Quinze', a força dramática do romance apoia-se:",
      options: [
        { text: "Na sobriedade e crueza da prosa que retrata o sofrimento dos retirantes sem apelos sentimentais artificiais, fundindo dor coletiva e afeto familiar.", isCorrect: true },
        { text: "Na exaltação da fuga para os seringais da Amazônia como única solução pacífica e próspera para todo o campesinato.", isCorrect: false },
        { text: "No uso de alegorias mitológicas greco-romanas para mascarar a situação de penúria dos sertanejos nos abarracamentos.", isCorrect: false },
        { text: "No ponto de vista do fazendeiro autoritário que recusa socorrer afilhados e louva a seca como punição divina.", isCorrect: false }
      ],
      explanation: "Rachel de Queiroz revolucionou o romance de 30 com estilo direto, límpido e conciso ao narrar a migração forçada e o abandono dos retirantes no Ceará de 1915."
    },
    {
      difficulty: "medio",
      category: "Linguagens • Gramática e Figuras de Sintaxe",
      topic: "UECE 2024: FIGURAS DE LINGUAGEM E RECURSOS EXPRESSIVOS",
      title: "Zeugma vs. Elipse nos Clássicos Vestibulares",
      context: "A prova de Língua Portuguesa da UECE frequentemente exige do candidato o reconhecimento minucioso de mecanismos sintáticos e figuras de construção em textos poéticos e crônicas.",
      question: "No período: 'No sertão, a poeira sufocava os passos; na cidade, o clamor das multidões', ocorre a figura de linguagem denominada:",
      options: [
        { text: "Pleonasmo, pela reiteração enfática do sujeito gramatical em ambas as orações coordenadas.", isCorrect: false },
        { text: "Zeugma, pela elipse do verbo 'sufocava', já expresso na oração anterior.", isCorrect: true },
        { text: "Polissíndeto, pelo emprego repetitivo de conjunções coordenativas aditivas.", isCorrect: false },
        { text: "Anacoluto, pela ruptura intencional da ordem direta sem concordância do predicado.", isCorrect: false }
      ],
      explanation: "Zeugma é a omissão de um termo que já foi mencionado anteriormente no contexto (no caso, a forma verbal 'sufocava' é omitida na segunda oração)."
    },
    {
      difficulty: "medio",
      category: "Linguagens • Funções da Linguagem",
      topic: "UECE 2023: METALINGUAGEM E LINGUAGEM POÉTICA",
      title: "A Poesia como Objeto do Próprio Poema",
      context: "No poema em que o autor investiga o ato de esculpir as palavras no papel ('Lutar com palavras é a luta mais vã. No entanto, luto em tempo de paz...'), a linguagem se debruça sobre seus próprios limites de significação.",
      question: "Nesse tipo de construção, a função da linguagem que predomina ao focalizar o próprio código linguístico chama-se:",
      options: [
        { text: "Função fática, focada em verificar o canal de comunicação entre os interlocutores.", isCorrect: false },
        { text: "Função metalinguística, na qual o código é utilizado para explicar e refletir sobre si mesmo.", isCorrect: true },
        { text: "Função conativa, orientada persuasivamente para ordenar um comportamento ao leitor.", isCorrect: false },
        { text: "Função referencial, cujo foco exclusivo é a transmissão impessoal de dados científicos.", isCorrect: false }
      ],
      explanation: "Quando um texto utiliza a linguagem para analisar, explicar ou poetizar a própria feitura do texto e das palavras, predomina a função metalinguística."
    },
    {
      difficulty: "facil",
      category: "Linguagens • Literatura Brasileira",
      topic: "UECE 2025: ROMANTISMO CEARENSE E JOSÉ DE ALENCAR",
      title: "Iracema e o Mito Fundador do Ceará",
      context: "José de Alencar concebeu a 'virgem dos lábios de mel' como personificação simbólica da terra cearense virgem, cujo encontro com o colonizador português Martim Soares Moreno concebe Moacir, 'o filho da dor'.",
      question: "Do ponto de vista da formação da identidade nacional no Romantismo de Alencar, a união de Iracema e Martim simboliza:",
      options: [
        { text: "O conflito insolúvel que impede qualquer assimilação cultural entre europeus e povos nativos.", isCorrect: false },
        { text: "A gênese lírica e mítica do povo cearense, fruto da fusão entre a natureza autóctone e a cultura ocidental.", isCorrect: true },
        { text: "A vitória militar dos holandeses sobre as tribos tabajaras e potiguaras no litoral norte.", isCorrect: false },
        { text: "A expulsão dos jesuítas e a condenação perpétua da língua nheengatu.", isCorrect: false }
      ],
      explanation: "Alencar constrói uma lenda etiológica em Iracema: o Ceará e o homem brasileiro nascem da fusão alegórica do elemento indígena (Iracema) com o português (Martim)."
    },
    {
      difficulty: "dificil",
      category: "Linguagens • Semântica e Coesão",
      topic: "UECE 2026: POLISSEMIA E CONECTIVOS ARGUMENTATIVOS",
      title: "Operadores Discursivos de Oposição Concessiva",
      context: "Examine o período: 'Conquanto a seca fustigue implacavelmente a paisagem dos Inhamuns, a resistência cultural da população reinventa modos de convívio com a aridez.'",
      question: "A conjunção 'Conquanto' estabelece entre as orações uma relação de sentido de:",
      options: [
        { text: "Concessão, introduzindo um fato que não anula a ação principal, equivalente a 'embora'.", isCorrect: true },
        { text: "Causa, explicitando o motivo determinante da reinvenção cultural, equivalente a 'porque'.", isCorrect: false },
        { text: "Conformidade, expressando acordo com normas estabelecidas, equivalente a 'conforme'.", isCorrect: false },
        { text: "Condição, subordinando a resiliência à ocorrência da estiagem, equivalente a 'contanto que'.", isCorrect: false }
      ],
      explanation: "'Conquanto' é uma conjunção subordinativa concessiva (sinônimo de 'embora', 'ainda que', 'se bem que') que admite uma quebra na relação direta de oposição sem invalidar a oração principal."
    },

    // ==========================================
    // UECE - CIÊNCIAS HUMANAS: HISTÓRIA DO CEARÁ E BRASIL
    // ==========================================
    {
      difficulty: "medio",
      category: "Ciências Humanas • História do Ceará",
      topic: "UECE 2024: A SEDIÇÃO DE JUAZEIRO (1914)",
      title: "Messianismo, Coronelismo e a Queda de Franco Rabelo",
      context: "Em 1914, Juazeiro do Norte transformou-se no palco de uma insurreição armada liderada pelo Padre Cícero Romão Batista e pelo médico e político Floro Bartolomeu, articulados à oligarquia Acioly contra a Política das Salvações de Hermes da Fonseca.",
      question: "A respeito do contexto sociopolítico da Sedição de Juazeiro (1914), é correto afirmar que o movimento:",
      options: [
        { text: "Articulou o fervor religioso das massas camponesas e sertanejas aos interesses de oligarquias depostas, resultando na queda do governador interventor Franco Rabelo.", isCorrect: true },
        { text: "Foi uma rebelião camponesa de caráter estritamente comunista que visava à desapropriação das terras do Cariri.", isCorrect: false },
        { text: "Tinha por objetivo imediato restabelecer o Império do Brasil e entregar o governo do Ceará à Família Real em exílio.", isCorrect: false },
        { text: "Originou-se de uma cisão irreconciliável entre o Padre Cícero e os coronéis da família Acioly.", isCorrect: false }
      ],
      explanation: "A Sedição de Juazeiro (1914) uniu a liderança carismática de Padre Cícero/Floro Bartolomeu às forças oligárquicas para sitiar Fortaleza e destituir o interventor federal Franco Rabelo."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • História do Ceará",
      topic: "UECE 2023: O CALDEIRÃO DA SANTA CRUZ DO DESERTO",
      title: "Comunidade Messiânica e o Massacre do Crato (1937)",
      context: "Na década de 1930, no sítio Caldeirão dos Jesuítas (Crato-CE), o beato José Lourenço organizou uma comunidade camponesa baseada no trabalho coletivo, na partilha e na devoção ao Padre Cícero.",
      question: "A destruição violenta da comunidade do Caldeirão pelas forças policiais e aviação militar, durante o governo Vargas, foi motivada:",
      options: [
        { text: "Pelo temor dos latifundiários e autoridades de que a comunidade constituísse um 'reduto comunista' perigoso e desestabilizador da mão de obra regional.", isCorrect: true },
        { text: "Pelo fato de José Lourenço ter liderado assaltos armados recorrentes aos bancos e comércios da cidade de Fortaleza.", isCorrect: false },
        { text: "Pela recusa dos camponeses do Caldeirão em realizar qualquer tipo de prece ou prática religiosa cristã.", isCorrect: false },
        { text: "Por um conflito territorial diplomático entre os estados do Ceará e de Pernambuco sobre a posse da Chapada do Araripe.", isCorrect: false }
      ],
      explanation: "O sucesso da economia comunitária do Caldeirão atraía milhares de sertanejos, incomodando latifundiários e a Igreja tradicional, sendo massacrado em 1937 sob a paranoia do 'perigo vermelho'."
    },
    {
      difficulty: "facil",
      category: "Ciências Humanas • História do Ceará",
      topic: "UECE 2025: A TERRA DA LUZ E A ABOLIÇÃO DE 1884",
      title: "Dragão do Mar e a Greve dos Jangadeiros no Porto",
      context: "O Ceará libertou seus escravizados em 25 de março de 1884, quatro anos antes da Lei Áurea imperial, recebendo de José do Patrocínio a alcunha de 'Terra da Luz'.",
      question: "O papel desempenhado pelo prático e jangadeiro Francisco José do Nascimento (o 'Dragão do Mar') na antecipação da abolição no Ceará consistiu em:",
      options: [
        { text: "Liderar a paralisação do embarque de escravizados no porto de Fortaleza, fechando o tráfico interprovincial pelo mar sob o lema 'No porto do Ceará não se embarcam mais escravos'.", isCorrect: true },
        { text: "Financiar a compra das cartas de alforria de todos os negros do Vale do Jaguaribe com recursos da Coroa Britânica.", isCorrect: false },
        { text: "Comandar a guerrilha armada dos quilombolas da Serra da Ibiapaba contra as tropas do Exército imperial.", isCorrect: false },
        { text: "Redigir a petição que levou à renúncia do presidente da Província do Ceará em troca da libertação dos escravos.", isCorrect: false }
      ],
      explanation: "Em janeiro de 1881, Dragão do Mar e os jangadeiros se recusaram a transportar negros escravizados para os navios negreiros com destino ao Sul, sufocando o comércio e acelerando a abolição em 1884."
    },
    {
      difficulty: "dificil",
      category: "Ciências Humanas • História do Brasil e Ceará",
      topic: "UECE 2022: A CONFEDERAÇÃO DO EQUADOR (1824)",
      title: "O Frei Caneca e a Revolta Republicana no Nordeste",
      context: "Em resposta ao fechamento autoritário da Constituinte de 1823 e à outorga da Constituição de 1824 por D. Pedro I, eclodiu em Pernambuco e se estendeu ao Ceará, Rio Grande do Norte e Paraíba a Confederação do Equador.",
      question: "No Ceará, a Confederação do Equador destacou-se pela atuação de lideranças republicanas como Tristão Gonçalves de Alencar Araripe e teve como característica marcante:",
      options: [
        { text: "A defesa de um modelo republicano federativo com autonomia para as províncias e críticas severas ao Poder Moderador instituído pelo Imperador.", isCorrect: true },
        { text: "A subserviência irrestrita aos tratados alfandegários britânicos e a exigência de manutenção da escravidão em todas as províncias do Norte.", isCorrect: false },
        { text: "A adesão irrestrita aos mandos da monarquia absolutista de D. João VI em Lisboa contra a independência brasileira.", isCorrect: false },
        { text: "O apoio maciço dos grandes senhores de engenho, que abandonaram totalmente as tropas fiéis ao imperador Pedro I.", isCorrect: false }
      ],
      explanation: "A Confederação do Equador (1824) defendeu o republicanismo federalista, insurgindo-se contra a centralização do Poder Moderador de D. Pedro I; no Ceará, Tristão Gonçalves foi uma das principais figuras."
    },

    // ==========================================
    // UECE - CIÊNCIAS HUMANAS: GEOGRAFIA DO CEARÁ
    // ==========================================
    {
      difficulty: "medio",
      category: "Ciências Humanas • Geografia do Ceará",
      topic: "UECE 2025: BACIA DO JAGUARIBE E O CINTURÃO DAS ÁGUAS",
      title: "Segurança Hídrica e o Açude Castanhão",
      context: "A bacia hidrográfica do Rio Jaguaribe, conhecida historicamente como 'o maior rio temporário do mundo', abriga os dois maiores reservatórios de água do Ceará: o Orós e o Castanhão.",
      question: "A integração das águas do Rio São Francisco à bacia do Jaguaribe por meio do Eixão das Águas e do Cinturão das Águas do Ceará (CAC) objetiva principalmente:",
      options: [
        { text: "Garantir a segurança hídrica para o consumo humano da Região Metropolitana de Fortaleza e viabilizar a agricultura irrigada e o Polo Industrial do Pecém.", isCorrect: true },
        { text: "Substituir a navegação comercial marítima por hidrovias fluviais que conectem Juazeiro do Norte ao porto de Santos.", isCorrect: false },
        { text: "Drenar permanentemente os manguezais do litoral leste cearense para criação exclusiva de camarão em cativeiro.", isCorrect: false },
        { text: "Eliminar os períodos de estiagem natural por meio da modificação forçada do clima semiárido cearense.", isCorrect: false }
      ],
      explanation: "O Castanhão e o sistema de transposição do São Francisco canalizam água pelo Eixão para o abastecimento da RMF (Fortaleza), suporte industrial no Pecém e perímetros irrigados no Baixo Jaguaribe."
    },
    {
      difficulty: "dificil",
      category: "Ciências Humanas • Geografia do Ceará",
      topic: "UECE 2024: NÚCLEOS DE DESERTIFICAÇÃO NO CEARÁ",
      title: "Degradação Pedológica e Antropização no Semiárido",
      context: "O estado do Ceará possui áreas oficialmente mapeadas como núcleos de degradação ambiental grave e desertificação, identificadas pelo Ministério do Meio Ambiente e por órgãos estaduais.",
      question: "Os dois mais expressivos e vulneráveis núcleos de desertificação no território cearense situam-se nos municípios/regiões de:",
      options: [
        { text: "Irauçuba e Médio Jaguaribe/Inhamuns, decorrentes do desmatamento da Caatinga para pecuária extensiva, queima de lenha e solos rasos propensos à erosão.", isCorrect: true },
        { text: "Serra de Baturité e Chapada da Ibiapaba, provocados pelas neves e geadas frequentes de inverno sobre as plantações de café.", isCorrect: false },
        { text: "Litoral de Aracati e Jericoacoara, em virtude do excesso de água doce retida nas dunas móveis costeiras.", isCorrect: false },
        { text: "Guaramiranga e Pacoti, provocados pelo avanço da urbanização costeira e das marés de equinócio.", isCorrect: false }
      ],
      explanation: "O município de Irauçuba e áreas dos Inhamuns são notórios núcleos de desertificação no Ceará, onde solos cristalinos rasos sofrem intensa degradação pelo sobrepastoreio e queima de vegetação nativa."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • Geografia e Demografia",
      topic: "UECE 2024: CENSO DEMOGRÁFICO DO IBGE NO CEARÁ",
      title: "Transição Demográfica e Envelhecimento Populacional",
      context: "Os dados do Censo Demográfico revelaram que a taxa de fecundidade no Ceará continuou caindo, situando-se abaixo do nível de reposição populacional (2,1 filhos por mulher), acompanhando a tendência nacional.",
      question: "Do ponto de vista socioeconômico e previdenciário, o estreitamento da base da pirâmide etária e o alargamento do topo no Ceará demandam:",
      options: [
        { text: "Reestruturação das políticas de saúde voltadas a doenças crônico-degenerativas e adaptação do sistema previdenciário ao aumento da razão de dependência de idosos.", isCorrect: true },
        { text: "Fechamento imediato de todas as maternidades e universidades para transferir recursos à exploração de carvão mineral.", isCorrect: false },
        { text: "Abertura irrestrita de escolas infantis para conter a explosão de nascimentos observada nas áreas rurais cearenses.", isCorrect: false },
        { text: "Diminuição forçada da idade de aposentadoria de trabalhadores rurais para os 35 anos de idade.", isCorrect: false }
      ],
      explanation: "O envelhecimento populacional (aumento do percentual de idosos e redução de jovens) exige ajustes orçamentários na saúde geriátrica e nos fundos de previdência social."
    },

    // ==========================================
    // UECE - CIÊNCIAS HUMANAS: FILOSOFIA & SOCIOLOGIA
    // ==========================================
    {
      difficulty: "dificil",
      category: "Ciências Humanas • Filosofia Contemporânea",
      topic: "UECE 2025: MICHEL FOUCAULT E O BIOPODER",
      title: "Da Soberania à Gestão da Vida e da População",
      context: "Na clássica distinção formulada por Michel Foucault em 'A Vontade de Saber' e em 'Em Defesa da Sociedade', a passagem do poder soberano clássico para o biopoder marca a modernidade ocidental.",
      question: "Para Foucault, a fórmula que sintetiza a lógica do biopoder na sociedade contemporânea é:",
      options: [
        { text: "Fazer viver e deixar morrer, controlando estatisticamente nascimentos, epidemias, longevidade e condições de higiene das populações.", isCorrect: true },
        { text: "Fazer morrer e deixar viver, no qual o rei tem o direito pessoal e arbitrário de decapitar súditos em praça pública.", isCorrect: false },
        { text: "Recusar qualquer mecanismo de vigilância hospitalar ou prisional, garantindo anarquia moral generalizada.", isCorrect: false },
        { text: "Subordinar as decisões médicas e sanitárias aos mandamentos sagrados dos oráculos medievais.", isCorrect: false }
      ],
      explanation: "O poder soberano exercia o 'fazer morrer e deixar viver' (suplício). Já o biopoder atua gerindo a vida, a saúde pública, a natalidade e a mortalidade das populações: 'fazer viver e deixar morrer'."
    },
    {
      difficulty: "dificil",
      category: "Ciências Humanas • Filosofia Moderna e Epistemologia",
      topic: "UECE 2024: WITTGENSTEIN E OS LIMITES DA LINGUAGEM",
      title: "O 'Tractatus Logico-Philosophicus' e o Silêncio Filosófico",
      context: "A célebre proposição 7 do 'Tractatus Logico-Philosophicus' de Ludwig Wittgenstein afirma: 'Sobre aquilo de que não se pode falar, deve-se calar.'",
      question: "Essa proposição expressa a concepção wittgensteiniana de que o papel da linguagem rigorosa consiste em:",
      options: [
        { text: "Delimitar o domínio dos fatos empiricamente figuráveis pelo pensamento lógico, reconhecendo que a ética, a mística e o sentido da vida ultrapassam a linguagem proposicional científica.", isCorrect: true },
        { text: "Proibir o uso da poesia e declarar que apenas a fala cotidiana dos camponeses tem validade existencial.", isCorrect: false },
        { text: "Exigir que todas as teorias científicas sejam convertidas em dogmas teológicos imutáveis.", isCorrect: false },
        { text: "Demonstrar que as palavras não possuem qualquer ligação conceitual com os objetos do mundo material.", isCorrect: false }
      ],
      explanation: "Para o 'primeiro Wittgenstein', a proposição com sentido afigura estados de coisas no mundo empírico. Temas metafísicos e éticos pertencem ao indizível, devendo ser mostrados, e não teoretizados em proposições falsas."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • Filosofia Política Clássica",
      topic: "UECE 2023: ARISTÓTELES E O ANIMAL POLÍTICO",
      title: "A Polis e a Natureza Social do Ser Humano",
      context: "Em 'A Política', Aristóteles postula que o ser humano é por natureza um 'zoon politikon' (animal político) e que a pólis (cidade-estado) é anterior ao indivíduo por natureza.",
      question: "De acordo com Aristóteles, a capacidade humana singular que justifica a vida política e a diferencia dos demais animais gregários é:",
      options: [
        { text: "A posse do 'logos' (discurso/razão), permitindo discernir e deliberar sobre o justo e o injusto, o conveniente e o prejudicial.", isCorrect: true },
        { text: "A força física superior para aniquilar as feras silvestres e erguer muralhas de bronze.", isCorrect: false },
        { text: "O instinto biológico cego de submissão aos líderes mais fortes da horda.", isCorrect: false },
        { text: "A capacidade exclusiva de acumular riquezas monetárias e cobrar juros em transações comerciais.", isCorrect: false }
      ],
      explanation: "Aristóteles defende que o animal humano possui linguagem racional (logos), com a qual compartilha a percepção do bem, do mal, da justiça e constrói a comunidade política na pólis."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • Filosofia Política Moderna",
      topic: "UECE 2025: THOMAS HOBBES E O ESTADO DE NATUREZA",
      title: "A Guerra de Todos contra Todos e o Contrato Social",
      context: "No 'Leviatã' (1651), Thomas Hobbes descreve a condição natural da humanidade como uma permanente iminência de conflito e medo recíproco da morte violenta ('homo homini lupus').",
      question: "Para superar a instabilidade do estado de natureza, os indivíduos hobbesianos realizam um pacto no qual:",
      options: [
        { text: "Transferem seu direito natural de autogoverno a um soberano absoluto, capaz de instituir leis, garantir a paz e a segurança coletiva.", isCorrect: true },
        { text: "Aboliram todo tipo de governo e passaram a conviver pacificamente sem regras ou tribunais.", isCorrect: false },
        { text: "Dividiram equitativamente a terra entre todas as famílias sob supervisão da Igreja Católica.", isCorrect: false },
        { text: "Promoveram votações mensais diretas para destituir os governantes sempre que houvesse descontentamento popular.", isCorrect: false }
      ],
      explanation: "No contrato social hobbesiano, a renúncia mútua da liberdade natural em favor do Estado Soberano (Leviatã) tem como fim supremo a garantia da ordem, sobrevivência física e segurança coletiva."
    }
  ,

    // ============================================================================
    // QUESTÕES CLONES - UECE (MESMO CONTEÚDO / ABORDAGEM INÉDITA COM 4 OPÇÕES)
    // ============================================================================
    {
      difficulty: "medio",
      category: "Linguagens • Literatura Cearense",
      topic: "UECE 2025: PADARIA ESPIRITUAL E BOEMIA LITERÁRIA (CLONE)",
      title: "O Pão e os Estatutos Irreverentes da Agremiação",
      context: "Dentre as regras peculiares e burlescas instituídas nos estatutos da Padaria Espiritual em Fortaleza, constava a divisão de seus membros em 'padeiros', 'forneiros' e a obrigação de 'fornecer pão de espírito sadio à população', combatendo o beletrismo estéril.",
      question: "Sob a ótica da renovação estética das letras cearenses no final do século XIX, essa encenação carnavalesca dos membros da Padaria tinha por objetivo:",
      options: [
        { text: "Desmistificar a figura intocável do escritor acadêmico e democratizar o debate literário com forte senso de ironia e crítica social.", isCorrect: true },
        { text: "Impor a censura prévia aos jornais operários fortalezenses e proibir qualquer influência do Simbolismo francês.", isCorrect: false },
        { text: "Exaltar a monarquia portuguesa e restabelecer os cânones medievais da poesia trovadoresca.", isCorrect: false },
        { text: "Limitar a circulação literária aos salões aristocráticos da alta burguesia cearense.", isCorrect: false }
      ],
      explanation: "A Padaria Espiritual usava o sarcasmo e a paródia institucional para dessacralizar a erudição vazia e aproximar a criação artística do cotidiano urbano e popular de Fortaleza."
    },
    {
      difficulty: "medio",
      category: "Linguagens • Literatura Cearense",
      topic: "UECE 2024: O QUINZE DE RACHEL DE QUEIROZ (CLONE)",
      title: "Conceição e Vicente: O Dilema Intelectual vs. Sertanejo",
      context: "No romance 'O Quinze', o contraponto à marcha fúnebre dos retirantes Chico Bento e Cordulina é dado pela relação afetiva entre Conceição, professora letrada de ideias feministas e progressistas, e Vicente, criador de gado apegado à lida da terra.",
      question: "O desenlace afetivo entre Conceição e Vicente traduz na narrativa de Rachel de Queiroz:",
      options: [
        { text: "A distância psicológica e cultural que separa o universo urbano ilustrado da intransigência e do pragmatismo da vida tradicional no sertão.", isCorrect: true },
        { text: "A vitória militar das tropas legalistas sobre os cangaceiros que assolavam Quixadá.", isCorrect: false },
        { text: "A conversão religiosa repentina de ambos os personagens ao misticismo messiânico de Juazeiro.", isCorrect: false },
        { text: "A migração definitiva do casal para a Europa em busca de investimentos ferroviários.", isCorrect: false }
      ],
      explanation: "O descompasso entre a sensibilidade intelectual/urbana de Conceição e a rusticidade resignada de Vicente revela os limites de conciliação afetiva entre dois Brasis expostos pela seca."
    },
    {
      difficulty: "facil",
      category: "Linguagens • Gramática e Figuras de Sintaxe",
      topic: "UECE 2024: FIGURAS DE LINGUAGEM E RECURSOS EXPRESSIVOS (CLONE)",
      title: "Identificação de Metonímia e Sinestesia",
      context: "Analise os versos modernistas: 'Ouço o cheiro amargo da poeira que sobe do chão crestado'.",
      question: "A fusão de sensações corporais de sentidos distintos ('ouço' [audição] com 'cheiro' [olfato] e 'amargo' [paladar]) configura a figura de linguagem conhecida como:",
      options: [
        { text: "Sinestesia.", isCorrect: true },
        { text: "Hipérbato.", isCorrect: false },
        { text: "Eufemismo.", isCorrect: false },
        { text: "Catacrese.", isCorrect: false }
      ],
      explanation: "Sinestesia é a figura de linguagem caracterizada pela sobreposição ou cruzamento de diferentes esferas sensoriais humanas (audição, olfato, visão, tato, paladar)."
    },
    {
      difficulty: "medio",
      category: "Linguagens • Funções da Linguagem",
      topic: "UECE 2023: METALINGUAGEM E LINGUAGEM POÉTICA (CLONE)",
      title: "A Função Emotiva / Expressiva no Lirismo",
      context: "Leia o fragmento lírico: 'Ah, que dor dilacerante sinto no peito! Toda a minha alma sangra desamparada nesta noite de desespero imenso!'",
      question: "A ênfase expressiva colocada na interioridade do emissor, marcada por interjeições e pontuação exclamativa intensa, caracteriza predominantemente a:",
      options: [
        { text: "Função emotiva (ou expressiva).", isCorrect: true },
        { text: "Função fática.", isCorrect: false },
        { text: "Função referencial.", isCorrect: false },
        { text: "Função conativa (ou apelativa).", isCorrect: false }
      ],
      explanation: "A função emotiva ou expressiva centra-se na primeira pessoa (eu), evidenciando os sentimentos, emoções e estados psicológicos do próprio locutor."
    },
    {
      difficulty: "medio",
      category: "Linguagens • Literatura Brasileira",
      topic: "UECE 2025: ROMANTISMO CEARENSE E JOSÉ DE ALENCAR (CLONE)",
      title: "O Elemento Indigenista e a Cor Local em 'Ubirajara'",
      context: "Ao lado de 'Iracema' e 'O Guarani', o romance 'Ubirajara' completa a tríade indianista de José de Alencar, retratando o Brasil pré-cabralino sem o contato com o colonizador europeu.",
      question: "Nessas obras de feição indianista, Alencar constrói o protagonista autóctone como:",
      options: [
        { text: "Um herói cavalheiresco e nobre que encarna as virtudes éticas e o sentimento de honra característicos da fundação mítica nacional.", isCorrect: true },
        { text: "Um bárbaro destituído de espiritualidade cuja civilização só tem início após a catequese jesuítica.", isCorrect: false },
        { text: "Um mero coadjuvante cômico subordinado às determinações científicas do Iluminismo europeu.", isCorrect: false },
        { text: "Um mercador pragmático focado no escambo de pau-brasil com piratas franceses.", isCorrect: false }
      ],
      explanation: "No Romantismo alencarino, o indígena é idealizado à semelhança dos cavaleiros medievais europeus, representando o símbolo imaculado e nobre da nacionalidade brasileira."
    },
    {
      difficulty: "dificil",
      category: "Linguagens • Semântica e Coesão",
      topic: "UECE 2026: POLISSEMIA E CONECTIVOS ARGUMENTATIVOS (CLONE)",
      title: "Relações Sintático-Semânticas de Proporcionalidade e Causa",
      context: "Considere a frase: 'À proporção que as chuvas de inverno tardavam a chegar ao sertão dos Inhamuns, intensificava-se a angústia dos pequenos agricultores familiares.'",
      question: "A locução conjuntiva 'À proporção que' expressa formalmente uma relação circunstancial de:",
      options: [
        { text: "Proporcionalidade concomitante entre dois processos graduais.", isCorrect: true },
        { text: "Finalidade intencional direcionada à colheita.", isCorrect: false },
        { text: "Concessão imprevista que anula a perda da safra.", isCorrect: false },
        { text: "Comparação estática entre climas regionais dispares.", isCorrect: false }
      ],
      explanation: "'À proporção que' (assim como 'à medida que') introduz uma oração subordinada adverbial proporcional, indicando variação concomitante entre grandezas."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • História do Ceará",
      topic: "UECE 2024: A SEDIÇÃO DE JUAZEIRO (1914) (CLONE)",
      title: "O 'Pacto dos Coronéis' de 1911 e a Liderança Caririense",
      context: "Em 1911, antes da eclosão armada da Sedição de Juazeiro, lideranças políticas e grandes proprietários de terras do Vale do Cariri reuniram-se para firmar o 'Pacto dos Coronéis', mediado por Padre Cícero.",
      question: "O principal propósito do 'Pacto dos Coronéis' no cenário político cearense da Primeira República foi:",
      options: [
        { text: "Cessar os conflitos sangrentos entre as oligarquias regionais, assegurando a hegemonia conservadora e o apoio coeso ao governo Nogueira Accioly.", isCorrect: true },
        { text: "Abolir o latifúndio no Ceará e implementar a reforma agrária popular nas encostas da Chapada do Araripe.", isCorrect: false },
        { text: "Proclamar a independência do Cariri em relação ao restante do território brasileiro.", isCorrect: false },
        { text: "Entregar a administração fiscal de Juazeiro do Norte ao Exército federal legalista.", isCorrect: false }
      ],
      explanation: "O Pacto de 1911 unificou os coronéis do Cariri sob a liderança pacificadora de Padre Cícero e Floro Bartolomeu, consolidando a influência política de Juazeiro perante a capital Fortaleza."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • História do Ceará",
      topic: "UECE 2023: O CALDEIRÃO DA SANTA CRUZ DO DESERTO (CLONE)",
      title: "A Produção Cooperativa e a Autonomia Camponesa",
      context: "A comunidade camponesa do Caldeirão dos Jesuítas sustentava-se com ampla produção de mandioca, milho, feijão e algodão, mantendo armazéns comunitários e um padrão de vida superior ao dos trabalhadores submetidos aos regimes de servidão dos latifúndios vizinhos.",
      question: "Essa prosperidade autônoma do Caldeirão causou grande apreensão entre os coronéis cearenses porque:",
      options: [
        { text: "Esvaziava os latifúndios vizinhos ao atrair a mão de obra sertaneja que fugia da exploração do sistema tradicional de meação e cambão.", isCorrect: true },
        { text: "Exigia a destruição de todas as igrejas e oratórios católicos de Juazeiro do Norte.", isCorrect: false },
        { text: "Financiava a importação ilegal de armamentos pesados da Alemanha nazista.", isCorrect: false },
        { text: "Monopolizava as exportações de café brasileiro para a América do Norte.", isCorrect: false }
      ],
      explanation: "A abundância e autonomia comunitária do Caldeirão minavam a sujeição dos trabalhadores rurais aos coronéis, que viam na comunidade um péssimo exemplo para a subserviência do campesinato sertanejo."
    },
    {
      difficulty: "facil",
      category: "Ciências Humanas • História do Ceará",
      topic: "UECE 2025: A TERRA DA LUZ E A ABOLIÇÃO DE 1884 (CLONE)",
      title: "A Sociedade Libertadora Cearense e a Imprensa Abolicionista",
      context: "A campanha abolicionista no Ceará na década de 1880 destacou-se pela intensa agitação cívica da 'Sociedade Cearense Libertadora' e pelo jornal 'O Libertador', fundado por intelectuais como João Cordeiro e Antônio Bezerra.",
      question: "A estratégia adotada pelo movimento abolicionista no Ceará que viabilizou a libertação antecipada dos escravizados em 1884 combinava:",
      options: [
        { text: "Mobilização popular urbana, pressão sobre a alfândega portuária e arrecadação contínua de fundos para compra de alforrias município a município.", isCorrect: true },
        { text: "Invasão militar de senzalas com apoio direto de canhoneiras da marinha real britânica.", isCorrect: false },
        { text: "Submissão cega às ordens dos cafeicultores escravistas do Vale do Paraíba fluminense.", isCorrect: false },
        { text: "Exclusão sumária das mulheres e dos jangadeiros de qualquer passeata cívica em Fortaleza.", isCorrect: false }
      ],
      explanation: "O Ceará articulou a ação de massa (greve de jangadeiros liderada por Dragão do Mar), imprensa combativa e fundos de emancipação de Redenção a Fortaleza, tornando-se pioneiro nacional."
    },
    {
      difficulty: "dificil",
      category: "Ciências Humanas • História do Brasil e Ceará",
      topic: "UECE 2022: A CONFEDERAÇÃO DO EQUADOR (1824) (CLONE)",
      title: "Bárbara de Alencar e o Martírio Republicano no Cariri",
      context: "A luta pelas liberdades republicanas e federativas no Ceará teve como pioneira Bárbara de Alencar (mãe de Tristão Gonçalves), que participou ativamente da Revolução Pernambucana de 1817 e da Confederação do Equador de 1824.",
      question: "A atuação feminina e republicana de Bárbara de Alencar destacou-se por ter sido:",
      options: [
        { text: "A primeira presa política do Brasil, desafiando a monarquia em defesa do autogoverno do Nordeste e dos ideais republicanos iluministas.", isCorrect: true },
        { text: "A comandante da Guarda Imperial encarregada de dissolver a Constituinte no Rio de Janeiro.", isCorrect: false },
        { text: "A negociadora que solicitou a anexação da Província do Ceará ao Reino Unido de Portugal.", isCorrect: false },
        { text: "Uma defensora ferrenha do absolutismo e do Poder Moderador de D. Pedro I no Cariri.", isCorrect: false }
      ],
      explanation: "Bárbara de Alencar é reconhecida como a primeira presa política da história brasileira por seu heroico engajamento nas revoltas republicanas de 1817 e 1824 no Crato e em Fortaleza."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • Geografia do Ceará",
      topic: "UECE 2025: BACIA DO JAGUARIBE E O CINTURÃO DAS ÁGUAS (CLONE)",
      title: "Açude Orós e a Hidroconflitividade no Semiárido",
      context: "Inaugurado na década de 1960 pelo presidente Juscelino Kubitschek, o Açude Orós foi durante quatro décadas o maior reservatório hídrico cearense, até ser superado pelo Açude Castanhão em 2002.",
      question: "A construção das grandes barragens no leito do Rio Jaguaribe teve por objetivo geoestratégico primordial:",
      options: [
        { text: "Perenizar o curso d'água outrora intermitente e amortecer os impactos catastróficos dos ciclos periódicos de seca sobre a população sertaneja.", isCorrect: true },
        { text: "Interromper totalmente a irrigação no interior para destinar água exclusivamente à produção de celulose no exterior.", isCorrect: false },
        { text: "Transformar a Caatinga em uma densa floresta de coníferas com clima subtropical de altitude.", isCorrect: false },
        { text: "Secar as lagoas naturais do litoral para permitir a mineração de carvão mineral fóssil.", isCorrect: false }
      ],
      explanation: "A política hidráulica no Ceará (DNOCS e COGERH) construiu açudes como Orós e Castanhão para regularizar a vazão do Jaguaribe, perenizando o rio e abastecendo comunidades agrícolas e cidades."
    },
    {
      difficulty: "dificil",
      category: "Ciências Humanas • Geografia do Ceará",
      topic: "UECE 2024: NÚCLEOS DE DESERTIFICAÇÃO NO CEARÁ (CLONE)",
      title: "O Papel da Pecuária e da Silvicultura Predatória na Perda de Solo",
      context: "Nos sertões do Médio Jaguaribe e na região de Irauçuba, a remoção da cobertura lenhosa de Caatinga para uso energético em olarias e padarias expõe os horizontes superficiais do solo à radiação solar e às chuvas torrenciais concentradas.",
      question: "O processo morfoclimático e antrópico que culmina na formação de pavimentos desérticos e perda definitiva de fertilidade pedológica denomina-se:",
      options: [
        { text: "Arenização e erosão laminar severa com formação de crostas impermeáveis no solo cristalino.", isCorrect: true },
        { text: "Podzolização alpina induzida pelo congelamento estacional do lençol freático.", isCorrect: false },
        { text: "Laterização ácida gerada pela proliferação de turfeiras pantanosas.", isCorrect: false },
        { text: "Sedimentação eólica exclusiva oriunda da Cordilheira dos Andes.", isCorrect: false }
      ],
      explanation: "Em solos cristalinos rasos como os de Irauçuba, a retirada da Caatinga gera erosão laminar, lixiviação e formação de crosta dura pedregosa (pavimento desértico), consolidando a desertificação."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • Geografia e Demografia",
      topic: "UECE 2024: CENSO DEMOGRÁFICO DO IBGE NO CEARÁ (CLONE)",
      title: "Desaceleração Demográfica da Região Metropolitana de Fortaleza",
      context: "Os dados do Censo Demográfico do IBGE revelaram que grandes capitais do Nordeste, incluindo Fortaleza, registraram perda populacional ou crescimento significativamente inferior às médias históricas anteriores.",
      question: "Entre os fatores demográficos e espaciais que explicam esse fenômeno de arrefecimento demográfico nas metrópoles tradicionais, inclui-se:",
      options: [
        { text: "A queda histórica da taxa de fecundidade e a desconcentração populacional para municípios polo do interior (como Sobral e Juazeiro do Norte) e periferias metropolitanas.", isCorrect: true },
        { text: "A migração em massa de toda a população cearense de volta para a agricultura cafeeira do interior paulista.", isCorrect: false },
        { text: "A promulgação de leis estaduais que proíbem o casamento civil e a natalidade urbana.", isCorrect: false },
        { text: "A elevação da mortalidade infantil para os maiores índices registrados desde o século XIX.", isCorrect: false }
      ],
      explanation: "A transição demográfica (queda expressiva na taxa de fecundidade) somada ao transbordamento demográfico para cidades médias dinamizadas no interior explica o menor ritmo de crescimento das metrópoles."
    },
    {
      difficulty: "dificil",
      category: "Ciências Humanas • Filosofia Contemporânea",
      topic: "UECE 2025: MICHEL FOUCAULT E O BIOPODER (CLONE)",
      title: "As Instituições Disciplinares e o Panoptismo",
      context: "Em 'Vigiar e Punir', Michel Foucault analisa a passagem dos suplícios públicos monárquicos para o modelo carcerário moderno, valendo-se do projeto arquitetônico do Panóptico idealizado por Jeremy Bentham.",
      question: "O princípio estrutural do Panóptico foucaultiano repousa na:",
      options: [
        { text: "Sensação permanente de visibilidade e vigilância exercida sobre o indivíduo, induzindo a autodisciplina e a docilização dos corpos.", isCorrect: true },
        { text: "Tortura física permanente televisionada para incutir o terror nas praças públicas.", isCorrect: false },
        { text: "Libertação irrestrita de todos os encarcerados para garantir o pleno livre-arbítrio.", isCorrect: false },
        { text: "Subordinação de todas as fábricas e prisões à autoridade teológica do Vaticano.", isCorrect: false }
      ],
      explanation: "O Panóptico baseia-se na vigilância invisível e contínua: sabendo que pode ser visto a qualquer instante, o vigiado interioriza a norma e vigia o próprio comportamento (corpo dócil)."
    },
    {
      difficulty: "dificil",
      category: "Ciências Humanas • Filosofia Moderna e Epistemologia",
      topic: "UECE 2024: WITTGENSTEIN E OS LIMITES DA LINGUAGEM (CLONE)",
      title: "Os Jogos de Linguagem nas 'Investigações Filosóficas'",
      context: "Em sua fase madura ('Investigações Filosóficas'), Ludwig Wittgenstein revisou suas ideias iniciais do 'Tractatus' e formulou o célebre conceito de 'jogos de linguagem' (Sprachspiele).",
      question: "Na concepção do 'segundo Wittgenstein', o significado de uma palavra é determinado:",
      options: [
        { text: "Pelo seu uso prático e contextualizado nas diversas formas de vida e atividades humanas cotidianas.", isCorrect: true },
        { text: "Pela essência eterna e imutável que a palavra reflete no mundo inteligível platônico.", isCorrect: false },
        { text: "Pela rigorosa correspondência biunívoca matemática entre a sílaba e um átomo químico específico.", isCorrect: false },
        { text: "Pela aprovação formal de um dicionário oficial instituído pelo poder estatal centralizador.", isCorrect: false }
      ],
      explanation: "Nas Investigações Filosóficas, o significado não é uma imagem estática da realidade, mas decorre do seu uso concreto nos 'jogos de linguagem' tecidos nas formas de vida (Lebensformen)."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • Filosofia Política Clássica",
      topic: "UECE 2023: ARISTÓTELES E O ANIMAL POLÍTICO (CLONE)",
      title: "A Ética a Nicômaco e a Teoria da Justa Medida",
      context: "Em 'Ética a Nicômaco', Aristóteles investiga a natureza da virtude moral (aretê), definindo-a como um hábito deliberativo situado entre dois extremos viciosos (excesso e falta).",
      question: "A doutrina aristotélica da virtude como 'justo meio' (mesotês) exemplifica-se pelo fato de que a coragem é o equilíbrio entre:",
      options: [
        { text: "A covardia (deficiência/falta de ânimo) e a temeridade irrefletida (excesso de audácia).", isCorrect: true },
        { text: "A avareza desmedida e a miséria forçada.", isCorrect: false },
        { text: "O amor incondicional e o ódio visceral sem justificativa.", isCorrect: false },
        { text: "A preguiça contemplativa e o suicídio sacrificial perante o exército inimigo.", isCorrect: false }
      ],
      explanation: "Para Aristóteles, a virtude moral reside no caminho do meio (justa medida ponderada pela prudência racional): a coragem é a justa postura entre a covardia e a imprudência temerária."
    },
    {
      difficulty: "medio",
      category: "Ciências Humanas • Filosofia Política Moderna",
      topic: "UECE 2025: THOMAS HOBBES E O ESTADO DE NATUREZA (CLONE)",
      title: "Poder Soberano Indivisível e as Leis Civis",
      context: "Ao estruturar as prerrogativas do Soberano no 'Leviatã', Hobbes argumenta que a soberania estatal deve ser una e indivisível, rejeitando a fragmentação do poder entre parlamento e rei.",
      question: "Para Hobbes, a divisão da autoridade soberana entre diferentes poderes autônomos constitui um risco fatal porque:",
      options: [
        { text: "Gera facções rivais e instabilidade jurídica, recriando as condições que conduzem a sociedade de volta à guerra civil do estado de natureza.", isCorrect: true },
        { text: "Impede que o clero católico assuma o comando do exército permanente nacional.", isCorrect: false },
        { text: "Torna obrigatória a distribuição gratuita de terras a todos os cidadãos sem tributos.", isCorrect: false },
        { text: "Viola as prescrições biológicas da teoria evolucionista de Darwin.", isCorrect: false }
      ],
      explanation: "Hobbes temia que a fragmentação do poder político (como ocorrido na Guerra Civil Inglesa) destruísse a eficácia do pacto protetivo, mergulhando a sociedade novamente no caos da violência e do medo."
    },
],

  natureza_matematica: [
    // ==========================================
    // UECE - QUÍMICA (1ª E 2ª FASES)
    // ==========================================
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Físico-Química",
      topic: "UECE 2025: CINÉTICA QUÍMICA E CATÁLISE",
      title: "Ação dos Catalisadores e Energia de Ativação",
      context: "Em uma reação endotérmica A + B → C + D, a adição de um catalisador apropriado altera significativamente a velocidade da transformação química sem ser consumido no processo global.",
      question: "Em relação à cinética desse sistema reacional catalisado, é correto afirmar que o catalisador atua:",
      options: [
        { text: "Diminuindo a energia de ativação da reação, proporcionando um novo caminho mecanicista para a formação do complexo ativado.", isCorrect: true },
        { text: "Aumentando a variação de entalpia (ΔH) da reação, tornando o processo mais favorável termodinamicamente.", isCorrect: false },
        { text: "Alterando a constante de equilíbrio químico (Kc), favorecendo unicamente a concentração dos produtos no estado final.", isCorrect: false },
        { text: "Elevando a energia cinética de todas as moléculas sem alterar a barreira de ativação dos reagentes.", isCorrect: false }
      ],
      explanation: "O catalisador não altera ΔH, nem desloca a posição do equilíbrio químico (Kc); sua função exclusiva é criar um caminho reacional alternativo com menor energia de ativação (Ea), acelerando a reação."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Química Orgânica",
      topic: "UECE 2024: POLÍMEROS SINTÉTICOS E MONÔMEROS",
      title: "Policloreto de Vinila (PVC) e sua Estrutura",
      context: "O PVC (policloreto de vinila) é um dos materiais plásticos mais utilizados na construção civil cearense em canos de distribuição de água potável, esgoto sanitário e eletrodutos rígidos.",
      question: "O monômero precursor utilizado na polimerização por adição para a produção industrial do PVC é o:",
      options: [
        { text: "Cloroeteno (cloreto de vinila: CH₂=CH-Cl).", isCorrect: true },
        { text: "Triclorometano (clorofórmio: CHCl₃).", isCorrect: false },
        { text: "1,2-dicloroetano saturado (CH₂Cl-CH₂Cl).", isCorrect: false },
        { text: "Clorobenzeno aromático (C₆H₅Cl).", isCorrect: false }
      ],
      explanation: "O PVC é obtido pela reação de polimerização por adição do cloroeteno (CH₂=CH-Cl), no qual a quebra da dupla ligação carbônica forma a cadeia polimérica (-CH₂-CHCl-)n."
    },
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Equilíbrio Químico",
      topic: "UECE 2024: CONSTANTE DE EQUILÍBRIO Kc E Kp",
      title: "Condição para Kc = Kp em Sistemas Gasosos",
      context: "A relação matemática entre a constante de equilíbrio em função das pressões parciais (Kp) e a constante em função das concentrações em quantidade de matéria (Kc) é expressa por Kp = Kc · (R · T)^(Δn), em que Δn é a variação do número de mols gasosos (produtos - reagentes).",
      question: "Em um sistema gasoso fechado a uma dada temperatura T, a igualdade numérica Kp = Kc ocorre estritamente quando:",
      options: [
        { text: "O somatório dos coeficientes estequiométricos gasosos dos reagentes for rigorosamente igual ao dos produtos (Δn = 0).", isCorrect: true },
        { text: "A temperatura absoluta do reator for exatamente igual a 0 Kelvin (-273,15 °C).", isCorrect: false },
        { text: "A reação for exclusivamente endotérmica com catalisador heterogêneo sólido.", isCorrect: false },
        { text: "A pressão total no interior do sistema atingir 0 atm em vácuo absoluto.", isCorrect: false }
      ],
      explanation: "Como Kp = Kc · (R·T)^(Δn), para qualquer valor de R e T > 0, teremos (R·T)^0 = 1 se e somente se Δn = 0 (isto é, quando o número de mols de gás nos reagentes é igual ao dos produtos)."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Termodinâmica e Gases",
      topic: "UECE 2023: ESTUDO DOS GASES IDEAIS",
      title: "Transformação Isobárica e Variação de Volume",
      context: "Certa massa fixa de um gás ideal, mantida sob pressão constante de 1,5 atm, ocupa inicialmente um volume de 4,0 L a uma temperatura absoluta Ti. O sistema é aquecido isobaricamente até que o volume atinja 10,0 L.",
      question: "Pela Lei de Charles e Gay-Lussac para transformações isobáricas, a relação entre a temperatura final (Tf) e a temperatura inicial (Ti) é:",
      options: [
        { text: "5·Ti = 2·Tf (ou Tf = 2,5·Ti).", isCorrect: true },
        { text: "Ti = 2,5·Tf (ou Tf = 0,4·Ti).", isCorrect: false },
        { text: "Tf = Ti + 6,0 Kelvin.", isCorrect: false },
        { text: "Tf · Ti = 40,0 Kelvin².", isCorrect: false }
      ],
      explanation: "Em transformação isobárica: V₁/T₁ = V₂/T₂ ⇒ 4/Ti = 10/Tf ⇒ 4·Tf = 10·Ti ⇒ 2·Tf = 5·Ti ⇒ Tf = 2,5·Ti."
    },
    {
      difficulty: "facil",
      category: "Ciências da Natureza • Propriedades Coligativas",
      topic: "UECE 2025: TONOSCOPIA E EBULIOSCOPIA",
      title: "Efeito da Adição de Soluto Não Volátil na Água",
      context: "Ao dissolver cloreto de sódio (sal de cozinha) em água destilada, observa-se uma alteração marcante nas propriedades físicas da solução em relação ao solvente puro sob mesma pressão atmosférica.",
      question: "Em consequência da presença do soluto iônico não volátil dissolvido, a solução salina resultante apresentará:",
      options: [
        { text: "Menor pressão máxima de vapor e maior temperatura de ebulição do que a água destilada pura.", isCorrect: true },
        { text: "Maior pressão máxima de vapor e menor temperatura de congelamento que a água pura.", isCorrect: false },
        { text: "Ponto de ebulição rigorosamente inalterado a exatamente 100 °C em qualquer altitude.", isCorrect: false },
        { text: "Imediata diminuição da pressão osmótica para valores negativos.", isCorrect: false }
      ],
      explanation: "A adição de soluto não volátil causa tonoscopia (abaixamento da pressão de vapor do solvente), ebulioscopia (elevação do ponto de ebulição) e crioscopia (abaixamento do ponto de congelamento)."
    },
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Isomeria e Estereoquímica",
      topic: "UECE 2026: ISOMERIA ÓPTICA NO ÁCIDO LÁTICO",
      title: "Carbono Quiral e Atividade Óptica",
      context: "O ácido lático (ácido 2-hidroxipropanoico, CH₃-CH(OH)-COOH) acumula-se no tecido muscular durante esforços anaeróbios intensos e é largamente utilizado na indústria de laticínios cearense.",
      question: "A molécula de ácido lático exibe atividade óptica (enantiômeros dextrogiro e levogiro) devido à presença de:",
      options: [
        { text: "Um átomo de carbono assimétrico (quiral) ligado a quatro ligantes distintos: -H, -OH, -CH₃ e -COOH.", isCorrect: true },
        { text: "Uma dupla ligação com impedimento estérico que impede a rotação molecular cis-trans.", isCorrect: false },
        { text: "Um anel aromático hexagonal com elétrons pi deslocalizados por ressonância.", isCorrect: false },
        { text: "Três átomos de oxigênio dispostos em geometria linear em torno da carbonila.", isCorrect: false }
      ],
      explanation: "O carbono 2 do ácido lático está ligado a quatro grupos diferentes (-H, -OH, -CH₃, -COOH), configurando um centro estereogênico (quiral) que desvia o plano da luz polarizada."
    },

    // ==========================================
    // UECE - FÍSICA (1ª E 2ª FASES)
    // ==========================================
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Óptica Geométrica",
      topic: "UECE 2024: ESPELHOS ESFÉRICOS E ASSOCIAÇÃO",
      title: "Distância Focal e Posição do Objeto",
      context: "Um objeto real é colocado perpendicularmente ao eixo principal de um espelho esférico côncavo de distância focal f, situado a uma distância p do vértice. Para produzir uma imagem real com aumento linear transversal A = -1/2 (imagem invertida e com a metade da altura do objeto):",
      question: "A distância p do objeto ao vértice do espelho côncavo deve ser expressa em função da distância focal f por:",
      options: [
        { text: "p = 3·f", isCorrect: true },
        { text: "p = 1,5·f", isCorrect: false },
        { text: "p = 0,5·f", isCorrect: false },
        { text: "p = 4·f", isCorrect: false }
      ],
      explanation: "Aumento linear transversal em espelhos esféricos: A = f / (f - p). Como A = -1/2: -1/2 = f / (f - p) ⇒ -(f - p) = 2f ⇒ -f + p = 2f ⇒ p = 3f."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Mecânica e Energia",
      topic: "UECE 2025: TRABALHO, ATRITO E FRENAGEM",
      title: "Conservação de Energia em Plano Horizontal",
      context: "Um automóvel de massa m trafega com velocidade constante v em uma pista horizontal retilínea da rodovia CE-040. Ao acionar os freios, as rodas travam e o veículo desliza até o repouso total sob ação exclusiva do atrito dinâmico constante entre pneus e asfalto.",
      question: "Se o motorista dobrar sua velocidade de tráfego inicial (2v), a distância de frenagem necessária para o veículo parar completamente será multiplicada por:",
      options: [
        { text: "4 vezes o valor inicial.", isCorrect: true },
        { text: "2 vezes o valor inicial.", isCorrect: false },
        { text: "8 vezes o valor inicial.", isCorrect: false },
        { text: "16 vezes o valor inicial.", isCorrect: false }
      ],
      explanation: "Pelo Teorema da Energia Cinética: W_atrito = ΔEc ⇒ Fat · d = (1/2)·m·v² ⇒ d = (m·v²) / (2·Fat). Como a distância varia com o quadrado da velocidade (v²), dobrar a velocidade quadruplica a distância de frenagem."
    },
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Eletromagnetismo",
      topic: "UECE 2023: INDUÇÃO ELETROMAGNÉTICA DE FARADAY",
      title: "Variação do Fluxo Magnético e Lei de Lenz",
      context: "Uma espira condutora circular fechada é mantida em repouso no plano do papel. Um ímã em barra é aproximado rapidamente da espira, com seu polo Norte voltado para a face visível da espira.",
      question: "De acordo com as Leis de Faraday e Lenz, a aproximação do polo Norte do ímã gera na espira:",
      options: [
        { text: "Uma corrente elétrica induzida no sentido anti-horário, criando um polo magnético Norte frontal que repele a aproximação do ímã.", isCorrect: true },
        { text: "Uma corrente induzida no sentido horário que atrai intensamente o ímã em queda livre perpétua.", isCorrect: false },
        { text: "Nenhuma corrente elétrica induzida, pois a espira encontra-se eletricamente neutra.", isCorrect: false },
        { text: "Um campo elétrico nulo em todos os pontos do espaço delimitado pela espira.", isCorrect: false }
      ],
      explanation: "Lei de Lenz: o sentido da corrente induzida é tal que seus efeitos magnéticos se opõem à variação de fluxo que a originou. Ao aproximar o polo Norte (aumento do fluxo), a espira gera um polo Norte na face frontal (repulsão), correspondente ao sentido anti-horário da corrente induzida."
    },

    // ==========================================
    // UECE - BIOLOGIA (1ª E 2ª FASES)
    // ==========================================
    {
      difficulty: "facil",
      category: "Ciências da Natureza • Genética Clássica",
      topic: "UECE 2025: SISTEMA ABO E TRANSFUSÃO SANGUÍNEA",
      title: "Aglutinogênios e Aglutininas Plasmáticas",
      context: "O sistema sanguíneo ABO humano é determinado por alelos múltiplos (alelismo múltiplo: Iᴬ, Iᴮ e i), em que a presença de glicoproteínas nas hemácias e anticorpos no plasma sanguíneo condicionam a compatibilidade transfusional.",
      question: "Um indivíduo portador do tipo sanguíneo AB positivo (AB+) é considerado classicamente 'receptor universal' porque:",
      options: [
        { text: "Suas hemácias não possuem aglutininas anti-A nem anti-B no plasma sanguíneo, e o fator Rh positivo aceita sangue com ou sem antígeno D.", isCorrect: true },
        { text: "Não possui nenhuma proteína antigênica nas membranas de suas hemácias, impedindo a coagulação.", isCorrect: false },
        { text: "Seu organismo produz anticorpos que destroem imediatamente as hemácias de qualquer outro doador.", isCorrect: false },
        { text: "O plasma sanguíneo contém simultaneamente anticorpos anti-A, anti-B e anti-Rh de alta afinidade.", isCorrect: false }
      ],
      explanation: "O sangue AB não possui anticorpos anti-A nem anti-B no plasma circulante, permitindo que a pessoa receba hemácias de qualquer tipo sanguíneo do sistema ABO sem sofrer aglutinação primária."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Ecologia e Cadeias Tróficas",
      topic: "UECE 2024: MAGNIFICAÇÃO TRÓFICA E POLUIÇÃO",
      title: "Bioacumulação de Metais Pesados em Ecossistemas Aquáticos",
      context: "Em uma lagoa costeira cearense contaminada por efluentes industriais com metilmercúrio, os pesquisadores analisaram a concentração do poluente em diferentes níveis tróficos da cadeia alimentar: fitoplâncton microalgal → microcrustáceos zooplanctônicos → pequenos peixes carnívoros → aves piscívoras do topo.",
      question: "Em decorrência do fenômeno de magnificação trófica (bioacumulação ao longo da cadeia alimentar), a maior concentração de mercúrio por grama de biomassa será encontrada nos tecidos:",
      options: [
        { text: "Das aves piscívoras, ocupantes do último nível trófico da cadeia.", isCorrect: true },
        { text: "Do fitoplâncton microalgal, base produtora autótrofa primária da cadeia.", isCorrect: false },
        { text: "Dos microcrustáceos consumidores primários herbívoros.", isCorrect: false },
        { text: "Da água da lagoa sob forma de vapor condensado estéril.", isCorrect: false }
      ],
      explanation: "Substâncias não biodegradáveis lipossolúveis (como mercúrio e agrotóxicos organoclorados) não são metabolizadas nem excretadas facilmente, concentrando-se progressivamente nos níveis tróficos superiores (topo da cadeia)."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Botânica e Evolução Vegetal",
      topic: "UECE 2023: ADAPTAÇÕES DA VEGETAÇÃO DA CAATINGA",
      title: "Plantas Xerófitas e Adaptações ao Semiárido",
      context: "A Caatinga é o único bioma exclusivamente brasileiro e abriga uma rica diversidade de espécies vegetais adaptadas à escassez hídrica e à alta insolação típica do semiárido cearense.",
      question: "Dentre as adaptações morfológicas e fisiológicas comuns apresentadas pelas plantas xerófitas da Caatinga (como juazeiro, mandacaru e xique-xique), destaca-se:",
      options: [
        { text: "Presença de cutícula cerosa espessa, folhas reduzidas ou modificadas em espinhos, estômatos protegidos e parênquima aquífero para reserva hídrica.", isCorrect: true },
        { text: "Desenvolvimento de folhas largas e tênues sem estômatos para acelerar ao máximo a perda de água por transpiração diurna.", isCorrect: false },
        { text: "Sistemas radiculares totalmente superficiais incapazes de absorver orvalho matinal ou umidade freática.", isCorrect: false },
        { text: "Fixação biológica de oxigênio gasoso puro diretamente nos caules fotossintetizantes lenhosos.", isCorrect: false }
      ],
      explanation: "Xerófitas da Caatinga reduzem a transpiração com folhas transformadas em espinhos, cutícula impermeabilizante e caules suculentos (parênquima aquífero) para armazenamento de água."
    },
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Fisiologia Humana",
      topic: "UECE 2025: OSMORREGULAÇÃO E HORMÔNIO ADH",
      title: "Ação do Hormônio Antidiurético (Vasopressina) nos Néfrons",
      context: "Em dias de calor intenso e privação de ingestão de água potável no sertão central cearense, os osmorreceptores hipotalâmicos detectam a elevação da osmolaridade plasmática, estimulando a neuro-hipófise a secretar o hormônio antidiurético (ADH).",
      question: "A atuação direta do ADH nos néfrons dos rins humanos resulta em:",
      options: [
        { text: "Aumento da permeabilidade dos túbulos coletores à água pela inserção de aquaporinas, produzindo urina mais concentrada e de menor volume.", isCorrect: true },
        { text: "Bloqueio da reabsorção de sódio, provocando diurese copiosa de urina extremamente diluída.", isCorrect: false },
        { text: "Paralisação completa da filtração glomerular na cápsula renal de Bowman.", isCorrect: false },
        { text: "Dilatação das artérias renais com destruição irreversível dos túbulos contorcidos distais.", isCorrect: false }
      ],
      explanation: "O ADH (vasopressina) atua nos ductos coletores aumentando a translocação de aquaporinas, permitindo que a água retorne ao sangue por osmose, concentrando a urina e evitando a desidratação."
    },

    // ==========================================
    // UECE - MATEMÁTICA (1ª E 2ª FASES)
    // ==========================================
    {
      difficulty: "medio",
      category: "Matemática • Geometria Plana",
      topic: "UECE 2024: POLÍGONOS REGULARES E HEXÁGONO",
      title: "Área de Hexágono Regular Inscrito",
      context: "Um hexágono regular convexo tem lado com medida igual a 8 cm. Sabendo que o hexágono é composto pela justaposição de 6 triângulos equiláteros congruentes de lado L = 8 cm:",
      question: "A área total desse hexágono regular em centímetros quadrados (cm²) é rigorosamente igual a:",
      options: [
        { text: "96√3 cm²", isCorrect: true },
        { text: "64√3 cm²", isCorrect: false },
        { text: "128√3 cm²", isCorrect: false },
        { text: "192 cm²", isCorrect: false }
      ],
      explanation: "A área de um triângulo equilátero de lado L é A_t = (L²·√3)/4 = (64·√3)/4 = 16√3 cm². A área do hexágono regular é 6 vezes essa área: A = 6 × 16√3 = 96√3 cm²."
    },
    {
      difficulty: "medio",
      category: "Matemática • Geometria Analítica",
      topic: "UECE 2024: EQUAÇÃO DA CIRCUNFERÊNCIA E RETAS",
      title: "Raio e Posição do Centro de uma Circunferência",
      context: "No plano cartesiano ortogonal ℝ², a equação de uma circunferência é expressa em sua forma geral por x² + y² - 6x - 8y = 0.",
      question: "As coordenadas do centro C e a medida do raio R dessa circunferência são, respectivamente:",
      options: [
        { text: "Centro C(3, 4) e raio R = 5", isCorrect: true },
        { text: "Centro C(-3, -4) e raio R = 25", isCorrect: false },
        { text: "Centro C(6, 8) e raio R = 10", isCorrect: false },
        { text: "Centro C(0, 0) e raio R = 7", isCorrect: false }
      ],
      explanation: "Completando quadrados: (x² - 6x + 9) + (y² - 8y + 16) = 9 + 16 ⇒ (x - 3)² + (y - 4)² = 25 = 5². Logo, o centro é C(3, 4) e o raio é R = √25 = 5."
    },
    {
      difficulty: "dificil",
      category: "Matemática • Análise Combinatória",
      topic: "UECE 2025: PRINCÍPIO FUNDAMENTAL DA CONTAGEM",
      title: "Formação de Números Pares com Algarismos Distintos",
      context: "Deseja-se formar números naturais pares de 4 algarismos distintos utilizando exclusivamente os elementos do conjunto {1, 2, 3, 4, 5, 6, 7}.",
      question: "A quantidade total de números pares de 4 algarismos distintos que podem ser formados é igual a:",
      options: [
        { text: "360", isCorrect: true },
        { text: "420", isCorrect: false },
        { text: "240", isCorrect: false },
        { text: "504", isCorrect: false }
      ],
      explanation: "Para o número ser par, o último algarismo das unidades deve ser escolhido entre {2, 4, 6} (3 opções). Fixado o último algarismo, restam 6 algarismos disponíveis para as outras 3 posições ordenadas: 6 × 5 × 4 = 120 maneiras. Total: 120 × 3 = 360 números pares."
    },
    {
      difficulty: "dificil",
      category: "Matemática • Números Complexos",
      topic: "UECE 2023: POTÊNCIAS DA UNIDADE IMAGINÁRIA",
      title: "Potências de (1 + i) e Simplificação Algébrica",
      context: "Considere a unidade imaginária i tal que i² = -1. Seja o número complexo z = (1 + i).",
      question: "O menor número inteiro positivo n para o qual a potência zⁿ = (1 + i)ⁿ é um número real negativo é:",
      options: [
        { text: "n = 4", isCorrect: true },
        { text: "n = 2", isCorrect: false },
        { text: "n = 6", isCorrect: false },
        { text: "n = 8", isCorrect: false }
      ],
      explanation: "Calculando as potências sucessivas: z² = (1 + i)² = 1 + 2i - 1 = 2i. Para n = 4: z⁴ = (z²)² = (2i)² = 4i² = -4. Como -4 é um número real estritamente negativo, o menor valor positivo de n é 4."
    },
    {
      difficulty: "medio",
      category: "Matemática • Sequências e Progressões",
      topic: "UECE 2025: PROGRESSÃO GEOMÉTRICA INFINITA",
      title: "Soma dos Termos de PG Decrescente",
      context: "Considere a progressão geométrica infinita (a₁, a₂, a₃, ...) cujos primeiros termos são (1/4, 1/16, 1/64, ...).",
      question: "O valor exato da soma de todos os infinitos termos dessa progressão geométrica convergente é:",
      options: [
        { text: "1/3", isCorrect: true },
        { text: "1/2", isCorrect: false },
        { text: "3/4", isCorrect: false },
        { text: "1/4", isCorrect: false }
      ],
      explanation: "O primeiro termo é a₁ = 1/4 e a razão é q = (1/16)/(1/4) = 1/4. Como |q| < 1, a soma infinita é S = a₁ / (1 - q) = (1/4) / (1 - 1/4) = (1/4) / (3/4) = 1/3."
    },
    {
      difficulty: "dificil",
      category: "Matemática • Polinômios e Álgebra",
      topic: "UECE 2024: TEOREMA DO RESTO DE D'ALEMBERT",
      title: "Divisão de Polinômios por Binômio de 1º Grau",
      context: "Seja o polinômio P(x) = x²⁰²⁴ + 3·x²⁰²³ + k, no qual k é uma constante real. Sabe-se que o resto da divisão de P(x) por (x + 1) é igual a 4.",
      question: "Pelo Teorema do Resto, o valor numérico da constante real k é igual a:",
      options: [
        { text: "6", isCorrect: true },
        { text: "2", isCorrect: false },
        { text: "-2", isCorrect: false },
        { text: "4", isCorrect: false }
      ],
      explanation: "Pelo Teorema do Resto: Resto = P(-1) = 4. Substituindo x = -1: (-1)²⁰²⁴ + 3·(-1)²⁰²³ + k = 4 ⇒ 1 + 3·(-1) + k = 4 ⇒ 1 - 3 + k = 4 ⇒ -2 + k = 4 ⇒ k = 6."
    }
  ,

    // ============================================================================
    // QUESTÕES CLONES - NATUREZA & MATEMÁTICA UECE (4 OPÇÕES)
    // ============================================================================
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Físico-Química",
      topic: "UECE 2025: CINÉTICA QUÍMICA E CATÁLISE (CLONE)",
      title: "Fatores que Modificam a Velocidade: Superfície de Contato",
      context: "Ao dissolver um comprimido efervescente de mesma massa em copos com água à mesma temperatura (25 °C), o comprimido triturado (em pó) reage com efervescência muito mais rápida do que o comprimido inteiro em pastilha sólida.",
      question: "O aumento na velocidade de liberação gasosa no caso do comprimido triturado é explicado cinematicamente pelo:",
      options: [
        { text: "Aumento da área superficial de contato, multiplicando o número de choques efetivos por unidade de tempo entre os reagentes.", isCorrect: true },
        { text: "Aumento expressivo do calor de reação que dobra o valor da entalpia padrão (ΔH).", isCorrect: false },
        { text: "Abaixamento forçado da constante de velocidade k de Arrhenius.", isCorrect: false },
        { text: "Consumo prematuro da água do solvente por eletrólise espontânea.", isCorrect: false }
      ],
      explanation: "Quanto maior o estado de divisão de um reagente sólido (maior superfície de contato), maior é a exposição das partículas às colisões moleculares favoráveis, elevando a velocidade reacional."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Química Orgânica",
      topic: "UECE 2024: POLÍMEROS SINTÉTICOS E MONÔMEROS (CLONE)",
      title: "Polietileno de Alta e Baixa Densidade (PEAD e PEBD)",
      context: "O polietileno (PE) é o polímero de maior consumo no planeta, amplamente utilizado desde sacolas plásticas flexíveis até tanques de combustível rígidos.",
      question: "O polietileno é produzido industrialmente por meio da reação de polimerização por adição do gás hidrocarboneto:",
      options: [
        { text: "Eteno (etileno: CH₂=CH₂).", isCorrect: true },
        { text: "Etino (acetileno: CH≡CH).", isCorrect: false },
        { text: "Metano (CH₄).", isCorrect: false },
        { text: "Benzeno aromático (C₆H₆).", isCorrect: false }
      ],
      explanation: "O polietileno é formado a partir da adição sucessiva de monômeros de eteno (etileno: CH₂=CH₂), em que a abertura da ligação pi conecta as moléculas em longas cadeias saturadas."
    },
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Equilíbrio Químico",
      topic: "UECE 2024: CONSTANTE DE EQUILÍBRIO Kc E Kp (CLONE)",
      title: "Princípio de Le Chatelier e Variação de Pressão",
      context: "Considere a síntese do gás amônia em equilíbrio a 450 °C: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) + calor (ΔH < 0).",
      question: "Com base no Princípio de Le Chatelier, para deslocar o equilíbrio no sentido de aumentar o rendimento na formação de amônia (NH₃), deve-se:",
      options: [
        { text: "Aumentar a pressão total sobre o sistema mantendo o volume reduzido.", isCorrect: true },
        { text: "Aumentar a temperatura do sistema térmico do reator.", isCorrect: false },
        { text: "Remover continuamente os reagentes N₂ e H₂ do recipiente.", isCorrect: false },
        { text: "Adicionar um gás nobre inerte à volume estritamente constante.", isCorrect: false }
      ],
      explanation: "Reagentes: 1+3 = 4 mols de gás; Produtos: 2 mols de gás. O aumento de pressão desloca o equilíbrio para o lado de menor volume gasoso (formação de NH₃). Sendo exotérmica, resfriar também ajudaria."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Termodinâmica e Gases",
      topic: "UECE 2023: ESTUDO DOS GASES IDEAIS (CLONE)",
      title: "Transformação Isotérmica e Lei de Boyle-Mariotte",
      context: "Um cilindro equipado com pistão móvel sem atrito contém gás hélio ideal à temperatura estritamente constante T. O volume ocupado pelo gás é reduzido lentamente de 6,0 L para 2,0 L.",
      question: "De acordo com a Lei de Boyle para transformações isotérmicas (P · V = constante), a pressão final do gás sofrerá:",
      options: [
        { text: "Um aumento para o triplo do seu valor original (3 · Pi).", isCorrect: true },
        { text: "Uma redução para um terço do seu valor original (Pi / 3).", isCorrect: false },
        { text: "Um aumento de apenas 20% em virtude da inércia dos átomos.", isCorrect: false },
        { text: "Uma redução completa para zero atm em vácuo manométrico.", isCorrect: false }
      ],
      explanation: "Isotérmica: P₁·V₁ = P₂·V₂ ⇒ Pi · 6,0 = Pf · 2,0 ⇒ Pf = (6/2) · Pi = 3·Pi. Reduzir o volume a 1/3 faz a pressão triplicar."
    },
    {
      difficulty: "facil",
      category: "Ciências da Natureza • Propriedades Coligativas",
      topic: "UECE 2025: TONOSCOPIA E EBULIOSCOPIA (CLONE)",
      title: "Osmose e Aplicação no Salgamento de Carnes",
      context: "O salgamento tradicional da carne de sol e da carne-seca (charque) praticado no sertão nordestino é um método ancestral de conservação de alimentos que impede a deterioração bacteriana.",
      question: "A eficácia biológica do salgamento na conservação dos alimentos baseia-se no princípio físico-químico da:",
      options: [
        { text: "Osmose, promovendo a perda maciça de água por desidratação das células dos micro-organismos decompositores devido ao meio hipertônico.", isCorrect: true },
        { text: "Condensação de vapor que resfria a carne abaixo do ponto crioscópico.", isCorrect: false },
        { text: "Polimerização de proteínas que transforma gordura em quitina sólida.", isCorrect: false },
        { text: "Liberação de radiação ultravioleta esterilizante pelos cristais de NaCl.", isCorrect: false }
      ],
      explanation: "A alta concentração de sal gera meio hipertônico; a água do interior das células bacterianas migra para o exterior por osmose, provocando plasmólise e inviabilizando sua proliferação."
    },
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Isomeria e Estereoquímica",
      topic: "UECE 2026: ISOMERIA ÓPTICA NO ÁCIDO LÁTICO (CLONE)",
      title: "Mistura Racêmica e Ausência de Desvio Óptico",
      context: "Um laboratório farmacêutico sintetiza em laboratório uma amostra equimolar (proporção 50% de enantiômero dextrogiro e 50% de enantiômero levogiro) do princípio ativo de um analgésico quiral.",
      question: "Ao submeter essa amostra equimolar ao feixe de luz de um polarímetro, constata-se que ela:",
      options: [
        { text: "É opticamente inativa por compensação externa, pois o desvio para a direita de um enantiômero é anulado pelo desvio para a esquerda do outro.", isCorrect: true },
        { text: "Desvia a luz polarizada a 90 graus no plano vertical por ressonância magnética.", isCorrect: false },
        { text: "Converte-se espontaneamente em um alcano cíclico desprovido de isomeria plana.", isCorrect: false },
        { text: "Apresenta atividade óptica dobrada em relação aos isômeros puros.", isCorrect: false }
      ],
      explanation: "Uma mistura racêmica é formada por partes iguais de enantiômeros d e l, resultando em desvio óptico nulo ($lpha = 0$) devido à compensação externa mútua."
    },
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Óptica Geométrica",
      topic: "UECE 2024: ESPELHOS ESFÉRICOS E ASSOCIAÇÃO (CLONE)",
      title: "Espelho Convexo e Retrovisores Automotivos",
      context: "Os espelhos retrovisores externos laterais dos automóveis modernos são convexos e trazem a inscrição gravada em inglês: 'Objects in mirror are closer than they appear'.",
      question: "A opção técnica pela geometria convexa nos espelhos retrovisores justifica-se pelo fato de que eles formam imagens:",
      options: [
        { text: "Virtuais, direitas e menores que o objeto, proporcionando um campo visual muito mais amplo ao motorista.", isCorrect: true },
        { text: "Reais, invertidas e ampliadas, projetadas diretamente na retina do condutor.", isCorrect: false },
        { text: "Completamente deformadas e destituídas de foco geométrico estável.", isCorrect: false },
        { text: "Dotadas de inversão cromática com ampliação de sombras noturnas.", isCorrect: false }
      ],
      explanation: "Espelhos convexos formam, para qualquer objeto real, imagens virtuais, direitas e reduzidas. A redução das imagens permite enquadrar um campo de visão consideravelmente maior."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Mecânica e Energia",
      topic: "UECE 2025: TRABALHO, ATRITO E FRENAGEM (CLONE)",
      title: "Trabalho da Força Gravitacional e Energia Potencial",
      context: "Um bloco de granito de massa 50 kg despenca do alto de uma pedreira cearense a partir do repouso de uma altura de 20 metros. Desprezando a resistência do ar e adotando g = 10 m/s²:",
      question: "A velocidade com que o bloco atinge o solo no fundo da cava da pedreira é igual a:",
      options: [
        { text: "20 m/s", isCorrect: true },
        { text: "40 m/s", isCorrect: false },
        { text: "10 m/s", isCorrect: false },
        { text: "200 m/s", isCorrect: false }
      ],
      explanation: "Conservação de energia mecânica: Ep = Ec ⇒ m·g·h = (1/2)·m·v² ⇒ v = √(2·g·h) = √(2 × 10 × 20) = √400 = 20 m/s."
    },
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Eletromagnetismo",
      topic: "UECE 2023: INDUÇÃO ELETROMAGNÉTICA DE FARADAY (CLONE)",
      title: "Transformadores de Tensão e Relação de Espiras",
      context: "Em uma subestação de energia elétrica da Enel Ceará, um transformador ideal recebe no enrolamento primário uma tensão alternada eficaz de 2200 V e deve fornecer no secundário uma tensão de 220 V para uma rede residencial.",
      question: "Para obter essa redução de tensão, a razão entre o número de espiras do primário (N₁) e do secundário (N₂) deve ser:",
      options: [
        { text: "N₁ / N₂ = 10", isCorrect: true },
        { text: "N₁ / N₂ = 0,1", isCorrect: false },
        { text: "N₁ / N₂ = 100", isCorrect: false },
        { text: "N₁ / N₂ = 1", isCorrect: false }
      ],
      explanation: "Equação do transformador ideal: V₁ / V₂ = N₁ / N₂ ⇒ 2200 / 220 = 10. O enrolamento primário deve possuir 10 vezes o número de espiras do enrolamento secundário."
    },
    {
      difficulty: "facil",
      category: "Ciências da Natureza • Genética Clássica",
      topic: "UECE 2025: SISTEMA ABO E TRANSFUSÃO SANGUÍNEA (CLONE)",
      title: "Determinação Genotípica e Cruzamentos ABO",
      context: "Um casal em que o pai é do grupo sanguíneo A (heterozigoto: Iᴬi) e a mãe é do grupo sanguíneo B (heterozigota: Iᴮi) aguarda o nascimento do seu primeiro descendente biológico.",
      question: "A probabilidade de esse casal conceber uma criança do grupo sanguíneo O (doador universal do sistema ABO) é de:",
      options: [
        { text: "25% (1/4)", isCorrect: true },
        { text: "50% (1/2)", isCorrect: false },
        { text: "0% (impossível)", isCorrect: false },
        { text: "75% (3/4)", isCorrect: false }
      ],
      explanation: "Cruzamento Iᴬi × Iᴮi: genótipos possíveis são IᴬIᴮ (tipo AB - 25%), Iᴬi (tipo A - 25%), Iᴮi (tipo B - 25%) e ii (tipo O - 25%). Logo, a chance de nascer tipo O é de 25%."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Ecologia e Cadeias Tróficas",
      topic: "UECE 2024: MAGNIFICAÇÃO TRÓFICA E POLUIÇÃO (CLONE)",
      title: "Fluxo Unidirecional de Energia vs. Ciclagem da Matéria",
      context: "Ao longo dos níveis tróficos de uma teia alimentar em equilíbrio biológico no Parque Estadual do Cocó em Fortaleza, os nutrientes minerais e a energia solar comportam-se de maneiras distintas.",
      question: "Sobre o fluxo energético e biogeoquímico nas teias ecológicas, é correto afirmar que:",
      options: [
        { text: "A energia flui de modo unidirecional e decrescente a cada nível trófico, enquanto a matéria é ciclada continuamente no ecossistema.", isCorrect: true },
        { text: "A energia acumula-se ciclicamente aumentando a cada nível em direção aos produtores.", isCorrect: false },
        { text: "A matéria desaparece completamente no nível dos carnívoros sem retorno ao solo.", isCorrect: false },
        { text: "Os decompositores produzem nova energia a partir do nada contrariando a termodinâmica.", isCorrect: false }
      ],
      explanation: "A energia dissipa-se como calor (fluxo unidirecional decrescente), ao passo que os elementos químicos (carbono, nitrogênio, fósforo) são reciclados pelos decompositores."
    },
    {
      difficulty: "medio",
      category: "Ciências da Natureza • Botânica e Evolução Vegetal",
      topic: "UECE 2023: ADAPTAÇÕES DA VEGETAÇÃO DA CAATINGA (CLONE)",
      title: "Plantas Caducifólias e o Mecanismo de Abscisão Foliar",
      context: "Uma das estratégias adaptativas mais espetaculares das árvores da Caatinga (como a catingueira e o umbuzeiro) durante os meses de estiagem rigorosa é a perda quase total de suas folhas, tornando a mata aparentemente cinzenta e morta.",
      question: "A queda estacional das folhas (caducifólia) representa para a planta do semiárido:",
      options: [
        { text: "Um mecanismo fisiológico de economia hídrica que cessa a perda de água por transpiração foliar estomática.", isCorrect: true },
        { text: "Um ataque viral letal que causa a decomposição instantânea das raízes axiais.", isCorrect: false },
        { text: "Um processo que impede a fecundação de flores polinizadas pelo vento.", isCorrect: false },
        { text: "Uma mutação aleatória que diminui o teor de amido no parênquima radicular.", isCorrect: false }
      ],
      explanation: "A perda das folhas (abscisão foliar) elimina a principal superfície de evapotranspiração da planta, permitindo que a árvore sobreviva aos meses secos com a água estocada nos troncos e raízes."
    },
    {
      difficulty: "dificil",
      category: "Ciências da Natureza • Fisiologia Humana",
      topic: "UECE 2025: OSMORREGULAÇÃO E HORMÔNIO ADH (CLONE)",
      title: "Ingestão de Bebidas Alcoólicas e a Inibição do ADH",
      context: "Após consumir bebidas alcoólicas em um evento festivo na orla de Fortaleza, uma pessoa saudável percebe que passa a urinar com frequência incomum, produzindo grande volume de urina límpida e clara.",
      question: "Esse efeito diurético imediato provocado pelo etanol decorre do fato de que o álcool:",
      options: [
        { text: "Inibe a secreção do hormônio antidiurético (ADH) pela hipófise posterior, diminuindo a reabsorção renal de água nos ductos coletores.", isCorrect: true },
        { text: "Estimula a síntese acelerada de insulina destruindo as ilhotas pancreáticas.", isCorrect: false },
        { text: "Provoca vasoconstrição renal total com necrose glomerular hemorrágica.", isCorrect: false },
        { text: "Aumenta drasticamente o teor de sódio no sangue atraindo água para a bexiga por capilaridade.", isCorrect: false }
      ],
      explanation: "O álcool etílico inibe a liberação de ADH pelo hipotálamo/neuroipófise. Sem ADH, os túbulos coletores reabsorvem menos água, levando à diurese intensa e desidratação (ressaca)."
    },
    {
      difficulty: "medio",
      category: "Matemática • Geometria Plana",
      topic: "UECE 2024: POLÍGONOS REGULARES E HEXÁGONO (CLONE)",
      title: "Apótema e Área do Triângulo Equilátero",
      context: "Um terreno triangular equilátero no município de Maracanaú possui lado medindo 12 metros de comprimento.",
      question: "A altura h e a área total A desse terreno triangular em metros quadrados são, respectivamente:",
      options: [
        { text: "Altura h = 6√3 m e Área A = 36√3 m²", isCorrect: true },
        { text: "Altura h = 12√3 m e Área A = 72√3 m²", isCorrect: false },
        { text: "Altura h = 6 m e Área A = 72 m²", isCorrect: false },
        { text: "Altura h = 3√3 m e Área A = 18√3 m²", isCorrect: false }
      ],
      explanation: "Em um triângulo equilátero de lado L = 12: Altura h = (L·√3)/2 = (12√3)/2 = 6√3 m. Área A = (L²·√3)/4 = (144√3)/4 = 36√3 m²."
    },
    {
      difficulty: "medio",
      category: "Matemática • Geometria Analítica",
      topic: "UECE 2024: EQUAÇÃO DA CIRCUNFERÊNCIA E RETAS (CLONE)",
      title: "Distância de um Ponto a uma Reta no Plano",
      context: "No plano cartesiano ℝ², considere o ponto P(1, 2) e a reta r representada pela equação geral 3x + 4y - 1 = 0.",
      question: "A distância d perpendicular do ponto P até a reta r é rigorosamente igual a:",
      options: [
        { text: "d = 2 unidades", isCorrect: true },
        { text: "d = 5 unidades", isCorrect: false },
        { text: "d = 10 unidades", isCorrect: false },
        { text: "d = 1 unidade", isCorrect: false }
      ],
      explanation: "Fórmula da distância de ponto a reta: d = |a·x₀ + b·y₀ + c| / √(a² + b²) = |3(1) + 4(2) - 1| / √(3² + 4²) = |3 + 8 - 1| / √25 = 10 / 5 = 2."
    },
    {
      difficulty: "dificil",
      category: "Matemática • Análise Combinatória",
      topic: "UECE 2025: PRINCÍPIO FUNDAMENTAL DA CONTAGEM (CLONE)",
      title: "Anagramas com Letras Juntas de uma Palavra",
      context: "Considere a palavra CEARÁ (composta pelas letras C, E, A, R, Á, que para fins de contagem combinatória trataremos como 5 letras distintas {C, E, A, R, X}).",
      question: "A quantidade de anagramas formados por essas 5 letras em que as vogais fiquem sempre juntas em bloco é igual a:",
      options: [
        { text: "24", isCorrect: true },
        { text: "120", isCorrect: false },
        { text: "60", isCorrect: false },
        { text: "12", isCorrect: false }
      ],
      explanation: "Tratando as duas vogais como um único bloco [Vogais]: temos 3 blocos consonantais/gerais (C, R e [V]) que permutam entre si de P₃ = 3! = 6 maneiras. As 2 vogais internas permutam de 2! = 2 maneiras. Total: 6 × 2 = 24 anagramas (considerando letras distintas)."
    },
    {
      difficulty: "dificil",
      category: "Matemática • Números Complexos",
      topic: "UECE 2023: POTÊNCIAS DA UNIDADE IMAGINÁRIA (CLONE)",
      title: "Módulo e Conjugado no Plano de Argand-Gauss",
      context: "Seja o número complexo z = 3 - 4i no plano de Argand-Gauss, onde i² = -1.",
      question: "O módulo |z| e o número complexo conjugado z̄ são expressos, respectivamente, por:",
      options: [
        { text: "|z| = 5 e z̄ = 3 + 4i", isCorrect: true },
        { text: "|z| = 25 e z̄ = -3 + 4i", isCorrect: false },
        { text: "|z| = 7 e z̄ = 3 - 4i", isCorrect: false },
        { text: "|z| = 1 e z̄ = -3 - 4i", isCorrect: false }
      ],
      explanation: "Módulo: |z| = √(a² + b²) = √(3² + (-4)²) = √(9 + 16) = √25 = 5. O conjugado z̄ inverte o sinal da parte imaginária: z̄ = 3 + 4i."
    },
    {
      difficulty: "medio",
      category: "Matemática • Sequências e Progressões",
      topic: "UECE 2025: PROGRESSÃO GEOMÉTRICA INFINITA (CLONE)",
      title: "Soma Finita dos Termos de uma PG",
      context: "Uma sequência em progressão geométrica finita tem primeiro termo a₁ = 3 e razão q = 2.",
      question: "A soma dos 6 primeiros termos (S₆) dessa progressão geométrica é rigorosamente igual a:",
      options: [
        { text: "189", isCorrect: true },
        { text: "192", isCorrect: false },
        { text: "96", isCorrect: false },
        { text: "381", isCorrect: false }
      ],
      explanation: "Soma de PG finita: Sn = a₁·(qⁿ - 1) / (q - 1). Para n = 6: S₆ = 3·(2⁶ - 1) / (2 - 1) = 3·(64 - 1) / 1 = 3 × 63 = 189."
    },
    {
      difficulty: "dificil",
      category: "Matemática • Polinômios e Álgebra",
      topic: "UECE 2024: TEOREMA DO RESTO DE D'ALEMBERT (CLONE)",
      title: "Polinômio Divisível e Raízes Reais",
      context: "O polinômio P(x) = x³ - 4x² + x + m é exatamente divisível pelo binômio (x - 2).",
      question: "Pelo Teorema de D'Alembert, o valor numérico do termo independente real m é:",
      options: [
        { text: "m = 6", isCorrect: true },
        { text: "m = -6", isCorrect: false },
        { text: "m = 4", isCorrect: false },
        { text: "m = 0", isCorrect: false }
      ],
      explanation: "Se P(x) é divisível por (x - 2), então o resto é zero: P(2) = 0. Substituindo x = 2: (2)³ - 4(2)² + (2) + m = 0 ⇒ 8 - 16 + 2 + m = 0 ⇒ -6 + m = 0 ⇒ m = 6."
    }
]
};

// Objeto de Acesso Unificado aos Bancos de Questões por Modalidade
const EXAM_DATABASES = {
  enem: QUESTION_DATABASE,
  uece: UECE_QUESTION_DATABASE
};
