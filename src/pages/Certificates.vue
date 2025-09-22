<script setup lang="ts">
import Column from "@/components/Column.vue";
import Text from "@/components/Text.vue";
import Link from "@/components/Link.vue";
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const theme = computed(() => store.getters.getTheme);
</script>

<template>
  <div class="certificates">
    <Column number-of-columns="2">
      <template #column-1>
        <div class="certificates__img-wrapper">
          <img :src="['light-theme', 'cat-latte'].includes(theme) ? '/codecon-dark.webp' : '/codecon-light.webp'" />
        </div>
      </template>
      <template #column-2>
        <Text>Meetup Codecon Ladies</Text>
        <br></br>
        <Text class="highlight">Codecon</Text>
        <br></br>
        <Text>Credential ID 28332382.05162310.5.8.87727823659275368</Text>
        <br></br>
        <Link
          emoji="🐈"
          href="https://eventos.codecon.dev/documentos/imprimir?i=28332382.05162310.5.8.87727823659275368&cc=A6530560-1A59-43F5-B1E8-4AD739668620"
          >Certificate</Link
        >
      </template>
    </Column>

    <Column number-of-columns="2">
      <template #column-1>
        <div class="certificates__img-wrapper">
          <img src="/ifsc.webp" />
        </div>
      </template>
      <template #column-2>
        <Text>Projeto: Interface Inclusiva - Maximizando Usabilidade e Acessibilidade para Todos</Text>
        <br></br>
        <Text class="highlight">IFSC</Text>
        <br></br>
        <Text>Credential ID 4ff92b43f6</Text>
        <br></br>
        <Link
          emoji="🐈"
          href="https://sigaa.ifsc.edu.br/sigaa/documentos"
          >Certificate</Link
        >
      </template>
    </Column>

     <Column number-of-columns="2">
      <template #column-1>
        <div class="certificates__img-wrapper">
          <img src="/ifsc.webp" />
        </div>
      </template>
      <template #column-2>
        <Text>INCENTIVANDO O EMPREENDEDORISMO EM CAÇADOR/SC - 4A EDIÇÃO</Text>
        <br></br>
        <Text class="highlight">IFSC</Text>
        <br></br>
        <Text>Credential ID fdfd518c28</Text>
        <br></br>
        <Link
          emoji="🐈"
          href="https://sigaa.ifsc.edu.br/sigaa/documentos"
          >Certificate</Link
        >
      </template>
    </Column>

      <Column number-of-columns="2">
      <template #column-1>
        <div class="certificates__img-wrapper">
          <img src="/ifpr.png" />
        </div>
      </template>
      <template #column-2>
        <Text>Padrões e Arquitetura de Software</Text>
        <br></br>
        <Text class="highlight">PADIÊ IFPR</Text>
        <br></br>
        <Text>Credential ID 4059858.2256071.6.5.368969556437146</Text>
        <br></br>
        <Link
          emoji="🐈"
          href="https://www.even3.com.br//documentos"
          >Certificate</Link
        >
      </template>
    </Column>
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/_var.scss" as var;

.certificates {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__img-wrapper {
    height: 110px;
    width: 110px;
    flex: 1;

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
  }
}
</style>
