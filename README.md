# Athira P B - Futuristic Portfolio Website

A premium, dark-themed, futuristic bento-style personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features advanced animations, glassmorphism effects, and a modern UI/UX design.

## 🚀 Features

- **Futuristic Design**: Dark theme with purple/black color scheme and neon accents
- **Bento Layout**: Modern grid-based layout inspired by contemporary design trends
- **Advanced Animations**: Smooth transitions and micro-interactions using Framer Motion
- **Glassmorphism**: Beautiful glass-like effects and backdrop blur
- **Custom Cursor**: Interactive cursor that responds to hover states
- **Particle Background**: Animated particle system for enhanced visual appeal
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Components**: Hover effects, scroll animations, and dynamic content
- **Contact Form**: Functional contact form with validation and animations
- **Social Integration**: GitHub activity display and social media links

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom configurations
- **Animations**: Framer Motion for advanced animations
- **TypeScript**: Full TypeScript support for type safety
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Inter and JetBrains Mono from Google Fonts

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd athira
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors (purple shades)
- Neon colors (blue, purple, pink)
- Dark theme colors

### Content
Update the following files to customize content:
- `components/HeroSection.tsx` - Hero section content
- `components/AboutSection.tsx` - About me information
- `components/SkillsSection.tsx` - Skills and technologies
- `components/ProjectsSection.tsx` - Project showcase
- `components/ContactSection.tsx` - Contact information

### Animations
Customize animations in:
- `app/globals.css` - CSS animations and keyframes
- Individual component files - Framer Motion configurations

## 📱 Sections

1. **Hero Section**
   - Animated background with floating orbs
   - Call-to-action buttons
   - Social media links

2. **About Me**
   - Bento-style grid layout
   - Education timeline
   - Personal interests and mission
   - Quick stats

3. **Skills Matrix**
   - Categorized skill display
   - Animated progress bars
   - Technology tags

4. **Project Showcase**
   - Featured and regular projects
   - Hover animations
   - Technology stack display
   - GitHub and live demo links

5. **Social & GitHub**
   - GitHub activity visualization
   - Social media integration
   - Contribution graph

6. **Contact Form**
   - Interactive form with animations
   - Contact information cards
   - Form validation and feedback

7. **Footer**
   - Social links
   - Quick navigation
   - Scroll to top functionality

## 🎯 Performance Features

- **Optimized Images**: Next.js Image component for optimal loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Lazy Loading**: Components load as they enter the viewport
- **Smooth Scrolling**: CSS and JavaScript smooth scrolling
- **Responsive Design**: Mobile-first approach

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:
```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Email Integration
To enable the contact form:
1. Set up EmailJS or similar service
2. Add your service configuration
3. Update the form submission logic in `ContactSection.tsx`

## 📱 Mobile Responsiveness

- Custom cursor disabled on mobile devices
- Responsive grid layouts
- Touch-friendly interactions
- Optimized animations for mobile performance

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
1. Build: `npm run build`
2. Start: `npm start`
3. Deploy the built application

## 🎨 Design Philosophy

- **Minimalism**: Clean, uncluttered design
- **Futuristic**: Modern aesthetics with sci-fi influences
- **Accessibility**: WCAG compliant design principles
- **Performance**: Optimized for speed and smooth interactions
- **User Experience**: Intuitive navigation and engaging animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Support

If you have any questions or need help with customization, feel free to reach out:
- Email: athira@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

**Made with ❤️ and lots of coffee by Athira P B**