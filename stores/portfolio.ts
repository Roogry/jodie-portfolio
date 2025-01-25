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
          studyCase: 'The system addresses the challenges of manual processes in managing student participation, event registration, and document verification.<br><br>With features like student registration, event and committee sign-ups, QR attendance tracking, voting, and document uploads, the platform simplifies administrative tasks. It enables seamless participation in campus activities and enhances transparency and accuracy. The system has reduced the workload for both students and administrators, leading to improved engagement and efficient event management.',
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
          studyCase: 'A vehicle rental company in Bali faced challenges managing customer rental history and bookings manually, leading to inefficiencies and lost opportunities. To address this, the Vehicle Rental Booking App was developed, enabling the company to streamline operations by digitizing rental history management and allowing customers to book vehicles directly through the app.<br><br>The app provides an intuitive platform for booking cars or bikes, tracking rental history, and managing customer profiles, improving both operational efficiency and the customer experience.',
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
          studyCase: 'Teaching hospitals were overwhelmed by the increasing number of students (co-ass and residents) while facing limited resources, including staff, time, and storage space for handling administrative tasks. This led to inefficiencies and delays in managing student records, schedules, and evaluations.<br><br>The Hospital Education Management System was developed to digitize and centralize the administration process. The system allows students to register, upload required documents, complete orientation materials, log activities, and submit evaluations efficiently. By streamlining these processes, the system reduces the burden on hospital staff, optimizes resource usage, and ensures smooth management of student education programs.',
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
          studyCase: 'A cooperative aimed to expand its business by venturing into the transportation sector but faced challenges in managing bookings, driver assignments, and service tracking efficiently. To support this new business line, they required a digital solution that could streamline operations while offering a modern user experience.<br><br>The Online Transportation Service app was developed to cater to both drivers and end-users, providing services such as shuttle rides, vehicle rentals, and tours. The app allows users to book services seamlessly, while drivers can manage assignments efficiently. By digitizing the cooperative’s transportation operations, the app enhanced service delivery, improved customer satisfaction, and supported the cooperative’s business growth.',
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
          studyCase: 'A retail fuel company struggled with managing daily attendance, sales reports, and restocking processes as staff relied on chat-based reporting. This approach led to scattered information, miscommunication, and inefficiencies in consolidating data for decision-making.<br><br>The Management Attendance and Sales Reporting System was developed to centralize these workflows into a single digital platform. Field staff can now log attendance, record daily sales, and update restocking details directly in the system, while managers access real-time consolidated reports through a user-friendly dashboard. This streamlined solution improved data accuracy, operational efficiency, and decision-making processes.',
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
          studyCase: 'During the COVID-19 lockdown, live concerts were canceled, leaving people longing for the excitement of attending live performances. Event organizers faced challenges in delivering these experiences while adhering to health restrictions.<br><br>The Live Streaming and Ticket Booking App was created to bring concerts into people\'s homes. This app allows users to stream live performances, purchase tickets, and interact in real-time through likes and comments. By providing a platform to enjoy concerts safely and conveniently, the app bridged the gap between artists and audiences during the pandemic, reviving the spirit of live entertainment.',
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
