# Landing Page Assets

This folder contains assets for the VERCE landing page.

## Current Assets

Currently, the landing page uses:
- Emoji icons (built into HTML)
- CSS gradients for visual effects
- No external image dependencies

## Recommended Assets to Add

For a production-ready landing page, consider adding:

1. **Logo Files**
   - `logo.svg` - Main VERCE logo
   - `logo-white.svg` - White version for dark backgrounds
   - `favicon.ico` - Browser favicon

2. **Hero Images**
   - `hero-illustration.svg` - Custom illustration showing consent verification
   - `hero-mockup.png` - App mockup/screenshot

3. **Feature Icons**
   - Custom SVG icons for each feature (instead of emojis)
   - `icon-identity.svg`
   - `icon-evidence.svg`
   - `icon-gps.svg`
   - `icon-signature.svg`
   - `icon-notifications.svg`
   - `icon-privacy.svg`

4. **Social Proof**
   - `testimonial-avatars/` - User testimonial photos
   - `partner-logos/` - Partner/client logos

5. **Background Elements**
   - `pattern.svg` - Subtle background pattern
   - `gradient-overlay.svg` - Additional gradient overlays

## Usage

To use custom assets:

1. Place files in this `assets/` folder
2. Update `index.html` to reference the assets
3. Update `styles.css` if needed for styling

## Image Optimization

For production:
- Use WebP format for better compression
- Optimize SVG files
- Provide @2x versions for retina displays
- Use lazy loading for below-the-fold images

