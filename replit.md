# GEODE Coffee Sourcing Platform

## Overview

This is a modern, responsive web application for GEODE Coffee, a premium coffee sourcing company that connects high-quality Kenyan coffee producers with international buyers. The platform serves as a marketing website with lead generation capabilities, built with a full-stack TypeScript architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom coffee-themed color palette
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Development**: Hot reload with Vite middleware integration
- **Session Management**: Ready for PostgreSQL session storage (connect-pg-simple)

### Database Strategy
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized in shared directory for type safety
- **Migrations**: Drizzle Kit for schema management
- **Database**: PostgreSQL with Neon Database (serverless PostgreSQL)
- **Storage**: DatabaseStorage class for persistent data storage

## Key Components

### Shared Schema (`shared/schema.ts`)
- **Users Table**: Basic user authentication structure
- **Buyer Leads Table**: Lead capture with company details, volume requirements, and preferences
- **Type Safety**: Zod schemas for runtime validation and TypeScript inference

### API Endpoints (`server/routes.ts`)
- `POST /api/buyer-leads`: Create new buyer inquiry
- `GET /api/buyer-leads`: Retrieve all buyer leads
- Error handling with proper HTTP status codes and Zod validation

### UI Components
- **Navigation**: Responsive fixed header with active section highlighting and mobile menu
- **Hero Section**: Full-screen responsive landing with optimized call-to-action buttons
- **Coffee Showcase**: 4-column responsive product gallery with variety details and tasting notes
- **Buyer Form**: Mobile-optimized contact form with enhanced accessibility
- **Contact Section**: Responsive layout with location, contact details, and social media integration

### Design System & Responsiveness
- **Color Palette**: Coffee-inspired theme (browns, oranges, forest greens)
- **Typography**: Responsive serif fonts for headings, clean sans-serif for body text
- **Advanced Responsive Design**: 
  - Mobile-first approach with 7+ breakpoint system (320px to 1600px+)
  - Custom `xs` breakpoint (475px) for better mobile experience
  - Fluid typography using clamp() functions
  - Touch-friendly interactive elements (44px+ touch targets)
  - Container queries support for future-proof layouts
- **Accessibility Features**: 
  - Full keyboard navigation support
  - ARIA labels and screen reader optimization
  - High contrast mode support
  - Reduced motion preferences respect
- **Component Library**: Comprehensive shadcn/ui components with enhanced responsive utilities

## Data Flow

1. **User Interaction**: Visitors browse coffee offerings and company information
2. **Lead Generation**: Interested buyers complete the inquiry form
3. **Form Validation**: Client-side validation with Zod schemas
4. **API Submission**: Form data sent to Express backend via TanStack Query
5. **Data Storage**: Leads stored persistently in PostgreSQL database
6. **Success Feedback**: Toast notifications confirm successful submissions

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessibility
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date utilities
- **Styling**: class-variance-authority and clsx for conditional styling
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **Validation**: Zod for schema validation and type inference
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Replit Integration**: Cartographer plugin and runtime error overlay
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Build Process**: Vite for frontend, esbuild for backend bundling

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR
- **Backend**: Express with Vite middleware for SSR capability
- **Database**: PostgreSQL with persistent storage
- **File Serving**: Vite handles static assets and client routing

### Production Build
- **Frontend**: Static files built to `dist/public`
- **Backend**: Bundled server code in `dist/index.js`
- **Database**: PostgreSQL connection via environment variables
- **Deployment**: Node.js application with static file serving

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required for production)
- **NODE_ENV**: Environment detection for development vs production behavior
- **Session Storage**: PostgreSQL-backed sessions for user authentication

### PostgreSQL Database Integration (January 2025)
- **Database Migration**: Successfully migrated from in-memory storage to persistent PostgreSQL database
- **Database Connection**: Implemented Neon serverless PostgreSQL with WebSocket support
- **Storage Layer**: Created DatabaseStorage class replacing MemStorage for persistent data
- **Schema Migration**: Applied database schema using Drizzle Kit
- **Environment Configuration**: Configured DATABASE_URL and PostgreSQL environment variables

## Recent Changes (January 2025)

### Comprehensive Responsive Design Enhancement
- **Multi-Device Optimization**: Enhanced all components for optimal display across devices from 320px mobile to 1600px+ ultra-wide screens
- **Advanced CSS Grid System**: Implemented flexible grid layouts with auto-fit columns and responsive gaps
- **Typography Scaling**: Added fluid typography using CSS clamp() for seamless text scaling across all screen sizes
- **Enhanced Navigation**: Improved mobile menu with better touch targets and smooth transitions
- **Accessibility Improvements**: Added comprehensive ARIA labels, keyboard navigation, and focus management
- **Performance Optimizations**: Implemented touch-friendly elements for mobile devices and print styles

### Component-Level Responsive Improvements
- **Hero Section**: Responsive typography from 1.5rem (mobile) to 8rem (ultra-wide), adaptive button layouts
- **Coffee Showcase**: Dynamic grid from 1 column (mobile) to 4 columns (desktop), optimized card layouts
- **Contact & Buyer Forms**: Enhanced mobile layout with stacked elements and improved spacing
- **Navigation**: Responsive logo sizing, improved mobile menu with auto-close functionality

### Mobile Performance Optimizations (January 2025)
- **Lazy Loading**: Implemented intersection observer-based lazy loading for all images with loading states
- **Image Optimization**: 
  - Responsive image sizes based on screen width (800px, 1200px, 1920px)
  - WebP format support for compatible browsers
  - Proper aspect ratios and loading attributes
- **Service Worker**: Cache-first strategy for images and static assets, network-first for API calls
- **Bundle Optimization**: 
  - Code splitting with manual chunks for vendor libraries
  - Performance utilities with throttled scroll listeners
  - Reduced animation duration on mobile devices (0.2s)
- **Low-End Device Support**:
  - Simplified shadows and removed blur effects on low-resolution devices
  - Optimized font rendering with antialiasing
  - Critical CSS inlining for above-the-fold content
- **Progressive Web App**: 
  - Service worker registration for offline capability
  - Web app manifest for native app-like experience
  - Touch-friendly 48px+ minimum touch targets

The application now provides exceptional performance on mobile devices with fast loading, smooth interactions, and optimized resource usage. It's designed to scale from a simple lead generation website to a full-featured coffee trading platform with user authentication, order management, and inventory tracking capabilities.