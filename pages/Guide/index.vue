<template>
  <div>
    <div class="guide-container">
      <div class="guide-item" v-for="(item, index) in guideList" :key="index">
        <div class="left-line"></div>
        <div class="content">
          <NuxtLink :to="item.link" class="title">{{ item.title }}</NuxtLink>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// const guideList = [
//   {
//     title: '云服务器ECS',
//     description: '云服务器ECS(Elastic Compute Serice)是阿里云提供的性能卓越、稳定可靠、弹性扩展的Iaas(Infrastructure asaService)级别云计算服务,云服务器 ECS 免去了您采购IT硬件的前期准备，让您像使用水、电、天然气等公共资源一样便捷、高效地使用服务器，实现计算资源的即开即用和弹性伸缩。阿里云 ECS 持续提供创新型服务器，解决多种业务需求，助力您的业务发展。',
//     link: '/guide/ecs'
//   },
//   {
//     title: '边缘网络加速',
//     description: '边缘网络加速服务(Edge Network Acceleration)基于阿里云广泛分布的边缘计算节点及运营商合规网络资源构建，可以为企业客户提供企业内部分支机构之间的加速连接、企业各DC之间的加速连接、企业内网到阿里云之间的加速连接等全程端到端的快速连接服务。',
//     link: '/guide/ena'
//   },
//   {
//     title: '轻量应用服务器',
//     description: '轻量应用服务器(Simple Application Server)是可以快速搭建且易于管理的轻量级云服务器，面向单台服务器提供了一键部署应用、一站式域名解\n' +
//         '析、安全管理以及运维监控等服务。轻量应用服务器操作简单便捷，能让您快速上手部署简单的应用。',
//     link: '/guide/sas'
//   },
//   {
//     title: '专有宿主机DDH',
//     description: '专有宿主机DDH(Dedicated Host)是阿里云专为企业客户定制优化的云端解决方案，具有物理资源独享、部署更灵活、配置更丰富、性价比更高\n' +
//         '等特点，可以有效地降低企业上云的总所有成本TCO(TotalCostofOwnership)。',
//     link: '/guide/ddh'
//   },
//   {
//     title: '域名购买及解析',
//     description: '',
//     link: '/guide/domain'
//   },
//   {
//     title: '创建EC2与宝塔部署',
//     description: '',
//     link: '/guide/ec2-bt'
//   }
// ]
import {computed} from "vue";

const { data: rawList } = await useAsyncData('guide-list', () =>
    queryContent('guide')
        .only(['title', 'description', 'image', '_path', 'order'])
        .sort({ order: 1 })
        .find()
)

const guideList = computed(() =>
    (rawList.value || []).map(item => ({
      title: item.title || '未命名',
      description: item.description || '',
      image: item.image || '/default-image.png',
      link: item._path // ✅ 现在 Markdown 中的 _path 就是目标跳转地址
    }))
)

</script>

<style scoped>
.guide-container {
  width: 65%;
  margin: 3rem auto 10% auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.guide-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border-left: 5px solid #feb001;
}

.left-line {
  width: 4px;
  height: 100%;
  background: #f90;
  border-radius: 2px;
}

.content {
  flex: 1;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
}

.title:hover {
  color: #f90;
}

.description {
  font-size: 0.95rem;
  color: #555;
  margin-top: 0.5rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .guide-container {
    width: 80%;
    margin: 3rem auto 10% auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  .description {
    font-size: 0.75rem;
    color: #555;
    margin-top: 0.5rem;
    line-height: 1.3;
  }
  .guide-item {
    display: flex
  ;
    align-items: flex-start;
    gap: 0.7rem;
    border-left: 3px solid #feb001;
  }
}
</style>
