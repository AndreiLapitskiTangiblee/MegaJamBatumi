# Design Guidelines: Rock Bands Navigation System

## Design Approach

**Selected Approach**: Reference-Based (Music Platforms)
Drawing inspiration from Spotify and Apple Music's clean, content-focused interfaces, emphasizing effortless navigation and visual hierarchy that lets the music content shine.

**Key Design Principles**:
- Content-first minimalism with bold typography
- Smooth, predictable navigation patterns
- Card-based information architecture
- Deliberate use of negative space for breathing room

## Core Design Elements

### A. Color Palette

**Dark Mode** (Primary):
- Background: 220 15% 8%
- Card Background: 220 15% 12%
- Text Primary: 0 0% 95%
- Text Secondary: 220 10% 65%
- Accent: 340 82% 52% (rock-inspired crimson red)
- Hover State: 220 15% 16%

**Light Mode**:
- Background: 0 0% 98%
- Card Background: 0 0% 100%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 45%
- Accent: 340 82% 48%
- Hover State: 220 15% 96%

### B. Typography

**Font Families**:
- Headings: Inter (700, 600) - clean, modern sans-serif
- Body: Inter (400, 500) - consistency with headings
- Band Names: 600 weight for prominence

**Hierarchy**:
- Page Title: text-4xl font-bold (Band List), text-3xl font-bold (Song List)
- Band Names: text-2xl font-semibold
- Band Info: text-base text-secondary
- Song Titles: text-lg font-medium
- Metadata: text-sm text-secondary

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16
- Card padding: p-6
- Card gaps: gap-6
- Section spacing: space-y-8
- Container padding: px-4 md:px-8

**Grid Structure**:
- Band Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Song Cards: Single column with max-w-4xl
- Container: max-w-7xl mx-auto

### D. Component Library

**Navigation Elements**:
- Back Button: Prominent top-left placement with left arrow icon (Heroicons), flex items-center gap-2, hover:bg-hover transition
- Page Header: Sticky positioning (sticky top-0) with backdrop blur

**Band Cards**:
- Rounded corners: rounded-xl
- Subtle border: border border-white/10 (dark) / border-black/10 (light)
- Hover elevation: hover:scale-[1.02] transition-transform
- Content structure: Band name (prominent), formed year, genre, origin (stacked vertically)
- Click target: entire card is clickable
- Visual treatment: Clean, minimal with generous padding

**Song Cards**:
- Simplified design: rounded-lg
- Horizontal layout: flex items-center justify-between
- Track number indicator: Circular badge with number
- Song duration: Right-aligned, text-secondary
- Hover state: hover:bg-hover transition
- Visual separation: border-b on all but last item

**Back Navigation**:
- Text button with icon: "← Back to Bands"
- Positioned above song list header
- Interactive states: hover:text-accent

### E. Animations

**Minimal, Purposeful**:
- Card hover: scale-[1.02] with transition-transform duration-200
- Page transitions: Simple fade or none
- Navigation: Instant (no elaborate transitions)

### F. Additional Components

**Page Header**:
- Title with count indicator: "Rock Bands (6)" or "[Band Name] - Songs (5)"
- Subtle bottom border for separation
- Sticky behavior for context retention

**Empty States**: Not needed for this static content

**Loading States**: Not required for static data

## Navigation Pattern

**Two-Level Structure**:
1. **Level 1 (Band List)**: Grid of band cards, click navigates to Level 2
2. **Level 2 (Song List)**: Vertical list of songs with back button to Level 1

**State Management**: URL-based navigation (band ID in URL) or JavaScript state toggle

**Visual Feedback**: Active/hover states on all clickable elements, clear visual hierarchy differentiates the two levels

## Responsive Behavior

- Mobile: Single column cards, reduced padding (px-4)
- Tablet: 2-column band grid
- Desktop: 3-column band grid, generous spacing
- Consistent: Song list remains single column across all breakpoints

## Icons

Use Heroicons (outline style) via CDN:
- Arrow-left for back navigation
- Optional: Musical note or vinyl record for decorative accents (minimal use)