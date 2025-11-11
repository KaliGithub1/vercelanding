# VERCE Landing Page

A modern, responsive landing page for VERCE - a consent verification platform.

## Overview

This landing page is designed to generate anticipation and clearly communicate what VERCE is about before the main application is deployed. It features:

- **Modern Design**: Clean, professional design with gradient effects and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Clear Messaging**: Clearly communicates VERCE's purpose and value proposition
- **Interactive Elements**: Smooth scrolling, modal notifications, and form handling

## File Structure

```
landing-page/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript for interactivity
├── assets/             # Assets folder (images, icons, etc.)
│   └── README.md       # Asset documentation
└── README.md           # This file
```

## Features

### Design Elements
- Gradient orbs for visual interest
- Smooth scroll animations
- Interactive modal for email notifications
- Responsive navigation
- Modern typography using Inter font

### Sections
1. **Hero Section**: Main value proposition with CTA
2. **Features**: Six key features with icons
3. **How It Works**: Three-step process explanation
4. **Use Cases**: Four main use case scenarios
5. **Pricing**: Three-tier pricing structure
6. **CTA Section**: Email signup form
7. **Footer**: Links and company information

### Interactive Features
- Smooth scrolling navigation
- Email notification modal
- Form validation
- Toast notifications
- Scroll-triggered animations
- Mobile-responsive menu

## Color Scheme

The landing page uses a custom color palette:

- **Primary**: Dark navy (#1a1a2e)
- **Accent**: Cyan blue (#00d4ff)
- **Secondary**: Pink/red (#e94560)
- **Neutrals**: Gray scale for text and backgrounds

## Setup & Deployment

### Local Development

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

### Deployment Options

1. **Vercel**: 
   - Connect the `landing-page` folder to Vercel
   - Deploy automatically on push

2. **Netlify**:
   - Drag and drop the `landing-page` folder
   - Or connect via Git

3. **GitHub Pages**:
   - Push to repository
   - Enable GitHub Pages in settings

4. **Static Hosting**:
   - Upload all files to any static hosting service
   - Point domain to the `index.html` file

## Customization

### Update Content
- Edit `index.html` to change text content
- Modify section titles, descriptions, and features

### Change Colors
- Update CSS variables in `styles.css`:
  ```css
  :root {
    --primary: #your-color;
    --accent: #your-color;
    --secondary: #your-color;
  }
  ```

### Add Assets
- Place images in the `assets/` folder
- Update HTML to reference new assets
- See `assets/README.md` for recommendations

### Modify Forms
- Update form submission logic in `script.js`
- Connect to your backend API for email collection
- Add validation as needed

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- No external dependencies (except Google Fonts)
- Optimized CSS with minimal repaints
- Lazy loading ready for images
- Fast initial load time

## Future Enhancements

Consider adding:
- Analytics integration (Google Analytics, etc.)
- A/B testing capabilities
- Backend API integration for email collection
- Custom illustrations and graphics
- Video background or demo
- Testimonials section
- Blog/news section
- Social media links

## Notes

- The email form currently shows a success message but doesn't actually send emails
- Connect to your backend API to handle email submissions
- All animations use CSS for better performance
- The design is mobile-first and fully responsive

## License

This landing page is part of the VERCE project.

