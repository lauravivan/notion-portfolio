<template>
  <div class="contact">
    <div class="contact__content-wrapper">
      <h5 class="contact__title">Reach me</h5>
      <ul class="contact__list">
        <li class="contact__list-item">
          <span>E-mail: lauvivang@gmail.com</span>
        </li>
      </ul>
    </div>
    <div class="contact__content-wrapper">
      <h5 class="contact__title">Social Media</h5>
      <ul class="contact__list">
        <li class="contact__list-item">
          <span>LinkedIn: linkedin.com/in/laura-vivan-gonçalves-718409213</span>
        </li>
        <li class="contact__list-item"><span>Instagram: @lauvivan_</span></li>
        <li class="contact__list-item"><span>CodePen:</span></li>
        <li class="contact__list-item"><span>Github: @lauravivan </span></li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/main.scss";

.contact {
  @include flex-layout($row-gap: 30px);

  &__title {
    @extend .heading;
    margin-bottom: 10px;
    border-radius: 3px;
  }

  &__list {
    list-style-type: disc;
    margin-left: 30px;
    line-height: 1.5;
  }
}
</style>
