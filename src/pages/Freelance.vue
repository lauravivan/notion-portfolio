<script setup lang="ts">
import Bookmark from "@/components/Bookmark.vue";
import Text from "@/components/Text.vue";
import Heading from "@/components/Heading.vue";
import Empty from "@/components/Empty.vue";
</script>

<template>
  <div class="freelance">
    <Heading heading-number="2">Estudos Arquivados</Heading>
    <Text>Time I spend in this project: Feb 2025 - May 2025</Text>
    <Bookmark
      title="Estudos arquivados"
      subtitle="Development of a platform to filter content from arquivo.pt, focusing on the education of students in Portugal. Utilized an LLM to generate context based on the students’ grade level and subject, as well as keywords for more precise searches."
      link="https://estudosarquivados.pt/"
    />
    <Empty />
    <Text
      >I built a serveless backend for the project, a REST API using Express.js,
      TypeScript, Cloud Functions and Firebase. In the backend I introduced LLM
      in one of the routes, to generate contextualization based on the query and
      keywords for improved filtering. Also, in the backend, I developed PDF
      generation using Puppeteer and AWS Chromium, preserving formatting such as
      styles, fonts and images. And DOCX generation using Cheerio and custom
      text formatting. I also implemented validation of data with Zod and
      created a search history system that allows users to save queries and
      access them later without reloading the context and keywords.
    </Text>
    <Empty />
    <Text>
      I implemented pagination on the frontend with cached responses to improve
      response times, and added logic to handle unstable API responses. I
      Implemented web components to reuse HTML structures. And I implemented
      dynamic URLs with parameters that update as search queries change, both on
      the main screen and the results page.
    </Text>
    <Empty />
    <Heading heading-number="2">Lyva</Heading>
    <Text>Time I spend in this project: Oct/Nov 2024 - May 2025</Text>
    <Bookmark
      title="Lyva"
      subtitle="A web-based system for splitting payments between partners. This solution allows companies to use the platform to manage partners, services, and billing, enabling multiple payments to different parties in a single transaction. To achieve this, the system integrates with a payment API."
    />
    <Empty />
    <Text
      >I developed a SPA using React.js and Vite. I used TailwindCSS for
      styling. Handled form validation and submission using Yup and Formik.
    </Text>
    <Empty />
    <Text>
      I built a serveless backend for the project, a REST API using Nest.js,
      Cloud Functions, Firestore and TypeScript. Integrated ASAAS Api via
      Webhooks and api endpoints, using Ngrok to enable local API communication
      for testing purposes. I configured email sending with Nodemailer and
      Google OAuth2 authentication. Enhanced security using bcrypt and Node.js
      crypto module. The authentication was implemented with Firebase using
      Bearer/Refresh token. Also, I optimized performance with Firestore
      function listeners, reducing response time from 8 seconds to milliseconds.
    </Text>
    <Empty />
    <Heading heading-number="2">Saúde 4.0 - Risk Classification in UBS</Heading>
    <Text>Time I spend in this project: Jun 2021 - Aug 2022</Text>
    <Bookmark
      title="Saúde 4.0 - Risk Classification in UBS"
      subtitle="A web system for public health clinics (UBS), focusing on automating risk classification."
      link="https://estudosarquivados.pt/"
    />
    <Empty />
    <Text
      >Once I entered the project I knew nothing about Django and I barely knew
      to write code in Python. I had a month to learn things, and after that I
      was one of the students that were most collaborating to build the system.
      I designed data models, worked on the CSS with bootstrap, developed
      class-based views, worked with ajax for client-side data manipulation,
      created a query system using models to automate the Risk Classification,
      done several PR.
    </Text>
    <Empty />
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/_var.scss" as var;

.certificates {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
