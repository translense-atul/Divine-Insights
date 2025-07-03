# replit.md

## Overview

This is a professional spiritual guidance website called "Divine Insights" offering astrology, numerology, palmistry, and tarot reading services. The application is built as a full-stack web application with a modern React frontend and Express backend, featuring a clean landing page design with consultation booking capabilities.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend, backend, and shared components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom astrology-themed design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas shared between frontend and backend
- **Storage**: In-memory storage implementation with interface for easy migration to database

### Development Setup
- **Monorepo Structure**: Shared code between client and server
- **Type Safety**: Full TypeScript coverage with strict configuration
- **Development Server**: Vite dev server with HMR and Express API proxy

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with call-to-action and phone number
   - Services showcase (astrology, numerology, palmistry, tarot)
   - Pricing information (₹5 per minute)
   - About section with professional background
   - Contact form for consultation booking
   - Footer with navigation and social links

2. **UI Components**: Complete shadcn/ui component library including forms, cards, buttons, navigation, and responsive layouts

3. **Responsive Design**: Mobile-first approach with custom breakpoints and navigation

### Backend API Endpoints
1. **Contact Management**:
   - `POST /api/contacts` - Submit consultation request
   - `GET /api/contacts` - Retrieve all contacts (admin functionality)

2. **Data Validation**: Zod schemas ensure data integrity across all API endpoints

### Database Schema
```typescript
contacts: {
  id: serial (primary key)
  name: text (required)
  phone: text (required)
  email: text (required)
  service: text (required)
  message: text (optional)
  createdAt: timestamp (auto-generated)
}

users: {
  id: serial (primary key)
  username: text (unique, required)
  password: text (required)
}
```

## Data Flow

1. **User Interaction**: Users browse services and fill contact form
2. **Form Submission**: React Hook Form validates data using Zod schemas
3. **API Request**: Validated data sent to Express backend via TanStack Query
4. **Data Processing**: Backend validates again and stores in database
5. **Response Handling**: Success/error feedback shown to user via toast notifications

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle with PostgreSQL adapter
- **UI Framework**: Radix UI primitives
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Lucide React

### Development Dependencies
- **Build**: Vite with React plugin
- **Replit Integration**: Cartographer and runtime error overlay plugins
- **Styling**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public` directory
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Database**: Drizzle migrations in `migrations/` directory

### Environment Configuration
- **Development**: `NODE_ENV=development` with Vite dev server
- **Production**: `NODE_ENV=production` serving static files from Express
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection

### Scripts
- `npm run dev` - Development server with hot reload
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run db:push` - Deploy database schema changes

## Changelog
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.