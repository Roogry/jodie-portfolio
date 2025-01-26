// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-svgo',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxtjs/mdc'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  image: {
    quality: 80,
  },
  svgo: {
    componentPrefix: 'i',
    autoImportPath: './assets/icons/',
  },
  googleFonts: {
    families: {
      'Source Sans 3': '100..700',
      Rubik: '100..700',
      Poppins: [700],
    }
  },
  app: {
    head: {
      title: "Sanchia Jodie - Full Stack Creative Mobile and Web Developer",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "title", content: "Sanchia Jodie - Full Stack Creative Mobile and Web Developer" },
        { name: "description", content: "Discover the portfolio of Sanchia Jodie, an experienced Software Engineer specializing in web, mobile, and backend development. Explore projects in AI, Flutter, Laravel, and scalable systems that deliver user-centered solutions." },
        { name: "author", content: "Sanchia Jodie" },
        { name: "keywords", content: "Software Engineer, Web Developer, Mobile Developer, Backend Developer, Flutter, Laravel, AI Solutions, Scalable Systems, Portfolio, Full-Stack Developer, IT Specialist, Bali, Indonesia" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "English" },

        // Open Graph Meta Tags
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Sanchia Jodie - Full Stack Creative Mobile and Web Developer" },
        { property: "og:description", content: "Explore the portfolio of Sanchia Jodie, showcasing expertise in developing scalable, user-centered web and mobile applications using cutting-edge technologies like Flutter, Laravel, and AI." },
        { property: "og:url", content: "https://yourwebsite.com" },
        { property: "og:image", content: "https://yourwebsite.com/your-portfolio-image.jpg" },
        { property: "og:site_name", content: "Sanchia Jodie's Portfolio" },

        // Twitter Card Meta Tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Sanchia Jodie - Full Stack Creative Mobile and Web Developer" },
        { name: "twitter:description", content: "See Sanchia Jodie's projects in web, mobile, and backend development, focusing on scalable, user-centered solutions." },
        { name: "twitter:image", content: "https://yourwebsite.com/your-portfolio-image.jpg" },

        // Theme Color
        { name: "theme-color", content: "#ffffff" }, // Theme color
        { name: "msapplication-TileColor", content: "#ffffff" }, // Microsoft tile color
        { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" }, // Microsoft tile image
      ],
      link: [
        { rel: "canonical", href: "https://jodie-portfolio.vercel.app" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        
        // Apple Touch Icons
        { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
        { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
        { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
        { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
        { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
        { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },

        // Favicon Icons
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },

        // Manifest
        { rel: "manifest", href: "/manifest.json" },
      ]
    }
  }
})