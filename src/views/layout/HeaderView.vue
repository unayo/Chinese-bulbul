<template>
  <div class="grid grid-cols-1 lg:grid-cols-1024 xl:grid-cols-1440 overflow-hidden">
    <div
      class="py-[21px] pl-[26px] pr-[18px] lg:pl-0 lg:pr-0 lg:pt-[78px] text-center shadow-default bg-white z-10"
    >
      <div class="relative flex justify-between lg:justify-center items-center">
        <a class="block lg:hidden" href="#" @click.prevent="MenuToggleBtn">
          <MenuToggle :open="open" />
        </a>

        <div class="text-xl lg:text-3xl font-bold">白頭翁不吃小米</div>
        <div class="relative lg:absolute lg:right-[-21px] lg:top-[-4px] lg:z-10">
          <LogoView class="top-0 bg-white shadow-logo rounded-full" />
        </div>
      </div>
      <div v-if="open" class="flex flex-col gap-[17.7px] text-lg mt-[23px] lg:mt-[75.6px]">
        <RouterLink to="/" class="menu">白頭翁的特性</RouterLink>
        <RouterLink to="/story" class="menu">白頭翁的故事</RouterLink>
        <RouterLink to="/photo" class="menu">白頭翁的美照</RouterLink>
        <RouterLink to="/crisis" class="menu">白頭翁的危機</RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script>
import LogoView from '@/components/LogoView.vue'
import MenuToggle from '@/components/MenuToggle.vue'
import { ref, onMounted } from 'vue'
export default {
  components: { LogoView, MenuToggle },
  setup() {
    const open = ref(false)
    const MenuToggleBtn = () => {
      open.value = !open.value
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize)
      handleResize()
    })
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        open.value = false
      } else {
        open.value = true
      }
    }
    return { open, MenuToggleBtn }
  }
}
</script>

<style></style>
