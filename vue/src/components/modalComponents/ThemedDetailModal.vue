<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="1000">
      <v-card>
        <v-card-title>
          상세
          <v-spacer></v-spacer>
        </v-card-title>
        <v-data-table 
          :headers="headers" 
          :items="themeId">
        </v-data-table>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      headers: [
        { text: "테마명", value: "nm" },
        { text: "상승", value: "nv", class: "success--text" },
        { text: "하락", value: "cv", class: "red--text" },
        { text: "등락률", value: "cr" },
      ],
    };
  },
  props: {
    themeId: Array
  },
  methods: {
    showModal() {
      this.dialog = true;
    },
  },
  created() {},
};
</script>
