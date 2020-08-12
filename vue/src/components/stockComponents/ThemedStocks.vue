<template>
  <v-card>
    <v-card-title>
      테마주
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="themedStocksData"
      :search="search"
    >
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "themedStocks",
  data() {
    return {
      themedStocksData: [],
      themedCnt: null,
      headers: [
        { text: "테마명", value: "nm" },
        { text: "상승", value: "rc", class: "success--text" },
        { text: "보합", value: "sc" },
        { text: "하락", value: "fc", class: "red--text" },
        { text: "등락률", value: "cr" },
      ],
      search: "",
    };
  },
  created() {
    this.$http
      .get("/api/themedStocks")
      .then((res) => {
        const data = res.data.data;
        const groupList = data.result.groupList;
        const totCnt = data.result.totCnt;
        if (data) {
          this.themedCnt = totCnt;
          this.themedStocksData = groupList;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    data_class(item) {
      console.log(item);
      const per = String(item.cr);
      if (per.indexOf("-") > -1) {
        return "success--text";
      } else {
        return "red--text";
      }
    },
  },
};
</script>

<style>
/* .blue {
  color: aqua;
}
.red {
  color: red;
} */
</style>
