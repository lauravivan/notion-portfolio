<template>
  <div class="about">
    <div class="about__content">
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

      <Heading :headingNumber="3">Technologies</Heading>

      <Text
        >What I’ve been studying and improving (checked), but also things I want
        start having contact with and to dive deep (not checked)</Text
      >

      <Empty />

      <Column numberOfColumns="3">
        <template #column-1>
          <Text class="highlight">Building interfaces</Text>
          <ToDoList :items="toDoInterfaces" />
        </template>
        <template #column-2>
          <Text class="highlight">Building logic and data</Text>
          <ToDoList :items="toDoLogic" />
        </template>
        <template #column-3>
          <Text class="highlight">Testing</Text>
          <ToDoList :items="toDoTesting" />
          <Text class="highlight">Other tools</Text>
          <ToDoList :items="toDoOthers" />
        </template>
      </Column>
    </div>
  </div>
</template>

<script setup>
import Callout from "UIElements/Callout.vue";
import Column from "components/Column.vue";
import BulletList from "components/BulletList.vue";
import Divider from "UIElements/Divider.vue";
import Text from "UIElements/Text.vue";
import ToDoList from "components/ToDoList.vue";
import Empty from "UIElements/Empty.vue";
import Heading from "UIElements/Heading.vue";

const educationTopics = [
  `System Information by IFSC (in progress). Set up to end july 2025.`,
  `Front-End Development at EBAC.`,
];

const projectTopics = [
  `I was a scholarship holder for an extension project at college where we developed a web system for risk classification using Django Framework.`,
];

const goalsTopics = [
  `Improve even further the necessary habilities to create great web applications`,
  `Web development (full-stack)`,
];

const toDoInterfaces = [
  {
    isChecked: true,
    item: "React.js",
  },
  {
    isChecked: true,
    item: "Vue.js",
  },
  {
    isChecked: true,
    item: "SCSS",
  },
  {
    isChecked: true,
    item: "TailwindCSS",
  },
  {
    isChecked: false,
    item: "Styled-components",
  },
  {
    isChecked: true,
    item: "Pug.js",
  },
  {
    isChecked: true,
    item: "Webpack",
  },
  {
    isChecked: true,
    item: "Vite",
  },
];

const toDoLogic = [
  {
    isChecked: true,
    item: "Express.js",
  },
  {
    isChecked: true,
    item: "Node.js",
  },
  {
    isChecked: true,
    item: "JavaScript",
  },
  {
    isChecked: false,
    item: "TypeScript",
  },
  {
    isChecked: false,
    item: "GraphQL (Apollo)",
  },
  {
    isChecked: true,
    item: "MongoDB + mongoose",
  },
  {
    isChecked: true,
    item: "PostgreSQL",
  },
  {
    isChecked: true,
    item: "Prisma",
  },
];

const toDoTesting = [
  {
    isChecked: true,
    item: "Vitest",
  },
  {
    isChecked: true,
    item: "Cypress",
  },
];

const toDoOthers = [
  {
    isChecked: true,
    item: "Git",
  },
  {
    isChecked: false,
    item: "Docker",
  },
  {
    isChecked: false,
    item: "Next.js",
  },
];
</script>
