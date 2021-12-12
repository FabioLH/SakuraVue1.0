<template>
    <div class="container0">
      <div class="container1">
        <div class="card" @click="clickHandler(anime)" v-for="anime in list" :key="anime.id">
            <img class="img" :src="anime.img" alt="">
        </div>
      </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCards from "@/modules/cards";

export default {
  setup() {
    const router = useRouter();
    const cards = useCards();
    const list = computed(() => cards.state.animelist);
    const clickHandler = (card) => {
      router.push({ name: "AnimeDetail", params: { cardId: card.id } });
    };

    return {
      list,
      clickHandler,
    };
  },
};
</script>

<style scoped>
.container0 {
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0px;
  border: 0px solid black;
  background-color: #FFB7C5;
  height: 100%;
  width: 100%;
}
.container1 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
}
.card {
  width: 150px;
  height: 250px;
  background-color: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-family: sans-serif;
  font-size: 12px;
  overflow: auto;
  overflow-x: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 2px #c5c5c5;
  transition: transform .5s ease-in-out;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.06);
  box-shadow: 0px 0px 5px 2px #ffffff;
}
.img {
  display: flex;
  width: 150px;
  height: 250px;
  margin: 0px;
}
</style>
