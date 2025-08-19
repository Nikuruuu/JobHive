# JobHive Landing Page

A modern, responsive landing page for JobHive - a professional job search and recruitment platform. Built with Next.js 15, TypeScript, and enhanced with smooth motion animations.

## 🚀 Features

### ✨ Modern Design

- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Clean UI**: Professional design with shadcn/ui components
- **Smooth Animations**: Fluid motion effects using Motion library
- **Interactive Elements**: Hover effects and micro-interactions

### 🎯 Landing Page Sections

- **Hero Section**: Compelling headline with job search functionality
- **Job Categories**: Interactive grid showcasing different job types
- **Featured Jobs**: Carousel of top job opportunities from leading companies
- **Trusted Companies**: Marquee display of partner organizations
- **Post Job**: Call-to-action for employers to post positions
- **Testimonials**: User reviews and success stories
- **Ready to Start Banner**: Simple conversion-focused section

### 🛠️ Technical Features

- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom design system
- **Motion Animations**: Smooth scroll-triggered animations
- **Lottie Animations**: Engaging vector animations
- **Image Optimization**: Next.js Image component for performance
- **Company Icons**: Simple Icons integration for brand logos

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Motion (modern Framer Motion)
- **Icons**: Lucide React & Simple Icons
- **Lottie**: lottie-react for vector animations
- **Carousel**: Embla Carousel
- **Development**: ESLint, PostCSS

## 📦 Dependencies

### Core

- `next` - React framework
- `react` & `react-dom` - React library
- `typescript` - Type checking

### UI & Styling

- `tailwindcss` - CSS framework
- `@radix-ui/react-*` - Accessible UI primitives
- `class-variance-authority` - Component variants
- `clsx` & `tailwind-merge` - Utility functions

### Animations & Interactions

- `motion` - Modern animation library
- `lottie-react` - Lottie animations
- `embla-carousel-react` - Carousel component

### Icons & Assets

- `lucide-react` - Icon library
- `simple-icons` - Brand icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Nikuruuu/JobHive.git
   cd jobhive-landing
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
jobhive-landing/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── common/           # Shared components
│   │   ├── logo.tsx
│   │   ├── navBar.tsx
│   │   └── lottie-*.tsx  # Lottie animations
│   ├── magicui/          # Enhanced UI components
│   │   └── marquee.tsx
│   ├── motion-primitives/ # Motion components
│   │   └── tilt.tsx
│   ├── sections/         # Landing page sections
│   │   ├── hero-section.tsx
│   │   ├── job-categories.tsx
│   │   ├── featured-jobs.tsx
│   │   ├── trusted-companies.tsx
│   │   ├── post-job.tsx
│   │   ├── testimonials.tsx
│   │   └── readyFindJob.tsx
│   └── ui/              # shadcn/ui components
├── constant/            # Static data and configurations
├── lib/                # Utility functions
└── public/             # Static assets
```

## 🎨 Animation Features

- **Scroll-triggered animations**: Elements animate as they come into view
- **Staggered timing**: Sequential animations for lists and grids
- **Hover interactions**: Subtle feedback on interactive elements
- **Smooth transitions**: Professional easing curves throughout
- **Performance optimized**: GPU-accelerated transforms

## 📱 Responsive Design

- **Mobile-first approach**: Optimized for all screen sizes
- **Breakpoint system**: sm, md, lg, xl responsive breakpoints
- **Touch-friendly**: Appropriate sizing for mobile interactions
- **Performance**: Optimized images and efficient loading

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Motion](https://motion.dev/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

---

**Built with ❤️ for the job search community**
