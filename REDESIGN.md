# Portfolio Redesign - Motorsport Aesthetic

This document outlines the redesign of the portfolio site inspired by landonorris.com.

## Design Changes

### 1. Color Scheme
- **Dark Theme by Default**: Deep black background (`oklch(0.08 0 0)`)
- **Papaya Orange Accent**: McLaren-inspired primary color (`oklch(0.68 0.21 45)`)
- High contrast white text for readability
- Subtle borders and glassmorphism effects

### 2. Typography
- **Uppercase Labels**: All navigation and section labels in uppercase with wide letter-spacing
- **Bold Headers**: Large, tight-tracked headings (tracking-tight, tracking-tighter)
- **Small Tracked Text**: Tiny labels with extra letter-spacing (`tracking-[0.3em]`)
- **Geist Fonts**: Maintained for clean, modern look

### 3. Layout & Structure
- **Full-Screen Sections**: Each section uses full viewport height
- **Scroll Snapping**: Smooth snap-to-section scrolling
- **Vertical Text**: Side labels on hero section
- **Decorative Elements**: Corner borders and accent lines

### 4. Animations
- **Scroll-Triggered Animations**: Intersection Observer-based fade-ins
- **Multiple Animation Types**:
  - `fade-in-up`: Slides up while fading in
  - `slide-in-left/right`: Horizontal slide animations
  - `scale-in`: Subtle scale effect
- **Staggered Delays**: Items animate sequentially with delays
- **Image Zoom**: Hover effect on images (scale 1.05)

### 5. Components

#### Hero
- Full-screen immersive design
- Vertical text labels on left and right sides
- Large centered name display
- Decorative corner borders
- "Tap to lock" scroll indicator
- Papaya orange accent elements

#### Navigation
- Glassmorphism effect on scroll
- Uppercase menu items with underline hover effect
- Minimal, fixed position design
- Transparent when at top, glass background when scrolled

#### Projects
- Large 16:10 aspect ratio image cards
- Year badges
- Technology tags
- Hover effects with border color change
- Staggered fade-in animations

#### About
- Side-by-side image and content layout
- Stats grid (Years Exp, Projects, Clients)
- Career timeline
- Slide-in animations from left and right

#### Skills
- 4-column grid layout
- Category headers with primary color
- Pill-style skill badges
- Fade-in animations on scroll

#### Footer/Contact
- Large, bold "LET'S WORK TOGETHER" heading
- Social links as outlined buttons
- Clean copyright info with tech stack mention

#### Gallery Component
- Reusable gallery with configurable columns (2, 3, or 4)
- Image zoom on hover
- Category badges
- Accent line animation on hover

### 6. Utilities Added
- **Glassmorphism**: `.glass` class for blurred backgrounds
- **Image Zoom**: `.image-zoom` for smooth scale effect
- **Accent Line**: `.accent-line` for orange underline effect
- **Scroll Snap**: Added to html and sections

## Technical Implementation

### New Files
- `/hooks/use-scroll-animation.ts` - Intersection Observer hook
- `/components/gallery.tsx` - Reusable gallery component

### Modified Files
- `app/globals.css` - Color scheme and animation utilities
- `app/layout.tsx` - Added scroll-snap to html
- `components/hero.tsx` - Complete redesign
- `components/navigation.tsx` - Glassmorphism and scroll effects
- `components/section.tsx` - Added snap-start class
- `components/sections/projects.tsx` - Image-heavy cards
- `components/sections/about.tsx` - Side-by-side layout with stats
- `components/sections/skills.tsx` - Grid layout with animations
- `components/sections/footer.tsx` - Bold CTA design

## Customization Guide

### Updating Personal Info
1. **Hero Section** (`components/hero.tsx`):
   - Line 52: Replace "YOUR NAME"
   - Line 65: Update location

2. **Navigation** (`components/navigation.tsx`):
   - Line 49: Update logo initials

3. **About Section** (`components/sections/about.tsx`):
   - Lines 66-72: Update bio text
   - Lines 79-88: Update stats numbers
   - Lines 96-127: Update career timeline

4. **Projects** (`components/sections/projects.tsx`):
   - Lines 10-45: Update project data
   - Add actual project images to `/public` folder
   - Uncomment Image component (lines 97-103)

5. **Footer** (`components/sections/footer.tsx`):
   - Line 46: Update email address
   - Lines 9-12: Update social media links
   - Line 84: Update name in copyright

### Adding Images
Replace placeholder gradients with actual images:
- Uncomment Next.js Image components
- Add images to `/public` folder
- Update image paths in component data

### Color Adjustments
Modify colors in `app/globals.css` (lines 46-80):
- `--primary`: Main accent color (currently papaya orange)
- `--background`: Main background color
- `--foreground`: Main text color

## Browser Compatibility
- Modern browsers with CSS Grid, Flexbox support
- Intersection Observer API for scroll animations
- CSS backdrop-filter for glassmorphism
- CSS scroll-snap for section snapping

## Performance
- Uses Next.js Image component (when uncommented)
- Lazy loading for off-screen content via Intersection Observer
- CSS animations with GPU acceleration (transform, opacity)
- Optimized fonts with next/font/google

## Next Steps
1. Add actual project images and replace placeholders
2. Add your photo to About section
3. Update all personal information
4. Consider adding more sections (testimonials, blog, etc.)
5. Set up analytics
6. Add meta tags and SEO optimization
