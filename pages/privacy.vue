<template>
  <div class="privacy-page">
    <h1>{{ $t('privacy.title') }}</h1>

    <section>
      <h2>{{ $t('privacy.sections.collect.title') }}</h2>
      <p>{{ $t('privacy.sections.collect.content[0]') }}</p>
      <ul>
        <li>{{ $t('privacy.sections.collect.content[1]') }}</li>
        <li>{{ $t('privacy.sections.collect.content[2]') }}</li>
        <li>{{ $t('privacy.sections.collect.content[3]') }}</li>
      </ul>
    </section>

    <section>
      <h2>{{ $t('privacy.sections.use.title') }}</h2>
      <p>{{ $t('privacy.sections.use.content[0]') }}</p>
      <ul>
        <li>{{ $t('privacy.sections.use.content[1]') }}</li>
        <li>{{ $t('privacy.sections.use.content[2]') }}</li>
        <li>{{ $t('privacy.sections.use.content[3]') }}</li>
        <li>{{ $t('privacy.sections.use.content[4]') }}</li>
      </ul>
    </section>

    <section>
      <h2>{{ $t('privacy.sections.share.title') }}</h2>
      <p>{{ $t('privacy.sections.share.content[0]') }}</p>
      <ul>
        <li>{{ $t('privacy.sections.share.content[1]') }}</li>
        <li>{{ $t('privacy.sections.share.content[2]') }}</li>
        <li>{{ $t('privacy.sections.share.content[3]') }}</li>
        <li>{{ $t('privacy.sections.share.content[4]') }}</li>
      </ul>
    </section>

    <section>
      <h2>{{ $t('privacy.sections.cookie.title') }}</h2>
      <p>{{ $t('privacy.sections.cookie.content') }}</p>
    </section>

    <section>
      <h2>{{ $t('privacy.sections.security.title') }}</h2>
      <p>{{ $t('privacy.sections.security.content') }}</p>
    </section>

    <section>
      <h2>{{ $t('privacy.sections.rights.title') }}</h2>
      <p>{{ $t('privacy.sections.rights.content') }}</p>
    </section>

    <section>
      <h2>{{ $t('privacy.sections.thirdparty.title') }}</h2>
      <p>{{ $t('privacy.sections.thirdparty.content') }}</p>
    </section>

    <section>
      <h2>{{ $t('privacy.sections.minor.title') }}</h2>
      <p>{{ $t('privacy.sections.minor.content') }}</p>
    </section>

    <section>
      <h2>{{ $t('privacy.sections.change.title') }}</h2>
      <p>{{ $t('privacy.sections.change.content') }}</p>
    </section>

    <section>
      <h2>{{ $t('privacy.sections.contact.title') }}</h2>
      <p>{{ $t('privacy.sections.contact.content') }}</p>
      <ul>
        <li>{{ $t('privacy.sections.contact.telegram') }}：
          <a :href="contactLinks.telegram" target="_blank">https://t.me/your_telegram</a>
        </li>
        <li>{{ $t('privacy.sections.contact.email') }}：
          <a :href="contactLinks.email">someone@example.com</a>
        </li>
        <li>{{ $t('privacy.sections.contact.wechat') }}：点击右下角客服图标</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { getContactLinks } from '~/utils/ts/contact_link'

const contactLinks = ref({})

onMounted(async () => {
  contactLinks.value = await getContactLinks()
})
const sectionKeys = [
  'collect', 'use', 'share', 'cookie', 'security',
  'rights', 'thirdparty', 'minor', 'change'
]

useHead({
  title: '隐私政策 - Jiutu',
  meta: [
    {
      name: 'description',
      content: '九途隐私政策说明，保护用户信息安全，说明信息收集、使用及用户权利等内容。'
    }
  ]
})
</script>

<style scoped>
ul{
  list-style: none;
}
.privacy-page {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  line-height: 1.8;
  font-size: 16px;
}
h1 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
}
h2 {
  margin-top: 30px;
  font-size: 1.3rem;
  color: #333;
}
a {
  color: #007acc;
  text-decoration: underline;
}
a:hover {
  color: #ffa500;
}
</style>
