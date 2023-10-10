<template>
  <div class="logo relative w-[48px] h-[48px] md:scale-150">
    <span class="head"></span>
    <span class="face"></span>
    <span class="eye"></span>
    <span class="beak"></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.head {
  @apply absolute bg-black w-[26px] h-[23px] inset-1/2 -translate-y-1/2 -translate-x-1/2;
  border-radius: 37px 20px 27px 0;
}
.face {
  @apply w-[26px] h-[13px] bg-white absolute inset-1/2 -translate-y-1/2 -translate-x-1/2;
  border-radius: 55px 25px 32px 0;
}
.eye {
  @apply w-[6px] h-[6px] rounded-full	bg-black absolute left-[57%] top-1/2 -translate-y-1/2 -translate-x-1/2;
}
.beak {
  @apply absolute w-[7px] h-[4px] -rotate-6 bg-black left-[84%] top-[47%] -translate-y-1/2 -translate-x-1/2;
  border-radius: 0 50px 0px 0;
}
</style>
