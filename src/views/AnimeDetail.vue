<template>
    <div class="main-container">
      <div>

        <div class="div1">

        <div class="input-img">
          <img class="img" :src="detail.img" alt="">
        </div>

        <div class="details">

        <h1 class="h1">{{ detail.nomeing }}</h1>
        <h2 class="h2">{{ detail.temporada }} - {{ detail.genero }} - {{ detail.season }} -
          {{ detail.episodios }}</h2>
        <h3 class="sinopse">{{ detail.sinopse }}</h3>
        <div class="div-status">
        <select name="status" class="select-status">
          <option>Selecione o status</option>
          <option v-for="s in status" :key="s.id">
            {{ s.nome }}
          </option>
        </select>
        <select name="nota" class="select-status">
          <option>Dê uma nota</option>
          <option> 10 - Épico </option>
        </select>
        <button class="button">Add aos Favoritos</button>
        <button class="button" @click="showModal">Trailer</button>
        <button class="button">Onde assistir</button>
        </div>

        </div>

        </div>
      </div>
      <Video v-show="collapsed" @click="showModal"/>
    </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { ref, computed, watch } from "vue";
import useCards from "@/modules/cards";
import Video from "@/components/Video.vue";
import useAuth from "@/modules/auth";

export default {
  name: "AnimeDetail",
  components: {
    Video,
  },
  setup() {
    const route = useRoute();
    const cards = useCards();

    const detail = computed((
    ) => cards.state.animelist.find((card) => card.id === Math.floor(route.params.cardId)));

    const status = computed(() => cards.state.status);
    const router = useRouter();
    const auth = useAuth();

    auth.loadData();

    watch(
      () => auth.state.token,
      () => {
        if (auth.state.token) {
          router.push({ name: "Home" });
        } else {
          router.push({ name: "Login" });
        }
      },
    );

    if (!auth.state.token) {
      router.push({ name: "Login" });
    }

    const ionViewWillLeave = () => {
      const listaFrames = document.getElementsByTagName("iframe");
      for (let index = 0; index < listaFrames.length; index += 1) {
        const iframe = listaFrames[index].contentWindow;
        iframe.postMessage('{"event":"command","func":"stopVideo","args":""}', "*");
      }
    };

    const collapsed = ref(false);
    const showModal = () => {
      collapsed.value = !collapsed.value;
      ionViewWillLeave();
    };

    return {
      detail,
      status,
      collapsed,
      showModal,
      ionViewWillLeave,
    };
  },
};
</script>

<style scoped>
.main-container {
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: column;
  padding: 0px;
  border: 0px solid black;
  background-color: #ff5174;
  color: black;
  height: 100%;
  width: 100%;
}
.div1 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  padding: 0px;
  border: 0px solid black;
}
.h1 {
  font-size: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.h2 {
  font-size: 1.3rem;
  text-align: justify;
}
.vid {
    width: 600px;
    height: 300px;
    padding: 20px;
}
.divideo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
    width: 250px;
    height: 400px;
    border-radius: 5px;
}
.button {
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 1rem;
  height: 25px;
  display: flex;
  border: 1px solid #858585;
  background-color: white;
  color: black;
  font-family: sans-serif;
  cursor: pointer;
}
.button:hover {
  background-color: #313131;
  color: white;
  box-shadow: 0px 0px 3px 0px #c5c5c5;
  border: 1px solid #ffffff;
}
.details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    font-family: sans-serif;
    font-size: 1rem;
}
.sinopse {
    font-size: 1rem;
    font-family: sans-serif;
    display: flex;
    text-align: justify;
}
.input-img {
  display: flex;
  align-items: center;
  align-content: center;
  width: 250px;
}
.div-status {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background-color: #98ade7;
  height: 40px;
  width: 100%;
  text-align: center;
  font-family: sans-serif;
  font-size: 1rem;
  border-radius: 5px;
}
.select-status {
  display: flex;
  outline: none;
  border: 1px solid #858585;
  align-content: center;
  text-align: center;
  border-radius: 5px;
  font-size: 1rem;
  height: 25px;
  cursor: pointer;
}
@media only screen and (max-width: 650px) {
  .div1 {
    flex-direction: column;
    justify-content: center;
  }
  .vid {
    width: 100%;
  }
  .h1 {
  justify-content: center;
  }
  .div-status {
    height: 70px;
  }
  .select-status {
    margin: 5px;
  }
  .button {
    margin: 5px;
  }
}
</style>
