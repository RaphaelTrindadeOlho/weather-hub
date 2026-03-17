# 🌤️ Weather-Hub

Uma aplicação Full Stack para consulta de dados meteorológicos em tempo real. O projeto integra uma API de clima pública (OpenWeatherMap) com uma interface de usuário moderna e responsiva.

> **Projeto de Estudo**: Este repositório é desenvolvido como projeto de aprendizado de conceitos Full Stack, APIs RESTful e boas práticas de desenvolvimento.

---

## ✨ Funcionalidades

- 🔍 **Busca de Clima**: Consulte o clima de qualquer cidade do mundo
- 🌡️ **Informações Detalhadas**: Temperatura, descrição do clima e ícone visual
- 💻 **Interface Responsiva**: Design otimizado para desktop e mobile
- 🔗 **API RESTful**: Backend bem estruturado com Express.js
- ⚡ **Frontend Moderno**: React com Vite para compilação rápida

---

## 🛠️ Tech Stack

### Backend
- **Express.js** - Framework web para Node.js
- **CORS** - Middleware para compartilhamento de recursos
- **HTTPS** - Requisições seguras para APIs externas

### Frontend
- **React** - Biblioteca para construção de interfaces
- **Vite** - Bundler/Dev server ultrarrápido
- **CSS3** - Estilização e responsividade

### APIs Externas
- **OpenWeatherMap API** - Dados meteorológicos em tempo real

---

## 📁 Estrutura do Projeto

```
Weather-Hub/
├── docker-compose.yml         # Orquestração de containers (backend e frontend)
├── README.md                  # Documentação do projeto
│
├── backend/
│   ├── app.js                 # Servidor Express e endpoints
│   ├── Dockerfile             # Configuração para imagem Docker
│   ├── .dockerignore          # Arquivos ignorados na build Docker
│   └── package.json           # Dependências do backend
│
├── frontend/
│   ├── Dockerfile             # Configuração para imagem Docker
│   ├── .dockerignore          # Arquivos ignorados na build Docker
│   ├── README.md              # Documentação específica do frontend
│   ├── vite.config.js         # Configuração do Vite
│   ├── eslint.config.js       # Configuração do ESLint
│   ├── package.json           # Dependências do frontend
│   ├── index.html             # HTML base
│   └── src/
│       ├── App.jsx            # Componente principal
│       ├── App.css            # Estilos globais
│       ├── main.jsx           # Entrada da aplicação
│       ├── index.css          # Resets e variáveis CSS
│       └── assets/
│           └── components/
│               ├── FormClimate.jsx        # Formulário de busca
│               └── ExibitionClimate.jsx   # Exibição de dados
```

---

## 🚀 Como Começar

### Pré-requisitos

- **Docker** e **Docker Compose** (recomendado)
- **Node.js** (v16.0.0 ou superior) - *apenas se rodar localmente sem Docker*
- **npm** ou **yarn** - *apenas se rodar localmente sem Docker*
- **Chave de API OpenWeatherMap** (gratuita em [openweathermap.org](https://openweathermap.org/api))

### 🐳 Instalação e Execução com Docker (Recomendado)

#### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/Weather-Hub.git
cd Weather-Hub
```

#### 2. Configurar variável de ambiente

Crie um arquivo `.env` na pasta `backend/`:

```env
API_KEY=sua_chave_openweathermap_aqui
```

#### 3. Iniciar com Docker Compose

```bash
docker compose up --build
```

#### 4. Acessar a aplicação

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

### 💻 Instalação e Execução Local (Sem Docker)

#### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/Weather-Hub.git
cd Weather-Hub
```

#### 2. Configurar Backend

```bash
cd backend

# Instalar dependências
npm install

# Definir variável de ambiente
export API_KEY=sua_chave_openweathermap_aqui

# Iniciar servidor (porta 3000)
npm run dev
```

#### 3. Configurar Frontend (em outro terminal)

```bash
cd frontend

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento (porta 5173)
npm run dev
```

#### 4. Acessar a aplicação

Abra seu navegador e acesse:
```
http://localhost:5173
```

---

## � Docker - Estrutura

### Dockerfiles

**Backend** (`backend/Dockerfile`):
- Node.js 20 slim
- Instala dependências e executa `npm run dev`
- Expõe porta 3000

**Frontend** (`frontend/Dockerfile`):
- Node.js 20 slim
- Instala dependências e executa `npm run dev`
- Expõe porta 5173

### Docker Compose

O arquivo `docker-compose.yml` orquestra:
- Serviço `backend`: API Express na porta 3000
- Serviço `frontend`: Vite na porta 5173
- Volume compartilhado para hot-reload
- `.dockerignore` para otimizar tamanho das imagens

### Comandos Úteis Docker

```bash
# Build e iniciar containers
docker compose up --build

# Parar containers
docker compose stop

# Remover containers e volumes
docker compose down

# Ver logs em tempo real
docker compose logs -f

# Ver logs de um serviço específico
docker compose logs -f backend
```

---

## �📡 API Endpoints

### POST `/weather`

Busca dados meteorológicos para uma cidade específica.

**Request:**
```bash
curl -X POST http://localhost:3000/weather \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "city=São Paulo"
```

**Request Body:**
```json
{
  "city": "São Paulo"
}
```

**Response (200 OK):**
```json
{
  "temperature": 28.5,
  "description": "céu limpo",
  "iconUrl": "http://openweathermap.org/img/wn/01d.png"
}
```

**Campos da Resposta:**
- `temperature` (number): Temperatura atual em Celsius
- `description` (string): Descrição do clima
- `iconUrl` (string): URL do ícone visual do clima

---

## 🔑 Variáveis de Ambiente

### Backend

Crie um arquivo `.env` na pasta `backend/`:

```env
API_KEY=sua_chave_openweathermap_aqui
```

**Como obter a chave:**
1. Acesse [OpenWeatherMap](https://openweathermap.org/)
2. Crie uma conta (gratuita)
3. Vá para "API Keys" no painel de controle
4. Copie sua chave de API

---

## 📝 Scripts Disponíveis

### Backend
```bash
# Iniciar servidor
node app.js
```

### Frontend
```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar linter
npm run lint

# Preview da build
npm run preview
```

---

## 🎯 Roadmap & Melhorias Futuras

### Próximas Etapas (Conforme Aprendizado)

- [ ] **Containerização**
  - Dockerfile para backend e frontend
  - Docker Compose para orquestração
  - Deploy com Docker

- [ ] **Banco de Dados**
  - MongoDB ou PostgreSQL
  - Persistência de buscas frequentes
  - Histórico de clima por cidade

- [ ] **Autenticação**
  - JWT para segurança
  - Login de usuários
  - Favoritos salvos por usuário

- [ ] **Melhorias de Código**
  - Variáveis de ambiente centralizadas
  - Testes unitários
  - Tratamento de erros robusto

- [ ] **Arquitetura**
  - Padrão MVC no backend
  - Serviços e repositórios
  - Estrutura modular no frontend

- [ ] **Performance**
  - Cache de respostas
  - Rate limiting
  - Compressão Gzip

- [ ] **UX/UI**
  - Previsão de clima para 5 dias
  - Localização automática do usuário
  - Temas dark/light

---

## 🐛 Tratamento de Erros

### Possíveis Erros e Soluções

| Erro | Causa | Solução |
|------|-------|--------|
| `API_KEY undefined` | Chave não configurada | Configure a variável de ambiente `API_KEY` |
| `CORS policy error` | Frontend e backend em origens diferentes | Verifique se CORS está habilitado no backend |
| `City not found` | Cidade não existe ou digitação correta | Verifique o nome da cidade |
| `Connection refused on port 3000` | Backend não está rodando | Inicie o servidor: `node app.js` |

---

## 📚 Conceitos de Aprendizado

Este projeto aborda os seguintes conceitos:

- **APIs RESTful**: Construção e consumo de endpoints HTTP
- **CORS**: Compartilhamento seguro de recursos entre domínios
### Frameworks e Ferramentas
- [Express.js Docs](https://expressjs.com/pt-br/)
- [React Official Docs](https://pt-br.react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [MDN - CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)

### DevOps e Versionamento
- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Git Documentation](https://git-scm.com/doc)
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/)

### IAs Auxiliadoras
- [GitHub Copilot - Claude Haiku](https://github.com/features/copilot)
- [Google Gemini Pro](https://gemini.google.com/)
- [Claude AI](https://claude.ai/

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Para melhorias futuras:

1. **Fork** o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/melhoria`)
3. Commit suas mudanças (`git commit -am 'Adiciona melhoria'`)
4. Push para a branch (`git push origin feature/melhoria`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja detalhes no arquivo `package.json`.

---

## 👤 Autor

**Raphael** - Estudante de Full Stack Development

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- Email: seu-email@exemplo.com

---

## 📞 Suporte

Encontrou um problema? Abra uma [issue](https://github.com/seu-usuario/Weather-Hub/issues) no repositório.

---

## 🎓 Referências e Recursos

- [Express.js Docs](https://expressjs.com/pt-br/)
- [React Official Docs](https://pt-br.react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [MDN - CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS)

---

**Desenvolvido com ❤️ para aprendizado e portfolio**

