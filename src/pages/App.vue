<template>
    <div :class="mainContainerClasses">
        <Aside/>

        <div :class="mainContentClasses">
            <router-view></router-view>
        </div>
    </div>
    <Modal/>
</template>

<script setup>
import { computedProperties } from '@/sharedData.js'
import Aside from '@/components/Aside.vue'
import Modal from '@/components/Modal.vue'

const { mainContainerClasses, mainContentClasses } = computedProperties
</script>

<style lang="scss">
@import '@/assets/scss/main';

.main-content-default, 
.main-content-click,
.aside-default,
.aside-click {
    height: 100%;
}

.main-container-default, .main-container-click {
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
</style>