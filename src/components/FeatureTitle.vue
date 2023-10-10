<template>
  <div class="w-[302px] md:w-[278px] pl-[5px] flex gap-[37px] items-start">
    <h2
      class="inline-block relative after:absolute font-bold text-4xl after:border-8 after:border-primary-dark after:rounded-full after:border-solid after:content-[''] after:w-[25px] after:h-[25px] after:opacity-60 after:bottom-[-12px] after:right-[-12px]"
    >
      {{ title }}
    </h2>
    <p v-html="content"></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    content: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style>
.writing-mode-lr {
  writing-mode: vertical-lr;
}
</style>
