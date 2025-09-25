<template>
  <div class="about">
    <div class="about__content">
      <Text
        >Hi there 👋! My name is Laura, and I'm a passionate Web developer
        building end to end web applications. Here in my portfolio you can
        access my projects and achievments.
      </Text>
      <Column numberOfColumns="3">
        <template #column-1>
          <Callout>Education...</Callout>
          <BulletList :items="educationTopics" />
        </template>

        <template #column-2>
          <Callout>Projects...</Callout>
          <BulletList :items="projectTopics" />
        </template>

        <template #column-3>
          <Callout>Goals...</Callout>
          <BulletList :items="goalsTopics" />
        </template>
      </Column>

      <Divider />

      <Empty />

      <Heading :heading-number="3">Resume/CV</Heading>

      <Link
        href="https://www.canva.com/design/DAG0AypumF4/YPozcTGXLmAUqdARQbOApg/edit?utm_content=DAG0AypumF4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        emoji="👋"
        >Access my resume in Portuguese</Link
      >

      <Link
        href="https://www.canva.com/design/DAG0A26TDnU/YHmnPBU-YM5Pl497cu4AAw/edit?utm_content=DAG0A26TDnU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        emoji="👋"
        >Access my resume in English</Link
      >

      <Empty />

      <Divider />

      <Empty />

      <Heading :headingNumber="3">Technologies</Heading>

      <Text
        >What I had/have contact with will be checked, things that I want start
        having contact with and to dive deep will be not checked</Text
      >

      <Empty />

      <Column numberOfColumns="5">
        <template #column-1>
          <Text class="highlight">Programming Languages</Text>
          <ToDoList :items="programmingLanguages.languages" />
          <Empty />
          <Text class="highlight">Frontend frameworks/libs</Text>
          <ToDoList :items="frontend.frameworks" />
          <Empty />
          <Text class="highlight">Frontend styling</Text>
          <ToDoList :items="frontend.style" />
          <Empty />
          <Text class="highlight">Frontend prototyping</Text>
          <ToDoList :items="frontend.prototyping" />
          <Empty />
          <Text class="highlight">Frontend bundling & dev tools</Text>
          <ToDoList :items="frontend.bundling" />
          <Empty />
        </template>
        <template #column-2>
          <Text class="highlight">Backend frameworks & runtime</Text>
          <ToDoList :items="backend.frameworks" />
          <Empty />
          <Text class="highlight">Building APIs</Text>
          <ToDoList :items="backend.apis" />
          <Empty />
          <Text class="highlight">Authentication</Text>
          <ToDoList :items="backend.auth" />
          <Empty />
          <Text class="highlight">Documentation</Text>
          <ToDoList :items="backend.doc" />
          <Empty />
          <Text class="highlight">CLI tools</Text>
          <ToDoList :items="backend.cli" />
          <Empty />
        </template>
        <template #column-3>
          <Text class="highlight">Database Systems</Text>
          <ToDoList :items="database.systems" />
          <Empty />
          <Text class="highlight">ORMs/ODMs</Text>
          <ToDoList :items="database.mapping" />
          <Empty />
          <Text class="highlight">Query languages</Text>
          <ToDoList :items="database.languages" />
        </template>
        <template #column-4>
          <Text class="highlight">Testing</Text>
          <ToDoList :items="testing.tools" />
          <Empty />
          <Text class="highlight">Devops containers</Text>
          <ToDoList :items="devops.containers" />
          <Empty />
          <Text class="highlight">Devops CI/CD</Text>
          <ToDoList :items="devops.cicd" />
          <Empty />
        </template>
        <template #column-5>
          <Text class="highlight">Cloud - plataforms</Text>
          <ToDoList :items="cloud.plataforms" />
          <Empty />
          <Text class="highlight">Cloud - services</Text>
          <ToDoList :items="cloud.services" />
        </template>
      </Column>
    </div>
  </div>
</template>

<script setup lang="ts">
import Callout from "@/components/Callout.vue";
import Column from "@/components/Column.vue";
import BulletList from "@/components/BulletList.vue";
import Divider from "@/components/Divider.vue";
import Text from "@/components/Text.vue";
import ToDoList from "@/components/ToDoList.vue";
import Empty from "@/components/Empty.vue";
import Heading from "@/components/Heading.vue";
import Link from "@/components/Link.vue";

const educationTopics = [
  "I made a year of Computer Science at Universidade Regional de Blumenau (FURB) before migrating to IS in another city. In my first year having contact with the 'technology world' I discovered a taste for logic, programming and databases. My first high level programming language was Java and continued after I moved on from institution.",
  "Information Systems graduate at Instituto Federal de Santa Catarina (IFSC).",
  "Front-End Development at EBAC.",
];

const projectTopics = [
  "I was a scholarship holder for an extension project at college where we developed a web system for risk classification using Django Framework.",
  "I was also a scholarship holder in a project to develop an acessible system to reunite acessibility guidelines helping developers and interested people to build more acessible plataforms.",
  "As a freelancer I helped to build a plataform to be used by Portuguese students in filtering content on arquivo.pt API. This project also uses LLM to help creating context and keywords to help with more assertive research.",
];

const goalsTopics = [
  "Improve even further the necessary habilities to create great web applications",
  "Web development (full-stack) mid-level",
];

type Tech = {
  [x: string]: {
    isChecked: boolean;
    name: string;
  }[];
};

const programmingLanguages: Tech = {
  languages: [
    {
      isChecked: true,
      name: "JavaScript",
    },
    {
      isChecked: true,
      name: "TypeScript",
    },
    {
      isChecked: true,
      name: "Java",
    },
    {
      isChecked: true,
      name: "Python",
    },
  ],
};

const database: Tech = {
  systems: [
    {
      isChecked: true,
      name: "PostgreSQL",
    },
    {
      isChecked: true,
      name: "MongoDB",
    },
    {
      isChecked: true,
      name: "MySQL",
    },
    {
      isChecked: true,
      name: "HeidiSQL/MariaDB",
    },
    {
      isChecked: true,
      name: "SQLite",
    },
  ],
  mapping: [
    {
      isChecked: true,
      name: "TypeORM",
    },
    {
      isChecked: true,
      name: "Mongoose",
    },
    {
      isChecked: true,
      name: "Prisma",
    },
    {
      isChecked: true,
      name: "Sequelize",
    },
  ],
  languages: [
    {
      isChecked: true,
      name: "SQL",
    },
  ],
};

const frontend: Tech = {
  frameworks: [
    {
      isChecked: true,
      name: "React.js",
    },
    {
      isChecked: true,
      name: "Vue.js",
    },
    {
      isChecked: true,
      name: "Next.js",
    },
    {
      isChecked: true,
      name: "TanStack Query",
    },
    {
      isChecked: true,
      name: "React Hook Form",
    },
    {
      isChecked: true,
      name: "React Router",
    },
    {
      isChecked: true,
      name: "Vuex",
    },
    {
      isChecked: true,
      name: "Vue Router",
    },
  ],
  style: [
    {
      isChecked: true,
      name: "SASS",
    },
    {
      isChecked: true,
      name: "TailwindCSS",
    },
    {
      isChecked: true,
      name: "Bootstrap",
    },
    {
      isChecked: true,
      name: "Styled Components",
    },
  ],
  prototyping: [
    {
      isChecked: true,
      name: "Figma",
    },
  ],
  bundling: [
    {
      isChecked: true,
      name: "Vite",
    },
    {
      isChecked: true,
      name: "Webpack",
    },
    {
      isChecked: true,
      name: "ESLint",
    },
    {
      isChecked: true,
      name: "Prettier",
    },
    {
      isChecked: true,
      name: "Browser Dev Tools",
    },
  ],
};

const backend: Tech = {
  frameworks: [
    {
      isChecked: true,
      name: "Express.js",
    },
    {
      isChecked: true,
      name: "Node.js",
    },
    {
      isChecked: true,
      name: "Nest.js",
    },
  ],
  apis: [
    {
      isChecked: true,
      name: "REST",
    },
    {
      isChecked: false,
      name: "GraphQL",
    },
    {
      isChecked: false,
      name: "WebSockets",
    },
  ],
  auth: [
    {
      isChecked: true,
      name: "OAuth",
    },
    {
      isChecked: true,
      name: "JWT",
    },
    {
      isChecked: true,
      name: "NextAuth.js",
    },
  ],
  doc: [
    {
      isChecked: false,
      name: "Swagger",
    },
    {
      isChecked: true,
      name: "Postman",
    },
    {
      isChecked: true,
      name: "Insomnia",
    },
    {
      isChecked: true,
      name: "Yaak",
    },
  ],
  cli: [
    {
      isChecked: true,
      name: "Git",
    },
    {
      isChecked: false,
      name: "Sed",
    },
    {
      isChecked: true,
      name: "Curl",
    },
    {
      isChecked: false,
      name: "Find",
    },
    {
      isChecked: false,
      name: "Grep",
    },
    {
      isChecked: false,
      name: "Fzf",
    },
    {
      isChecked: false,
      name: "Jq",
    },
  ],
};

const devops: Tech = {
  containers: [
    {
      isChecked: true,
      name: "Docker",
    },
    {
      isChecked: false,
      name: "Kubernetes",
    },
  ],
  cicd: [
    {
      isChecked: false,
      name: "GitHub Actions",
    },
  ],
};

const testing: Tech = {
  tools: [
    {
      isChecked: true,
      name: "Vitest",
    },
    {
      isChecked: true,
      name: "Jest",
    },
    {
      isChecked: true,
      name: "Selenium",
    },
    {
      isChecked: true,
      name: "Testcontainers",
    },
  ],
};

const cloud: Tech = {
  plataforms: [
    {
      isChecked: false,
      name: "AWS (Amazon Web Services)",
    },
    {
      isChecked: false,
      name: "Azure",
    },
    {
      isChecked: true,
      name: "Google Cloud Platform (GCP)",
    },
  ],
  services: [
    {
      isChecked: true,
      name: "Cloud Functions",
    },
    {
      isChecked: true,
      name: "Firebase",
    },
  ],
};
</script>
