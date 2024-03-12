<template>
  <div class="content">
    <div class="flex">
      <img width="50%" src="/images/bastistitle.png" />
    </div>

    <br />
    <h2 class="font-bold text-2xl">Stroke counter : {{ count }}</h2>

    <div class="custom-cursor">
      <div class="grid grid-cols-2">
        <div @click="playsound">
          <img :src="img" id="catimg" @mousemove="" />
        </div>
        <div>
          <ul>
            <li v-for="trophy in trophies">
              <img :src="'/images/' + trophy" width="180px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <h1>{{ message }}</h1>
  </div>
</template>
<script setup>
const purr = "/sound/purr.mp3";

const meow = "/sound/meow.mp3";

//const ding = new Audio("/sound/ding.wav");
//ding.loop = false;

const count = ref(0);
let idx = ref(0);
const message = ref("");
const img = ref("/images/pngwing.com.png");
const trophiesbox = [
  "medal1.png",
  "medal2.png",
  "medal3.png",
  "medal4.png",
  "medal5.png",
  "medal6.png",
];
let trophies = ref([]);

const playsound = () => {
  let audio = new Audio(purr);
  audio.play();
  audio.loop = false;
  count.value++;

  if (count.value % 20 === 0) {
    let audio2 = new Audio(meow);
    audio2.loop = false;
    audio2.play();
    message.value = "Waow ! Power roulette";
    img.value = "/images/waowcat.png";
    trophies.value.push(trophiesbox[idx.value]);
    // ding.play();
    setTimeout(function () {
      //do what you need here
      img.value = "/images/pngwing.com.png";
      message.value = "";
    }, 450);

    idx.value++;
  }
};
</script>
<style scoped>
#catimg {
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>
