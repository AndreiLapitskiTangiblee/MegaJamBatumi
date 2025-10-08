# Mega Jam Batumi - Music Event Application

## Overview

Mega Jam Batumi is a music event management application for a live performance event scheduled for October 19, 2025. The application displays information about 21 performers, their songs, and the musicians involved in each performance. It provides a clean, content-focused interface for browsing bands, viewing song details, and exploring musician collaborations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (no complex routing requirements)
- **TanStack Query (React Query)** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Design system follows "New York" style variant with custom color palette
- Theme support: Light and dark modes with localStorage persistence

**Design Philosophy**
- Content-first minimalism inspired by Spotify/Apple Music
- Card-based information architecture for easy scanning
- Responsive design with mobile-first considerations
- Deliberate use of negative space and typography hierarchy

**State Management**
- React Query for async state and caching
- Local component state with React hooks
- No global state management library (data requirements are straightforward)

### Backend Architecture

**Server Framework**
- **Express.js** on Node.js for RESTful API endpoints
- TypeScript for type safety across the stack
- Development/production environment configuration via NODE_ENV

**Data Storage Strategy**
- Currently using **in-memory storage** (MemStorage class) for development
- Schema designed for eventual PostgreSQL migration using Drizzle ORM
- Shared TypeScript interfaces between client and server for type consistency

**API Design**
- RESTful endpoints prefixed with `/api`
- JSON request/response format
- Middleware for request logging and error handling
- CORS and body parsing configured via Express middleware

### Data Models

**Core Entities**
- **Band**: Performer information (name, genre, origin, description)
- **Song**: Track details (title, duration, YouTube URL, tonality)
- **Musician**: Individual performers with instrument assignments per song
- **User**: Authentication schema (currently unused but prepared)

**Data Relationships**
- Songs belong to Bands (one-to-many)
- Musicians are assigned to Songs with specific instruments (many-to-many)
- Currently stored in TypeScript files (`client/src/data/bands.ts`)

### Routing & Navigation

**Application Routes**
- `/` - Band list view with cards or table layout toggle
- `/band/:id` - Individual band's song list
- `/musician/:name` - Songs featuring a specific musician
- `*` - 404 not found page

**Design Pattern**
- Client-side routing only (SPA architecture)
- No server-side rendering requirements
- Deep linking supported via URL parameters

### Development Workflow

**Build Pipeline**
- Vite handles client bundle with React Fast Refresh
- esbuild bundles server code for production
- Shared code in `/shared` directory accessed by both client and server
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**Development Tools**
- Replit-specific plugins for error overlay and dev banner
- TypeScript strict mode enabled
- Hot module replacement in development
- Request logging middleware for API debugging

## External Dependencies

### Database & ORM
- **Drizzle ORM** - Type-safe SQL query builder configured for PostgreSQL
- **@neondatabase/serverless** - Serverless PostgreSQL driver
- Database migrations managed in `/migrations` directory
- Schema defined in `shared/schema.ts` with Zod validation via drizzle-zod

### UI Libraries
- **Radix UI** - Unstyled, accessible component primitives (20+ components)
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Variant-based component styling
- **Embla Carousel** - Carousel functionality
- **lucide-react** - Icon library

### Form & Validation
- **react-hook-form** - Form state management
- **@hookform/resolvers** - Validation resolvers
- **Zod** - Schema validation (integrated with Drizzle)

### Development Dependencies
- **TypeScript** - Static typing
- **PostCSS** - CSS processing with Autoprefixer
- **date-fns** - Date manipulation utilities

### Third-Party Integrations
- **YouTube** - External links to song videos (no API integration, just URLs)
- **Google Fonts** - Inter font family for typography
- No authentication service (prepared but not implemented)
- No external APIs currently consumed