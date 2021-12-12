<template>
    <div>
        <div class="card" @click="clickHandler(sugest)" v-for="sugest in list" :key="sugest.id">
            <img class="img" :src="sugest.img" alt="">
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
    const list = computed(() => cards.state.sugest);
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
.id {
  border: 1px solid black;
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
  transform: scale(1.07);
  box-shadow: 0px 0px 5px 2px #ffffff;
}
.img {
  display: flex;
  width: 150px;
  height: 250px;
  margin: 0px;
}
.container-2 {
    display: flex;
    height: 260px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
}

</style>
