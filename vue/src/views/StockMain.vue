<template>
  <v-app id="keep">
    <headerNav @main-component="mainComponent"></headerNav>
    <sideBar @main-component="mainComponent"></sideBar>
    <div v-if="componentName === 'dashBoard'">
      <dashBoard></dashBoard>    
    </div>
    <div v-else-if=" componentName === 'themedStocks'">
      <themedStocks></themedStocks>    
    </div>
  </v-app>
</template>

<script>
import headerNav from "../components/navigation/Header";
import sideBar from "../components/navigation/SideBar";
import dashBoard from "../components/stockComponents/DashBoard"
import themedStocks from "../components/stockComponents/ThemedStocks"

export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    componentName: 'dashBoard',
    componentIndex: ''
  }),
  components: {
    headerNav,
    sideBar,
    dashBoard,
    themedStocks
  },
  methods: {
    testaa(){
      console.log(process.env.NODE_ENV)
    },
    mainComponent(index , to){
      this.componentIndex = index;
      this.componentName = to;
    }
  },
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
.section {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
