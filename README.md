# 🐾 PetRide

> App estilo Uber voltado exclusivamente para transporte de pets — PWA responsivo para mobile, tablet e desktop.

![PetRide Banner](docs/banner.png)

## ✨ Visão Geral

O **PetRide** é uma plataforma completa de mobilidade pet-friendly que conecta tutores de animais com motoristas especializados no transporte seguro de pets. Funciona como PWA (Progressive Web App), acessível em qualquer dispositivo — celular, tablet ou desktop — sem necessidade de instalação.

---

## 🧩 Módulos do Sistema

| Módulo | Descrição |
|---|---|
| `apps/client-web` | PWA do tutor: solicitar corrida, rastrear, histórico, pagamento |
| `apps/driver-web` | App do motorista: aceitar corridas, rota, checklist pet |
| `apps/admin-web` | Painel admin: gestão de usuários, motoristas, tarifas, suporte |
| `packages/api` | Backend NestJS: REST API, WebSocket, autenticação |
| `packages/database` | Schema PostgreSQL + migrações Prisma |
| `packages/shared` | Types, validações e utilitários compartilhados |
| `infra/` | Docker Compose, Traefik, configs de deploy |

---

## 🛠️ Stack Tecnológica

### Frontend (PWA)
- **Next.js 14** com App Router — SSR + PWA
- **TypeScript**
- **Tailwind CSS**
- **Mapbox GL JS** — mapas e rotas em tempo real
- **Socket.IO Client** — rastreamento em tempo real
- **Zustand** — gerenciamento de estado
- **PWA** via `next-pwa` — instalável em qualquer dispositivo

### Backend
- **NestJS** — API REST + WebSocket
- **PostgreSQL** — banco principal
- **Redis** — cache + sessões + filas
- **Prisma ORM** — queries e migrações
- **Socket.IO** — comunicação em tempo real (localização, status de corrida)
- **JWT** — autenticação
- **Mercado Pago / Pix** — gateway de pagamento

### Infra
- **Docker + Docker Compose**
- **Traefik** — proxy reverso e SSL automático
- **Dokploy** — deploy e gerenciamento de containers

---

## 🐾 Funcionalidades Específicas de Pet

- ✅ Cadastro do pet (nome, espécie, raça, porte, foto)
- ✅ Tipo de serviço: com ou sem caixa de transporte
- ✅ Observações de saúde (vacinado, medicação, comportamento)
- ✅ Checklist do motorista ao embarque do animal
- ✅ Foto de confirmação de embarque/desembarque
- ✅ Histórico de corridas por pet
- ✅ Avaliação específica do cuidado com o animal
- ✅ Filtro de motoristas por porte do animal aceito

---

## 📐 Arquitetura

```
┌─────────────────────────────────────────────────────┐
│                   CLIENTE (PWA)                     │
│  Next.js + Tailwind — mobile / tablet / desktop     │
└───────────────┬─────────────────────────────────────┘
                │ REST + WebSocket
┌───────────────▼─────────────────────────────────────┐
│                  BACKEND (NestJS)                   │
│  Auth │ Corridas │ Pagamentos │ Notificações │ Pets  │
└───────┬───────────┬──────────────────────────────────┘
        │           │
┌───────▼──┐  ┌─────▼──────┐
│PostgreSQL│  │   Redis    │
│ (dados)  │  │ (cache/fila)│
└──────────┘  └────────────┘
```

---

## 🚀 Como Rodar (Desenvolvimento)

### Pré-requisitos
- Node.js >= 20
- Docker & Docker Compose
- pnpm (recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/aldorip/pet-ride.git
cd pet-ride

# 2. Instale as dependências
pnpm install

# 3. Configure variáveis de ambiente
cp .env.example .env
# Edite .env com suas chaves

# 4. Suba os serviços de infra (banco + redis)
docker compose -f infra/docker-compose.dev.yml up -d

# 5. Execute as migrações
pnpm --filter @pet-ride/api db:migrate

# 6. Rode todos os apps em paralelo
pnpm dev
```

Acesse:
- **App Cliente:** http://localhost:3000
- **App Motorista:** http://localhost:3001
- **Admin:** http://localhost:3002
- **API:** http://localhost:4000

---

## 🗄️ Variáveis de Ambiente

Veja o arquivo [`.env.example`](.env.example) com todas as variáveis necessárias.

---

## 📦 Deploy com Dokploy + Docker

Veja a pasta [`infra/`](infra/) com:
- `docker-compose.prod.yml` — compose de produção
- `traefik/` — configuração do proxy reverso
- `dokploy/` — configuração de deploy automatizado

---

## 🗺️ Roadmap

- [x] Estrutura do monorepo
- [x] Schema do banco de dados
- [x] Docker Compose (dev + prod)
- [ ] Autenticação JWT (cliente + motorista)
- [ ] CRUD de pets
- [ ] Solicitação e matching de corridas
- [ ] Rastreamento em tempo real (WebSocket + Mapbox)
- [ ] Integração Mercado Pago / Pix
- [ ] Notificações push (PWA)
- [ ] Painel admin
- [ ] App motorista
- [ ] Testes E2E

---

## 📄 Licença

MIT © [Aldo Ribeiro](https://github.com/aldorip)
