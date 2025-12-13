# Professional Cloud Architect Personal Website

A modern, responsive personal website built with Next.js 14, showcasing cloud architecture expertise and professional experience. Optimized for deployment on Azure Static Web Apps.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Static Export**: Optimized for Azure Static Web Apps with static site generation
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt for search engines
- **Professional Design**: Clean, minimalist UI with Azure brand colors
- **Fast Performance**: Optimized for Lighthouse scores > 90

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Azure Static Web Apps
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
myresume/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About page
│   ├── skills/page.tsx      # Skills page
│   ├── experience/page.tsx  # Experience page
│   ├── contact/page.tsx     # Contact page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt configuration
├── components/              # React components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with social links
│   ├── Hero.tsx             # Hero section
│   ├── Skills.tsx           # Skills showcase
│   ├── Experience.tsx       # Experience timeline
│   ├── About.tsx            # About section
│   └── Contact.tsx          # Contact information
├── public/                  # Static assets
├── .github/workflows/       # GitHub Actions
└── Configuration files
```

## 🚦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rechauve/myresume.git
cd myresume
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Content

Edit the following files to customize your content:

- **Personal Information**: `app/layout.tsx` (metadata)
- **Hero Section**: `components/Hero.tsx`
- **About Me**: `components/About.tsx`
- **Skills**: `components/Skills.tsx`
- **Experience**: `components/Experience.tsx`
- **Contact Info**: `components/Contact.tsx` and `components/Footer.tsx`

### Styling

- **Colors**: Modify `tailwind.config.ts` to change the color scheme
- **Fonts**: Update font in `app/layout.tsx`
- **Global Styles**: Edit `app/globals.css`

### SEO

- **Metadata**: Update `app/layout.tsx` and individual page files
- **Sitemap**: Modify `app/sitemap.ts` with your domain
- **Robots.txt**: Update `app/robots.ts` with your domain

## 🌐 Deployment to Azure Static Web Apps

### Prerequisites

1. Azure account with an active subscription
2. GitHub account

### Deployment Steps

1. **Create Azure Static Web App**:
   ```bash
   # Using Azure CLI
   az staticwebapp create \
     --name myresume \
     --resource-group myresume-rg \
     --source https://github.com/rechauve/myresume \
     --location "East US 2" \
     --branch main \
     --app-location "/" \
     --output-location "out" \
     --login-with-github
   ```

2. **Get Deployment Token**:
   - Go to Azure Portal → Your Static Web App → Settings → Configuration
   - Copy the deployment token

3. **Add GitHub Secret**:
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Create new secret: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - Paste the deployment token

4. **Deploy**:
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy

### Manual Build and Deploy

```bash
# Build the project
npm run build

# The static files will be in the 'out' directory
# Upload to Azure Static Web Apps using Azure CLI or portal
```

## 🔐 Environment Variables

No environment variables are required for basic functionality. If you add backend features (Azure Functions), configure them in Azure Portal.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

The site is optimized for:
- Fast loading times with static generation
- SEO with proper metadata and semantic HTML
- Accessibility with ARIA labels
- Security headers via `staticwebapp.config.json`

## 🤝 Contributing

This is a personal website template. Feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Cloud Architect**

- Website: [https://yourdomain.com](https://yourdomain.com)
- LinkedIn: [linkedin.com/in/remichauvet](https://linkedin.com/in/remichauvet)
- GitHub: [@rechauve](https://github.com/rechauve)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- Microsoft Azure for the hosting platform

---

**Built with ❤️ using Next.js and Azure**
