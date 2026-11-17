# 🦉 ENEM Lingo — O Duolingo do ENEM & Vestibulares

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<p align="center">
  <b>Plataforma interativa de gamificação educacional focada no ENEM (incluindo matriz 2026) e vestibulares estaduais (UECE).</b><br>
  Estude no formato Duolingo com sistema de ofensivas (streaks), vidas, gemas, feedback pedagógico e motor procedural de questões infinitas.
</p>

<p align="center">
  <a href="https://nycolas007el.github.io/Enem-Lingo/" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Acessar_Online-GitHub_Pages-58cc02?style=for-the-badge" alt="Deploy Online" />
  </a>
</p>

<p align="center">
  <img src="./docs/preview.png" alt="Demonstração do ENEM Lingo" width="850px" style="border-radius: 10px;" />
</p>

[Visão Geral](#-visão-geral) •
[Novidades Recentes](#-novidades-recentes) •
[Motor Procedural & Anti-Repetição](#-motor-de-questões-infinitas-procedural) •
[Funcionalidades Gamificadas](#-funcionalidades-gamificadas) •
[Matriz de Conteúdos](#-matriz-de-conteúdos-coberta) •
[Tecnologias](#-tecnologias-utilizadas) •
[Como Executar](#-como-executar-o-projeto) •
[Autor](#-autor)

</div>

---

## 📖 Visão Geral

O **ENEM Lingo** transforma a preparação para o Exame Nacional do Ensino Médio e vestibulares tradicionais em uma experiência dinâmica, competitiva e envolvente. Com interface inspirada no padrão visual e motivacional do **Duolingo**, o estudante treina questões organizadas pelos dias oficiais do exame com mecânicas de retenção ativa e gabaritos comentados.

---

## 🚀 Novidades Recentes

As últimas atualizações elevaram a plataforma a um novo patamar pedagógico e técnico:

1. **⚡ Motor de Questões Infinitas Procedurais (`infinite-engine.js`):**
   - Geradores algorítmicos dinâmicos que criam novas questões matemáticas e científicas em tempo real, alterando enunciados, valores, variáveis e alternativas a cada rodada.
   - **Sistema Anti-Repetição Estrita:** Unicidade garantida na mesma rodada (nenhum conteúdo duplicado) com **cooldown de 3 rodadas consecutivas** salvo em `localStorage`.
   - Suporte completo a rodadas do **Dia 1**, **Dia 2** e **Rodada Mista Global**.

2. **📝 Incorporação dos Temas do ENEM 2026 e UECE:**
   - Adição de blocos prioritários de alta recorrência do exame: **Redação & SUS, Ecologia & FBN (Fixação Biológica de Nitrogênio), Eletrodinâmica, Função Quadrática e Geometria Plana**.
   - Cobertura de questões focadas no vestibular da **UECE** e calibragem fina dos níveis de dificuldade (*fácil, médio e difícil*).

3. **🎯 Rigor Pedagógico e Calibragem de Alternativas:**
   - **Paralelismo Sintático e Simetria:** Todas as alternativas foram padronizadas em tamanho, estrutura gramatical e estilo para eliminar "pistas" visuais ou discrepâncias que revelassem o gabarito.
   - Camuflagem completa de distratores de alta qualidade pedagógica.

4. **📱 Otimizações de UX e Mobile Touch:**
   - Tela inicial aprimorada com margem ampliada para 120px e rolagem suave via `flex-start` com suporte nativo a touch scroll em smartphones.

---

## ⚙️ Motor de Questões Infinitas Procedural

O módulo procedural (`infinite-engine.js`) gera dinamicamente questões parametrizadas cobrindo:
- **Eletrodinâmica:** Consumo elétrico residencial, potência nominal em Watts, cálculo de kWh e faturas de energia.
- **Geometria Espacial & Plana:** Volume de reservatórios (paralelepípedos e cilindros), conversão métrica e capacidade em litros.
- **Cinemática & Termologia:** Movimento retilíneo uniforme (MRU/MRUV), calorimetria e trocas de calor.
- **Físico-Química:** Concentração de soluções, estequeometria e termoquímica.
- **Matemática Financeira & Estatística:** Juros simples/compostos, porcentagens, média, moda e mediana.
- **Linguagens & Comunicação:** Funções da linguagem e identificação de figuras de linguagem em microtextos inéditos.

---

## 🎮 Funcionalidades Gamificadas

- 🔥 **Ofensiva Diária (Streak):** Foguinho persistente que registra os dias consecutivos de dedicação via `localStorage`.
- ❤️ **Sistema de Vidas & Gemas:** Desafio com perda de vidas em erros e acúmulo de gemas virtuais por acerto.
- 🎲 **Embaralhamento Fisher-Yates:** As 5 alternativas (A, B, C, D, E) são redistribuídas de forma randômica e balanceada.
- 💡 **Feedback Explicativo Imediato:** Explicação didática passo a passo disponibilizada imediatamente após a resolução.
- 🔊 **Feedback Visual & Sonoro:** Animações interativas para acertos e erros, com design responsivo em modo escuro (Dark Mode).

---

## 📚 Matriz de Conteúdos Coberta

### 🗓️ Dia 1
- **Linguagens, Códigos e suas Tecnologias:** Funções da linguagem, estratégias argumentativas, intertextualidade, variações linguísticas e figuras de linguagem.
- **Ciências Humanas:** Cidadania e Direitos, Era Vargas, divisão dos poderes (Montesquieu), geopolítica e história contemporânea.
- **Redação:** Competências da dissertação-argumentativa e temáticas sociais/SUS.

### 🗓️ Dia 2
- **Ciências da Natureza:**
  - *Física:* Eletrodinâmica (circuitos, potência, energia), Ondulatória (Doppler), Termodinâmica e Óptica.
  - *Química:* Termoquímica, Equilíbrio Químico, Estequiometria e Química Ambiental.
  - *Biologia:* Ecologia trófica, bioacumulação, ciclos biogeoquímicos e genética mendeliana.
- **Matemática e suas Tecnologias:** Álgebra, funções afim e quadrática, razão, proporção, escalas, probabilidade, combinatória e trigonometria.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica acessível e responsiva.
- **CSS3:** Sistema de design moderno inspirado no Duolingo, variáveis customizadas e animações com transições fluidas.
- **JavaScript Moderno (ES6+):**
  - Motor algorítmico procedural com anti-repetição e gerenciamento de estado.
  - Algoritmo de randomização Fisher-Yates.
  - Persistência assíncrona local com Web Storage API (`localStorage`).

---

## 📁 Estrutura do Projeto

```text
Enem-Lingo/
├── index.html           # Interface principal, menus, telas e lógica visual
├── infinite-engine.js   # Motor de geração procedural de questões infinitas e anti-repetição
├── questions.js         # Banco estático de questões calibradas (ENEM & UECE)
├── docs/
│   └── preview.png      # Screenshot oficial da aplicação real
└── README.md            # Documentação completa do projeto
```

---

## 🚀 Como Executar o Projeto

A aplicação é 100% client-side (roda diretamente no navegador sem necessidade de backend):

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/nycolas007el/Enem-Lingo.git
   cd Enem-Lingo
   ```

2. **Execute:**
   - Dê um clique duplo em `index.html` para abrir diretamente no navegador; **ou**
   - Acesse diretamente pelo [GitHub Pages](https://nycolas007el.github.io/Enem-Lingo/).

---

## 👨‍💻 Autor

Desenvolvido por **Nycolas**!

[![GitHub](https://img.shields.io/badge/GitHub-nycolas007el-181717?style=for-the-badge&logo=github)](https://github.com/nycolas007el)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Nycolas_Moreira-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nycolas-moreira-286206343/)
