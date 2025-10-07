<script setup lang="ts">
import Text from "@/components/Text.vue";
import Heading from "@/components/Heading.vue";
import Empty from "@/components/Empty.vue";
import BulletList from "@/components/BulletList.vue";
import Link from "@/components/Link.vue";
import Callout from "@/components/Callout.vue";
</script>

<template>
  <div class="freelance">
    <Empty />
    <Heading heading-number="2">Estudos Arquivados</Heading>
    <Callout>Contract Full-Stack Developer</Callout>
    <Text
      >Development of a platform to filter content from arquivo.pt, focusing on
      the education of students in Portugal. Utilized an LLM to generate context
      based on the students’ grade level and subject, as well as keywords for
      more precise searches.</Text
    >
    <Link emoji="🎓" href="https://estudosarquivados.pt/"
      >Plataform access</Link
    >
    <Empty />
    <BulletList
      :items="[
        'Set up the Firebase environment',
        'Implemented Bearer/Refresh token authentication using Firebase',
        'Created a REST API using Express.js, TypeScript, Cloud Functions, and Firestore',
        'Utilized an LLM to contextualize search queries and generate keywords for improved filtering with the Arquivo.pt API',
        'Implemented pagination on the frontend with cached responses to improve response times, and added logic to handle unstable API responses',
        'Developed PDF generation using Puppeteer and AWS Chromium integrated with Cloud Functions, preserving formatting such as styles, fonts, and images',
        'Developed DOCX generation using Cheerio and custom text formatting',
        'Created a search history system that allows users to save queries and access them later without reloading the context and keywords',
        'Used Zod to validate data sent to API routes',
        'Implemented web components to reuse HTML structures',
        'Implemented dynamic URLs with parameters that update as search queries change, both on the main screen and the results page',
      ]"
    />
    <Empty />
    <Text>Time I spend in this project: Feb 2025 - May 2025</Text>
    <Empty />
    <Heading heading-number="2">Lyva</Heading>
    <Callout>Contract Full-Stack Developer</Callout>
    <Text
      >A web-based system for splitting payments between partners. This solution
      allows companies to use the platform to manage partners, services, and
      billing, enabling multiple payments to different parties in a single
      transaction. To achieve this, the system integrates with a payment
      API.</Text
    >
    <Empty />
    <BulletList
      :items="[
        'Developed a Single Page Application (SPA) using React.js and Vite',
        'Used Tailwind CSS for styling',
        'Handled form validation and submission using Yup and Formik on the frontend',
        'Built a REST API using Nest.js, Cloud Functions, Firestore, and TypeScript',
        'Integrated an external API via Webhooks for scheduled event management',
        'Implemented Ngrok to enable local API communication with the external API',
        'Configured email sending with Nodemailer and Google OAuth2 authentication',
        'Created modules for users, partners, patients, services, subscriptions, financial management, and reporting',
        'Enhanced security using bcrypt and Node.js crypto module, and implemented Bearer/Refresh token authentication with Firebase',
        'Optimized performance with Firestore function listeners, reducing response time from 8 seconds to milliseconds',
      ]"
    />
    <Empty />
    <Text>Time I spend in this project: Oct/Nov 2024 - May 2025</Text>
  </div>
</template>
