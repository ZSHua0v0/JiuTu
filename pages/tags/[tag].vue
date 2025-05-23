<template>
  <div class="tag-detail-page">
    <h1 class="tag-title">{{ $t('tags.tagPrefix') }} {{ tag }}</h1>

    <ul class="tag-article-list">
      <li v-for="item in filtered" :key="item._path" class="tag-article-item">
        <NuxtLink :to="item._path">{{ item.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { pageMetaMap as getPageMetaMap } from '@/utils/pageMeta' // 异步加载 JSON

const route = useRoute()
const { locale, t } = useI18n()
const tag = decodeURIComponent(route.params.tag)
const langPrefix = `/${locale.value}/`

// ✅ 1. 加载 content 内容
const { data: contentArticles } = await useAsyncData('tagPosts', () =>
    queryContent().only(['_path', 'title', 'tags', 'lang']).find()
)

const filteredContent = contentArticles.value.filter(
    a =>
        (a.lang === locale.value || a._path.startsWith(langPrefix)) &&
        a.tags?.includes(tag)
)

// ✅ 2. 加载 pageMeta.json
const metaMap = await getPageMetaMap()

const metaFiltered = Object.entries(metaMap)
    .filter(([path, meta]) => {
      const metaTags = meta?.[locale.value]?.tags || []
      return metaTags.includes(tag)
    })
    .map(([path, meta]) => ({
      _path: path,
      title: meta[locale.value].title
    }))

// ✅ 3. 合并结果
const filtered = [...filteredContent, ...metaFiltered]

</script>

<style scoped>
.tag-detail-page {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  min-height: 60vh;
}
.tag-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}
.tag-article-list {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 700px;
}
.tag-article-item {
  padding: 10px 0;
  text-align: center;
  border-bottom: 1px dashed #ddd;
}
.tag-article-item a {
  font-size: 1.1rem;
  text-decoration: none;
  color: #007acc;
}
.tag-article-item a:hover {
  color: #ffa500;
}
</style>
