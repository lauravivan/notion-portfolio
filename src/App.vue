<script setup lang="ts">
import { Aside, Header, useStore, Tabs } from "@core/index.ts";
import { onMounted, watch } from "vue";
import { useAside } from "@core/hooks";
import { useRouter } from "vue-router";
import metadata from "./metadata";

const router = useRouter();
const { mainContainerClasses, mainContentClasses } = useAside();
const store = useStore;

const theme = store.getTheme;

function handleNavigate(path: string) {
    router.push(path);
}

watch(
    () => store.theme,
    (newTheme) => {
        document.body.className = "";
        document.body.classList.add(newTheme);
    }
);

onMounted(() => {
    document.body.className = "";
    document.body.classList.add(theme);
    store.storeCreated();
});
</script>

<template>
    <div v-if="router.currentRoute.value.name === 'NotFound'">
        <router-view v-slot="{ Component }">
            <component
                :is="Component"
                :previousRoute="router.currentRoute.value.meta.previousRoute"
            />
        </router-view>
    </div>
    <div v-else class="app">
        <div :class="mainContainerClasses">
            <Aside :metadata="metadata" />

            <div :class="mainContentClasses">
                <Tabs @navigate="handleNavigate" />

                <Header />

                <router-view v-slot="{ Component }">
                    <component
                        :is="Component"
                        :activePage="store.getActivePage"
                        :useStore="useStore"
                    />
                </router-view>

                <footer class="footer">by Notion Portfolio (^.^)</footer>
            </div>
        </div>
    </div>
</template>
