<template>
    <div id="main">

            <div class="container1">
                <div class="r-search">
                    <form class="form" @submit.prevent="HandleSearch">
                        <input class="search-box" type="text" placeholder="Buscar anime..."
                        required v-model="searchQuery"/>
                        <input class="search-button" type="submit" value="Search"/>
                    </form>
                </div>
            </div>

            <div class="result">
                <div v-for="anime in animelist" :key="anime.id" class="p">
                    <div @click="clickHandler(anime)" class="nome">
                        <img class="img" :src="anime.img" alt="">
                        {{ anime.nomeing }}
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import useCards from "@/modules/cards";

export default {
  name: "SearchBar",
  components: {
  },
  setup() {
    const cards = useCards();
    const searchQuery = ref("");
    const animelist = ref([]);
    const collapsed = ref(false);

    const showSearch = () => {
      collapsed.value = !collapsed.value;
      animelist.value = "";
    };

    const HandleSearch = async () => {
      animelist.value = cards.state.animelist.filter(
        (anime) => anime.nomeing.toLowerCase().includes(searchQuery.value.toLowerCase())
        || anime.nomejp.toLowerCase().includes(searchQuery.value.toLowerCase()),
      );
      searchQuery.value = "";
    };

    const router = useRouter();
    const list = computed(() => cards.state.animelist);
    const clickHandler = (card) => {
      router.push({ name: "AnimeDetail", params: { cardId: card.id } });
      animelist.value = "";
    };

    return {
      collapsed,
      showSearch,
      searchQuery,
      HandleSearch,
      animelist,
      list,
      clickHandler,
    };
  },
};
</script>

<style scoped>
#main {
  background-color: #f5f5f5;
  padding: 0px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin: 0px;
  position: relative;
  flex-direction: column;
  width: 100%;
}
.container1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #f5f5f5;
}
.form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.result {
  display: flex;
  border-top: 1px solid #ccc;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: auto;
  max-height: 20vh;
  color: black;
}
.img {
  display: flex;
  width: 40px;
  padding: 5px;
  margin: 0px;
  cursor: pointer;
}
.p {
  outline: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  font-size: 15px;
  color: #000;
  font-weight: bold;
  width: 100%;
}
.p:hover {
  background-color: #a9bbee;
}
.nome {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    margin-left: 10px;
}
</style>
