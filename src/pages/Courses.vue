<script setup lang="ts">
import Divider from "@/components/Divider.vue";
import Empty from "@/components/Empty.vue";
import Text from "@/components/Text.vue";
import Link from "@/components/Link.vue";
import Column from "@/components/Column.vue";
</script>

<template>
  <div class="courses">
    <Empty />

    <Column number-of-columns="2">
      <template #column-1>
        <div class="courses__img-wrapper">
          <img src="/ebac.png" />
        </div>
      </template>
      <template #column-2>
        <Text>Desenvolvimento Front-End do Zero ao Pro</Text>
        <br />
        <Text class="highlight">EBAC - Marcelo Cavalcanti</Text>
        <br />
        <Text>Credential ID 11956-70519-75448-83098</Text>
        <br />
        <Text>2021 - 2023</Text>
        <br />
        <Link
          emoji="🐈"
          href="https://static.lms.ebaconline.com.br/certs/115b328c-e890-4879-a789-622e2b59f84d.pdf"
          >Certificate</Link
        >
      </template>
    </Column>

    <Empty />

    <Text class="highlight">About:</Text>

    <Text>
      A very focused course on the basis of frontend (fundamentals), not
      attached by any specific framework. It covered HTML, CSS and JavaScript
      and tools to work in frontend.</Text
    >

    <Empty />

    <Text class="highlight">Reasons I decided to take it:</Text>

    <Text>
      I decided to go to a free EBAC Webinar about CSS and coorelated stuff.
      There I was presented to this course and as I was already very excited
      with web development and had just initial contact with it, it looked like
      a nice deal for me.</Text
    >

    <Empty />

    <Divider />

    <Empty />

    <Column number-of-columns="2">
      <template #column-1>
        <div class="courses__img-wrapper">
          <img src="/udemy.png" />
        </div>
      </template>
      <template #column-2>
        <Text>JavaScript Unit Testing - The Practical Guide</Text>
        <br />
        <Text class="highlight">Udemy - Maximilian Schwarzmüller</Text>
        <br />
        <Text>Credential ID UC-3efc1286-ed24-496e-8939-a95f8c35e4cb</Text>
        <br />
        <Text>2024</Text>
        <br />
        <Link
          emoji="🐈"
          href="https://www.udemy.com/certificate/UC-3efc1286-ed24-496e-8939-a95f8c35e4cb/"
          >Certificate</Link
        >
      </template>
    </Column>

    <Empty />

    <Text class="highlight">About:</Text>

    <Text>
      In the course Max teaches about the automation of unit and integration
      testing with Vitest in JavaScript enviroment. It covered basics, how to
      write good tests, advanced testing concepts, mocking and spies, and
      further.</Text
    >

    <Empty />

    <Text class="highlight">Reasons I decided to take it:</Text>

    <Text>
      I was very excited about the way Max teaches and I was wanting to have a
      background with testing automation.
    </Text>

    <Empty />

    <Divider />

    <Empty />

    <Column number-of-columns="2">
      <template #column-1>
        <div class="courses__img-wrapper">
          <img src="/curso-em-video.webp" />
        </div>
      </template>
      <template #column-2>
        <Text>PYTHON 3 - MUNDOS 1, 2, 3</Text>
        <br />
        <Text class="highlight">Curso em vídeo - Gustavo Guanabara</Text>
        <br />
        <Text>Credential ID UC-3efc1286-ed24-496e-8939-a95f8c35e4cb</Text>
        <br />
        <Text>2022</Text>
        <br />
        <Link
          emoji="🐈"
          href="https://www.cursoemvideo.com/validacao-de-certificado/"
          >Certificate Mundo 1 - ID 4986E-66E2-5</Link
        >
        <Link
          emoji="🐈"
          href="https://www.cursoemvideo.com/validacao-de-certificado/"
          >Certificate Mundo 2 - ID 4986E-67AC-2</Link
        >
        <Link
          emoji="🐈"
          href="https://www.cursoemvideo.com/validacao-de-certificado/"
          >Certificate Mundo 3 - ID 4986E-685A-7</Link
        >
      </template>
    </Column>

    <Empty />

    <Text class="highlight">About:</Text>

    <Text>
      A free Python course. The first world covered the fundamentals, the second
      covered control structures and the third composite structures.</Text
    >

    <Empty />

    <Text class="highlight">Reasons I decided to take it:</Text>

    <Text>
      I was asked to learn about Python and Django enviroment when I first
      entered in a scholarship in College. So, I dove deep into Python for a
      month before starting it. At the time, as I was alreading watching some
      videos from professor Guanabara, It was my first choice.</Text
    >
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/_var.scss" as var;

.courses {
  &__img-wrapper {
    height: 130px;
    width: 130px;
    flex: 1;

    @media (max-width: var.$screen-xs) {
      height: 80px;
      width: 80px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .columns {
    &__column:first-of-type {
      display: flex;
      flex: none;
    }

    &__column:nth-child(2) {
      flex: none;
    }

    @media (max-width: var.$screen-xs) {
      flex-direction: row;
    }
  }
}
</style>
