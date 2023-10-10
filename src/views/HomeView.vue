<script>
import BG from '@/assets/images/banner.png'
import FeatureTitle from '@/components/FeatureTitle.vue'
export default {
  components: { FeatureTitle },
  setup() {
    return { BG }
  }
}
</script>

<template>
  <div>
    <div class="relative overflow-hidden h-[311px] md:h-[634px]">
      <img
        class="absolute right-[54px] md:right-[150px] scale-[1.8] md:scale-[1.84] h-full object-cover"
        :src="BG"
        alt="白頭翁"
      />
      <div
        class="absolute bottom-[24px] right-[23px] left-[23px] md:bottom-[37px] text-white text-right md:right-[44px]"
      >
        <h1 class="text-5xl mb-1 font-bold ml-auto w-[285px] md:w-full">白頭翁 (Chinese bulbul)</h1>
        <p class="text-lg">
          又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。
        </p>
      </div>
    </div>
    <div
      class="bg-primary flex flex-wrap flex-col md:flex-row gap-[51px] md:gap-[79px] justify-center pt-[50px] md:pt-[58px] md:px-[51px] px-[36px] pb-[72px] md:pb-[84px]"
    >
      <FeatureTitle
        :title="'外觀'"
        :content="'白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。'"
      />
      <FeatureTitle
        :title="'棲地'"
        :content="'白頭翁和麻雀、綠繡眼合<br>稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。'"
      />
      <FeatureTitle
        :title="'食性'"
        :content="'以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。'"
      />
    </div>
  </div>
</template>

<style lang="scss">
.bg-img {
  transform: scale(1.6);
  background-position: left -110px center;
}
</style>
