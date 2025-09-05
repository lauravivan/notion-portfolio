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
        href="https://docs.google.com/document/d/1w3eLRmpymz1To_HhLCTJwxN6rGJkIVul/edit?usp=sharing&ouid=108696305998739507094&rtpof=true&sd=true"
        emoji="👋"
        >Access my resume in Portuguese</Link
      >

      <Link
        href="https://docs.google.com/document/d/1yqNpJSqdXObu6z8VZTXEOrWOxcmIJJnC/edit?usp=sharing&ouid=108696305998739507094&rtpof=true&sd=true"
        emoji="👋"
        >Access my resume in English</Link
      >

      <Empty />

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
  "Web development (full-stack)",
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
    isChecked: true,
    item: "Next.js",
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
    isChecked: true,
    item: "TypeScript",
  },
  {
    isChecked: false,
    item: "GraphQL",
  },
  {
    isChecked: true,
    item: "PostgreSQL",
  },
  {
    isChecked: false,
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
    item: "Jest",
  },
];

const toDoOthers = [
  {
    isChecked: true,
    item: "Git",
  },
  {
    isChecked: true,
    item: "Github",
  },
  {
    isChecked: false,
    item: "Docker",
  },
  {
    isChecked: false,
    item: "AWS",
  },
  {
    isChecked: true,
    item: "Google Cloud",
  },
];
</script>
