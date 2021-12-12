<template>
  <div class="root">
  <div class="r-header">
    <Header />
  </div>
  <div class="r-body"><router-view/>
  </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
  .root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-color: white;
  }
  .r-header {
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px;
    position: relative;
  }
  .r-body {
    display: flex;
    flex-grow: 1;
    align-items: flex-start;
    flex-direction: row;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: white;
  }
  .r-search {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 16px;
  }
  .search-box {
  outline: none;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  border: 1px solid #ece8e8;
  height: 30px;
  background-color: #ffffff;
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
  width: 60px;
  margin-left: 5px;
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
  ::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background: #EDEDED;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
