<template>
  <label class="burger" for="burger">
    <input type="checkbox" id="burger" :checked="isMenuChecked" @change="toggleMenu">
    <span></span>
    <span></span>
    <span></span>
  </label>
</template>

<script setup>
import { computed } from 'vue'
import { useMenuStore } from '~/stores/menu' // 确保路径正确

const menuStore = useMenuStore()
const isMenuChecked = computed(() => menuStore.isMenuChecked)
const toggleMenu = () => menuStore.toggleMenu()
</script>

<style scoped>
.burger {
  position: relative;
  width: 45px;
  height: 45px;
  cursor: pointer;
  display: block;
  background: #ffaa00;
  border-radius: 50%;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 5px;
  width: 80%;
  background: #ffffff;
  border-radius: 9px;
  opacity: 1;
  left: 5px;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 20%;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 80%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 8px;
  left: 10px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 33px;
  left: 8px;
}

</style>
