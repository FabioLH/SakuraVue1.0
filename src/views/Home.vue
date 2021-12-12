<template>
  <div class="main-container">
    <div class="anime-poster">
      <router-link to="/cards/1">
        <img src="https://i.ytimg.com/vi/KJXJKYcEqQw/maxresdefault.jpg" alt="Destiny Poster" class="poster">
        <div class="detail">
          <h3 class="h3">takt op.Destiny</h3>
          <p class="p">Música é a luz que ilumina o coração das pessoas --
          e esta "luz" de repente é roubada do mundo. O mundo mudou na noite que
          o Meteorito negro Kuroya caiu do céu.</p>
        </div>
      </router-link>
    </div>
    <div class="r-search">
      <router-link class="router-link" to="/cards/">
        <button class="search-button">Ver lista completa</button>
      </router-link>
    </div>
    <div>
      <div>
        <span class="lista10">Top 10 MyAnimeList - Temporada de Outono</span>
      </div>
      <div>
        <Sugest class="container-2"/>
      </div>
    </div>
  </div>
</template>

<script>
import Sugest from "../components/Sugest.vue";

export default {
  name: "Home",
  components: {
    Sugest,
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  overflow: auto;
  padding: 0px;
  border: 0px solid black;
  background-color: #FFB7C5;
  height: 100%;
  width: 100%;
}
.anime-poster {
  position: relative;
}
.poster {
  display: block;
  width: 100%;
  height: 330px;
  object-fit: cover;
  position: relative;
  z-index: 0;
}
.detail {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 16px;
  z-index: 1;
}
.h3 {
  color: white;
  margin-bottom: 16px;
}
.p {
  color: white;
}
.search-box {
  outline: none;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  border: 1px solid #ece8e8;
  height: 30px;
  background-color: white;
  width: 35vw;
  padding-left: 10px;
  padding-right: 10px;
  color: black;
  font-family: sans-serif;
  transition: 0.4s;
}
.search-box:hover {
  box-shadow: 0px 0px 3px 0px #c5c5c5;
}
.search-box:focus, .search-box:valid {
  color: white;
  background-color: #313131;
  box-shadow: 0px 0px 3px 0px #c5c5c5;
}
.container-1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.container-2 {
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
}
.lista10 {
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  font-family: sans-serif;
  color: black;
  padding: 16px;
  font-weight: bold;
}
form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.search-button {
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  border: 1px solid #ece8e8;
  height: 35px;
  width: 150px;
  background-color: white;
  color: black;
  font-weight: bold;
  font-family: sans-serif;
}
.search-button:hover {
  background-color: #313131;
  color: white;
  box-shadow: 0px 0px 3px 0px #c5c5c5;
}
.router-link {
  text-decoration: none;
}

</style>
