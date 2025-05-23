<template>
  <div class="case-wrapper">
    <ContentRenderer :value="article" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useAsyncData } from 'nuxt/app'

const route = useRoute()
const { locale } = useI18n()

const slug = route.params.slug
const contentPath = `/${locale.value}/CaseStudies/${slug}`

const { data: article } = await useAsyncData(
    `guide-${locale.value}-${slug}`,
    () => queryContent(contentPath).findOne()
)

</script>


<style scoped>
.case-wrapper {
  max-width: 50%;
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
