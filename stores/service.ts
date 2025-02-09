import { defineStore } from 'pinia'
import { servicesData } from '~/data/services'

export const useServiceStore = defineStore('service', () => {
  const services = computed(() => servicesData)

  return {
    services
  }
})
