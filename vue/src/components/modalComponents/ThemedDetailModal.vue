<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="800">
      <v-card>
        <v-card-title class="headline">{{ themeId }}</v-card-title>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      id: this.themeId,
    };
  },
  props: ["themeId"],
  methods: {
    showModal() {
      this.dialog = true;
    },
  },
  created() {},
};
</script>
