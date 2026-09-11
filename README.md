# HSW Global — Luxury Travel Advisory

> **Strapi 5 CMS** (Backend) + **Next.js 15** (Frontend)

## 🏗️ Project Structure

```
hswglobal/
├── backend/          ← Strapi 5 CMS
│   ├── src/api/      ← Content type schemas & controllers
│   ├── src/components/← Reusable components (stat, seo)
│   ├── config/       ← Server, database, middleware configs
│   └── package.json
├── frontend/         ← Next.js 15 App (App Router)
│   ├── app/          ← Pages (home, services, journal, about, club, forms)
│   ├── components/   ← Shared components (Header, Footer, HeroBanner)
│   ├── lib/          ← Strapi API client
│   └── package.json
├── design/           ← Design reference files
└── render.yaml       ← Render deployment blueprint
```

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ and npm 6+

### Backend (Strapi)

```bash
cd backend
npm install
npm run develop
```

Strapi admin panel: http://localhost:1337/admin
Create your first admin user on first launch.

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:3000

## 📋 Content Types

### Single Types (Pages)
| Type | Admin Path |
|------|-----------|
| Homepage | Content Manager → Homepage |
| About Page | Content Manager → About Page |
| Services Page | Content Manager → Services Page |
| High Society Club | Content Manager → High Society Club |
| Journal Page | Content Manager → Journal Page |

### Collection Types
| Type | Purpose |
|------|---------|
| Service | 8 signature services |
| Article | Journal/blog posts |
| Club Benefit | 6 membership benefits |
| Social Feed Item | Instagram feed images |
| Booking Inquiry | Form submissions |
| Membership Inquiry | Club applications |
| Navigation Item | Header nav links |

## 🔑 Setting API Permissions

After starting Strapi:
1. Go to Settings → Users & Permissions → Roles → Public
2. Enable `find` and `findOne` for all content types **except** Booking/Membership Inquiry
3. Enable `create` for Booking Inquiry and Membership Inquiry (for form submissions)
4. Save

## 🚢 Deployment

### Frontend → Vercel
1. Push to GitHub
2. Import repo in Vercel
3. Set root directory: `frontend`
4. Add env var: `NEXT_PUBLIC_STRAPI_URL` = your Render backend URL

### Backend → Render
1. Push to GitHub
2. In Render, create a new "Blueprint" from `render.yaml`
3. Or manually create a Web Service + PostgreSQL database
4. All secrets are auto-generated

## 📝 Environment Variables

### Backend (.env)
| Variable | Description |
|----------|-------------|
| HOST | Server host (0.0.0.0) |
| PORT | Server port (1337) |
| APP_KEYS | Application keys |
| API_TOKEN_SALT | API token salt |
| ADMIN_JWT_SECRET | Admin JWT secret |
| JWT_SECRET | JWT secret |
| DATABASE_URL | PostgreSQL URL (production) |

### Frontend (.env.local)
| Variable | Description |
|----------|-------------|
| NEXT_PUBLIC_STRAPI_URL | Strapi backend URL |

## 🎨 Design System

- **Primary:** Deep Navy `#0B1527`
- **Accent:** Gold `#C9A96E`
- **Display Font:** Playfair Display
- **Accent Font:** Cormorant Garamond
- **Body Font:** Montserrat
