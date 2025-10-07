<script setup lang="ts">
import Text from "@/components/Text.vue";
import Heading from "@/components/Heading.vue";
import Empty from "@/components/Empty.vue";
import BulletList from "@/components/BulletList.vue";
import Link from "@/components/Link.vue";
import Callout from "@/components/Callout.vue";
import Image from "@/components/Image.vue";
</script>

<template>
  <div class="college">
    <Empty />
    <Heading heading-number="2">AcessiWeb</Heading>
    <Callout
      >Full-Stack Developer – University-Funded Extension Program
      (IFSC)</Callout
    >
    <Text
      >Development of an accessible and intuitive digital platform that
      centralizes and organizes web accessibility guidelines, aiming to make
      them easier to access, understand, and apply by developers and other
      interested parties, through clearly defined steps.</Text
    >
    <Link emoji="👩‍🦯‍➡️" href="https://acessiweb.vercel.app/"
      >Access the system</Link
    >
    <Link
      emoji="👩‍🦯‍➡️"
      href="https://kind-parent-217.notion.site/TDD-Acessiweb-1b1fcc794298803a9903faa23e46a487"
      >Access the technical specifications document</Link
    >
    <Empty />
    <BulletList
      :items="[
        'Collected and analyzed functional and non-functional requirements, mapping the main accessibility guidelines to be implemented',
        'Created UML diagrams, including Use Case, Class, and Entity-Relationship (ER) diagrams',
        'Prototyped interfaces using Figma',
        'Created a TDD (Technical Design Document) outlining API endpoints, pagination, accessibility, error handling, authentication, security, parameters, and other specifications',
        'Developed a REST API using Nest.js, TypeScript, and PostgreSQL',
        'Implemented security measures using bcrypt and crypto (Node.js) to ensure data integrity',
        'Built user interfaces with Next.js, TypeScript, and SASS',
        'Performed Unit and Integration Testing on the API using Jest and Test Containers',
      ]"
    />
    <Empty />
    <Text>Time I spend in this project: Sep 2024 - Sep 2025</Text>
    <Empty />
    <Heading heading-number="2">Saúde 4.0 - Risk Classification in UBS</Heading>
    <Callout
      >Full-Stack Developer in a University-Funded Extension Program
      (IFSC)</Callout
    >
    <Text
      >A web system for public health clinics (UBS), focusing on automating risk
      classification.</Text
    >
    <Empty />
    <BulletList
      :items="[
        'Designed data models for managing patients, healthcare professionals, and essential Risk Classification records, as well as general aspects of a Basic Health Unit (UBS)',
        'Developed class-based views for data handling, integrating HTML, Django, and Bootstrap forms',
        'Implemented Ajax functions to enable client-side data manipulation',
        'Created a query system using models to automate Risk Classification',
        'Used Git and GitHub for version control (commits and pull requests)',
      ]"
    />
    <Empty />
    <Text>Time I spend in this project: Jun 2021 - Aug 2022</Text>
    <Empty />
    <Heading heading-number="2"
      >Social Entrepreneurship Initiative, Vila Usina, Caçador-SC</Heading
    >
    <Text class="highlight">Mar 2022 - July 2022</Text>
    <br />
    <Text
      >The Vila Hortaliça project grew from a university-based social
      entrepreneurship initiative guided by Professor Sibeli P. Ferronato. Aimed
      at giving students proactive and meaningful entrepreneurial experience
      while engaging with a local community lacking access to basic resources,
      the project involved three initiatives approved by the community: one
      focused on children, another on workforce integration, and a third on
      domestic gardening, which is the focus here. Vila Hortaliça was created to
      help the Vila Usina community achieve self-sustainability and access
      healthier food, while also fostering entrepreneurial spirit within the
      community. The project brought together students from Production
      Engineering (Kauterine Dallanol, Pedro, Elton Maciel, and Matheus
      Gandolfo) and Information Systems (Lucas Gois and myself, Laura Vivan),
      combining diverse perspectives and creative approaches. The July 3rd
      activity was planned throughout the semester using tools like CANVAS,
      ensuring that classroom learning and careful project planning contributed
      to its successful implementation.</Text
    >
    <Link
      emoji="🎓"
      href="https://www.canva.com/design/DAG1IEpOGnk/7OAo9zrICwIrXMMqWfc0pA/view?utm_content=DAG1IEpOGnk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8bd7abb7fa"
      >My Testimony</Link
    >
    <Link emoji="🎓" href="https://projeto-vila-usina.blogspot.com/"
      >Project Vila Usina</Link
    >
    <Link
      emoji="🎓"
      href="https://drive.google.com/file/d/1u1CaBmlfgYqO0z6oZzOm8tj9fVAp-Niz/view"
      >Vila Hortaliça Book</Link
    >
    <Image src="/vila-usina.webp" />
    <Empty />
    <Heading heading-number="2">Teaching Assistant</Heading>
    <Text class="highlight">Aug 2021 - Dec 2021</Text>
    <br />
    <Text>Teaching assistant for the Algorithms I course at IFSC</Text>
    <Empty />
    <BulletList
      :items="[
        'I helped students with questions about the content and exercises.',
        'I provided one-on-one tutoring, with the support of a Libras (Brazilian Sign Language) interpreter, using Scratch to teach basic programming concepts.',
      ]"
    />
    <Empty />
    <Heading heading-number="2"
      >Women in Information Systems Meeting – Conexão SI</Heading
    >
    <Callout
      >Conexão SI is an initiative aimed at supporting women studying
      Information Systems at the IFSC - Caçador Campus, fostering connections
      and encouraging female participation in technology.</Callout
    >
    <Empty />
    <Heading heading-number="3">#1 Meeting</Heading>
    <Image src="/conexao-si.webp" />
    <Empty />
    <Heading heading-number="3">#2 Meeting</Heading>
    <Image src="/conexao-si-2.webp" />
  </div>
</template>
