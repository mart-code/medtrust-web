# MedTrust

A medical platform connecting patients to doctors, health programmes, and medical centres. Includes real-time messaging, AI-powered symptom & image analysis, an admin approval workflow, and a map of nearby medical centres.

## Architecture

Monorepo with two apps:

- **`client/`** — Next.js 16 (App Router) + Tailwind CSS 4 + React 19
- **`server/`** — NestJS 11 + TypeORM + PostgreSQL

## User Roles

| Role | Description |
|------|-------------|
| **Patient** | Search for doctors, join programmes, use AI, view map. Identity is anonymised — only initials are shown to other roles. |
| **Doctor** | Accept patient connections, join programmes. Requires admin approval. |
| **Organisation** | Create and manage health programmes. Requires admin approval. |
| **Institution** | Physical medical centre with affiliated doctors. Requires admin approval. |
| **Super Admin** | Approves doctors, organisations, institutions, programmes. |

## Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL 14+
- npm

### Backend setup

```bash
cd server
npm install
cp .env.example .env   # Edit DB credentials, JWT secrets, ANTHROPIC_API_KEY
npm run start:dev
```

API runs at `http://localhost:3001/api` — Swagger docs at `http://localhost:3001/api/docs`.

### Frontend setup

```bash
cd client
npm install
npm run dev
```

App runs at `http://localhost:3000`.

## Features

1. **Auth** — JWT + refresh tokens, role-based access for 5 roles
2. **Patient anonymity** — non-patient roles see only initials
3. **Health issue search** — keyword/tag matching against doctor profiles
4. **Patient ↔ Doctor connections** — request/accept flow
5. **Programmes** — created by orgs, admin-approved, joined by patients & doctors
6. **Real-time messaging** — Socket.io for patient-doctor chat and programme channels
7. **Medical AI** — Claude API for symptom-text and image-vision analysis
8. **Map of medical centres** — Leaflet + Haversine SQL query
9. **Admin dashboard** — approval queues for doctors, institutions, orgs, programmes

## License

Private.
