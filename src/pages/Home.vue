<template>
  <div class="about">
    <div class="about__github-img-wrapper">
      <img class="about__github-img" />
    </div>
    <div class="about__content">
      <div class="about__content-wrapper">
        <h5 class="about__title">Education...</h5>
        <div class="about__info">
          <p>System Information by IFSC (in progress).</p>
          <p>Front-End Development at EBAC.</p>
        </div>
      </div>
      <div class="about__content-wrapper">
        <h5 class="about__title">Projects...</h5>
        <div class="about__info">
          <p>
            I was a scholarship holder for an extension project at college where
            we developed a web system for risk classification using Django
            Framework.
          </p>
        </div>
      </div>
      <div class="about__content-wrapper">
        <h5 class="about__title">Goals...</h5>
        <div class="about__info">
          <p>
            I'm most interested in Front-End Development but also in Web
            Development in general.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.about {
  @include grid-layout($column-gap: 20px, $row-gap: 20px);
  transition: grid-template-columns 0.3s;

  &__github-img-wrapper {
    height: auto;
  }

  &__github-img {
    width: 100%;
  }

  &__content {
    @include flex-layout($row-gap: 20px);
  }

  &__content-wrapper {
    @include flex-layout($row-gap: 10px);
  }

  &__title {
    @extend .heading;
    width: max-content;
  }

  &__info {
    p {
      line-height: 1.4;
    }
  }
}
</style>
