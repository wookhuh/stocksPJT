<template>
  <v-app-bar app clipped-left color="amber" >
    <v-app-bar-nav-icon @click="isToggle = !isToggle, $emit('toggle-emit', isToggle)" :class="{toggle: isToggle}"></v-app-bar-nav-icon>
    <!-- <span class="title ml-3 mr-5">
      Stock&nbsp;
      <span class="font-weight-light">PJT</span>
    </span> -->
    <img
      src="../../assets/logo.png"
      @click="$emit('main-component', 0, 'dashBoard')"
    />
    <!-- <v-text-field solo-inverted flat hide-details label="검색" prepend-inner-icon="search"></v-text-field> -->

    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>
import { eventBus } from "../../main";

export default {
  name: "headerVue",
  data() {
    return {
      isToggle: false,
    };
  },
};
</script>
