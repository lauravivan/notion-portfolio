<script setup lang="ts">
import Bookmark from "@/components/Bookmark.vue";
</script>

<template>
  <div class="certificates">
    <Bookmark
      title="Desenvolvimento Front-End do Zero ao Pro"
      subtitle="EBAC - 11956-70519-75448-83098"
      link="https://static.lms.ebaconline.com.br/certs/115b328c-e890-4879-a789-622e2b59f84d.pdf"
    />
    <Bookmark
      title="JavaScript Unit Testing - The Practical Guide"
      subtitle="Udemy - UC-3efc1286-ed24-496e-8939-a95f8c35e4cb"
      link="https://www.udemy.com/certificate/UC-3efc1286-ed24-496e-8939-a95f8c35e4cb/"
    />
    <Bookmark
      title="Meetup Codecon Ladies"
      subtitle="Codecon - 28332382.05162310.5.8.87727823659275368"
      link="https://eventos.codecon.dev/documentos/imprimir?i=28332382.05162310.5.8.87727823659275368&cc=A6530560-1A59-43F5-B1E8-4AD739668620"
    />
    <Bookmark
      title="
Projeto: Interface Inclusiva - Maximizando Usabilidade e Acessibilidade para Todos"
      subtitle="IFSC - 4ff92b43f6"
      link="https://sigaa.ifsc.edu.br/sigaa/documentos"
    />
    <Bookmark
      title="INCENTIVANDO O EMPREENDEDORISMO EM CAÇADOR/SC - 4A EDIÇÃO"
      subtitle="IFSC - fdfd518c28"
      link="https://sigaa.ifsc.edu.br/sigaa/documentos"
    />
    <Bookmark
      title="Maratona do Zero ao Código - III Edição"
      subtitle="Kenzie Academy Brasil"
    />
    <Bookmark
      title="PYTHON 3 - MUNDO 1"
      subtitle="Curso em vídeo - 4986E-66E2-5"
      link="https://www.cursoemvideo.com/validacao-de-certificado/"
    />
    <Bookmark
      title="PYTHON 3 - MUNDO 2"
      subtitle="Curso em vídeo - 4986E-67AC-2"
      link="https://www.cursoemvideo.com/validacao-de-certificado/"
    />
    <Bookmark
      title="PYTHON 3 - MUNDO 3"
      subtitle="Curso em vídeo - 4986E-685A-7"
      link="https://www.cursoemvideo.com/validacao-de-certificado/"
    />
    <Bookmark
      title="Padrões e Arquitetura de Software"
      subtitle="PADIE do IFPR - 4059858.2256071.6.5.368969556437146"
      link="https://www.even3.com.br//documentos"
    />
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/_var.scss" as var;

.certificates {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
