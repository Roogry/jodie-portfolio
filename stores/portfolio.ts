import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Portfolio } from '~/types'
import { portfoliosData } from '~/data/portfolios'

export const usePortfolioStore = defineStore('portfolio', () => {
  // State
  const currentPortfolio = ref<Portfolio | null>(null)
  
  // Getters
  const portfolios = computed(() => portfoliosData)
  const portfolio = computed(() => currentPortfolio.value)

  // Actions
  const showPortfolio = (slug: string) => {
    const found = portfoliosData.find(p => p.slug === slug)
    currentPortfolio.value = found || null
  }

  return {
    portfolios,
    portfolio,
    showPortfolio
  }
})