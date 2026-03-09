# Manju's Makeover

Full-stack MERN website for a beauty parlour: React (Vite + Tailwind), Node/Express, MongoDB (Mongoose).

## Features

- **Home** – Hero, why choose us, WhatsApp CTA  
- **Services** – Salon service showcase with pricing  
- **Gallery** – Image gallery (add your images in `client/public/images/gallery`)  
- **Booking** – Appointment form + WhatsApp booking button  
- **Contact** – Contact form and visit info  
- **Admin Dashboard** – View and manage bookings (status update, delete)

## Setup

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)

### 1. Install dependencies

From project root:

```bash
npm run install:all
```

Or manually:

```bash
npm install
cd client && npm install
cd ../server && npm install
```

### 2. Backend (server)

```bash
cd server
cp .env.example .env
# Edit .env: set MONGODB_URI (e.g. mongodb://localhost:27017/manju-makeover) and PORT
npm run dev
```

API runs at `http://localhost:5000`. Health: `GET /api/health`.

### 3. Frontend (client)

From project root:

```bash
cd client
npm run dev
```

App runs at `http://localhost:3000`. Vite proxies `/api` to the backend.

### 4. Run both

From project root:

```bash
npm run dev
```

Starts server and client together (requires `concurrently` from root `npm install`).

## WhatsApp

Update the business number in:

- `client/src/constants/services.js` → `WHATSAPP_NUMBER` (e.g. `919876543210` for +91 98765 43210)
- Footer and Contact page use the same number via this constant.

## Project structure

```
client/
  src/
    api/           # API client
    components/    # Layout, shared UI
    pages/         # Home, Services, Gallery, Booking, Contact, AdminDashboard
    constants/     # Services list, time slots
    assets/
server/
  config/          # DB connection
  controllers/     # bookingController, contactController
  models/          # Booking, Contact
  routes/          # bookingRoutes, contactRoutes
```

## API

- `GET /api/bookings` – List bookings (admin)  
- `POST /api/bookings` – Create booking  
- `PATCH /api/bookings/:id/status` – Update booking status  
- `DELETE /api/bookings/:id` – Delete booking  
- `POST /api/contact` – Submit contact form  
