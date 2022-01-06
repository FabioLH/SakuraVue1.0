<template>
    <div id="header">

        <div class="div1">
            <div>
                <router-link to="/">
                    <img class="image" src="/img/SakuraPetal.png" alt="">
                </router-link>
            </div>

            <div class="div2">
                <img class="searchicon" src="/img/searchicon.png" alt=""
                @click="showSearch">
                <router-link to="/login">
                    <img class="user" src="/img/user.png" alt="">
                </router-link>
                <router-link to="/favoritos">
                    <img class="favo" src="/img/favo.png" alt="">
                </router-link>
            </div>
        </div>

        <SearchBar v-show="collapsed"/>

    </div>
</template>

<script>
import { ref } from "vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Header",
  components: {
    SearchBar,
  },
  props: ["logo", "alt"],
  setup() {
    const collapsed = ref(false);
    const showSearch = () => {
      collapsed.value = !collapsed.value;
      SearchBar.value = "";
    };

    return {
      collapsed,
      showSearch,

    };
  },
};
</script>

<style scoped>
#header {
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
.div1 {
  background-color: #f5f5f5;
  padding: 0px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  margin: 0px;
  position: relative;
  flex-direction: row;
  width: 100%;
}
.image {
    width: 150px;
    margin: 0px;
    padding: 0px;
}
.div2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
}
.user {
    width: 30px;
    margin: 0px;
    padding: 0px;
    margin-right: 20px;
}
.favo {
    width: 30px;
    margin: 0px;
    padding: 0px;
}
.searchicon {
    width: 30px;
    margin: 0px;
    padding: 0px;
    margin-right: 20px;
    cursor: pointer;
}
</style>
