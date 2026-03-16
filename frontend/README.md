# 🌤️ Weather Dashboard | Projeto Full-Stack

Um projeto **Full-Stack** de portfólio desenvolvido para consulta de dados meteorológicos em tempo real. A aplicação demonstra conceitos modernos de desenvolvimento web, incluindo gerenciamento de estado com React Hooks, segurança de API, e integração back-end com Express.js.

> 📚 **Contexto**: Projeto desenvolvido durante estudos autodidatas de desenvolvimento full-stack, com foco em Backend e Infraestrutura. 4º semestre, FATEC.

---

## 🎯 Tech Stack & Habilidades

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,nodejs,express,tailwind,js,linux,docker" alt="Tecnologias utilizadas" />
</p>

**Frontend:** React • Vite • Tailwind CSS • JavaScript ES6+  
**Backend:** Node.js • Express.js  
**API:** OpenWeatherMap  
**Environment:** Ubuntu Linux  
**Ferramentas:** Git • Docker (Roadmap) • Environment Variables

---

## ✨ Funcionalidades Principais

- 🔍 **Busca Dinâmica de Clima**: Consulte o clima de qualquer cidade do mundo em tempo real
- 🎨 **Interface Responsiva**: Design moderno e adaptável para diferentes tamanhos de tela
- 🔒 **Segurança de API**: Backend atua como proxy, protegendo a chave da API OpenWeather
- 📊 **Renderização Eficiente**: Manipulação de estados e renderização condicional com React Hooks
- 🌍 **Ambiente Linux**: Desenvolvido e testado 100% em Ubuntu Linux

---

## 🏗️ Conceitos Aplicados

### React & Hooks
- `useState`: Gerenciamento de estado de dados meteorológicos e loading
- `useEffect`: Requisições HTTP e efeitos colaterais
- Renderização condicional com operador ternário
- Prop drilling e comunicação entre componentes

### Backend & Segurança
- API REST com Express.js
- Variáveis de ambiente (`.env`) para proteção de credenciais
- CORS configurado para comunicação segura entre cliente e servidor
- Proxy back-end para intermediar requisições externas

### Boas Práticas
- Estrutura de componentes reutilizáveis
- Build otimizado com Vite
- Linting com ESLint
- Versionamento com Git Conventional Commits

---

## 📁 Estrutura do Projeto

```
Weather-Dashboard/
│
├── frontend/                    # Aplicação React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── FormClimate.jsx    # Formulário de busca
│   │   │   └── ExibitionClimate.jsx # Exibição de dados
│   │   ├── App.jsx              # Componente principal
│   │   ├── main.jsx             # Entrada da aplicação
│   │   └── styles/              # CSS e Tailwind
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── package.json
│
├── backend/                     # API proxy Node.js
│   ├── app.js                   # Servidor Express
│   ├── .env.example
│   └── package.json
│
└── README.md

```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js v16.0.0+
- npm ou yarn
- Conta OpenWeatherMap (gratuita)

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/seu-usuario/weather-dashboard.git
cd weather-dashboard
```

### 2️⃣ Configuração do Backend

```bash
cd backend

# Instale as dependências
npm install

# Crie arquivo .env (copie de .env.example)
cp .env.example .env

# Adicione sua chave OpenWeatherMap
echo "API_KEY=sua_chave_aqui" >> .env

# Inicie o servidor (rodará em http://localhost:3000)
npm start
```

### 3️⃣ Configuração do Frontend

```bash
cd ../frontend

# Instale dependências
npm install

# Inicie servidor de desenvolvimento (http://localhost:5173)
npm run dev
```

### 4️⃣ Acesse a aplicação

Abra seu navegador e acesse: **http://localhost:5173**

---

## 🔗 Endpoints da API

### `POST /weather`

Retorna dados meteorológicos de uma cidade.

**Request:**
```bash
curl -X POST http://localhost:3000/weather \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "city=São Paulo"
```

**Response (200 OK):**
```json
{
  "temperature": 28.5,
  "description": "céu limpo",
  "iconUrl": "http://openweathermap.org/img/wn/01d.png"
}
```

---

## 📚 Scripts Disponíveis

### Frontend
```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run lint     # Verifica código com ESLint
npm run preview  # Preview da build
```

### Backend
```bash
npm start        # Inicia servidor Express
```

---

## 🗺️ Roadmap & Próximas Etapas

- [ ] **Containerização com Docker**
  - Dockerfile para frontend e backend
  - Docker Compose para orquestração
  - Deploy con containers

- [ ] **Banco de Dados**
  - MongoDB ou PostgreSQL
  - Persistência de buscas frequentes
  - Histórico de consultas

- [ ] **Autenticação & Autorização**
  - Sistema de login com JWT
  - Gerenciamento de usuários
  - Favoritos salvos por usuário

- [ ] **Testes**
  - Testes unitários com Jest/Vitest
  - Testes de integração
  - E2E com Cypress

- [ ] **Performance & UX**
  - Cache de respostas
  - Previsão para 5 dias
  - Tema dark/light
  - Geolocalização automática

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| `API_KEY undefined` | Configure a variável no `.env` |
| `CORS policy error` | Verifique se backend está rodando em `localhost:3000` |
| `Porta 3000/5173 em uso` | Mude a porta ou encerre o processo anterior |
| `City not found` | Verifique o nome da cidade (use inglês para melhor resultado) |

---

## 💡 O Que Aprendi

Este projeto foi fundamental para entender:
- Fluxo de dados em aplicações React
- Ciclo de vida de componentes com Hooks
- Arquitetura cliente-servidor
- Segurança: por que proteger API keys
- Versionamento com Git Conventional Commits
- Dev experience com Vite vs webpack

---

## 📞 Conexões

- **GitHub**: [@RaphaelTrindade](https://github.com/seu-usuario)
- **LinkedIn**: [Raphael Trindade](https://linkedin.com/in/seu-perfil)
- **Email**: raphael@exemplo.com

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja [LICENSE](LICENSE) para mais detalhes.

---

**Desenvolvido com ❤️ para aprendizado e Growth em Backend & Infraestrutura**