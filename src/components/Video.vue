<template>
    <div id="mainVideo" class="main">

        <iframe id="player" class="vidX" :src="detail.vid" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>

    </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import useCards from "@/modules/cards";

export default {
  name: "Video",
  setup() {
    const route = useRoute();
    const cards = useCards();
    const detail = computed((
    ) => cards.state.animelist.find((card) => card.id === Math.floor(route.params.cardId)));

    return {
      detail,
    };
  },
};
</script>

<style scoped>
.main {
  position: fixed;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border: 0px solid black;
  background: rgba(0, 0, 0, 0.548);
  color: black;
  height: 100%;
  width: 100%;
}
.vidX {
    width: 700px;
    height: 400px;
    position: fixed;
}
@media only screen and (max-width: 650px) {
  .vidX {
    width: 400px;
  }
}
</style>
