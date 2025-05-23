<template>
  <div class="tag-page">
    <h1 class="tag-title">{{ $t('tags.title') }}</h1>
    <div class="tag-list">
      <NuxtLink
          v-for="tag in tags"
          :key="tag"
          :to="`/tags/${tag}`"
          class="tag-chip"
      >
        {{ tag }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { usePageMeta } from '@/composables/usePageMeta'
usePageMeta()
import { pageMetaMap } from '@/utils/pageMeta'

const { locale } = useI18n()

// content 中提取文章 tags
const { data: articles } = await useAsyncData('allContentPosts', () =>
    queryContent().only(['_path', 'tags', 'lang']).find()
)

const filteredContent = articles.value.filter(a =>
    a.lang === locale.value || a._path.startsWith(`/${locale.value}/`)
)

const contentTags = new Set()
filteredContent.forEach(article => {
  article.tags?.forEach(tag => contentTags.add(tag))
})

// ✅ 异步获取 JSON 中的 metaMap
const meta = await pageMetaMap()

const metaTags = new Set()
Object.values(meta).forEach(m => {
  const langMeta = m[locale.value]
  langMeta?.tags?.forEach(tag => metaTags.add(tag))
})

// 合并所有 tags
const tags = [...new Set([...contentTags, ...metaTags])]

</script>

<style scoped>
.tag-page {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
  text-align: center;
  min-height: 60vh;
}

.tag-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.tag-chip {
  background-color: #f0f0f0;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 1rem;
  color: #333;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid #e0e0e0;
}

.tag-chip:hover {
  background-color: #ffb733;
  color: white;
  border-color: #ffa500;
}
</style>
