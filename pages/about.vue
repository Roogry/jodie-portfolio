<template>
  <div class="relative">
    <Navbar />

    <div class="container pt-12 mt-[70px] min-h-screen sm:px-10 sm:mt-[100px]">
      <div class="grid grid-cols-1 gap-16 lg:grid-cols-5 sm:grid-cols-2">
        <div class="lg:col-span-2 sm:col-span-1">
          <div class="content flex flex-col gap-12 sm:justify-between">
            <section id="about-headline" class="px-8 sm:px-0">
              <h1 v-gsap.from='{ opacity: 0, y: 50 }' class="text-3xl font-medium lg:text-5xl sm:text-4xl dark:text-white">About Jodie</h1>
              <p v-gsap.delay-100.from='{ opacity: 0, y: 50 }' class="mt-2 font-medium text-base text-black sm:mt-3 sm:text-2xl dark:text-white">Mobile and Front End Engineer</p>
              <p v-gsap.delay-200.from='{ opacity: 0, y: 50 }' class="mt-4 text-base text-secondary sm:mt-4 sm:text-xl dark:text-gray-400">Delivering user-centered, pixel-perfect, and scalable digital solutions to match your needs.</p>
            </section>

            <section id="about-contact" class="px-8 sm:px-0">
              <div v-gsap.delay-500.from='{ autoAlpha: 0 }' class="max-w-[200px] bg-white rounded-xl shadow-xl overflow-hidden">
                <NuxtImg class="aspect-[3/4] object-cover" width="200px" src="/images/decorations/about-jodie.png" alt="Sanchia Jodie" :placeholder="[500, 307, 50, 5]"/>
              </div>
              <div class="mt-8 info-detail">
                <div class="detail-item">
                  <div v-gsap.delay-500.stagger.from='{ opacity: 0 }' class="mt-3 flex flex-wrap gap-3 items-center">
                    <NuxtLink to="mailto:jodiemantra@gmail.com">
                      <Badge variant="colored">
                        <p class="text-sm">Email</p>
                      </Badge>
                    </NuxtLink>
                    <Badge variant="colored">
                      <p class="text-sm">Linkedin</p>
                    </Badge>
                    <Badge variant="colored">
                      <p class="text-sm">Instagram</p>
                    </Badge>
                    <Badge variant="colored">
                      <p class="text-sm">Github</p>
                    </Badge>
                    <Badge variant="colored">
                      <p class="text-sm">Dribbble</p>
                    </Badge>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        
        <div class="lg:col-span-3 sm:inline-block sm:col-span-1">
          <div class="content">
            <section id="about-desc" class="px-8 sm:px-0">
              <p v-gsap.delay-200.from='{ opacity: 0, y: 50 }' class="text-base sm:text-xl dark:text-gray-400">
                <b>5+ years</b> of experience, I specialize in Flutter, Angular, Nuxt.js, Laravel, and Spring Boot to create impactful digital solutions.<br/><br/>
                Currently, I’m an <b>Application Developer at BCA</b>, maintaining and optimizing enterprise-scale systems used across <b>1,000+ branches</b>. My work focuses on modernizing legacy architectures, enhancing performance, and implementing new features to ensure seamless user experiences.<br/><br/>
                Throughout my career, I’ve developed various digital solutions, from student organization platforms to banking applications and enterprise tools. I take pride in writing <b>clean, maintainable code</b> and continuously exploring new technologies to refine my craft.<br/><br/>
                <b>Beyond coding</b>, I enjoy going to the gym and spending my days off at cafés or aesthetic places, capturing moments through photography and videography.
              </p>
            </section>

            <section id="about-techs" v-gsap.delay-300.stagger.from='{ opacity: 0 }' class="px-8 sm:px-0">
              <div class="mt-12 grid gap-y-12 gap-4 grid-cols-2 sm:grid-cols-4">
                <div v-for="tech in technologies" class="flex-auto technology-item">
                  <h3 class="text-lg font-semibold text-black">{{ tech.name }}</h3>
                  <div v-gsap.delay-1000.stagger.from='{ opacity: 0 }' class="mt-2">
                    <p 
                      v-for="item in tech.items"
                      class="text-lg"
                    >
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="footer" class="mt-12 mb-16 px-8 sm:px-0">
              <p class="text-xs text-secondary dark:text-gray-300">
              @ Copyright 2024 Sanchia Jodie -  Full Stack Creative Mobile and Web Developer
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
    
    <span class="opacity-60 particle-circular particle-origin-top-left particle-animate-rotate top-[-20vmax] left-[-90vmax] sm:top-[-20vmax] sm:left-[-80vmax] dark:opacity-100"></span>
    <span class="opacity-40 particle-sm particle-circular particle-origin-bottom-right particle-animate-rotate top-[20vmax] right-[-90vmax] sm:top-[30vmax] sm:right-[-80vmax] dark:opacity-100"></span>
  </div>
</template>

<script setup lang="ts">
const technologies = [
  {
    name: 'Languages',
    items: [
      'Dart',
      'JavaScript',
      'TypeScript',
      'Java',
      'Kotlin',
      'PHP',
      'Python',
    ]
  },
  {
    name: 'Frameworks',
    items: [
      'Flutter',
      'Vue.js',
      'Nuxt.js',
      'Angular',
      'Spring Boot',
      'Laravel',
    ],
  },
  {
    name: 'Tools',
    items: [
      'Git & GitLab',
      'Postman',
      'VS Code',
      'Android Studio',
      'IntelliJ IDEA',
      'Figma',
    ],
  },
  {
    name: 'Monitoring',
    items: [
      'Kibana',
      'Elastic Search',
      'Cloud Foundry',
      'WebLogic',
      'RedHat OCP',
    ],
  }
]
</script>

<style lang="scss" scoped>
@use "~/assets/scss/bg-animate.scss";
</style>