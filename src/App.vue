<template>
  <div :class="mainContainerClasses">
    <Aside />

    <div :class="mainContentClasses">
      <Header />

      <router-view></router-view>

      <footer class="footer">
        <span>Developed by Laura (^.^)</span>
      </footer>
    </div>
  </div>
</template>

<script setup>
import Aside from "components/Aside.vue";
import Header from "components/Header.vue";
import { computedVariables } from "util/variable";

const { mainContainerClasses, mainContentClasses } = computedVariables;
</script>

<style lang="scss">
@import "@/assets/scss/main";

.main-content-default,
.main-content-click,
.aside-default,
.aside-click {
  height: 100%;
}

.main-container-default,
.main-container-click {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
  }
}

.main-container-default {
  .aside-default {
    display: flex;
    position: fixed;
    top: 11px;
    left: 13px;
    z-index: 3;
  }

  .header {
    .header-content {
      @include spacing($pt: 11px, $pl: 40px, $pr: 10px, $pb: 8px);
    }
  }
}

.main-container-click {
  position: relative;
  margin-left: 210px;

  .aside-click {
    position: fixed;
    width: 210px;
    inset: 0;
    box-shadow: $box-shadow-2;
    background-color: $gray-2;
    z-index: 3;
  }

  .header {
    .header-content {
      @include spacing($pt: 11px, $pl: 10px, $pr: 10px, $pb: 8px, $ml: 210px);
    }
  }

  .footer {
    span {
      margin-right: 210px;
    }
  }
}

.footer {
  text-align: center;
  font-size: $fs-small;
  @include spacing-2($py: 20px);
  background-color: $gray;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
}

/*configs*/
.font-roboto-mono {
  font-family: $mono;
}

.font-roboto-serif {
  font-family: $serif;
}

.font-size-small {
  p,
  span,
  div,
  h5 {
    font-size: $fs-small;
  }

  .page-content .page-title {
    span {
      font-size: 2.5rem;
    }
  }
}

.page-full-width {
  .page-content {
    width: 100%;
    place-items: unset;
  }
}
</style>
