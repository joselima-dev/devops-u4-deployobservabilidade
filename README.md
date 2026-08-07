# Deploy Automatizado com Observabilidade em Nuvem

![CI/CD](https://github.com/joselima-dev/devops-u4-deployobservabilidade/actions/workflows/ci-cd.yml/badge.svg)

API simples em Node.js + Express, criada para a atividade da Unidade 4 (DevOps):
pipeline de CI/CD, deploy automatizado em nuvem e observabilidade básica.

## Endpoints

| Método | Rota            | Descrição                                    |
|--------|-----------------|-----------------------------------------------|
| GET    | `/`             | Mensagem de status da API                    |
| GET    | `/health`       | Health check (status, uptime, timestamp)     |
| GET    | `/api/tarefas`  | Lista fixa de tarefas em JSON                 |

## Rodando localmente

```bash
npm install
npm run lint
npm test
npm start
```

O servidor sobe em `http://localhost:3000`.

## Pipeline de CI/CD

O workflow em `.github/workflows/ci-cd.yml` roda a cada push/PR na branch `main`:

1. instala as dependências (`npm ci`);
2. roda o lint (`npm run lint`);
3. roda os testes automatizados (`npm test`).

## Deploy (Passo 2)

- Plataforma: Render (build via Dockerfile do repositório, sem depender de Docker Hub)
- URL de produção: https://devops-u4-deployobservabilidade-6jxc.onrender.com
- O job `deploy` do workflow (`.github/workflows/ci-cd.yml`) só roda após lint+testes passarem e apenas na branch `main`; ele dispara o **Deploy Hook** do Render usando o secret `RENDER_DEPLOY_HOOK_URL`.

## Observabilidade (Passo 3)

- Ferramenta: Better Uptime (Better Stack)
- Monitor: `GET /health`, verificado a cada 3 minutos
- Alerta configurado: e-mail em caso de indisponibilidade/timeout
- Dashboard público: https://faculdade.betteruptime.com

## Reflexão técnica

Ver [reflexao-tecnica.md](reflexao-tecnica.md).
