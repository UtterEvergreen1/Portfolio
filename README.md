# Daniel Losso-Kiss Portfolio Website

A modern, responsive portfolio website showcasing software development projects with a focus on C++, game development,
and Minecraft-related tools.

**Live Site:** [daniels.works](https://daniels.works)

## Overview

This portfolio website was built using **Bootstrap Studio**. It showcases multiple technical projects including APIs,
rendering engines, world converters, and desktop applications.

## Technology Stack

### Built With

- **Bootstrap Studio**: Visual design and layout tool
- **Bootstrap 5.3.6**: CSS framework
- **jQuery 3.7.0**: DOM manipulation and AJAX
- **AOS 2.3.4**: Scroll animations
- **Custom CSS**: Project-specific styling with color-coded themes

### Key Files

- `index.html` - Main landing page with project grid
- `socials.html` - About page with social media links
- Project pages:
    - `seedra_project.html` - C++ API for Minecraft world generation
    - `seedra_engine_project.html` - OpenGL-based world renderer
    - `converter_project.html` - LCE to Java Edition converter
    - `lmm_project.html` - Qt desktop application

## Project Structure

```
build/
├── index.html              # Main landing page
├── socials.html            # Social media and about page
├── *_project.html          # Individual project pages
├── components/             # Reusable HTML components
│   ├── navbar.html         # Navigation bar template
│   └── footer.html         # Footer template
├── assets/
│   ├── bootstrap/          # Bootstrap CSS
│   ├── css/                # Custom stylesheets
│   │   ├── style.css       # Main styles
│   │   ├── *-icons.css     # Color-themed icon styles
│   │   └── socials.css     # Social page specific styles
│   ├── img/                # Project screenshots and assets
│   │   └── icons/          # SVG icons organized by project
│   └── js/                 # JavaScript functionality
│       ├── display_projects.mjs    # Project grid rendering
│       ├── load_components.js     # Dynamic component loading
│       ├── navbar_scroll.js       # Navbar scroll behavior
│       ├── projects.json          # Project data
│       └── heros/                 # Hero section modules
│           └── display_heros.mjs  # Hero content rendering
```

## Key Features

### Dynamic Project Loading

Projects are loaded from `projects.json` and rendered dynamically:

- Filter projects by category (All, Featured, C++, CUDA, Web, Games)
- Badges automatically generated (Open Source, Coming Soon, etc.)

### Component System

Navbar and footer are loaded as reusable components using jQuery:

- Components loaded from /components/ directory
- Uses HTML template tags for clean integration

### Themed Color Schemes

Each project has its own color theme:

- **Seedra**: Green (`green-icons.css`)
- **Seedra Engine**: Red (`red-icons.css`)
- **Legacy Converter**: Blue (`blue-icons.css`)
- **Legacy Minecraft Mapper**: Purple (`purple-icons.css`)

### Responsive Navigation

- Fixed navbar that changes appearance on scroll
- Mobile-friendly hamburger menu
- Dropdown menu for project navigation

## Development Notes

### Built with Bootstrap Studio

This website was designed and built using Bootstrap Studio, a powerful visual design tool that:

- Provides drag-and-drop interface building
- Generates clean, semantic HTML
- Includes Bootstrap components out of the box
- Exports production-ready code

### Custom Enhancements

While Bootstrap Studio provided the foundation, custom JavaScript modules were added for:

- Dynamic project filtering and rendering
- Component-based architecture with template loading
- Smooth scroll animations and transitions
- Hero section content management

## Browser Support

- Most modern browsers (Chrome, Firefox, Edge, Safari)

## SEO & Performance

- Semantic HTML5 markup
- Meta descriptions for all pages
- Structured data (JSON-LD) on index page
- Optimized images with proper dimensions
- CDN-hosted libraries for fast loading
- Mobile-first responsive design

## License & Attribution

**Copyright © 2026 Daniel Losso-Kiss**

### Disclaimer

Not associated with or endorsed by Mojang, 4J Studios, Microsoft, Sony, or Nintendo.

### Libraries Used

- Bootstrap 5.3.6 (MIT License)
- jQuery 3.7.0 (MIT License)
- AOS 2.3.4 (MIT License)
- Animate.css 3.5.2 (MIT License)

## Contact

- **GitHub**: [UtterEvergreen1](https://github.com/UtterEvergreen1)
- **YouTube**: [utterevergreen1](https://www.youtube.com/utterevergreen1/)
- **Instagram**: [@utterevergreen1](https://www.instagram.com/utterevergreen1/)
- **Discord**: utterevergreen1

---

*No AI was used in the making of this website (except for this README, which was generated with the help of Claude
Sonnet 4.5 via GitHub Copilot). All other code and content were created by Daniel Losso-Kiss.*

