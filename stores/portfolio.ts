import { defineStore } from 'pinia'
import type { Portfolio } from '~/types'

export const usePortfolioStore = defineStore("portfolio", {
  state: () => {
    return {
      portfolio: {} as Portfolio,
      portfolios: [
        {
          id: '1',
          name: 'Student Organization System',
          client: 'Student Executive Board',
          year: 2024,
          description: 'Web-based system developed for Student Executive Board to streamline student organizational administration.',
          roles: ['Front-end Website', 'Back-end Service', 'UI/UX Design'],
          techs: ['Nuxt JS', 'Vue', 'Javascript', 'Tailwind CSS', 'Laravel', 'MySQL', 'Git'],
          slug: 'student-organization-system',
          thumbnailPath: '/portfolios/portal-kamkesyana/thumb.jpg',
          visitUrl: 'https://portalkamkesyana.bemfkunud.com',
          images: [
            '/portfolios/portal-kamkesyana/thumb.jpg',
            '/portfolios/portal-kamkesyana/overview-home.jpg',
            '/portfolios/portal-kamkesyana/overview-dashboard.jpg',
            '/portfolios/portal-kamkesyana/overview-kepanitiaan.jpg',
            '/portfolios/portal-kamkesyana/overview-detail-mahasiswa.jpg',
            '/portfolios/portal-kamkesyana/overview-logbook.jpg',
          ],
        },
        {
          id: '2',
          name: 'Vehicle Rental Booking Application',
          client: 'Bali Rental',
          year: 2024,
          description: 'A user-friendly mobile app for vehicle rental company to digitalize customer booking cars and motorbikes in Bali',
          roles: ['Mobile Developer', 'UI/UX Design'],
          techs: ['Flutter', 'Dart', 'GetX', 'Git'],
          slug: 'vehicle-rental-booking-application',
          thumbnailPath: '/portfolios/work-dewa-rental.jpg',
          visitUrl: 'https://play.google.com/store/apps/details?id=com.sandevelopment.dewabalimotor',
          images: [
            '/portfolios/work-dewa-rental.jpg',
          ],
        },
        {
          id: '3',
          name: 'Education Coordination Information System',
          client: 'Badung Regency Hospital',
          year: 2023,
          description: 'Streamlines the management of educational activities through moble app for medical students and residents at teaching hospitals.',
          roles: ['Mobile Developer', 'Back-end Service', 'UI/UX Design'],
          techs: ['Flutter', 'Dart', 'GetX', 'Laravel', 'MySQL', 'Git'],
          slug: 'education-coordination-information-system',
          thumbnailPath: '/portfolios/work-sikodi.jpg',
          visitUrl: 'https://play.google.com/store/apps/details?id=com.rsdmangusada.sikodi',
          images: [
            '/portfolios/work-sikodi.jpg',
          ],
        },
        {
          id: '4',
          name: 'Online Transportation Service',
          client: 'Bahari Taxi',
          year: 2022,
          description: 'A mobile application designed to provide shuttle services, vehicle rentals, and tour packages for customer of local cooperative company.',
          roles: ['Mobile Developer'],
          techs: ['Flutter', 'Dart', 'GetX', 'Git'],
          slug: 'online-transportation-service',
          thumbnailPath: '/portfolios/work-bahari.jpg',
          visitUrl: null,
          images: [
            '/portfolios/work-bahari.jpg',
          ],
        },
        {
          id: '5',
          name: 'Management Attendance and Sales Reporting System',
          client: 'Retail Energy Company',
          year: 2021,
          description: 'This is the Management Attendance and Sales Reporting System web-based for retail energy company to streamline attandance and sales reporting',
          roles: ['Front-end Website', 'Back-end Service'],
          techs: ['Laravel', 'Livewire', 'Bootstrap', 'Git'],
          slug: 'management-attendance-and-sales-reporting-system',
          thumbnailPath: '/portfolios/work-pertashop.jpg',
          visitUrl: null,
          images: [
            '/portfolios/work-pertashop.jpg',
          ],
        },
        {
          id: '6',
          name: 'Live Concert Streaming and Ticket Booking App',
          client: 'Konserku',
          year: 2020,
          description: 'Developed the mobile app to join Konserku in revolutionizing the way experience concerts with an innovative live-streaming and ticketing platform',
          roles: ['Mobile Developer'],
          techs: ['Flutter', 'Dart', 'Flutter Bloc', 'Flutter Provider'],
          slug: 'live-concert-straming-and-ticket-booking-app',
          thumbnailPath: '/portfolios/work-konserku.jpg',
          visitUrl: null,
          images: [
            '/portfolios/work-konserku.jpg',
          ],
        },
      ] as Portfolio[],
    }
  },
  actions: {
    async showPortfolio(slug: String) {
      this.portfolio = this.portfolios.find((portfolio) => portfolio.slug === slug) as Portfolio;
    },
  }
})
