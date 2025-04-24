<template>
  <div class="case-wrapper">
    <ContentRenderer :value="article" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAsyncData } from 'nuxt/app'

const route = useRoute()

const { data: article } = await useAsyncData(
    `case-${route.params.slug}`,
    () => queryContent().where({ _path: route.path }).findOne()
)

</script>


<style scoped>
.case-wrapper {
  max-width: 860px;
  margin: auto;
  padding: 20px;
  font-size: 16px;
  line-height: 1.8;
}

img {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
}
</style>
