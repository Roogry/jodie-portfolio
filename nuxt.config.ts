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
    dir: 'assets/images',
    domains: [
      'jodie-portfolio.vercel.app',
      'jodie-portfolio-roogrys-projects.vercel.app'
    ],
    screens: {
      workImagesMobile: 150,
    }
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
  }
})