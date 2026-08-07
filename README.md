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

- Plataforma: Render (build via Dockerfile do repositório)
- URL de produção: https://devops-u4-deployobservabilidade-6jxc.onrender.com

## Observabilidade (Passo 3)

- Ferramenta: Better Uptime
- Monitor: `/health`
- Dashboard público: _a preencher_

## Reflexão técnica

_A preencher no Passo 3._
