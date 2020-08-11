<template>
  <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
    <v-list dense class="grey lighten-4">
      <template v-for="(item, i) in items">
        <v-row v-if="item.heading" :key="i" align="center">
          <v-col cols="6">
            <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
          </v-col>
          <v-col cols="6" class="text-right">
            <v-btn small text>edit</v-btn>
          </v-col>
        </v-row>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-4"
        ></v-divider>
        <v-list-item
          v-else
          :key="i"
          link
          @click="$emit('main-component', i, item.to)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "sideBar",
  data() {
    return {
      drawer: null,
      items: [
        { icon: "chat_bubble", text: "DashBoard", to: "dashBoard" },
        { icon: "chat_bubble", text: "테마주", to: "themedStocks" },
      ],
    };
  },
};
</script>
