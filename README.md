# Lash Studio Miami Website

A responsive, mobile-first website for a lash extension studio in Miami. Built with React, Vite, and Tailwind CSS.

## Features

- 📱 Mobile-first responsive design
- 🔍 SEO optimized
- 📅 Integrated booking system
- 🖼️ Image gallery with before/after transitions
- 📋 Service and pricing information
- 📊 Performance optimized with lazy loading

## Setup and Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/lash-studio-miami.git
cd lash-studio-miami
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
lash-studio-miami/
├── public/                 # Static assets
│   ├── favicon.svg
│   └── images/
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── AboutSection.jsx
│   │   ├── BookingSection.jsx
│   │   ├── ContactAndBookingSection.jsx
│   │   ├── FAQSection.jsx
│   │   ├── Footer.jsx
│   │   ├── GallerySection.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── PricingSection.jsx
│   │   ├── SEO.jsx
│   │   └── ServicesSection.jsx
│   ├── App.jsx             # Main App component
│   ├── App.css             # Global styles
│   ├── index.css           # Tailwind imports
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Booking System Integration

The website is designed to integrate with Gloss Genius for booking management.

### Integration Options

1. **Direct Link**: Use the Gloss Genius booking link directly:

   ```
   https://yourbusiness.glossgenius.com/
   ```

2. **Embedded Widget**: Embed the Gloss Genius booking widget using an iframe.

3. **API Integration**: For a more seamless experience, integrate with the Gloss Genius API.

### Setting Up API Integration

1. Sign up for Gloss Genius API access
2. Update the API keys in the configuration
3. Modify the `BookingSection.jsx` component to use the API endpoints

## Customization

### Colors

The primary colors are defined in `tailwind.config.js` and can be easily modified:

```javascript
colors: {
  primary: {
    light: '#FFD1DC',
    DEFAULT: '#D9A7B3',
    dark: '#C29F8A',
  },
  secondary: {
    light: '#F8F0F3',
    DEFAULT: '#F5E1DC',
    dark: '#E5C1C7',
  },
  dark: {
    light: '#6D6D6D',
    DEFAULT: '#3C3C3C',
    dark: '#333333',
  }
}
```

### Content

Update the content in each component to match your business:

- Update services in `ServicesSection.jsx`
- Update pricing in `PricingSection.jsx`
- Update FAQ in `FAQSection.jsx`
- Update artist information in `AboutSection.jsx`
- Update contact information in `ContactAndBookingSection.jsx` and `Footer.jsx`

### Images

Replace the placeholder images in the `public/images` directory with your own images.

## Deployment

This site can be deployed on any static hosting service:

1. **Netlify**: Connect your GitHub repository for automatic deployments
2. **Vercel**: Similar to Netlify, with excellent React support
3. **GitHub Pages**: Deploy using GitHub Actions

## SEO Configuration

Update the SEO metadata in:

1. `index.html` - For static meta tags
2. `SEO.jsx` - For dynamic meta tags
3. Update the `og-image.jpg` in the public directory

## Maintenance

1. Regularly update dependencies:

```bash
npm update
```

2. Test performance using Lighthouse or WebPageTest

3. Monitor analytics to optimize conversion rates

## License

This project is licensed under the MIT License - see the LICENSE file for details.
