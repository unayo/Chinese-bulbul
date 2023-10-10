<template>
  <span class="toggler-icon" :class="{ off: !open }">
    <span class="line-t"></span>
    <span class="line-m"></span>
    <span class="line-b"></span>
  </span>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
.toggler-icon {
  // 開啟（叉）
  @apply block relative w-6 h-[22px];
  .line-t {
    @apply absolute top-2 left-0 w-full h-1 bg-black translate-x-0 translate-y-0;
    transform: rotate(45deg);
    transition: 0.3s ease-in-out;
  }
  .line-m {
    @apply absolute top-1/2 left-0 -translate-y-1/2 w-0 h-1 bg-black;
    transition: 0.3s ease-in-out;
  }
  .line-b {
    @apply absolute left-0 w-full h-1 bg-black top-2 translate-x-0 -translate-y-full;
    transform: rotate(-45deg);
    transition: 0.3s ease-in-out;
  }
}

.off {
  // 收合
  .line-t {
    @apply absolute top-0 left-0 w-full h-1 bg-black translate-x-0 translate-y-0;
  }
  .line-m {
    @apply absolute w-4 h-1 top-1/2 -translate-y-1/2 bg-black;
  }
  .line-b {
    @apply absolute top-full left-0 w-full h-1 bg-black translate-x-0 -translate-y-full;
  }
}
</style>
